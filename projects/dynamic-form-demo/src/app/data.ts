import { Validators } from "@angular/forms";
import { Field, FieldType } from "projects/dynamic-form/src/lib/dynamic-form.model";

export const leftForm: ReadonlyArray<Field> = [
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

export const toggleSet: ReadonlyArray<Field> = [
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
