import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IBook from './models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  public getJsonData() {
    return this.http.get('assets/book.json');
  }
}
