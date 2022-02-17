import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes : Recipe[] = [
    new Recipe('Chocolate Cake', 'Create batter, then bake','https://cdn.pixabay.com/photo/2019/01/28/10/02/ferrero-rocher-cake-3960005_960_720.jpg'),
    new Recipe('Chocolate Cake2', 'Create batter, then bake','https://cdn.pixabay.com/photo/2019/01/28/10/02/ferrero-rocher-cake-3960005_960_720.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onSelectedRecipe(recipe: Recipe){
    this.selectedRecipe.emit(recipe);
  }
}
