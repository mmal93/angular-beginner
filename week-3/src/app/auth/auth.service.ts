import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import IUser from './shared/models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _users: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);

  constructor(private router: Router, private http: HttpClient) {
    // check logged in use local storage
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      this._isLoggedIn.next(JSON.parse(isLoggedIn));
    }
  }

  get isLoggedIn(): Observable<boolean> {
    return this._isLoggedIn.asObservable();
  }

  setLoggedIn(isLoggedIn: boolean) {
    this._isLoggedIn.next(isLoggedIn);
    this.router.navigate(['/']);
  }

  get users(): Observable<IUser[]> {
    return this._users.asObservable();
  }

  set users(users:IUser[]) {
    this._users.next(users);
  }

  getAllUsers() {
    return this.http.get<IUser[]>('http://localhost:3000/users').subscribe((users: IUser[]) => {
      this.users = users;
    });
  }

  logIn(userName: string, password: string) : Observable<boolean> {
    return this.users.pipe(map((users: IUser[]) => {
      const result = users.filter((user: IUser) => user.userName === userName && user.password === password).length > 0;
      if (result) {
        localStorage.setItem('isLoggedIn', JSON.stringify(true));
      }
      return result;
    }));
  }

  logOut() {
    this._isLoggedIn.next(false);
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/']);
  }

  getAllUser() {
    return this.http.get('assets/user.json');
  }
}
