import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciesRoutingModule } from './agencies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { AgenciesComponent } from './agencies.component';
import { AgencyFormComponent } from './components/agency-form/agency-form.component';
import { AgencyListItemComponent } from './components/agency-list-item/agency-list-item.component';
import { AgenciesDetailPageComponent } from './pages/agencies-detail/agencies-detail.component';
import { AgenciesFavoritesPageComponent } from './pages/agencies-favorites/agencies-favorites.component';
import { AgenciesListPageComponent } from './pages/agencies-list/agencies-list.component';

const agenciesPagesComponents = [
	AgenciesDetailPageComponent,
	AgenciesFavoritesPageComponent,
	AgenciesListPageComponent
];

const agenciesComponents = [
	AgencyListItemComponent,
	AgencyFormComponent
];

@NgModule({
	declarations: [ AgenciesComponent, ...agenciesComponents, ...agenciesPagesComponents ],
	imports: [
		CommonModule,
		AgenciesRoutingModule,
		SharedModule
	]
})
export class AgenciesModule { }
