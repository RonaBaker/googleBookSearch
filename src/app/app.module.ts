import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { BookSearchComponent } from './book-search/book-search.component';
import { MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-item/book-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { WishListComponent } from './wish-list/wish-list.component';
import { BookDetailsDialogComponent } from './book-details-dialog/book-details-dialog.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    PageNotFoundComponent,
    BookSearchComponent,
    BookListComponent,
    BookItemComponent,
    WishListComponent,
    BookDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatPaginatorModule

  ],
  entryComponents: [BookDetailsDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
