import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Field, FieldError, FieldType, KeyValuePair } from 'projects/dynamic-form/src/lib/dynamic-form.model';
import { leftForm, toggleSet } from './data';
import { maxLengthFieldError, requiredFieldError } from './field-errors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  readonly leftForm = leftForm;
  readonly toggleSet = toggleSet;
  readonly errors: ReadonlyArray<FieldError> = [requiredFieldError, maxLengthFieldError];

  mainFormValues: KeyValuePair[] = [];
  toggleFormValues: KeyValuePair[] = [];

  ngOnInit(): void {}

  setMainFormValues(values: KeyValuePair[]) {
    this.mainFormValues = values;
  }

  setToggleFormValues(values: KeyValuePair[]) {
    this.toggleFormValues = values;
  }
}
