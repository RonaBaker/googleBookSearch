import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, BookItem } from './model/book';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _books = new BehaviorSubject<Book[]>([]);
  books = this._books.asObservable();

  private _wishList = new BehaviorSubject<Book[]>([]);
  wishList = this._wishList.asObservable();

  constructor(private http: HttpClient) { }

  loadBooks(searchInput: string, booksPerPage: number, startIndex: number) {
    this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}&startIndex=${startIndex}&maxResults=${booksPerPage}`)
    .subscribe(
      (res: BookItem) => {
        const items: Book[] = res.items;
        let books: Book[] = [];
        for (let item of items) {
            books.push(this.resToBook(item));
        }
        this._books.next(books);
      });
  }

  getBooks() {
    return this.books;
  }

  getWishlist() {
    return this.wishList;
  }

  private resToBook(res: Book): Book { // create book object
    return {
      id: res.id,
      volumeInfo: res.volumeInfo
    }
  }

  addBookToWishlist(book: Book) {
    this._wishList.value.push(book);
    this._wishList.next(this._wishList.value);
  }

  isInWishlist(book: Book): boolean{
    const item = this._wishList.value.find(b => b.id === book.id);
    if (item === undefined) {
      return false;
    }
    return true;
  }

  removeBookFromWishlist(book: Book) {
    this._wishList.value.splice(this._wishList.value.findIndex(b => b.id === book.id), 1);
    this._wishList.next(this._wishList.value);
  }

}