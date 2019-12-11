import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: '<p>page not found</p>',
  styles: ['p {display: flex; margin: auto; padding-top: 150px; justify-content: center;}']

})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
