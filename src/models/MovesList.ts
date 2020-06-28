import { MovePieceAction } from './Actions';
import { isWhite } from '../enums/PieceType';
import { Square } from './Square';

const rowMap: Map<number, string> = new Map<number, string>([
  [0, '8'],
  [1, '7'],
  [2, '6'],
  [3, '5'],
  [4, '4'],
  [5, '3'],
  [6, '2'],
  [7, '1'],
]);

const colMap: Map<number, string> = new Map<number, string>([
  [0, 'A'],
  [1, 'B'],
  [2, 'C'],
  [3, 'D'],
  [4, 'E'],
  [5, 'F'],
  [6, 'G'],
  [7, 'H'],
]);

export class MovesList {
  public readonly moves: String[];
  public constructor(moves: String[] = []) {
    this.moves = moves;
  }

  public addMove = (action: MovePieceAction) => {
    const movesList = new MovesList(this.moves);
    movesList.moves.push(this.getMovesDescription(action));
    return movesList;
  };

  private getMovesDescription = (action: MovePieceAction) => {
    return `${isWhite(action.pieceType) ? 'WHITE' : 'BLACK'}: ${this.toSquareName(action.fromSquare)} - ${this.toSquareName(action.toSquare)}`;
  };

  private toSquareName = (square: Square) => {
    return `${colMap.get(square.col)}${rowMap.get(square.row)}`;
  };
}