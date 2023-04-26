import { Component, EventEmitter, Input, Output } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input('favorites') favorites: string[] = [];
  @Output() getFavorite = new EventEmitter();

  constructor() {}

  get(strMeal: string) {
    this.getFavorite.emit(strMeal);
  }
}
