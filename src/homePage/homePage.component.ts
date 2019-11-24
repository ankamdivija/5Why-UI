import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss']
})
export class HomePageComponent {
  @Input() name : string= '';
  @Input() email : string ='';
  @Input() ps :string ='' ;
  @Output() submit: EventEmitter<number> = new EventEmitter<number>();;
    
  ngOnInit(){
    this.name = '';
    this.ps = '';
    this.email = '';
    }
  startY() : void {
      if(this.name!='' && this.email!='' && this.ps!=''){
        this.submit.emit();
      }
  }

}