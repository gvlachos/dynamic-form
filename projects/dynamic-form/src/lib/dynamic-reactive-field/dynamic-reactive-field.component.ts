import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { Field } from '../dynamic-form.model';

@Component({
  selector: 'lib-dynamic-reactive-field',
  templateUrl: './dynamic-reactive-field.component.html',
  styleUrls: ['./dynamic-reactive-field.component.scss'],
})
export class DynamicReactiveFieldComponent implements OnInit {
  @Input() field!: Field;
  public control!: FormControl;
  constructor(private formGroupDir: FormGroupDirective) {}

  ngOnInit(): void {
    /**
     * @angular/forms -> FormGroupDirective! 🎉
     *
     * https://angular.io/api/forms/FormGroupDirective
     * "Binds an existing FormGroup to a DOM element."
     *
     * We can easily access Reactive Forms functionality from this component in our
     * parent component without the need to pass our own inputs or event emitters.
     */
    this.control = this.formGroupDir.control.get(this.field.name) as FormControl;
  }
}
