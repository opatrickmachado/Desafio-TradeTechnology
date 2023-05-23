import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
