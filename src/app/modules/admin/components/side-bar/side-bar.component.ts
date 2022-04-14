import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  toggled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.toggled = !this.toggled;
  }

}
