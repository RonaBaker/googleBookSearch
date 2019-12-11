import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AllowLoginGuard implements CanActivate {

  constructor(private authService: AuthService, private route: Router, private router: ActivatedRoute) {}
  canActivate() {
    if (this.authService.isLoggedIn()) {
      this.route.navigate(['/']);
    }
    return true;
  }
}
