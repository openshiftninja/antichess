export enum PieceType {
  WHITE_PAWN,
  WHITE_ROOK,
  WHITE_KNIGHT,
  WHITE_BISHOP,
  WHITE_QUEEN,
  WHITE_KING,
  BLACK_PAWN,
  BLACK_ROOK,
  BLACK_KNIGHT,
  BLACK_BISHOP,
  BLACK_QUEEN,
  BLACK_KING,
  EMPTY_SQUARE,
}

export const isWhite = (pieceType: PieceType) => {
  if (pieceType === PieceType.EMPTY_SQUARE) {
    throw Error("check for white on empty square!");
  }
  return pieceType === PieceType.WHITE_PAWN ||
    pieceType === PieceType.WHITE_ROOK ||
    pieceType === PieceType.WHITE_KNIGHT ||
    pieceType === PieceType.WHITE_BISHOP ||
    pieceType === PieceType.WHITE_QUEEN ||
    pieceType === PieceType.WHITE_KING;
};