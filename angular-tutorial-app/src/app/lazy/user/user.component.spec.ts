import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { TimeService } from 'src/app/services/time.service';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let de: DebugElement;

  let activatedRouteStub = {
    params: of({}),
    snapshot: {
      data:{
        user: {
          name: 'test user'
        }
      }
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [
        { provide: TimeService, useValue: { getTime: () => of(123) }},
        { provide: Router, useValue: {} },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain user', () => {
    expect(de.query(By.css('.user')).nativeElement.innerText).toContain('test user');
  });

  it('should contain time', () => {
    expect(de.query(By.css('.time')).nativeElement.innerText).toContain('123');
  });

  it('h1 should be hidden', () => {
    expect(de.query(By.css('h1'))).toBeFalsy();
  });

  it('h1 should be visible', () => {
    expect(de.query(By.css('h1'))).toBeFalsy();
    component.toggle();
    fixture.detectChanges();

    expect(component.isVisble).toBeTrue();
    expect(de.query(By.css('h1'))).toBeTruthy();
    expect(de.query(By.css('h1')).nativeElement.innerText).toContain('test toggle');
  });

  // it('h1 should be visible 2', fakeAsync(() => {
  //   expect(de.query(By.css('h1'))).toBeFalsy();
  //   component.toggle();
  //   fixture.detectChanges();
  //   tick(500);
  //   expect(component.isVisble).toBeTrue();
  //   expect(de.query(By.css('h1'))).toBeTruthy();
  //   expect(de.query(By.css('h1')).nativeElement.innerText).toContain('test toggle');
  // }));


  // TODO: add async tests (fakeAsync + tick)
});
