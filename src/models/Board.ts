import { PieceType } from '../enums/PieceType';

const defaultBoardSetup: PieceType[][] = [
  [
    PieceType.BLACK_ROOK,
    PieceType.BLACK_KNIGHT,
    PieceType.BLACK_BISHOP,
    PieceType.BLACK_QUEEN,
    PieceType.BLACK_KING,
    PieceType.BLACK_BISHOP,
    PieceType.BLACK_KNIGHT,
    PieceType.BLACK_ROOK,
  ],
  [
    PieceType.BLACK_PAWN,
    PieceType.BLACK_PAWN,
    PieceType.BLACK_PAWN,
    PieceType.BLACK_PAWN,
    PieceType.BLACK_PAWN,
    PieceType.BLACK_PAWN,
    PieceType.BLACK_PAWN,
    PieceType.BLACK_PAWN,
  ],
  [
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
  ],
  [
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
  ],
  [
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
  ],
  [
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
    PieceType.EMPTY_SQUARE,
  ],
  [
    PieceType.WHITE_PAWN,
    PieceType.WHITE_PAWN,
    PieceType.WHITE_PAWN,
    PieceType.WHITE_PAWN,
    PieceType.WHITE_PAWN,
    PieceType.WHITE_PAWN,
    PieceType.WHITE_PAWN,
    PieceType.WHITE_PAWN,
  ],
  [
    PieceType.WHITE_ROOK,
    PieceType.WHITE_KNIGHT,
    PieceType.WHITE_BISHOP,
    PieceType.WHITE_QUEEN,
    PieceType.WHITE_KING,
    PieceType.WHITE_BISHOP,
    PieceType.WHITE_KNIGHT,
    PieceType.WHITE_ROOK,
  ],
];

export class Board {
  public readonly pieceTypes: PieceType[][];

  public constructor() {
    this.pieceTypes = defaultBoardSetup;
  }
}
