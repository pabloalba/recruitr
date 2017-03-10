import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { ProcessService } from "../../providers/process-service";
import { CandidateDetailPagePage } from '../candidate-detail-page/candidate-detail-page';

@Component({
  selector: 'page-recruitment-process-detail-page',
  templateUrl: 'recruitment-process-detail-page.html',
  providers: [ProcessService]
})
export class RecruitmentProcessDetailPagePage {
  private process: any;
  private candidates: Array<any>;
  private currentSort: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private processSrv: ProcessService,
    private alertCtrl: AlertController
  ) {
    const processId = navParams.get('processId');
    this.process = processSrv.getProcess(processId);
    this.currentSort = 'name';
    this.candidates = processSrv.getCandidates(processId);
    this.sortCandidates()

  }

  ionViewDidLoad() {

  }

  itemTapped(event, candidate) {
    this.navCtrl.push(CandidateDetailPagePage, {'candidate': candidate, 'process': this.process})
  }

  getCandidateClass(candidate) {
    if (candidate.voted) {
      return 'voted';
    }
    return '';
  }

  showRadioAlert() {

    let alert = this.alertCtrl.create();
    alert.setTitle('Select Order');

    alert.addInput({
      type: 'radio',
      label: 'Name',
      value: 'name',
      checked: this.currentSort == 'name'
    });
    alert.addInput({
      type: 'radio',
      label: 'Stars',
      value: 'average',
      checked: this.currentSort == 'average'
    });
    alert.addInput({
      type: 'radio',
      label: 'Not voted first',
      value: 'voted',
      checked: this.currentSort == 'voted'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.currentSort = data;
        this.sortCandidates();
      }
    });

    alert.present();
  }

  sortCandidates() {
    let currentSort = this.currentSort;
    this.candidates.sort(function (a, b) {
      if (a[currentSort] <= b[currentSort]) {
        // Name should be asc
        if (currentSort == 'name') {
          return -1
        }
        return 1
      }
      // Name should be asc
      if (currentSort == 'name') {
        return 1
      }
      return -1
    });

  }


}
