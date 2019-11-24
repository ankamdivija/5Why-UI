import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-page',
  templateUrl: './postPage.component.html',
  styleUrls: ['./postPage.component.scss']
})
export class PostPageComponent {
  @Input() name : string= '';
  @Input() email : string ='';
  @Input() ps :string ='' ;
  psA1:string;
  psA2:string;
  psA3:string;
  psA4:string;
  psA5:string;
  
  finish: boolean=false;
  showInput: boolean = true;
  showInput1: boolean = true;
  showInput2: boolean = true;
  showInput3: boolean = true;
  showInput4: boolean = true;
  count: number= 0;
  done() : void {
    this.finish=true;
    if(this.count==0){
      this.showInput= false;
    }
    else if(this.count==1){
      this.showInput1= false;
    }
    else if(this.count==2){
      this.showInput2= false;
    }
    else if(this.count==3){
      this.showInput3= false;
    }
    else if(this.count==4){
      this.showInput4= false;
    }
  }
  add() : void {
    if(this.count==0){
      this.showInput= false;
      this.count++;
    }
    else if(this.count==1){
      this.showInput1= false;
      this.count++;
    }
    else if(this.count==2){
      this.showInput2= false;
      this.count++;
    }
    else if(this.count==3){
      this.showInput3= false;
      this.count++;
    }
    else if(this.count==4){
      this.showInput4= false;
      this.count++;
      this.finish=true;
    }
  }
}