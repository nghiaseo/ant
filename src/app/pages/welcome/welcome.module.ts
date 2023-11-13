import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';

@NgModule({
  imports: [WelcomeRoutingModule,NzNoAnimationModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
