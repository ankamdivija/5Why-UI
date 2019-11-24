import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from 'src/homePage/homePage.component';
import { PostPageComponent } from 'src/postPage/postPage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HomePageComponent,
    PostPageComponent
  ]
})
export class AppModule { }
