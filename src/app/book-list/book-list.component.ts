import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, AfterContentInit {

  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  ngAfterContentInit() {
    this.books = [];
  }


}
