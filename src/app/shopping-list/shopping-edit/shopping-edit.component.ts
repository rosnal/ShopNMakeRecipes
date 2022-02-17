import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('amountInput') amountInput: ElementRef
  @ViewChild('nameInput') nameInput: ElementRef
  @Output() addnewIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddClick() {
    this.addnewIngredient.emit(
      new Ingredient(this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value)
    );
  }
}
