import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerLazyComponent } from './inner-lazy.component';

describe('InnerLazyComponent', () => {
  let component: InnerLazyComponent;
  let fixture: ComponentFixture<InnerLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
