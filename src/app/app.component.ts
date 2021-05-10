import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TodoService } from './services/todo.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  hasTodo$: Observable<boolean> = of(false);

  constructor(private todoService: TodoService)  {
  }

  ngOnInit() {
    this.todoService.fetchFromLocalStorage();
    this.hasTodo$ = this.todoService.length$.pipe(map(length => length > 0));
    console.log('---', typeof(this.hasTodo$));
    console.log('----',  this.todoService.length$.pipe(map(length => length > 0)))
  }
}
