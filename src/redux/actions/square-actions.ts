import { ClearPieceSelectedAction, HighlightLegalMovesAction, MovePieceAction, ResetHighlightsAction, SwitchPlayerAction } from '../../models/Actions';
import { GameState } from '../../models/GameState';
import { PieceType } from '../../enums/PieceType';
import { Square } from '../../models/Square';
import { Board } from '../../models/Board';
import { setMoveSelectedStartSquare } from './game-actions';
import { DispatchType } from '../../models/DispatchType';
import { isEnemyPiece } from '../../utilities/movesUtility';

export const resetHighlights = () => new ResetHighlightsAction();

export const highlightLegalMoves = (pieceType: PieceType, square: Square, game: GameState, board: Board, ) => ((dispatch: DispatchType) => {
  if (!isEnemyPiece(pieceType, game.isWhiteMove)) {
    dispatch(setMoveSelectedStartSquare(square));
    dispatch(new HighlightLegalMovesAction(getLegalMoves(square, board)))
  }
});

export const movePieceIfLegal = (pieceType: PieceType, fromSquare: Square, toSquare: Square, game: GameState, board: Board, ) => ((dispatch: DispatchType) => {
 if (isLegalMove(pieceType, fromSquare, toSquare, board)) {
   dispatch(new MovePieceAction(pieceType, fromSquare, toSquare));
   dispatch(new SwitchPlayerAction());
 }
 dispatch(new ClearPieceSelectedAction());
});

export const squareClicked = (square: Square, game: GameState, board: Board) => ((dispatch: DispatchType) => {
  const pieceType: PieceType = board.pieceTypes[square.row][square.col];
  if (game.moveSelectedSquare && (pieceType === PieceType.EMPTY_SQUARE || isEnemyPiece(pieceType, game.isWhiteMove))) {
    dispatch(movePieceIfLegal(pieceType, game.moveSelectedSquare, square, game, board));
    dispatch(new ResetHighlightsAction());
  } else if (pieceType !== PieceType.EMPTY_SQUARE) {
    dispatch(new ResetHighlightsAction());
    dispatch(highlightLegalMoves(pieceType, square, game, board));
  } else {
    dispatch(new ResetHighlightsAction());
  }
});
