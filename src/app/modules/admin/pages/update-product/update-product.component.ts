import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../admin.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  id!:number;
  product!: Product;

  constructor(private route: ActivatedRoute, private adminService: AdminService) { 
    this.route.params.subscribe(x => {
      this.id = x.productId
    })

    this.adminService.getProduct(this.id).subscribe(product => {
      this.product = product.result;
      console.info(this.product)
    })

  }

  ngOnInit(): void {
  }

}
