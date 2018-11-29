import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatSnackBarModule, MatExpansionModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NguCarouselModule} from '@ngu/carousel';
import {SharedModule} from '../../shared/shared.module';
import {HomeRoutes} from './home.routing';

import {HomeOneComponent} from './home-one.component';
import {HeaderComponent} from './header/header.component';
import {IntroOneComponent} from './intro-one/intro-one.component';
import {ServicesComponent} from './services/services.component';
import {CtaComponent} from './cta/cta.component';
import {ContactComponent} from './contact/contact.component';
import {FooterComponent} from './footer/footer.component';
import {SubscribeComponent} from './subscribe/subscribe.component';

import {WINDOW_PROVIDERS} from '../../shared/helpers/window.helper';
import {WhatWeDoComponent} from './what-we-do/what-we-do.component';
import {VolunteerComponent} from './volunteer/volunteer.component';
import {ShareComponent} from './share/share.component';
import {OurTeamComponent} from './our-team/our-team.component';
import {FaqComponent} from './faq/faq.component';
import {EventsComponent} from './events/events.component';
import {DonateComponent} from './donate/donate.component';
import {PageNameComponent} from './page-name/page-name.component';
import {BoardOfDirectorsComponent} from './board-of-directors/board-of-directors.component';
import {AdvisoryTeamComponent} from './advisory-team/advisory-team.component';
import {BiomarkersComponent} from './biomarkers/biomarkers.component';
import {ImmunotherapyComponent} from './immunotherapy/immunotherapy.component';
import {DataComponent} from './data/data.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    FlexLayoutModule,
    NguCarouselModule,
    MatExpansionModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
    HomeOneComponent,
    HeaderComponent,
    IntroOneComponent,
    ServicesComponent,
    CtaComponent,
    ContactComponent,
    FooterComponent,
    SubscribeComponent,
    WhatWeDoComponent,
    VolunteerComponent,
    ShareComponent,
    OurTeamComponent,
    FaqComponent,
    EventsComponent,
    DonateComponent,
    PageNameComponent,
    BoardOfDirectorsComponent,
    AdvisoryTeamComponent,
    BiomarkersComponent,
    ImmunotherapyComponent,
    DataComponent
  ],
  providers: [WINDOW_PROVIDERS]

})
export class HomeModule {
}
