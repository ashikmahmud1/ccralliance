import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-name',
  templateUrl: './page-name.component.html',
  styleUrls: ['./page-name.component.scss']
})
export class PageNameComponent implements OnInit {

  @Input() pageName: string;

  constructor() {
  }

  ngOnInit() {
  }
}
