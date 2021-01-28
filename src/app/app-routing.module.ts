import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './utils/app.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'groups', loadChildren: () => import('./pages/groups/groups.module').then(m => m.GroupsModule) },
  { path: 'subscriptions', loadChildren: () => import('./pages/subscriptions/subscriptions.module').then(m => m.SubscriptionsModule), canActivate: [AuthGuard] },
  { path: 'staff', loadChildren: () => import('./pages/staff/staff.module').then(m => m.StaffModule), canActivate: [AuthGuard] },
  { path: 'visitsRegistration', loadChildren: () => import('./pages/visitsRegistration/visitsRegistration.module').then(m => m.VisitsRegistrationModule), canActivate: [AuthGuard] },
  { path: 'login', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
