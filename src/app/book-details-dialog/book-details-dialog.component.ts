import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '../model/book';
import { BookService } from '../book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css']
})
export class BookDetailsDialogComponent implements OnInit {

  wishListAction: string;
  wishListSubscription: Subscription;
  constructor(private bookService: BookService, public dialogRef: MatDialogRef<BookDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public book: Book) { }

  ngOnInit() {
      this.wishListSubscription = this.bookService.wishList.subscribe(() => {
        if (this.bookService.isInWishlist(this.book)) {
          this.wishListAction = 'Remove From wishlist';
        } else {
          this.wishListAction = 'Add To wishlist';
        }
      });
  }

  closeModalWindow(): void {
    this.dialogRef.close();
  }

  wishlistAction() {
    if (this.bookService.isInWishlist(this.book)) {
      this.bookService.removeBookFromWishlist(this.book);
    } else {
      this.bookService.addBookToWishlist(this.book);
    }
  }

}
