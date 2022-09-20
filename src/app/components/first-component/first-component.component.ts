import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Matheus';
  age: number = 24;
  job = 'Programador';
  hobbies = ['Correr', ' Jogar', ' Estudar', ' Netflix'];
  car = {
    name: 'Focus',
    year: 2020,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
