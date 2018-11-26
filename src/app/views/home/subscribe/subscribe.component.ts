import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  subscribeForm: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.email]]
    });
  }
}
