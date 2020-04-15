import { AddItemAction, DeleteItemAction } from './store/actions/todo.actions';
import { ToDoItem } from './store/model/ToDo';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from './store/model/app-state.model';
import { v4 as uuid } from 'uuid';
import { SavePasswordItem } from './store/model/SavePassword';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoggedIn$: boolean;
  isLoggedPut$: boolean;
  toDoItems: Observable<Array<ToDoItem>>;
  newToItem: ToDoItem = { id: '', name: '', description: '' };
  savepasslist: Observable<Array<SavePasswordItem>>;
  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.toDoItems = this.store.select((store) => store.todo);
    this.savepasslist = this.store.select('savepass');
    console.log(this.savepasslist);
  }

  addItem() {
    this.newToItem.id = uuid();
    if (this.newToItem.name != '')
      this.store.dispatch(new AddItemAction(this.newToItem));

    this.newToItem = { id: '', name: '', description: '' };
  }
  deleteItem(id: string) {
    console.log(id);
    this.store.dispatch(new DeleteItemAction(id));
  }
}
