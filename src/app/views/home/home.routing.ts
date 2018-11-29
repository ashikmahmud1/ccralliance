import {Routes} from '@angular/router';

import {HomeOneComponent} from './home-one.component';
import {WhatWeDoComponent} from './what-we-do/what-we-do.component';
import {VolunteerComponent} from './volunteer/volunteer.component';
import {ShareComponent} from './share/share.component';
import {OurTeamComponent} from './our-team/our-team.component';
import {FaqComponent} from './faq/faq.component';
import {EventsComponent} from './events/events.component';
import {DonateComponent} from './donate/donate.component';
import {DataComponent} from './data/data.component';
import {ImmunotherapyComponent} from './immunotherapy/immunotherapy.component';
import {BiomarkersComponent} from './biomarkers/biomarkers.component';

export const HomeRoutes: Routes = [
  {path: 'one', component: HomeOneComponent},
  {path: 'what-we-do', component: WhatWeDoComponent},
  {path: 'volunteer', component: VolunteerComponent},
  {path: 'share', component: ShareComponent},
  {path: 'our-team', component: OurTeamComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'events', component: EventsComponent},
  {path: 'donate', component: DonateComponent},
  {path: 'data', component: DataComponent},
  {path: 'immunotherapy', component: ImmunotherapyComponent},
  {path: 'biomarkers', component: BiomarkersComponent}
];
