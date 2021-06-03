import { ContactComponent } from './pages/contact/contact.component';
import { ExperianceComponent } from './pages/experiance/experiance.component';
import { AboutComponent } from './pages/about/about.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'experiance', component: ExperianceComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
