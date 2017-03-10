import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the DocumentName pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'documentName'
})
@Injectable()
export class DocumentName {
  transform(value, args) {
    value = value + ''; // make sure it's a string
    const spl = value.split('/');
    return spl[spl.length - 1];
  }
}
