import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { DomManipulationService } from 'src/app/shared/services/dom-manipulation/dom-manipulation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private domManipulationService: DomManipulationService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.domManipulationService.activeLinkHeader('inicio')
  }

}
