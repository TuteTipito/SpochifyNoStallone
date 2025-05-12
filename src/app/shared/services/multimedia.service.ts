import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>()

/*   myObservable1$: Observable<any> = new Observable() */
  myObservable1$: BehaviorSubject<any> = new BehaviorSubject('')

  constructor() { 

    setTimeout(() => {
      this.myObservable1$.next('')
    }, 1500)

/*     this.myObservable1$ = new Observable(
      (observer: Observer<any>) => {
        observer.next('💦')

        setTimeout(() => {
          observer.next('')
        }, 2500)

        setTimeout(() => {
          observer.error('')
        }, 3500)
      }
    ) */
  }
}
