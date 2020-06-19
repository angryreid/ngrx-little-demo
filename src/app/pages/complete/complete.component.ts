import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { PetTag } from 'app/core/pet-tag.model';
import { Subscription } from 'rxjs/Subscription';
import { RESET } from 'app/core/pet-tag.actions';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
})
export class CompleteComponent implements OnInit, OnDestroy {
  tagState$: Observable<PetTag>;
  private tagStateSub: Subscription;
  petTag: PetTag;

  constructor(private store: Store<PetTag>) { 
    this.tagState$ = store.select('petTag');
  }

  ngOnInit(): void {
    this.tagStateSub = this.tagState$.subscribe(state => {
      this.petTag = state;
    })
  }

  ngOnDestroy(): void {
    this.tagStateSub.unsubscribe();
  }

  newTag(){
    this.store.dispatch({
      type: RESET
    })
  }

}
