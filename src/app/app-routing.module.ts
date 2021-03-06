import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { MainComponent } from './main/main.component';
import { SignalComponent } from './signal/signal.component';
import { SignalResultsComponent } from './signal-results/signal-results.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  // { path: '', component: MainComponent },
  { path: '', redirectTo: 'signal', pathMatch: 'full' },

  { path: 'report/:id/:symbol', component: ReportComponent },
  { path: 'signal', component: SignalComponent },
  { path: 'signal/:symbol', component: SignalResultsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
