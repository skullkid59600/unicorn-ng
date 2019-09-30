import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UnicornListComponent} from './pages/unicorn-list/unicorn-list.component';
import {AdminComponent} from './pages/admin/admin.component';
import {UnicornDetailsComponent} from './pages/unicorn-details/unicorn-details.component';

const routes: Routes = [
  {path: '', component: UnicornListComponent},
  {path: 'unicorn/:id', component: UnicornDetailsComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
