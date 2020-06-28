import { MovePieceAction } from '../../models/actions/MovePieceAction';
import { PieceType } from '../../enums/PieceType';
import { Square } from '../../models/Square';

export const movePiece = (fromSquare: Square, toSquare: Square, pieceType: PieceType) =>
  new MovePieceAction(fromSquare, toSquare, pieceType);