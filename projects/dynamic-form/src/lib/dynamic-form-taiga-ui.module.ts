import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiButtonModule, TuiDataListModule, TuiHostedDropdownModule } from '@taiga-ui/core';
import {
  TuiCheckboxModule,
  TuiDataListWrapperModule,
  TuiInputInlineModule,
  TuiInputModule,
  TuiSelectModule,
  TuiToggleModule,
} from '@taiga-ui/kit';

const passThroughArray = [
  CommonModule,
  TuiButtonModule,
  TuiCheckboxModule,
  TuiDataListModule,
  TuiDataListWrapperModule,
  TuiHostedDropdownModule,
  TuiInputInlineModule,
  TuiInputModule,
  TuiSelectModule,
  TuiToggleModule,
];

@NgModule({
  imports: passThroughArray,
  exports: passThroughArray,
})
export class DynamicFormTaigaUiModule {}
