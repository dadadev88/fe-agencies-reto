import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciesRoutingModule } from './agencies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { AgenciesComponent } from './agencies.component';
import { AgenciesDetailPageComponent } from './pages/agencies-detail/agencies-detail.component';
import { AgenciesFavoritesPageComponent } from './pages/agencies-favorites/agencies-favorites.component';
import { AgenciesListPageComponent } from './pages/agencies-list/agencies-list.component';

const agenciesPagesComponents = [
	AgenciesDetailPageComponent,
	AgenciesFavoritesPageComponent,
	AgenciesListPageComponent
];

@NgModule({
	declarations: [ AgenciesComponent, ...agenciesPagesComponents ],
	imports: [
		CommonModule,
		AgenciesRoutingModule,
		SharedModule
	]
})
export class AgenciesModule { }
