import { Component, Inject } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductWithId } from 'src/app/models/product';
import { DialogService } from 'src/app/services/dialog.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss']
})
export class ShareDialogComponent {
  person: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: ProductWithId | undefined, private httpService: HttpService) { }
  share() {
    this.httpService.shareProduct(this.data!, this.person);
  }
}
