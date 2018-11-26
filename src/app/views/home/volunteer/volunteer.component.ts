import {Component, OnDestroy, OnInit} from '@angular/core';
import {LandingFixService} from '../../../shared/services/landing-fix.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit, OnDestroy {

  pageName = 'VOLUNTEER';
  contactForm: FormGroup;

  constructor(private fix: LandingFixService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.fix.addFix();
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', Validators.required]
    });
  }

  ngOnDestroy() {
    this.fix.removeFix();
  }
}
