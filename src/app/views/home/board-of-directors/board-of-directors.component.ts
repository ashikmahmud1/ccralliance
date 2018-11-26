import { Component, OnInit } from '@angular/core';
import {NguCarousel} from '@ngu/carousel';

@Component({
  selector: 'app-board-of-directors',
  templateUrl: './board-of-directors.component.html',
  styleUrls: ['./board-of-directors.component.scss']
})
export class BoardOfDirectorsComponent implements OnInit {

  public carouselOptions: NguCarousel;
  public boardOfDirectors =
    [
      {
        logo: 'assets/images/mock-logo-4.png',
        photo: 'assets/images/face-1.jpg',
        text: `“Mari has been involved in many R&D programs at the National Science 
        Foundation and at the Defense Advanced Research Projects Agency (DARPA).  
        Most recently, she was responsible for new initiatives in biotech research at DARPA's Defense Sciences Office. 
         After experiencing loss of her dogs to cancer, she began exploring ways to help researchers advance canine cancer research, 
         as well as to assist dog owners caring for pets with cancer.”`,
        title: 'Mari Maeda Ph.D.',
        subtitle: 'Product Manager',
        class: 'board-of-directors'
      }, {
      logo: 'assets/images/mock-logo-2.png',
      photo: 'assets/images/face-2.jpg',
      text: `"Sam has spent his career in R&D working in academia and with the government, forming and guiding teams 
      that has tackled some of the most pressing national security problems.   He has managed projects spanning a wide 
      range of scientific and technology areas but he is particularly known for his expertise in statistical signal processing 
      and complex system analysis.  He loves animals especially dogs. He hopes to contribute to ridding the canine world of
       this serious disease."`,
      title: 'Samuel Earp Ph.D.',
      subtitle: 'CEO',
      class: 'board-of-directors'
    }, {
      logo: 'assets/images/mock-logo-3.png',
      photo: 'assets/images/face-3.jpg',
      text: `"Tai is the co-founder and Vice President of Securigence, a company that specializes in cyber 
      security and systems engineering. Tai earned a Bachelor’s Degree with honors in Network Engineering 
      from Strayer University. Tai is passionate about animal welfare and also about giving back and creating 
      opportunities for those less privileged."`,
      title: 'Tai Truong',
      subtitle: 'Software Engineer',
      class: 'board-of-directors'
    }, {
      logo: 'assets/images/mock-logo-1.png',
      photo: 'assets/images/face-4.jpg',
      text: `"Liz is currently the Chief of Staff of Microsoft’s AI + Research, an organization responsible 
      for incubating research projects.  Liz has been involved in many nonprofits and causes, including the 
      Leukemia and Lymphoma Society.  Liz holds a BA in international relations from Christopher Newport 
      University in Virginia and is an avid dog lover and animal welfare advocate."`,
      title: 'Elizabeth Zuidema',
      subtitle: 'CEO',
      class: 'board-of-directors'
    }];
  constructor() { }

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
