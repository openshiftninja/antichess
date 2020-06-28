import { SquareName } from '../enums/SquareName';
import { PieceType } from '../enums/PieceType';

export class Square {
  public readonly row: number;
  public readonly col: number;

  public constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
  }
}