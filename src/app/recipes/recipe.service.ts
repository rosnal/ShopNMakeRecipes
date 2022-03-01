import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    constructor(private shoppingListService: ShoppingListService){

    }
    recipe  = new Subject<Recipe[]>();
    selectedRecipe = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Chocolate Cake',
            'Create batter, then bake',
            'https://cdn.pixabay.com/photo/2019/01/28/10/02/ferrero-rocher-cake-3960005_960_720.jpg',
            [
                new Ingredient('Cocoa Powder', 2),
                new Ingredient('Corn Flour', 1),
                new Ingredient('Eggs', 4)
            ]),
        new Recipe('Chicken Curry',
            'Marinate, add spices, boil',
            'https://cdn.pixabay.com/photo/2021/07/29/12/43/curry-6507120_960_720.jpg',
            [
                new Ingredient('Chicken', 2),
                new Ingredient('Garam Masala', 1),
                new Ingredient('Potato', 4)
            ])
    ];
    getRecipes() {
        return this.recipes.slice();
    }
    setData(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipe.next(this.recipes.slice());
    }
    addRecipe(recipe : Recipe){
    this.recipes.push(recipe);
    this.recipe.next(this.recipes.slice());
    }
    updateRecipe(index : number, recipe : Recipe){
        this.recipes[index] = recipe;
        this.recipe.next(this.recipes.slice());
    }
    getRecipeById(index: number){
        return this.recipes[index];
    }
    addToShoppingList(ingredients : Ingredient[]){
        this.shoppingListService.addIngredientsToShoppingList(ingredients);
    }
    deleteRecipe(index : number){
        this.recipes.splice(index,1);
        this.recipe.next(this.recipes.slice());
    }
}