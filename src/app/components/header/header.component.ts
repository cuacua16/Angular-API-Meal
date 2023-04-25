import { Component } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  favorites: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getFavorites();
  }
  getFavorites() {
    this.userService
      .getFavorites()
      .forEach((e) => this.favorites.push(e.strMeal));
  }

  getFavorite() {}
}
