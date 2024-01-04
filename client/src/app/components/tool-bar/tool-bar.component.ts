import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';
import { DialogService } from 'src/app/services/dialog.service';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Dimensions } from 'src/app/models/dimensions';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {
  @Input() isProductsPage = false;
  constructor(private readonly dialogService: DialogService, private authService: AuthentificationService) {
  }
  openDialog(): void {
    const dimensions: Dimensions = {
      height: '600px',
      width: '500px'
    };
    this.dialogService.openDialog(DialogFormComponent, dimensions);
  }

  logout() {
    this.authService.logout('/signin')
  }
}
