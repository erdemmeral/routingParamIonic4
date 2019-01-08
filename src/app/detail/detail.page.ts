import { HomePage } from './../home/home.page';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})
export class DetailPage implements OnInit {
  private todo;

  constructor(private route: ActivatedRoute, private todoService: TodoService){

  }

  ionViewWillEnter(){
    let todoId = this.route.snapshot.paramMap.get('id');
    this.todo = this.todoService.getTodo(todoId);
  }
  ngOnInit() {
  }

}