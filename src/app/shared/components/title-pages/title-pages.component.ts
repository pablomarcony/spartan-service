import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'title-pages',
  templateUrl: './title-pages.component.html',
  styleUrls: ['./title-pages.component.css']
})
export class TitlePagesComponent implements OnInit {
  @Input() titlePage: any;
  @Input() breadcrumb: any;


  constructor() { }

  ngOnInit(): void {
  }
}
