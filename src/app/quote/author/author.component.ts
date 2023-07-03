import { Component, OnDestroy, OnInit } from '@angular/core';
import { IQuote } from '../quotes.I';
import { QouteService } from '../qoute-service';
import { Subscription } from 'rxjs';
import { IAuthor } from './authores.I';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements  OnInit {

 title:string = 'Author Page';
 errorMessage: string = '';
 author: IAuthor | undefined;

 constructor(private route: ActivatedRoute,
  private router: Router,
  private authorService: AuthorService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.getAuthor(id);
    }}

    getAuthor(id: number): void {
      this.authorService.getAuthor(id).subscribe({
        next: author => this.author = author,
        error: err => this.errorMessage = err
      });
    }
    onBack(): void {
      this.router.navigate(['/quotes']);
    }
 

  

}


