import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchVidsComponent } from './search-vids/search-vids.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TimerComponent } from './timer/timer.component';
import { HomeLinkComponent } from './shared/components/home-link/home-link.component';
import { PageLinkComponent } from './shared/components/page-link/page-link.component';

@NgModule({
   declarations: [
      AppComponent,
      SearchVidsComponent,
      HomeComponent,
      TimerComponent,
      HomeLinkComponent,
      PageLinkComponent
   ],
   imports: [
      AppRoutingModule,
      BrowserModule,
      BrowserAnimationsModule,
      FontAwesomeModule,
      FormsModule,
      ReactiveFormsModule,
      MatInputModule,
      MatFormFieldModule,
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatDividerModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
}
