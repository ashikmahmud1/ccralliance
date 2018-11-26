import {Component, OnInit, Input} from '@angular/core';
import {NguCarousel} from '@ngu/carousel';

@Component({
  selector: 'app-advisory-team',
  templateUrl: './adviosry-team.component.html',
  styleUrls: ['./advisory-team.component.scss']
})
export class AdvisoryTeamComponent implements OnInit {
  public carouselOptions: NguCarousel;
  public testimonials = [{
    logo: 'assets/images/mock-logo-4.png',
    photo: 'assets/images/face-1.jpg',
    text: `“Dr Choy specializes in clinical oncology and has been active in many clinical 
    trials and research focused on improving animal patient care. He practices at the Seattle 
    Veterinary Specialists / Blue Pearl Hospital.”`,
    title: 'Kevin Choy, DACVIM-Oncology',
    subtitle: 'Product Manager'
  }, {
    logo: 'assets/images/mock-logo-2.png',
    photo: 'assets/images/face-2.jpg',
    text: `"Dr. Gillings is board certified in oncology by ACVIM and has practiced in the Puget Sound area 
    since 2007. She is currently with the Summit Veterinary Referral Center in Tacoma WA. "`,
    title: 'Sarah Gillings, DACVIM-Oncology',
    subtitle: 'CEO'
  }, {
    logo: 'assets/images/mock-logo-3.png',
    photo: 'assets/images/face-3.jpg',
    text: `"Laurie Kaplan is the founder of the Magic Bullet Fund which provides financial assistance 
    for cancer treatments for dogs.  She is the author of Help Your Dog Fight Cancer and co-author of 
    Canine and Feline Geriatric Oncology."`,
    title: 'Laurie Kaplan',
    subtitle: 'Software Engineer'
  }, {
    logo: 'assets/images/mock-logo-1.png',
    photo: 'assets/images/face-4.jpg',
    text: `"Prof Promislow is a biogerontologist and a professor at the University of Washington.  
    He studies aging through system biology and metabolomics approaches, and is a co-director of the 
    Dog Aging Project. "`,
    title: 'Professor Daniel Promislow PhD',
    subtitle: 'CEO'
  }];

  constructor() {
  }

  ngOnInit() {
    this.carouselOptions = {
      grid: {xs: 1, sm: 2, md: 3, lg: 3, all: 0},
      slide: 2,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    };
  }

}
