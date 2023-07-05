import { Injectable } from '@angular/core';
import { NewQuoteI } from './new-quote.I';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dbUrl = 'https://putsreq.com/vI60FYxBFJhEEL04z5yE';

  constructor(private http: HttpClient) { }

  postQuote(newQuote: NewQuoteI): Observable<NewQuoteI> {
    return this.http.post<NewQuoteI>(this.dbUrl, newQuote);
  }
}
