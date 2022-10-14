import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let elem = document.querySelectorAll('.parallax');
    M.Parallax.init(elem)
  }

}
