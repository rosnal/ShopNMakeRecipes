import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    editIngredient = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient("Cocoa Powder", 2),
        new Ingredient("Corn Flour", 500)
    ];
    getIngredients(){
        return this.ingredients.slice();
    }
    getIngredient(index : number){
        return this.ingredients[index];
    }
    addNewIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredient(index : number, ingredient : Ingredient){
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index : number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}