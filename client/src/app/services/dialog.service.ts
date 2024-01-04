import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from '../components/dialog-form/dialog-form.component';
import { ProductWithId } from '../models/product';
import { Dimensions } from '../models/dimensions';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private readonly dialog: MatDialog) { }
  openDialog(dialogComponent: any, dimensions: Dimensions, productData?: ProductWithId | null) {
    this.dialog.open(dialogComponent, {
      height: dimensions.height,
      width: dimensions.width,
      data: productData
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
