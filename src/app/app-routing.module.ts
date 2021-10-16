import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'agencias' },
	{ path: 'agencias', loadChildren: () => import('./modules/agencies/agencies.module').then(m => m.AgenciesModule) }
];

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes, {useHash: true}) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
