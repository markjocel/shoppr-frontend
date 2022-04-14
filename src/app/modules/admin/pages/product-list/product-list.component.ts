import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/core/services/loading.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { Table } from 'src/app/shared/components/custom-table/custom-table.component';
import { AdminService } from '../../admin.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})


export class ProductListComponent implements OnInit {

  products: Product[] | undefined;
  selectedProduct!: Product;
  options: string[] = ['All', 'Archived', 'Unavailable'];
  tableConfig!: Table;
  tableData!: any;
  flag?: boolean = false;
  selectedProducts?: Product[];

  constructor(public adminService: AdminService, public loadingService: LoadingService, private productsService: ProductsService, private router: Router, private modalService: ModalService) {
    this.loadingService.setLoading(true)
    this.adminService.getProducts().subscribe(products => {
      this.products = products.result;
      this.productsService.setProducts(products.result)
      this.loadingService.setLoading(false)
    })

    this.loadingService.getLoading().subscribe(loading => {
      this.flag = loading;
    })

    this.productsService.getProducts().subscribe(x => {
      this.products = x;

      this.tableConfig = {
        headers: [{
          name: "Product",
          sortable: true,
          width: 50,
          content: 'name'
        },
        {
          name: "Price",
          sortable: true,
          content: 'price',
          type: 'price'
        },
        {
          name: "Quantity",
          sortable: true,
          content: 'quantity'
        },
        {
          name: "Status",
          sortable: true,
          // content: ''
        }
        ],
        data: this.products,
        checkBox: true,
        actionEdit: true,
        actionDelete: true,
        pagination: true
      }
    })
  }

  ngOnInit(): void {
  }

  clickProduct(product: Product): void {
    this.selectedProduct = product
    this.modalService.open("product")
  }

  addProduct() {
    console.log("HERE")
    this.router.navigateByUrl('/admin/products/add')
  }

  editProduct(product: Product) {
    this.router.navigateByUrl('/admin/products/update/' + product.id)
  }

  deleteProduct(product: Product) {

  }

  getSelectedProducts(products: Product[]) {
    this.selectedProducts = products
  }

  configTableData(data: Product[]) {
    const newData: { name: String; price: number; quantity: number; status: string; }[] = []
    data.map(x => {
      let status = '';
      if (x.quantity > 0) {
        status = 'Available'
      } else status = 'Out of stock'
      const n = {
        id: x.id,
        name: x.name,
        price: x.price,
        quantity: x.quantity,
        status: status
      }
      newData.push(n)
    })
    this.tableData = newData;
  }

}
