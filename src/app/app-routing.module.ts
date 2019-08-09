import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { SearchVidsComponent } from './search-vids/search-vids.component';
import { HomeComponent } from './home/home.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  { path: 'search', component: SearchVidsComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  bootstrap: []
})
export class AppRoutingModule {}
