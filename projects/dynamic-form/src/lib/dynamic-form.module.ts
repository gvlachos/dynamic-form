import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DynamicFormTaigaUiModule } from './dynamic-form-taiga-ui.module';
import { DynamicReactiveFieldComponent } from './dynamic-reactive-field/dynamic-reactive-field.component';
import { DynamicReactiveFormComponent } from './dynamic-reactive-form/dynamic-reactive-form.component';

@NgModule({
  declarations: [DynamicReactiveFormComponent, DynamicReactiveFieldComponent],
  imports: [CommonModule, BrowserAnimationsModule, DynamicFormTaigaUiModule, ReactiveFormsModule],
  exports: [DynamicReactiveFormComponent],
})
export class DynamicFormModule {}
