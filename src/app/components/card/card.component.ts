import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Meal } from 'src/app/interfaces/meal';
import { UserService } from 'src/app/services/user.service';

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
  favorites: Meal[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.favorites = this.userService.getFavorites();
  }

  onToggleInstructions() {
    this.showInstructions = !this.showInstructions;
  }

  onToggleIngredients() {
    this.showIngredients = !this.showIngredients;
  }

  onSave() {
    this.save.emit();
    this.favorites = this.userService.getFavorites();
  }

  isFavorite(mealId: string) {
    return this.favorites.some((e) => e.idMeal === mealId);
  }
}
