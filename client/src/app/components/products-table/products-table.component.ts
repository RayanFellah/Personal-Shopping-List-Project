import { Component, OnInit, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product, ProductWithId } from 'src/app/models/product';
import { DialogService } from 'src/app/services/dialog.service';
import { HttpService } from 'src/app/services/http.service';
import { ProductService } from 'src/app/services/product.service';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';
import jwt_decode from 'jwt-decode';
import { ShareDialogComponent } from '../share-dialog/share-dialog.component';
import { Dimensions } from 'src/app/models/dimensions';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  productsList : ProductWithId[] = [];
  dataSource!: MatTableDataSource<ProductWithId>;
  displayedColumns: string[] = ['name', 'category', 'date', 'freshness', 'price', 'comments', 'actions'];
  pageSize: number = 5;
  pageIndex: number = 0;
  displayedProducts: ProductWithId[] = [];
  
  constructor(private readonly httpService: HttpService, private productService: ProductService, private dialogService: DialogService) {}
  
  ngOnInit() {
    const token = localStorage.getItem('token');
    const userId: { [key: string]: any } = jwt_decode(token!);
    this.httpService.getProducts(userId['userId']).subscribe((products) => {
      this.productsList = products;
      this.reloadData();
    })
    this.productService.getNewProductAdded().subscribe((product) => {
      this.productsList.push(product);
      this.reloadData();
    })
    
    this.productService.getProductRemoved().subscribe((product) => {
      this.productsList = this.productService.removeProduct(this.productsList, product);
      this.reloadData();
    })

    this.productService.getUpdatedProduct().subscribe((product: ProductWithId) => {
      this.productsList = this.productService.updateProduct(this.productsList, product);
      this.reloadData();
    })
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource = new MatTableDataSource(this.productsList);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteProduct(product: ProductWithId) {
    this.httpService.deleteProduct(product).subscribe((p) => {
      // alert("Product '" + p.productName + "' has been succefully removed");
      this.productService.emitProductRemoved(p);
    });
  }
  edit(product: ProductWithId) {
    const dimensions: Dimensions = {
      height: '600px',
      width: '500px'
    };
    this.dialogService.openDialog(DialogFormComponent, dimensions, product);
  }
  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.reloadData();
  }

  share(product: ProductWithId) {
    const dimensions: Dimensions = {
      height: '300px',
      width: '400px'
    };
    this.dialogService.openDialog(ShareDialogComponent, dimensions, product);
  }

  private reloadData() {
    this.displayedProducts = this.getDisplayedProducts();
    this.dataSource = new MatTableDataSource(this.displayedProducts);
  }

  private getDisplayedProducts(): ProductWithId[] {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.productsList.slice(startIndex, endIndex);
  }
}
