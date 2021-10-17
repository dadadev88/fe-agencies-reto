import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BCPHeaderComponent } from './components/bcp-header/bcp-header.component';
import { RouterModule } from '@angular/router';
import { BCPButtonCircleComponent } from './components/bcp-button-circle/bcp-button-circle.component';
import { BCPTextComponent } from '@cforms/bcp-text/bcp-text.component';
import { BCPButtonComponent } from './components/bcp-button/bcp-button.component';
import { BCPLoadingComponent } from './components/bcp-loading/bcp-loading.component';

@NgModule({
	declarations: [
		BCPHeaderComponent,
		BCPButtonCircleComponent,
		BCPTextComponent,
		BCPButtonComponent,
		BCPLoadingComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [
		BCPHeaderComponent,
		BCPButtonCircleComponent,
		BCPTextComponent,
		BCPButtonComponent,
		BCPLoadingComponent
	]
})
export class SharedModule { }
