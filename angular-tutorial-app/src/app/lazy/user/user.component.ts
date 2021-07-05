import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Observable, Subject } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { User } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  user$ = new BehaviorSubject<User>(null);

  isVisble = false;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const user = this.route.snapshot.data['user'];
      this.user$.next(user);
    });
  }

  toggle(){
    this.isVisble = true;
  }
}
