import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { TimeService } from 'src/app/services/time.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('TimeService ', () => {
  let service: TimeService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TimeService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(TimeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() =>{
    httpMock.verify();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should get time', () => {
    const currentTime = { currentFileTime: 123456};

    service.getTime().subscribe(time => {
      expect(time).toEqual(currentTime. currentFileTime);
    })

    const request = httpMock.expectOne(service.TIME_URL);
    expect(request.request.method).toBe('GET');

    request.flush(currentTime);
  });

});
