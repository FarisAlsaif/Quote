import { Component, OnDestroy, OnInit } from '@angular/core';
import { IQuote } from './quotes.I';
import { ChangeYouPipe } from '../shared/change-you.pip';
import { QouteService } from './qoute-service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit, OnDestroy  {

   
    title:string = 'Quote Page';
    showName: boolean = true;
    errorMessage: string = '';
    sub! : Subscription;
    quotes: IQuote[] = [];

    constructor(private QouteService: QouteService,
       private router: Router) {}

    ngOnInit(): void {
      this.sub = this.QouteService.getQuotes().subscribe({
        next: quotes => { this.quotes = quotes; },
        error: err => this.errorMessage = err
      });
    }
    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }
    newQuoteNav(): void {
    this.router.navigate(['/quotes/new']);
      
    }
     

    toggleName() {
      this.showName = !this.showName;
    }
    
}
