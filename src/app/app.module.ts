import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {PostCardComponent} from './post-card/post-card.component';
import {TechPageComponent} from './tech-page/tech-page.component';
import { IconSetComponent } from './icon-set/icon-set.component';

@NgModule({
  declarations: [
    AppComponent, NavBarComponent, TechPageComponent, HomePageComponent,
    PostCardComponent,
    IconSetComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
