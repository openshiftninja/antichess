import { Square } from './Square';

export class Board {
  public readonly squares: Square[];
  public constructor() {
    this.squares = [];
    for (let row = 0; row < 8; row += 1) {
      for (let col = 0; col < 8; col += 1) {
        this.squares.push(new Square(row, col));
      }
    }
  }
}