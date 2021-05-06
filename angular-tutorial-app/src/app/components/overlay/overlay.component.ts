import { FocusMonitor } from '@angular/cdk/a11y';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { merge, Observable } from 'rxjs';
import { filter, map, mapTo } from 'rxjs/operators';

@Component({
  selector: 'at-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayComponent implements OnInit {


  private isPanelHidden$: Observable<boolean>;
  private isPanelOpened$: Observable<boolean>;
  showPanel$: Observable<boolean>;

  @ViewChild(MatInput, {static: true, read: ElementRef}) private inputEl: ElementRef;

  @ViewChild(CdkConnectedOverlay, {static: true}) private overlay: CdkConnectedOverlay;

  constructor(private focusMonitor: FocusMonitor) { }

  ngOnInit(): void {
    this.isPanelHidden$ = this.overlay.backdropClick.pipe(mapTo(false));
    this.isPanelOpened$ = this.focusMonitor.monitor(this.inputEl).pipe(filter(focused => !!focused), mapTo(true));

    this.showPanel$ = merge(this.isPanelHidden$, this.isPanelOpened$);
  }

}
