import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Card {
  symbol: string;
  flipped: boolean;
  matched: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Memorama';
  
  cards: Card[] = [];
  flippedCards: Card[] = [];
  attempts = 0;
  gameOver = false;

  symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];

  ngOnInit() {
    this.resetGame();
  }

  resetGame() {
    this.attempts = 0;
    this.gameOver = false;
    this.cards = [];
    this.symbols.forEach(symbol => {
      this.cards.push({ symbol, flipped: false, matched: false });
      this.cards.push({ symbol, flipped: false, matched: false });
    });
    this.shuffleCards();
  }

  shuffleCards() {
    this.cards.sort(() => Math.random() - 0.5);
  }

  flipCard(card: Card) {
    if (card.flipped || card.matched || this.flippedCards.length === 2) {
      return;
    }

    card.flipped = true;
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.attempts++;
      this.checkMatch();
    }
  }

  checkMatch() {
    const [firstCard, secondCard] = this.flippedCards;
    if (firstCard.symbol === secondCard.symbol) {
      firstCard.matched = true;
      secondCard.matched = true;
      this.flippedCards = [];
      if (this.cards.every(card => card.matched)) {
        this.gameOver = true;
      }
    } else {
      setTimeout(() => {
        firstCard.flipped = false;
        secondCard.flipped = false;
        this.flippedCards = [];
      }, 1000);
    }
  }
}