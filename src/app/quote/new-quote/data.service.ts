import { Injectable } from '@angular/core';
import { INewQuote } from './new-quote.I';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dbUrl = 'https://putsreq.com/vI60FYxBFJhEEL04z5yE';

  constructor(private http: HttpClient) { }

  postQuote(newQuote: INewQuote): Observable<INewQuote> {
    console.log('posting quote: ', newQuote);

    

    return this.http.post<INewQuote>(this.dbUrl, newQuote);
  }
}
