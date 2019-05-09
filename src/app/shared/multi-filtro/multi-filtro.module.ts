import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MultiFiltroComponent } from './multi-filtro.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    TooltipModule.forRoot()],
  declarations: [MultiFiltroComponent],
  providers: [],
  exports: [MultiFiltroComponent],
})
export class MultiFiltroModule { }
