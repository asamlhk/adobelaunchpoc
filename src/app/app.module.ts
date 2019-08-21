import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { AdobeGuardService } from './adobe-guard.service';
import { AdobeAnalyticService } from './adobe-analytic.service'

const appRoutes: Routes = [
  { path: 'page1', component: Page1Component, canActivate: [AdobeGuardService], },
  { path: 'page2', component: Page2Component, canActivate: [AdobeGuardService], },

];


@NgModule({
  imports: [BrowserModule, FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )],
  declarations: [AppComponent, HelloComponent, Page1Component, Page2Component],
  bootstrap: [AppComponent],
  providers: [AdobeGuardService, AdobeAnalyticService]
})
export class AppModule { }
