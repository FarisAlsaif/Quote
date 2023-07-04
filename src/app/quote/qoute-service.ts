
import { IQuote } from "./quotes.I";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as path from "path";
import * as fs from 'fs';
import { Observable, catchError, tap, throwError, map } from "rxjs";



@Injectable({
  providedIn: 'root'
})


export class QouteService {

  // private filePath = path.join(__dirname,'api/quotes.json');
  // private fileData = fs.readFileSync(this.filePath, 'utf8');
  
  // addQuote(quote: IQuote): Observable<IQuote>|void {
  //    const jsonData = JSON.parse(this.fileData);
  // }

  






// private quotesUrl = "assets/quotes.json";
private quotesUrl = "api/quotes.json";


  constructor(private http: HttpClient) { }
      getQuotes(): Observable<IQuote[]> {
    return this.http.get<IQuote[]>(this.quotesUrl)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

        private handleError(err: HttpErrorResponse) {
          // in a real world app, we may send the server to some remote logging infrastructure
          // instead of just logging it to the console
          let errorMessage = '';
          if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
          }
          else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
          }
          console.error(errorMessage);
          return throwError(()=>errorMessage);        
  
     }
}


