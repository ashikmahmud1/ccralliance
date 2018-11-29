import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LandingFixService} from '../../../shared/services/landing-fix.service';

@Component({
  selector: 'app-immunotherapy',
  templateUrl: './immunotherapy.component.html',
  styleUrls: ['./immunotherapy.component.scss']
})
export class ImmunotherapyComponent implements OnInit, OnDestroy {

  @Input('backgroundGray') public backgroundGray;
  pageName = 'IMMUNOTHERAPY';

  constructor(private fix: LandingFixService) {
  }

  ngOnInit() {
    this.fix.addFix();
  }

  ngOnDestroy() {
    this.fix.removeFix();
  }
}
