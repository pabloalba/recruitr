import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { RecruitmentProcessListPagePage } from '../pages/recruitment-process-list-page/recruitment-process-list-page';
import { RecruitmentProcessDetailPagePage } from '../pages/recruitment-process-detail-page/recruitment-process-detail-page';
import { CandidateDetailPagePage } from '../pages/candidate-detail-page/candidate-detail-page';
import { StarsComponent } from '../components/stars/stars';
import { DocumentName} from '../pipes/document-name';
@NgModule({
  declarations: [
    MyApp,
    RecruitmentProcessListPagePage,
    RecruitmentProcessDetailPagePage,
    CandidateDetailPagePage,
    StarsComponent,
    DocumentName
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecruitmentProcessListPagePage,
    RecruitmentProcessDetailPagePage,
    CandidateDetailPagePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
