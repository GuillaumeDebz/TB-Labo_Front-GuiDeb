import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  isConnect: boolean = false
  timeConnectUser : number = 0

  constructor() { }

  ngOnInit(): void {


    let  elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems)
  }
}