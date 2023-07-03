



import { Injectable } from '@angular/core';
import { IAuthor } from './authores.I';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthorService {

    private authorsUrl = "api/authors.json";

    constructor(private http: HttpClient) { }


  getAuthor(id: number): Observable<IAuthor | undefined> {
    return this.http.get<IAuthor[]>(this.authorsUrl).pipe(
     map((authors: IAuthor[]) => authors.find(a => a.id === id))
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