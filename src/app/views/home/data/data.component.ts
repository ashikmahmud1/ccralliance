import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LandingFixService} from '../../../shared/services/landing-fix.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit, OnDestroy {

  @Input('backgroundGray') public backgroundGray;
  pageName = 'DATA';

  constructor(private fix: LandingFixService) {
  }

  ngOnInit() {
    this.fix.addFix();
  }

  ngOnDestroy() {
    this.fix.removeFix();
  }
}
