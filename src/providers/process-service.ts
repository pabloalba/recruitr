import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProcessService {

  private processList: Array<any>;
  private candidates: any;

  constructor(public http: Http) {
    this.processList = [

      {
        id: 1,
        title: 'Design',
        description: 'We are looking for a new Designer! Gimp and Inkskape should be your best friends!',
        img: 'http://api-university.com/wp-content/uploads/2016/09/presentation.design.jpg',
        startDate: new Date(2017, 4, 1),
        endDate: new Date(2017, 4, 30)
      },
      {
        id: 2,
        title: 'Machine Learning',
        description: 'Machine Learning is the future, but we need someone NOW!',
        img: 'http://www.cs.toronto.edu/~urtasun/courses/CSC411_Fall16/CSC411_Fall16_files/machine_learning.jpg',
        startDate: new Date(2017, 5, 15),
        endDate: new Date(2017, 6, 15)
      },
      {
        id: 3,
        title: 'UX',
        description: 'We need a UX person. We don\'t require seniority, but the person must be confortable with FOSS tools',
        img: 'http://www.mobinius.com/wp-content/uploads/2014/02/UX-banner-blog.jpg',
        startDate: new Date(2017, 11, 1),
        endDate: new Date(2017, 11, 20)
      },
    ];


    this.candidates = {
      1: [
          {
            'id': 1001,
            'name': 'Scott Summers',
            'cv': 'http://pdf.com',
            'letter': 'http://pdf.com',
            'average': 3.5,
            'voted': false
          },
          {
            'id': 1002,
            'name': 'Jean Grey',
            'cv': 'http://pdf.com',
            'letter': 'http://pdf.com',
            'average': 4.5,
            'voted': true
          },
          {
            'id': 1003,
            'name': 'Warren Worthington',
            'cv': 'http://pdf.com',
            'letter': 'http://pdf.com',
            'average': 2,
            'voted': true
          },
          {
            'id': 1004,
            'name': 'Hank McCoy',
            'cv': 'http://pdf.com',
            'letter': 'http://pdf.com',
            'average': 3,
            'voted': false
          },
          {
            'id': 1005,
            'name': 'Bobby Drake',
            'cv': 'http://pdf.com',
            'letter': 'http://pdf.com',
            'average': 3,
            'voted': true
          },
          {
            'id': 1006,
            'name': 'Ororo Munroe',
            'cv': 'http://pdf.com',
            'letter': 'http://pdf.com',
            'average': 2.5,
            'voted': false
          },
          {
            'id': 1007,
            'name': 'Peter Rasputin',
            'cv': 'http://pdf.com',
            'letter': 'http://pdf.com',
            'average': 1.5,
            'voted': false
          },
          {
            'id': 1008,
            'name': 'Kurt Wagner',
            'cv': 'http://pdf.com',
            'letter': 'http://pdf.com',
            'average': 4,
            'voted': false
          },
          {
            'id': 1009,
            'name': 'Kitty Pride',
            'cv': 'http://pdf.com',
            'letter': 'http://pdf.com',
            'average': 2.5,
            'voted': false
          },
          {
            'id': 1010,
            'name': 'Logan',
            'cv': 'http://pdf.com',
            'letter': 'http://pdf.com',
            'average': 5,
            'voted': false
          }
      ],
      2: [
          {
            'id': 2001,
            'name': 'Tony Stark',
            'cv': 'http://pdf.com',
            'letter': 'http://pdf.com',
            'average': 5,
            'voted': false
          },
          {
            'id': 2002,
            'name': 'Donald Blake',
            'cv': 'http://pdf.com',
            'letter': 'http://pdf.com',
            'average': 4.5,
            'voted': false
          },
          {
            'id': 2003,
            'name': 'Clint Burton',
            'cv': 'http://pdf.com',
            'letter': 'http://pdf.com',
            'average': 3,
            'voted': true
          },
          {
            'id': 2004,
            'name': 'Natacha Romanoff',
            'cv': 'http://pdf.com',
            'letter': 'http://pdf.com',
            'average': 5,
            'voted': true
          },
          {
            'id': 2005,
            'name': 'Steve Rogers',
            'cv': 'http://pdf.com',
            'letter': 'http://pdf.com',
            'average': 4.5,
            'voted': true
          },
          {
            'id': 2006,
            'name': 'Bruce Banner',
            'cv': 'http://pdf.com',
            'letter': 'http://pdf.com',
            'average': 1.5,
            'voted': true
          },
          {
            'id': 2007,
            'name': 'Henry Pym',
            'cv': 'http://pdf.com',
            'letter': 'http://pdf.com',
            'average': 4,
            'voted': true
          }
      ],
      3: [
          {
            'id': 3001,
            'name': 'Reed Richards',
            'cv': 'http://pdf.com',
            'letter': 'http://pdf.com',
            'average': 5,
            'voted': false
          },
          {
            'id': 3002,
            'name': 'Sue Storm',
            'cv': 'http://pdf.com',
            'letter': 'http://pdf.com',
            'average': 5,
            'voted': false
          },
          {
            'id': 3003,
            'name': 'Johnny Storm',
            'cv': 'http://pdf.com',
            'letter': 'http://pdf.com',
            'average': 3,
            'voted': false
          },
          {
            'id': 3004,
            'name': 'Ben Grim',
            'cv': 'http://pdf.com',
            'letter': 'http://pdf.com',
            'average': 0.5,
            'voted': true
          }
      ]
    }
  }


  getProcessList() {
    return this.processList;
  }

  // Super efficent system! :P
  getProcess(processId){
    for (var i=0; i < this.processList.length; i++){
      if (this.processList[i].id == parseInt(processId, 10)){
        return this.processList[i]
      }
    }
    return {}
  }

  getCandidates(processId) {
    return this.candidates[processId];
  }

}
