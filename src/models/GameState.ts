import { Square } from './Square';

export class GameState {
  public isWhiteMove: boolean;
  public moveSelectedSquare: Square | null;
  public gameWasReset: boolean;
  public constructor(
    isWhiteMove: boolean = true,
    moveSelectedSquare: Square | null = null,
    gameWasReset: boolean = false,
  ) {
    this.isWhiteMove = isWhiteMove;
    this.moveSelectedSquare = moveSelectedSquare;
    this.gameWasReset = gameWasReset;
  }

  public static resetGame = () : GameState => {
    return new GameState(true, null, true);
  };

  public switchPlayer = () => {
    return new GameState(!this.isWhiteMove, null, false);
  };

  public pieceSelected = (square: Square) => {
    return new GameState(this.isWhiteMove, square, false);
  };

  public clearPieceSelected = () => {
    return new GameState(this.isWhiteMove, null, false);
  };
}
