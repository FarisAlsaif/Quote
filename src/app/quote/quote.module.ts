import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuoteComponent } from './quote.component';
import { ChangeYouPipe } from '../shared/change-you.pip';
import { AuthorModule } from './author/author.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewQuoteComponent } from './new-quote/new-quote.component';




@NgModule({
  declarations: [
    
    QuoteComponent,
    ChangeYouPipe,
    NewQuoteComponent,
    // AuthorComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule, 
    FormsModule,
       
    RouterModule.forChild([
      { path: 'quotes', component: QuoteComponent },
      { path: 'quotes/new', component: NewQuoteComponent },
  
    ]), 
    AuthorModule
  ]

})
export class QuoteModule { }
