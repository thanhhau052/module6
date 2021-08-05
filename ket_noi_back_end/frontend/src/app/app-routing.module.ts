import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BenhAnListComponent} from "./benh-an/benh-an-list/benh-an-list.component";
import {BenhAnEditComponent} from "./benh-an/benh-an-edit/benh-an-edit.component";


const routes: Routes = [
  {
    path: '',
    component: BenhAnListComponent
  },
  {
    path: 'edit/:id',
    component: BenhAnEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
