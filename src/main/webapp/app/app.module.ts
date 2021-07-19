import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CreditmanagerSharedModule } from 'app/shared/shared.module';
import { CreditmanagerCoreModule } from 'app/core/core.module';
import { CreditmanagerAppRoutingModule } from './app-routing.module';
import { CreditmanagerHomeModule } from './home/home.module';
import { CreditmanagerEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CreditmanagerSharedModule,
    CreditmanagerCoreModule,
    CreditmanagerHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CreditmanagerEntityModule,
    CreditmanagerAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class CreditmanagerAppModule {}
