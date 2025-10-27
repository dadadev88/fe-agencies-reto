import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BCPHeaderComponent } from './components/ui/bcp-header/bcp-header.component';
import { RouterModule } from '@angular/router';
import { BCPButtonCircleComponent } from './components/ui/bcp-button-circle/bcp-button-circle.component';
import { BCPTextComponent } from '@cforms/bcp-text/bcp-text.component';
import { BCPButtonComponent } from './components/ui/bcp-button/bcp-button.component';
import { BCPLoadingComponent } from './components/ui/bcp-loading/bcp-loading.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyModalOneComponent } from './components/ui/modals/my-modal-one/my-modal-one.component';

const UI_COMPONENTS = [
  BCPHeaderComponent,
  BCPButtonCircleComponent,
  BCPButtonComponent,
  BCPLoadingComponent,
  MyModalOneComponent
];

const FORM_COMPONENTS = [
  BCPTextComponent
];

@NgModule({
  declarations: [...UI_COMPONENTS, ...FORM_COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [...UI_COMPONENTS, ...FORM_COMPONENTS]
})
export class SharedModule { }
