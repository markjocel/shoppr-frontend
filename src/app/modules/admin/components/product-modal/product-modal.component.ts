import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/core/services/modal.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {

  @Input() id: string = '';
  @Input() bigModal: boolean = false;
  @Input() selectedProduct?: Product;
  private element: any;
  
  constructor(private modalService: ModalService, private el: ElementRef, private router: Router) { 
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    document.body.appendChild(this.element);

    // Close on click background
    this.element.addEventListener('click', (el: { target: { className: string; }; }) => {
        if (el.target.className === 'custom-modal') {
            this.close();
        }
    });

    this.modalService.add(this);

    this.close();
  }

  ngOnDestroy(): void {
      this.modalService.remove(this.id);
      this.element.remove();
  }

  open(): void {
      this.element.style.display = 'block';
      document.body.classList.add('custom-modal-open');
  }

  close(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('custom-modal-open');
  }

  edit(id?:number): void {
    this.router.navigateByUrl('/admin/products/update/'+id)
  }

}
