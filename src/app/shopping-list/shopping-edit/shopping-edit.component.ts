import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('amountInput') amountInput: ElementRef
  @ViewChild('nameInput') nameInput: ElementRef
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddClick() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    this.shoppingListService.addNewIngredient(new Ingredient(name,amount));
  }
}
