import { Component } from '@angular/core';
import { NewQuoteI } from './new-quote.I';
import { NgForm } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent {

  postError:boolean = false;
  postErrorMessage:string = 'ggggg';

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  OriginalnewQuote: NewQuoteI = {
    author: '',
    quote: '',
    bio: '',
    imageUlr: ''
  }
  newQuote: NewQuoteI = { ...this.OriginalnewQuote };

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {

    if(form.invalid) {
    console.log("the form was submitted ", form.valid + 'ly');
    this.dataService.postQuote(this.newQuote).subscribe(
      result => console.log('success: ', result),
      error => this.onHttpError(error)
    );}
    else {
      this.postError = true;
      this.postErrorMessage = "Please fix the above errors";
    }
  }

}
