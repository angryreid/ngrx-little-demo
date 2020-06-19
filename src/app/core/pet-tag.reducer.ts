import { PetTag, initialTag } from './pet-tag.model';
import { SELECT_SHAPE, SELECT_FONT, ADD_TEXT, TOGGLE_CLIP, TOGGLE_GEMS, COMPLETE, RESET } from './pet-tag.actions';

export interface Action {
  type: string,
  payload?: any
}

export function petTagReducer(state: PetTag = initialTag, action: Action){
  switch(action.type){
    case SELECT_SHAPE:
      return {...state, shape: action.payload} as PetTag
    case SELECT_FONT:
      return {...state, font: action.payload} as PetTag
    case ADD_TEXT:
      return {...state, text: action.payload} as PetTag
    case TOGGLE_CLIP:
      return {...state, clip: !state.clip} as PetTag
    case TOGGLE_GEMS:
      return {...state, gems: !state.gems} as PetTag
    case COMPLETE:
      return {...state, complete: action.payload} as PetTag
    case RESET:
      return initialTag;
    default:
      return state;
  }
}