import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuoteModule } from './quote/quote.module';
import { RouterModule } from '@angular/router';
import { WelcomeModule } from './welcome/welcome.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
    QuoteModule,
    WelcomeModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
