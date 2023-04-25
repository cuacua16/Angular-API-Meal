import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Meal } from 'src/app/interfaces/meal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input('meal') meal: Meal = {
    idMeal: '',
    strMeal: '',
    strIngredients: [],
  };
  @Output('save') save = new EventEmitter();
  showInstructions: boolean = false;
  showIngredients: boolean = false;

  onToggleInstructions() {
    this.showInstructions = !this.showInstructions;
  }

  onToggleIngredients() {
    this.showIngredients = !this.showIngredients;
  }

  onSave() {
    this.save.emit();
  }
}
