import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { timer } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { ConfigurableModule } from './configurable.module';

export const PS_INTERVAL = new InjectionToken<number>('interval');

@Injectable()
export class PollingService {

  interval$ = timer(0, this.interval ?? 1000).pipe(shareReplay(1));

  constructor(@Optional() @Inject(PS_INTERVAL) private interval: number) {
   }
}
