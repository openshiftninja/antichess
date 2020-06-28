import { Action } from './Action';
import { Square } from './Square';
import { PieceType } from '../enums/PieceType';
import { ActionName } from '../enums/ActionName';

export class ClearPieceSelectedAction implements Action {
  public readonly type: ActionName = ActionName.CLEAR_PIECE_SELECTED;
}

export class HighlightLegalMovesAction implements Action {
  public readonly type: ActionName = ActionName.HIGHLIGHT_LEGAL_MOVES;
  public readonly moves: Square[];
  public constructor(moves: Square[]) {
    this.moves = moves;
  }
}

export class MovePieceAction implements Action {
  public readonly type: ActionName = ActionName.MOVE_PIECE;
  public readonly pieceType: PieceType;
  public readonly fromSquare: Square;
  public readonly toSquare: Square;

  public constructor(
    pieceType: PieceType,
    fromSquare: Square,
    toSquare: Square,
  ) {
    this.pieceType = pieceType;
    this.fromSquare = fromSquare;
    this.toSquare = toSquare;
  }
}

export class PieceSelectedAction implements Action {
  public readonly type: ActionName = ActionName.PIECE_SELECTED;
  public readonly square: Square;
  public constructor(square: Square) {
    this.square = square;
  }
}

export class ResetGameAction implements Action {
  public readonly type: ActionName = ActionName.RESET_GAME;
}

export class ResetHighlightsAction implements Action {
  public readonly type: ActionName = ActionName.RESET_HIGHLIGHTS;
}

export class SwitchPlayerAction implements Action {
  public readonly type: ActionName = ActionName.SWITCH_PLAYER;
}
