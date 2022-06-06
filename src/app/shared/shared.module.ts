import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BCPHeaderComponent } from './components/ui/bcp-header/bcp-header.component';
import { RouterModule } from '@angular/router';
import { BCPButtonCircleComponent } from './components/ui/bcp-button-circle/bcp-button-circle.component';
import { BCPTextComponent } from '@cforms/bcp-text/bcp-text.component';
import { BCPButtonComponent } from './components/ui/bcp-button/bcp-button.component';
import { BCPLoadingComponent } from './components/ui/bcp-loading/bcp-loading.component';
import { ReactiveFormsModule } from '@angular/forms';

const uiComponents = [
  BCPHeaderComponent,
  BCPButtonCircleComponent,
  BCPButtonComponent,
  BCPLoadingComponent
];

const formsComponents = [
  BCPTextComponent
];

@NgModule({
	declarations: [...uiComponents, ...formsComponents],
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule
	],
	exports: [...uiComponents, ...formsComponents]
})
export class SharedModule { }
