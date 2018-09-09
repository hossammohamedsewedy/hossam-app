import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

@Injectable()
export class CommonMethods {

  constructor(private messageService: MessageService){}

  //=================== Common
  
  static heroesTypes: any = {
    Priest: 'Priest', Paladin: 'Paladin', Warrior: 'Warrior',
    Mage: 'Mage', Hunter: 'Hunter', Warlock: 'Warlock', Shaman: 'Shaman',
    DeathKnight: 'Death Knight'
  };

  //===================

  //------------------- Strings

  static SeperateString(str: string): string {
    return str.replace(/([A-Z])/g, ' $1').trim();
  }

  //------------------- Numbers
  
  static getRandomTo(max){
    return Math.floor(Math.random() * max);
  }

  static getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  static getRandomInEnum(enumObj){
    var enumArray = this.parseEnumToArray(enumObj);
    var enumLength = enumArray.length;
    var randomIndex = this.getRandomTo(enumLength);
    return enumArray[randomIndex].value;
  }

  //--------------------- Enum
  
  static parseEnumToArray(enumObj){
    //return Object.keys(enumObj).map(n => Number.parseInt(n));
    const keys = Object.keys(enumObj).filter(k => typeof enumObj[k as any] === "number"); // ["A", "B"]
    const values = keys.map(k => {
      return {'key': k, 'value': enumObj[k as any]};
    }); // [0, 1]
    return values;
  }

  //=================== Error Handler

  /** Log a HeroService message with the MessageService */
  log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (err: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(err); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${err.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}