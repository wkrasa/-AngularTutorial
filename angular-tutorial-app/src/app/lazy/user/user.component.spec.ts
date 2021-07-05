import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

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

  it('should contain', () => {
    expect(de.query(By.css('p')).nativeElement.innerText).toContain('test user');
  });

  it('h1 should be hidden', () => {
    expect(de.query(By.css('h1'))).toBeFalsy();
  });

  it('h1 should be visible', () => {
    expect(de.query(By.css('h1'))).toBeFalsy();
    component.toggle();
    fixture.detectChanges();

    expect(de.query(By.css('h1'))).toBeTruthy();
    expect(de.query(By.css('h1')).nativeElement.innerText).toContain('test toggle');
  });

  // TODO: add async tests (fakeAsync + tick)
});
