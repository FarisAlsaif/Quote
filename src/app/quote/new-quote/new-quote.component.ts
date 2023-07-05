import { Component } from '@angular/core';
import { INewQuote } from './new-quote.I';
import { NgForm } from '@angular/forms';
import { DataService } from './data.service';
import * as fs from 'fs';
import * as path from 'path';
import { from } from 'rxjs';


@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent {

  postError: boolean = false;
  postErrorMessage: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  OriginalnewQuote: INewQuote = {
    author: '',
    quote: '',
    bio: '',
    imageUlr: ''
  }
  newQuote: INewQuote = { ...this.OriginalnewQuote };

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
   

    if (form.invalid) {
      this.dataService.postQuote(this.newQuote).subscribe(
        result => console.log('success: ', result),
        error => this.onHttpError(error)
      );
    }
    else {
      this.postError = true;
      this.postErrorMessage = "Please fix the above errors";
    }
  }
  }
