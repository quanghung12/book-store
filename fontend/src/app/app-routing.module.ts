import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrantionComponent } from './user-registrantion/user-registrantion.component';
import { UserSearchDeleteComponent } from './user-search-delete/user-search-delete.component';

const routes: Routes = [
   {path:"register",component:UserRegistrantionComponent},
   {path:"search",component:UserSearchDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
