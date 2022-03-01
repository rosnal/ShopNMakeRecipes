import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') form : NgForm;
  editIngredient : Subscription
  index: number;
  editMode = false;
  editedItem : Ingredient;
  constructor(private shoppingListService : ShoppingListService) { }
  ngOnDestroy(): void {
    this.editIngredient.unsubscribe();
  }

  ngOnInit(): void {
    this.editIngredient = this.shoppingListService.editIngredient.subscribe((index)=>{
      this.index = index;
      this.editMode= true;
      this.editedItem = this.shoppingListService.getIngredient(this.index);
      this.form.setValue({
        name : this.editedItem.name,
        amount : this.editedItem.amount
      })
    })
    
  }

  onAddItem(form : NgForm){
    const formValue = form.value;
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.index,new Ingredient(formValue.name,formValue.amount));
    }else{
      this.shoppingListService.addNewIngredient(new Ingredient(formValue.name,formValue.amount));
    }
    this.editMode=false;
    form.reset();   
  }
  onDelete(){
    this.shoppingListService.deleteIngredient(this.index);
    this.onClear();
  }
  onClear(){
    this.form.reset();
    this.editMode=false;
  }
}
