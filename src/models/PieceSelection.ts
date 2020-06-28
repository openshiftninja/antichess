import { PieceType } from '../enums/PieceType';
import { Square } from './Square';

export class PieceSelection {
  public readonly pieceType: PieceType;
  public readonly square: Square;

  public constructor(pieceType: PieceType, square: Square) {
    this.pieceType = pieceType;
    this.square = square;
  }
}