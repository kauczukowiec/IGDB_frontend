import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { IgdbAppHeaderComponent } from './igdb-app-header/igdb-app-header.component';
import { IgdbAppFooterComponent } from './igdb-app-footer/igdb-app-footer.component';
import { IdgbSideNavComponent } from './components/idgb-side-nav/idgb-side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    IgdbAppHeaderComponent,
    IgdbAppFooterComponent,
    IdgbSideNavComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(farStar, fasStar);
  }

}
