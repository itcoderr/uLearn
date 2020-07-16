import { TopicComponent } from './topic/topic.component';
import { AllcoursesComponent } from './allcourses/allcourses.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { TutorDashboardComponent } from './tutor-dashboard/tutor-dashboard.component';
import { ELearningContentComponent } from './e-learning-content/e-learning-content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: ELearningContentComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tutor', component: TutorDashboardComponent },
  { path: 'student', component: StudentDashboardComponent },
  { path: 'allcourses', component: AllcoursesComponent },
  { path: 'allcourses/topic', component: TopicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
