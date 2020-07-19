import { CourseDataService } from './course-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ELearningNavbarComponent } from './e-learning-navbar/e-learning-navbar.component';
import { ELearningContentComponent } from './e-learning-content/e-learning-content.component';
import { ELearningFooterComponent } from './e-learning-footer/e-learning-footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { TutorDashboardComponent } from './tutor-dashboard/tutor-dashboard.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { AllcoursesComponent } from './allcourses/allcourses.component';
import { TopicComponent } from './topic/topic.component';
import { QuizIntroComponent } from './quiz-intro/quiz-intro.component';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { CertificateComponent } from './certificate/certificate.component';


@NgModule({
  declarations: [
    AppComponent,
    ELearningNavbarComponent,
    ELearningContentComponent,
    ELearningFooterComponent,
    DashboardComponent,
    StudentDashboardComponent,
    TutorDashboardComponent,
    AllcoursesComponent,
    TopicComponent,
    QuizIntroComponent,
    QuizQuestionsComponent,
    QuizResultComponent,
    CertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '29031592399-0dg80hbt4mob3p8aprkk16lk5a2hi6i4.apps.googleusercontent.com'
            ),
          }
        ],
      } as SocialAuthServiceConfig,
    },
    CourseDataService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
