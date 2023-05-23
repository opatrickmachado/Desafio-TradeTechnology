import { NgModule, Component } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './pages/login/user-login/user-login.component';
import { CanActiveGuard } from './guards/can-active.guard';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:UserLoginComponent},
  { path: 'feed', loadChildren: ()=> import('../app/pages/feed/feed.module').then((m) =>  m.FeedModule), canActivate: [CanActiveGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
