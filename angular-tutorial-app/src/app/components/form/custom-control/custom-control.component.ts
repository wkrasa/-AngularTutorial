import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding, ViewChild, ElementRef, OnDestroy, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { DoubleValueComponent } from '../double-value/double-value.component';

export interface CustomControlValue{
  value: number;
}

@Component({
  selector: 'app-custom-control',
  templateUrl: './custom-control.component.html',
  styleUrls: ['./custom-control.component.scss'],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: CustomControlComponent
      },
      // {
      //   provide: NG_VALUE_ACCESSOR,
      //   useExisting: CustomControlComponent,
      //   multi: true
      // }
    ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomControlComponent implements OnInit, OnDestroy, MatFormFieldControl<CustomControlValue>, ControlValueAccessor {

    private stateChanged = new Subject<void>();

    private _value: CustomControlValue | null
    @Input()
    set value(val: CustomControlValue | null){
      this._value = val;
      this.stateChanged.next();
    }

    get value():  CustomControlValue | null{
      return this._value;
    }

    private _placeholder: string
    @Input()
    set placeholder(val: string){
      this._placeholder = val;
      this.stateChanged.next();
    }

    get placeholder():  string{
      return this._placeholder;
    }


    readonly stateChanges: Observable<void> = this.stateChanged.asObservable();
    @HostBinding()  readonly id = "custom-id";

    //ngControl: NgControl | null = null;

    focused: boolean;

    get empty(): boolean{
        return !this._value || (!this._value.value && this._value.value !== 0);
    }

    @HostBinding('class.floated')
    get shouldLabelFloat(): boolean{
      return this.focused || !this.empty;
    }

    @Input() required: boolean;
    @Input() disabled: boolean;

    get errorState():  boolean{
      return this.errorStateMatcher.isErrorState(this.ngControl.control as FormControl, null);
    }

    controlType = 'custom-form-field';
    autofilled?: boolean;
    @HostBinding('attr.aria-user-aria-described-by')  userAriaDescribedBy = "custom-id";

    @ViewChild(MatInput, { read: ElementRef, static: true}) input: ElementRef;

    private _onChange: (value: CustomControlValue) => void = null;
    private _onTouched: () => void = null;

  constructor(
    private focusMonitor: FocusMonitor,
     @Optional() @Self() public ngControl: NgControl,
     private errorStateMatcher: ErrorStateMatcher) {
       if(!!ngControl){
        ngControl.valueAccessor = this;
       }

     }

  ngOnInit(): void {
    this.focusMonitor.monitor(this.input).subscribe(focus => {
      this.focused = !!focus;
      this._onTouched();
      this.stateChanged.next();
    });
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.input);
    this.stateChanged.complete();
  }

  setDescribedByIds(ids: string[]): void{
      this.userAriaDescribedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent): void {
    this.focusMonitor.focusVia(this.input, 'program');
    this.stateChanged.next();
  };


  writeValue(obj: CustomControlValue): void{
    this.value = obj;
  }

  registerOnChange(fn: any): void{
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void{
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void{
    this.disabled = isDisabled;
  }

  valueChanged(val: string){
    if(val === null || val === ''){
      this.value = null
    }
    else{
      this.value = { value: +val};
    }
    this._onChange(this.value);
    this._onTouched();
  }

}
