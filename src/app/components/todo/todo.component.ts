import { Component, OnInit } from '@angular/core';
import { TodoService  } from "../../services/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoservice:TodoService) { 
    this.todoListArray = [];
  }

  todoListArray : any[];

  ngOnInit() {
    this.todoservice.getTodoList().snapshotChanges()
      .subscribe( item => {
        this.todoListArray = [];
        item.forEach( element => {
          let _todo = element.payload.toJSON();
          _todo['$key']  = element.key;
          this.todoListArray.push(_todo);
        });

        this.todoListArray.sort( (a,b) => {
          return a.isChecked - b.isChecked;
        } )

      } )
  }

  addTodo(itemTitle){
    this.todoservice.addTodo( itemTitle.value  );
    itemTitle.value = null;
  }

  updateTodo(id:string, isChecked:boolean){
    console.log("update");
    this.todoservice.updateTodo(id, !isChecked);
  }

  deleteTodo(id:string){
    if (confirm("Desea Borrar la tarea?") ) {
      this.todoservice.deleteTodo(id);  
    }
    
  }

}
