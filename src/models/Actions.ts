import { Action } from './Action';
import { Square } from './Square';
import { PieceType } from '../enums/PieceType';

export class ClearMoveSelectedAction implements Action { }

export class HighlightLegalMovesAction implements Action {
  public readonly moves: Square[];
  public constructor(moves: Square[]) {
    this.moves = moves;
  }
}

export class MovePieceAction implements Action {
  public readonly fromSquare: Square;
  public readonly toSquare: Square;
  public readonly pieceType: PieceType;

  public constructor(fromSquare: Square, toSquare: Square, pieceType: PieceType) {
    this.fromSquare = fromSquare;
    this.toSquare = toSquare;
    this.pieceType = pieceType;
  }
}

export class MoveSelectedAction implements Action {
  public readonly square: Square;
  public constructor(square: Square) {
    this.square = square;
  }
}

export class ResetGameAction implements Action { }

export class ResetHighlightsAction implements Action { }

export class SwitchPlayerAction implements Action { }
