import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatSlideToggleModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    ...MATERIAL_MODULES,
    CommonModule
  ],
  exports: [
    ...MATERIAL_MODULES
  ]
})
export class SharedModule { }
