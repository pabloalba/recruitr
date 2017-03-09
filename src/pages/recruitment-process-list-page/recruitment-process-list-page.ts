import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProcessService } from "../../providers/process-service";
import { RecruitmentProcessDetailPagePage} from "../recruitment-process-detail-page/recruitment-process-detail-page"


@Component({
  selector: 'page-recruitment-process-list-page',
  templateUrl: 'recruitment-process-list-page.html',
  providers: [ProcessService]
})
export class RecruitmentProcessListPagePage {
  processes: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private processSrv: ProcessService
    ) {


    this.processes = processSrv.getProcessList();
  }

  itemTapped(event, process) {
    this.navCtrl.push(RecruitmentProcessDetailPagePage, {'processId': process.id})
  }
}

