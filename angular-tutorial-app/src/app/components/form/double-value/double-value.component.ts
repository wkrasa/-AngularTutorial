import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-double-value',
  templateUrl: './double-value.component.html',
  styleUrls: ['./double-value.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: DoubleValueComponent,
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoubleValueComponent implements OnInit, ControlValueAccessor  {

  value = true;
  disabled = false;
  private _onChange: (value: boolean) => void = null;
  private _onTouched: () => void = null;

  constructor() {
    console.log('created!');
  }

  ngOnInit(): void {
  }

  writeValue(obj: boolean): void{
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

  onClicked(){
    if(this.disabled){
      return;
    }

    this.value = !this.value;

    this._onChange(this.value);
    this._onTouched();
  }

}
