import { Action } from '@ngrx/store';
import { ToDoItem } from './../model/ToDo';

export enum ToDoActionTypes {
  ADD_ITEM = '[TODO] Add Item',
  EDIT_ITEM = '[EDIT] Edit Item',
  REMOVE_ITEM = '[REMOVE] Remove Item',
}

export class AddItemAction implements Action {
  readonly type = ToDoActionTypes.ADD_ITEM;

  constructor(public payload: ToDoItem) {}
}
export class DeleteItemAction implements Action {
  readonly type = ToDoActionTypes.REMOVE_ITEM;

  constructor(public payload: string) {}
}

export type ToDoAction = AddItemAction | DeleteItemAction;
