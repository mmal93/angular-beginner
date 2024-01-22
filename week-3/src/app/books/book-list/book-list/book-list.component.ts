import { BooksService } from './../../books.service';
import { Component, OnInit } from '@angular/core';
import IBook from '../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{
  bookList: IBook[] = [];

  constructor(private booksService: BooksService) {
    this.booksService.getAllBooks();
  }
  ngOnInit(): void {
    this.booksService.books.subscribe((books: IBook[]) => {
      this.bookList = books;
    });
    this.booksService.getAllBooks();
  }
}
