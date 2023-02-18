import { Component } from '@angular/core';

export enum CardTypeEnum{
  Post = 1,
  Buy = 2
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cardSelected!: CardTypeEnum;
  CardTypeEnum = CardTypeEnum;

  handleSlectedCard(event: CardTypeEnum){
    this.cardSelected = event;
  }
}
