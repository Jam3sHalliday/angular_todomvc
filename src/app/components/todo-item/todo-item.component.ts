import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

const fadeStrikeThrough = trigger('fadeStrikeThrough', [
  state('active', style({
    fontSize: '18px',
    color: "#000",
  })),
  state('completed', style({
    fontSize: '17px',
    color: 'lightgrey',
    textDecoration: 'line-through'
  })),
  transition('active <=> completed', [animate(250)]),
]);
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  animations: [
    fadeStrikeThrough
  ]
})
export class TodoItemComponent implements OnInit {

  @Input() todo: any;
  @Output() changeStatus: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  isHovering = false;
  isEditing = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeTodoStatus() {
    this.changeStatus.emit({ ...this.todo, isCompleted: !this.todo.isCompleted });
  }

  submitEdit(event: KeyboardEvent) {
    const { keyCode } = event;
    event.preventDefault();

    if (keyCode === 13) {
      this.editTodo.emit(this.todo);
      this.isEditing = false;
    }
  }

  removeTodo() {
    this.deleteTodo.emit(this.todo);
  }

}
