import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from 'express';
import { RouterModule } from '@angular/router';
import { AuthorComponent } from './author.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'quotes/author/:id', component: AuthorComponent }
    ])
  ]
})
export class AuthorModule { }
