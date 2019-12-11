import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  searchInput: string;
  totalBooks: number;
  booksPerPage: number;
  pageSizeOptions: number[];
  startIndex: number;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.totalBooks = 20;
    this.booksPerPage = 5;
    this.pageSizeOptions = [5, 10, 20];
    this.startIndex = 0;
  }

  getBooks() {
    if (this.searchInput.length > 0) {
      this.bookService.loadBooks(this.searchInput, this.booksPerPage, this.startIndex);
    }
  }

  onChangedPage(pageData: PageEvent) {
    this.booksPerPage = pageData.pageSize;
    this.startIndex = pageData.pageIndex * this.booksPerPage;
    this.getBooks();
  }

}
