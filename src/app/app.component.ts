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
  
  ngOnInit() {
    this.hp.name='';
    this.hp.ps='';
    this.hp.email='';
  }
  submit() : void{
        this.homepage = false;
        console.log(this.homepage);
  }
}
