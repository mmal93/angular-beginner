import { BooksService } from './../../books.service';
import { Component } from '@angular/core';
import IBook from '../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  bookList: IBook[] = [];
  constructor(private booksService: BooksService) {
    this.booksService.getJsonData().subscribe((res:any)=> {
      this.bookList = res;
    });
  }
}
