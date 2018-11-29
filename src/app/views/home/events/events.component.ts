import {Component, OnDestroy, OnInit} from '@angular/core';
import {LandingFixService} from '../../../shared/services/landing-fix.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {

  pageName = 'EVENTS';

  constructor(private fix: LandingFixService) {
  }

  ngOnInit() {
    this.fix.addFix();
  }

  gotoEvents() {
    window.open('https://www.waglovelife.org/', '_blank');
  }

  ngOnDestroy() {
    this.fix.removeFix();
  }
}
