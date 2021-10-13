import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './core/feedback/feedback.component';
import { PrincipalComponent } from './core/principal/principal.component';

const routes: Routes = [
  { path: 'feedback', component: FeedbackComponent },
  { path: '**', component: PrincipalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
