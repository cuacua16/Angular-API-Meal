import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  constructor(private http: HttpClient) {}

  getRandomMeal() {
    return this.http.get('https://www.themealdb.com/api/json/v1/1/random.php');
  }

  getMealByID(id: string) {
    return this.http.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  }
}
