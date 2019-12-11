import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from '../model/book';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() book: Book;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openBookDialog() {
    this.dialog.open(BookDetailsDialogComponent, {
      width: '400px',
      data: this.book
    });

  }

}
