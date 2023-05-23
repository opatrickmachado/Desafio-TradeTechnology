import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FeedRoutingModule } from './feed-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    HttpClientModule
  ]
})
export class FeedModule { }
