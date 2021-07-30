import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomManipulationService {

  constructor() { }

  activeLinkHeader(elementId: any) {
    window.document.getElementById(elementId)?.classList.add('active');
  }
}