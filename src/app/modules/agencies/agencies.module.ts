import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// Modules
import { AgenciesRoutingModule } from './agencies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
// Components
import { AgenciesComponent } from './agencies.component';
import { AgencyFormComponent } from './components/agency-form/agency-form.component';
import { AgencyListItemComponent } from './components/agency-list-item/agency-list-item.component';
import { AgenciesDetailPageComponent } from './pages/agencies-detail/agencies-detail.component';
import { AgenciesListPageComponent } from './pages/agencies-list/agencies-list.component';
// Providers
import { AgenciesService } from './services/agencies.service';
import { AgenciesState } from './services/agencies-state.service';
import { AgenciesController } from './controllers/agencies.controller';

const agenciesPagesComponents = [
	AgenciesDetailPageComponent,
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
		SharedModule,
		HttpClientModule,
		RouterModule
	],
	providers: [
		AgenciesService,
		AgenciesState,
		AgenciesController
	]
})
export class AgenciesModule { }
