import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { AllowRouteAccessGuard } from './allow-route-access.guard';
import { PageNotFoundComponent } from './page-not-found.component';
import { AllowLoginGuard } from './allow-login.guard';


const routes: Routes = [
  { path: 'home', component: BookSearchComponent, canActivate: [AllowRouteAccessGuard]},
  { path: 'login', component: LoginComponent, canActivate: [AllowLoginGuard]},
  { path: 'mywishlist', component: WishListComponent, canActivate: [AllowRouteAccessGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
