import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  subscription: Subscription;
  loggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.authService.currentUser.subscribe(currentUser => {
      if (currentUser !== null) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  }

  login() {
    if (this.authService.isLoggedIn()) {
      this.authService.logout();
    }
    this.router.navigate(['/login']);
  }

}
