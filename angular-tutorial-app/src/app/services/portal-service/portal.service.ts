import { TemplatePortal } from '@angular/cdk/portal/portal';
import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  private portal = new Subject<TemplatePortal>();

  readonly portal$ = this.portal.asObservable();

  constructor() { }

  setPortal(template: TemplatePortal){
    console.log('portal set');
    this.portal.next(template);
  }
}
