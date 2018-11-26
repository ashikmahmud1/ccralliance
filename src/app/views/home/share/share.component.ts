import {Component, OnDestroy, OnInit} from '@angular/core';
import {LandingFixService} from '../../../shared/services/landing-fix.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit, OnDestroy {
  pageName = 'SHARE';
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
