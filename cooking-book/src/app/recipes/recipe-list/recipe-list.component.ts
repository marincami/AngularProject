import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a simply test', 'https://www.unacolombianaencalifornia.com/wp-content/uploads/2012/08/bandeja_paisa-1-1-e1466957278785.jpg'),
    new Recipe('A test recipe', 'This is a simply test', 'https://www.unacolombianaencalifornia.com/wp-content/uploads/2012/08/bandeja_paisa-1-1-e1466957278785.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
