import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  wishlist: Observable<Book[]>;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.wishlist = this.bookService.getWishlist();
  }

  removeFromWishlist(book: Book) {
    this.bookService.removeBookFromWishlist(book);
  }

}
