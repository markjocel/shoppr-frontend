import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() product?: Product;
  @Input() action?: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigateByUrl('/admin/products')
  }

}
