import {Component, OnDestroy, OnInit} from '@angular/core';
import {LandingFixService} from '../../../shared/services/landing-fix.service';
import {NguCarousel} from '@ngu/carousel';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit, OnDestroy {

  pageName = 'OUR TEAM';

  constructor(private fix: LandingFixService) {
  }

  ngOnInit() {
    this.fix.addFix();
  }

  ngOnDestroy() {
    this.fix.removeFix();
  }
}
