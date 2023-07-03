import { Component, OnDestroy, OnInit } from '@angular/core';
import { IQuote } from './quotes.I';
import { ChangeYouPipe } from '../shared/change-you.pip';
import { QouteService } from './qoute-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit, OnDestroy  {

   
    title:string = 'Quote Page';
    showName: boolean = false;
    errorMessage: string = '';
    sub! : Subscription;
    quotes: IQuote[] = [];

    constructor(private QouteService: QouteService) {}


  



    ngOnInit(): void {
      this.sub = this.QouteService.getQuotes().subscribe({
        next: quotes => { this.quotes = quotes; },
        error: err => this.errorMessage = err
      });
    }
    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }
     

    toggleName() {
      this.showName = !this.showName;
    }
    
}
