import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxErrorsModule } from '@ngspot/ngx-errors';
import { DynamicReactiveFieldComponent } from './dynamic-reactive-field/dynamic-reactive-field.component';
import { DynamicReactiveFormComponent } from './dynamic-reactive-form/dynamic-reactive-form.component';

@NgModule({
  declarations: [DynamicReactiveFormComponent, DynamicReactiveFieldComponent],
  imports: [CommonModule, BrowserAnimationsModule, NgxErrorsModule, ReactiveFormsModule],
  exports: [DynamicReactiveFormComponent],
})
export class DynamicFormModule {}