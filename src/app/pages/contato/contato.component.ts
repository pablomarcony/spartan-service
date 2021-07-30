import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { DomManipulationService } from 'src/app/shared/services/dom-manipulation/dom-manipulation.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit, AfterViewInit {
  titlePage: string = 'Contatos'
  breadcrumb: {} = [{
      "nome": "Início",
      "link": "/",
  },{
      "nome": "Empresa",
      "link": "",
  },{
      "nome": this.titlePage,
      "link": "/contatos",
  }]

  constructor(private domManipulationService: DomManipulationService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.domManipulationService.activeLinkHeader('contato')
  }
}
