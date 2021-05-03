import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerLazySecondComponent } from './inner-lazy-second.component';

describe('InnerLazySecondComponent', () => {
  let component: InnerLazySecondComponent;
  let fixture: ComponentFixture<InnerLazySecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerLazySecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerLazySecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
