import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtToolsComponent } from './at-tools.component';

describe('AtToolsComponent', () => {
  let component: AtToolsComponent;
  let fixture: ComponentFixture<AtToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
