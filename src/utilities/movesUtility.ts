import { isWhite, PieceType } from '../enums/PieceType';

export const isEnemyPiece = (pieceType: PieceType, isWhiteMove: boolean) => {
  const isWhitePiece = isWhite(pieceType);
  return (isWhitePiece && !isWhiteMove) || (!isWhitePiece && isWhiteMove);
};
