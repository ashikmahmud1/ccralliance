import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LandingFixService} from '../../../shared/services/landing-fix.service';

@Component({
  selector: 'app-biomarkers',
  templateUrl: './biomarkers.component.html',
  styleUrls: ['./biomarkers.component.scss']
})
export class BiomarkersComponent implements OnInit, OnDestroy {

  @Input('backgroundGray') public backgroundGray;
  pageName = 'BIOMARKERS';

  constructor(private fix: LandingFixService) {
  }

  ngOnInit() {
    this.fix.addFix();
  }

  ngOnDestroy() {
    this.fix.removeFix();
  }
}
