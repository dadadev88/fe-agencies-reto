import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BCPHeaderComponent } from './components/bcp-header/bcp-header.component';
import { RouterModule } from '@angular/router';
import { BCPButtonCircleComponent } from './components/bcp-button-circle/bcp-button-circle.component';
import { BCPTextComponent } from './components/forms/bcp-text/bcp-text.component';
import { BCPButtonComponent } from './components/bcp-button/bcp-button.component';

@NgModule({
	declarations: [
		BCPHeaderComponent,
		BCPButtonCircleComponent,
		BCPTextComponent,
		BCPButtonComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [
		BCPHeaderComponent,
		BCPButtonCircleComponent,
		BCPTextComponent,
		BCPButtonComponent
	]
})
export class SharedModule { }
