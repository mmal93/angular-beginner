import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IBook from './models/book';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private _books: BehaviorSubject<IBook[]> = new BehaviorSubject<IBook[]>([]);

  constructor(private http: HttpClient) { }

  public get books(): Observable<IBook[]> {
    return this._books.asObservable();
  }

  public getBook(id: number): Observable<IBook> {
    if (id) {
      return this.http.get<IBook>(`http://localhost:3000/books/${id}`);
    } else {
      return of({
        id: 0,
        image: '',
        name: '',
        author: '',
        price: 0,
        quantity: 0,
        description: '',
        type: '',
        publish_year: 0,
        rate: 0
      });
    }
  }

  public getAllBooks() : void {
    this.http.get('http://localhost:3000/books').subscribe((res: any) => {
      this._books.next(res);
    });
  }
}
