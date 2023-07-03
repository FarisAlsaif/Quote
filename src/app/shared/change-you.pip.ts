import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'changeYou'
})

export class ChangeYouPipe implements PipeTransform {


    
      transform(value: string): any {
        
     return value.replace('you', 'YOU');
      } 
      
   
    }