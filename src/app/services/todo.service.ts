import { Injectable } from '@angular/core';
import {  AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable()
export class TodoService {

  todoList : AngularFireList<any>

  constructor(private firebasedb:AngularFireDatabase, ) { }

  getTodoList(){
    this.todoList = this.firebasedb.list('titles');
    return this.todoList;
  }

  addTodo(title:string ){
    this.todoList.push( {
      title : title
      , isChecked : false
    } );
  }

  updateTodo(id:string, flag:boolean){
    this.todoList.update( id, {
      isChecked : flag
    }  );
  }

  deleteTodo(id:string){
    this.todoList.remove(id);
  }

}
