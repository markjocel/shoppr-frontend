import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {
  @Input() options!: string[];
  toggled: boolean = false;
  selected: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.selected = this.options[0]
  }

  toggleSelect(selected?: string) {
    if (selected) {
      this.selected = selected
      this.toggled = false;
    }
    this.toggled = !this.toggled;
  }

}
