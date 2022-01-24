import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { appTitleSelector } from 'src/app/store/app.selectors';
import { AppState } from 'src/app/store/app.state.model';

@Component({
  selector: 'app-nav-ba',
  templateUrl: './nav-ba.component.html',
  styleUrls: ['./nav-ba.component.scss']
})
export class NavBaComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }


  title$: Observable<string> = of('');

  ngOnInit(): void {
    this.title$ = this.store.pipe(
      select(appTitleSelector)
    )
  }

}
