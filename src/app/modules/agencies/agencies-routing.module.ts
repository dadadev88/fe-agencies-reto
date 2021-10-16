import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesComponent } from './agencies.component';
import { AgenciesDetailPageComponent } from './pages/agencies-detail/agencies-detail.component';
import { AgenciesFavoritesPageComponent } from './pages/agencies-favorites/agencies-favorites.component';
import { AgenciesListPageComponent } from './pages/agencies-list/agencies-list.component';

const agenciesRoutes: Routes = [
	{ path: '', component: AgenciesComponent, children: [
		{ path: '', pathMatch: 'full', redirectTo: 'listado' },
		{ path: 'listado', component: AgenciesListPageComponent },
		{ path: 'favoritas', component: AgenciesFavoritesPageComponent },
		{ path: 'detalle', component: AgenciesDetailPageComponent }
	]}
];

@NgModule({
	imports: [ RouterModule.forChild(agenciesRoutes) ],
	exports: [ RouterModule]
})
export class AgenciesRoutingModule { }
