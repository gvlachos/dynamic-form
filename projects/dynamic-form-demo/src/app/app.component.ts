import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { DynamicReactiveFormComponent } from '@dynamic-form-src';
import { Field, FieldType, KeyValuePair } from 'projects/dynamic-form/src/lib/dynamic-form.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('mainForm') mainForm!: DynamicReactiveFormComponent;
  @ViewChild('toggleForm') toggleForm!: DynamicReactiveFormComponent;

  leftForm: Field[] = [
    {
      name: 'firstName',
      type: FieldType.TEXTFIELD,
      validation: [Validators.required, Validators.maxLength(5)],
    },
    {
      name: 'lastName',
      type: FieldType.TEXTFIELD,
    },
    {
      name: 'favoriteFood',
      type: FieldType.SELECTDROPDOWN,
      options: ['Ice Cream', 'Pizza', 'Tacos'],
    },
    {
      name: 'favoriteColor',
      type: FieldType.SELECTDROPDOWN,
      options: ['Red', 'Blue', 'Yellow'],
    },
  ];

  toggleSet: Field[] = [
    {
      name: 'joinMailingList',
      type: FieldType.SLIDETOGGLE,
      defaultValue: true,
      children: [
        {
          name: 'streetAddress',
          type: FieldType.TEXTFIELD,
        },
        {
          name: 'city',
          type: FieldType.TEXTFIELD,
        },
        {
          name: 'state',
          type: FieldType.TEXTFIELD,
        },
        {
          name: 'zip',
          type: FieldType.TEXTFIELD,
        },
      ],
    },
  ];

  errors = [
    {
      name: 'required',
      text: 'This field is required.',
      rules: ['dirty'],
    },
    {
      name: 'maxlength',
      text: 'This field cannot exceed 5 characters.',
      rules: ['dirty'],
    },
  ];

  subscriptions: Subscription[] = [];
  mainFormValues: KeyValuePair[] = [];
  toggleFormValues: KeyValuePair[] = [];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.subscriptions.push(this.mainForm.values$.subscribe(values => (this.mainFormValues = values)));
    this.subscriptions.push(this.toggleForm.values$.subscribe(values => (this.toggleFormValues = values)));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}