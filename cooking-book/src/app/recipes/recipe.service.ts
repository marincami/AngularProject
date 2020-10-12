import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Bandeja Paisa',
      'A delicious colombian food!!',
      'https://www.unacolombianaencalifornia.com/wp-content/uploads/2012/08/bandeja_paisa-1-1-e1466957278785.jpg',
      [
        new Ingredient('Eggs', 1),
        new Ingredient('Rice', 1)
      ]),
    new Recipe(
      'Hamburger',
      'A delicious american food!!',
      'https://www.readersdigest.ca/wp-content/uploads/2015/11/gourmet-burger-1024x666.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 2)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
