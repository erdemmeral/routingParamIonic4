import { Component } from '@angular/core';
import { NavParams, NavController } from '@ionic/angular';
import {items} from "../../assets/json/example.json";
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor (public todoService: TodoService){}
}

