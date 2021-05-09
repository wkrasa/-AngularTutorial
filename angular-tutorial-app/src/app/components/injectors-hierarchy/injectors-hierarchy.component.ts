import { Component, OnInit, ChangeDetectionStrategy, Self, SkipSelf, Host } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'at-injectors-hierarchy',
  templateUrl: './injectors-hierarchy.component.html',
  styleUrls: ['./injectors-hierarchy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: LoggerService,
    useClass: LoggerService
  }]
})
export class InjectorsHierarchyComponent implements OnInit {

  constructor(
    @Self() private logger: LoggerService,
    @SkipSelf() private logger2: LoggerService,
    @Host() private logger3: LoggerService) { }

  ngOnInit(): void {
    this.logger.log('InjectorsHierarchyComponent');
    this.logger2.log('InjectorsHierarchyComponent');
    this.logger3.log('InjectorsHierarchyComponent');
  }

}
