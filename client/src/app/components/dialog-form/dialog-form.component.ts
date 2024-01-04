import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product, ProductWithId } from 'src/app/models/product';
import { DialogService } from 'src/app/services/dialog.service';
import { HttpService } from 'src/app/services/http.service';
import { ProductService } from 'src/app/services/product.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss'],
})
export class DialogFormComponent implements OnInit {
  productForm!: FormGroup;
  categories: string[] = ['Fruits', 'Vegetable', 'Electronic', 'Other'];
  freshnessList: string[] = ['Brand New', 'Second Hand', 'Refurbished'];

  constructor(private formBuilder: FormBuilder, private httpService: HttpService, private productService: ProductService, @Inject(MAT_DIALOG_DATA) public data: ProductWithId | undefined, private dialogService: DialogService) {
  }
  
  ngOnInit(): void {
    
    this.productForm = this.formBuilder.group({
      _id: [this.data ? this.data._id : '', Validators.required],
      productName: [this.data ? this.data.productName : '', Validators.required],
      productCategory: [this.data ? this.data.productCategory : '', Validators.required],
      date: [this.data ? this.data.date : '', Validators.required],
      productFreshness: [this.data ? this.data.productFreshness : '', Validators.required],
      price: [this.data ? this.data.price : '', Validators.required],
      comments: [this.data ? this.data.comments : '', Validators.required]
    })
  }

  addProduct(): void {
    const token = localStorage.getItem('token');
    const userId: { [key: string]: any } = jwt_decode(token!);
    this.httpService.addProduct(this.productForm.value, userId['userId']).subscribe((product) => {
      alert(product.productName + ' has been added to the products list');
      this.productService.emitNewProductAdded(product);
      this.dialogService.closeDialog();
    });
  }

  updateProduct(): void {
    this.httpService.updateProduct(this.productForm.value).subscribe((product) => {
      this.productService.emitUpdatedProduct(product);
      this.dialogService.closeDialog();
    });
  }
}
