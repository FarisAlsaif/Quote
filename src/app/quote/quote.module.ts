import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuoteComponent } from './quote.component';
import { ChangeYouPipe } from '../shared/change-you.pip';
import { AuthorComponent } from './author/author.component';
import { AuthorModule } from './author/author.module';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    
    QuoteComponent,
    ChangeYouPipe,
    // AuthorComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule, 
    RouterModule.forChild([
      { path: 'quotes', component: QuoteComponent },
  
    ]), 
    AuthorModule
  ]

})
export class QuoteModule { }
