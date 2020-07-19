import { CertificateComponent } from './certificate/certificate.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';
import { QuizIntroComponent } from './quiz-intro/quiz-intro.component';
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
  { path: 'allcourses/topic', component: TopicComponent },
  { path: 'student/topic', component: TopicComponent },
  { path: 'quiz', component: QuizIntroComponent },
  { path: 'quiz/questions', component: QuizQuestionsComponent },
  { path: 'quiz/questions/submit', component: QuizResultComponent },
  { path: 'certificate', component: CertificateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
