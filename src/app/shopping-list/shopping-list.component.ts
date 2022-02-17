import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[] = [
    new Ingredient("Cocoa Powder",2),
    new Ingredient("Corn Flour",500)
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onAddNewIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
  }
}
