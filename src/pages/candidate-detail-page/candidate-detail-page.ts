import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProcessService } from "../../providers/process-service";
import { DocumentName } from '../../pipes/documentName';

@Component({
  selector: 'page-candidate-detail-page',
  templateUrl: 'candidate-detail-page.html',
  providers: [ProcessService],
})
export class CandidateDetailPagePage {
  candidate: any;
  process: any;
  votes: any;
  myAverage: number;
  myText: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private processSrv: ProcessService,
    ) {
    this.candidate = navParams.get('candidate');
    this.process = navParams.get('process');
    this.votes = processSrv.getVotes(this.candidate.id)
    this.myAverage = 0;
    this.myText = '';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CandidateDetailPagePage');
  }

}
