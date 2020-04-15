import { ToDoActionTypes } from './../actions/todo.actions';
import { ToDoItem } from './../model/ToDo';
import { ToDoAction } from '../actions/todo.actions';
const initialState: Array<ToDoItem> = [
  {
    id: '1775935f-36fd-467e-a667-09f95b917f6d',
    name: 'Learn ngrx',
    description: 'Read ngrx documentation & apply it to my project',
  },
];

export function toDoReducer(
  state: Array<ToDoItem> = initialState,
  action: ToDoAction
) {
  switch (action.type) {
    case ToDoActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case ToDoActionTypes.REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
