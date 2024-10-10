import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  imports:[CommonModule]
})
export class StarRatingComponent {
  @Input() rating: number = 0; // Avaliação inicial
  @Input() starsCount: number = 5; // Número total de estrelas
  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  stars: number[] = [];

  constructor() {
    this.stars = Array(this.starsCount).fill(0); // Array com o número de estrelas
  }

  rate(star: number) {
    this.rating = star; // Define a nova avaliação
    this.ratingChange.emit(this.rating); // Emite a nova avaliação para o pai, se necessário
  }
}
