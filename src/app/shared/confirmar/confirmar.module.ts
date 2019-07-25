import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmarComponent } from './confirmar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule
  ],
  declarations: [ConfirmarComponent],
  providers: [NgbModal],
  exports: [ConfirmarComponent]
})
export class ConfirmarModule { }
