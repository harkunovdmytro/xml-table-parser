import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParsingPageModule } from './parsing-page/parsing-page.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ParsingPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
