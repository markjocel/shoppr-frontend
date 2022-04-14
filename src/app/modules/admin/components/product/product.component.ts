import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ModalService } from 'src/app/core/services/modal.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product:any;
  @Output() clickProduct = new EventEmitter<Product>();
  image:any;

  constructor(private sanitizer: DomSanitizer, private modalService:ModalService) {
    // console.log(this.product)
  }

  ngOnInit(): void {
    // var reader = new FileReader();
    // reader.readAsDataURL(this.product.image); 
    // this.image = reader.result
  }

  click(product: Product): void {
    this.clickProduct.emit(product)
  }
}
