import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingPageRoutingModule } from './sing-routing.module';

import { SingPage } from './sing.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingPageRoutingModule,
    SharedModule
  ],
  declarations: [SingPage]
})
export class SingPageModule {}
