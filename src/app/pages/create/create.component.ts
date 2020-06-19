import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { PetTag } from "app/core/pet-tag.model";
import { Subscription } from "rxjs/Subscription";
import { Store } from "@ngrx/store";
import { SELECT_SHAPE, ADD_TEXT, TOGGLE_CLIP, TOGGLE_GEMS, COMPLETE, SELECT_FONT } from "app/core/pet-tag.actions";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
})
export class CreateComponent implements OnInit, OnDestroy {
  tagState$: Observable<PetTag>;
  private tagStateSub: Subscription;
  petTag: PetTag;
  done = false;

  constructor(private store: Store<PetTag>) {
    this.tagState$ = store.select('petTag')
  }

  ngOnInit(): void {
    this.tagStateSub = this.tagState$.subscribe((state) => {
      this.petTag = state;
      this.done = !!(this.petTag.shape && this.petTag.text)
    })
  }

  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
    this.tagStateSub.unsubscribe();
  }

  selectShapeHandler(shape: string){
    console.log(shape);
    this.store.dispatch({
      type: SELECT_SHAPE,
      payload: shape
    })
  }

  selectFontHandler(fontType: string){
    this.store.dispatch({
      type: SELECT_FONT,
      payload: fontType
    })
  }

  addTextHandler(text: string){
    this.store.dispatch({
      type: ADD_TEXT,
      payload: text
    })
  }

  toggleClipHandler(){
    this.store.dispatch({
      type: TOGGLE_CLIP
    })
  }

  toggleGemsHandler(){
    this.store.dispatch({
      type: TOGGLE_GEMS
    })
  }

  submit(){
    this.store.dispatch({
      type: COMPLETE,
      payload: true
    })
  }
}
