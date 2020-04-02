import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LayoutActions } from './layout.actions';
import { tap } from 'rxjs/operators';
import { NbSidebarService } from '@nebular/theme';


@Injectable()
export class LayoutEffects {

  private toggleSidebar$ = createEffect(() => this.actions$.pipe(
    ofType(LayoutActions.toggleSidebar.type),
    tap(() => this.sidebarService.toggle()),
  ), { dispatch: false});

  constructor(private actions$: Actions,
              private sidebarService: NbSidebarService) {
  }

}
