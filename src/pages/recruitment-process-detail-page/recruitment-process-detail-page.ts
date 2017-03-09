import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProcessService } from "../../providers/process-service";

@Component({
  selector: 'page-recruitment-process-detail-page',
  templateUrl: 'recruitment-process-detail-page.html',
  providers: [ProcessService]
})
export class RecruitmentProcessDetailPagePage {
  private process: any;
  private candidates: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private processSrv: ProcessService) {
    const processId = navParams.get('processId');
    this.process = processSrv.getProcess(processId)
    this.candidates = processSrv.getCandidates(processId)

  }

  ionViewDidLoad() {

  }

  itemTapped(event, candidate) {
    // this.navCtrl.push(RecruitmentProcessDetailPagePage, {'processId': process.id})
  }

  getCandidateClass(candidate){
    if (candidate.voted) {
      return 'voted';
    }
    return '';
  }


}
