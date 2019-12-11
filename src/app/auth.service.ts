import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUser: BehaviorSubject<string>;
  public currentUser: Observable<string>;

  constructor() {
    this._currentUser = new BehaviorSubject<string>(localStorage.getItem('currentUser'));
    this.currentUser = this._currentUser.asObservable();
  }

  login(username: string) {
    localStorage.setItem('currentUser', username);
    this._currentUser.next(username);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this._currentUser.next(null);
  }

  getCurrentUser() {
    return this._currentUser.value;
  }

  isLoggedIn() {
    if (this._currentUser.getValue() !== null) {
      return true;
    }
    return false;
  }
}
