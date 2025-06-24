import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PeriodicElement } from '../models/periodic-element.model';
import { ELEMENT_DATA } from '../data/initial-elements';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  constructor() { }

  getElements(): Observable<PeriodicElement[]> {
    return of(ELEMENT_DATA).pipe(delay(500));
  }
}