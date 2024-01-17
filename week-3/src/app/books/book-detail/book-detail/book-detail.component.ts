import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../books.service';
import IBook from '../../models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {
  book: IBook = {
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
  };
  private route;
  private booksServices: BooksService;
  constructor(route: ActivatedRoute, booksService: BooksService) {
    this.route = route;
    this.booksServices = booksService;
    this.findBookByID(parseInt(this.route.snapshot.params['id']));
  }

  public findBookByID(id: number): void {
    let bookData: IBook[];
    let bookResult: IBook[];
    this.booksServices.getJsonData().subscribe((res: any)=> {
      bookResult = res.filter((book: IBook) => book.id === id);
      if (bookResult.length > 0) {
        this.book = bookResult[0];
      }
    });
  }
}