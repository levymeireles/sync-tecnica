import { Component } from '@angular/core';
import {
  PoAccordionModule,
  PoButtonModule,
  PoImageModule,
  PoPageModule,
  PoPageSlideModule,
} from '@po-ui/ng-components';
import { StarRatingComponent } from '../../components/star-rating/star-rating.component';

@Component({
  selector: 'app-poc',
  standalone: true,
  imports: [
    PoPageModule,
    PoAccordionModule,
    PoButtonModule,
    PoPageSlideModule,
    PoImageModule,
    StarRatingComponent,
  ],
  templateUrl: './poc.component.html',
  styleUrl: './poc.component.scss',
})
export class PocComponent {
  public userRating: number = 3; // Avaliação inicial do usuário

  onRatingChange(newRating: number) {
    this.userRating = newRating;
    console.log('Nova avaliação:', newRating);
  }
}
