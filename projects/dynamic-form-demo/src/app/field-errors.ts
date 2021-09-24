import { FieldError } from "projects/dynamic-form/src/lib/dynamic-form.model";

export const requiredFieldError: FieldError = {
  name: 'required',
  text: 'This field is required.',
  rules: ['dirty'],
};

export const maxLengthFieldError: FieldError = {
  name: 'maxlength',
  text: 'This field cannot exceed 5 characters.',
  rules: ['dirty'],
};
