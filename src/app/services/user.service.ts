import { Injectable } from '@angular/core';
import { Meal } from '../interfaces/meal';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getFavorites(): Meal[] {
    if (localStorage.getItem('favorites')) {
      return JSON.parse(localStorage.getItem('favorites')!);
    }
    return [];
  }

  saveFavorite(meal: Meal) {
    let favorites: Meal[] = [];
    if (this.getFavorites()) favorites = this.getFavorites();
    if (!favorites.some((e) => e.idMeal === meal.idMeal)) favorites.push(meal);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  removeFavorite(meal: Meal) {
    let favorites: Meal[] = [];
    if (this.getFavorites()) favorites = this.getFavorites();
    favorites = favorites.filter((e) => e.idMeal !== meal.idMeal);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}
