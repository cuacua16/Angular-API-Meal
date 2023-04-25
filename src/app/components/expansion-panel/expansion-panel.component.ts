import { Component, Input, Output, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
})
export class ExpansionPanelComponent {
  @Input('list') list: string[] = [];
  @Input('type') type: string = '';
  panelOpenState = false;

  constructor(private userService: UserService) {}

  getFavorite() {}
  removeFavorite(strMeal: string) {
    let item = this.userService
      .getFavorites()
      .filter((e) => e.strMeal === strMeal)[0];
    this.userService.removeFavorite(item);
    this.list = this.list.filter((e) => e !== strMeal);
  }
}
