import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import './rxjs-extensions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }			from './app.component';
import { HeroesComponent }		from './heroes.component';
import { HeroDetailComponent }	from './hero-detail.component';
import { HeroService }			from './hero.service';
import { routing }				from './app.routing';
import { DashboardComponent }	from './dashboard.component';
import { HeroSearchComponent }	from './hero-search.component';
import { HeroSearchService }	from './hero-search.service';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		routing,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService)
	],
	declarations: [
		AppComponent,
		HeroDetailComponent,
		HeroesComponent,
		DashboardComponent,
		HeroSearchComponent
	],
	providers: [
		HeroService,
		HeroSearchService
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }
