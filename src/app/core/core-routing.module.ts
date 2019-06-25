import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { PostProfilePageComponent } from '../posts/pages/post-profile-page/post-profile-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "posts/:post_id", // znak : oznacza wstrzykiwanie dynmiczne
    component: PostProfilePageComponent
  },
  {
    path: "**",
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
