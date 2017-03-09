import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { RecruitmentProcessListPagePage } from '../pages/recruitment-process-list-page/recruitment-process-list-page';
import { RecruitmentProcessDetailPagePage } from '../pages/recruitment-process-detail-page/recruitment-process-detail-page';

@NgModule({
  declarations: [
    MyApp,
    RecruitmentProcessListPagePage,
    RecruitmentProcessDetailPagePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecruitmentProcessListPagePage,
    RecruitmentProcessDetailPagePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
