import { Component, ViewChild } from '@angular/core';
// import { ButtonsModule, WavesModule, IconsModule } from 'angular-bootstrap-md'
import { HomePageComponent } from '../homePage/homePage.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(HomePageComponent, {static: false} ) hp :HomePageComponent ;
  homepage = true;
  name1: string = '';
  ps1: string = '';
  ngOnInit() {
    this.hp.name='';
    this.hp.ps='';
    this.hp.email='';
  }
  submit() : void{
        this.homepage = false;
        this.name1=this.hp.name;
        this.ps1 = this.hp.ps; 
        console.log(this.homepage);
  }
}
