import { Component } from '@angular/core';
import { Meal } from './interfaces/meal';
import { MealService } from './services/meal.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  meal: Meal = {
    idMeal: '',
    strMeal: '',
    strIngredients: [],
  };
  isLoading = false;
  previousMeals: string[] = [];
  favorites: string[] = [];

  constructor(
    private mealService: MealService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getRandomMeal();
    this.getFavorites();
  }

  getRandomMeal() {
    this.isLoading = true;
    if (this.meal.idMeal) this.previousMeals.push(this.meal.idMeal);
    this.mealService.getRandomMeal().subscribe((d: any) => {
      this.meal = { ...this.meal, ...d.meals[0], strIngredients: [] };
      for (let i = 1; i <= 20; i++) {
        let ingredient = d.meals[0][`strIngredient${i}`]?.trim();
        if (ingredient) this.meal.strIngredients.push(ingredient);
      }
      this.isLoading = false;
    });
  }

  getMealById() {
    this.isLoading = true;
    this.mealService
      .getMealByID(this.previousMeals.pop()!)
      .subscribe((d: any) => {
        this.meal = { ...this.meal, ...d.meals[0], strIngredients: [] };
        for (let i = 1; i <= 20; i++) {
          let ingredient = d.meals[0][`strIngredient${i}`].trim();
          if (ingredient) this.meal.strIngredients.push(ingredient);
        }
        this.isLoading = false;
      });
  }

  getFavorites() {
    this.favorites = [];
    this.userService
      .getFavorites()
      .forEach((e) => this.favorites.push(e.strMeal));
  }

  getFavorite(strMeal: string) {
    this.isLoading = true;
    this.mealService.getMealByName(strMeal).subscribe((d: any) => {
      this.meal = { ...this.meal, ...d.meals[0], strIngredients: [] };
      for (let i = 1; i <= 20; i++) {
        let ingredient = d.meals[0][`strIngredient${i}`].trim();
        if (ingredient) this.meal.strIngredients.push(ingredient);
      }
      this.isLoading = false;
    });
  }

  save() {
    this.userService.saveFavorite(this.meal);
    this.getFavorites();
  }
}
