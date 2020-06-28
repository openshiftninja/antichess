import { SwitchPlayerAction } from '../../models/actions/SwitchPlayerAction';
import { MoveSelectedAction } from '../../models/actions/MoveSelectedAction';
import { Square } from '../../models/Square';
import { ClearMoveSelectedAction } from '../../models/actions/ClearMoveSelectedAction';
import { ResetGameAction } from '../../models/actions/ResetGameAction';

export const switchPlayer = () => new SwitchPlayerAction();

export const setMoveSelectedStartSquare = (square: Square) =>
  new MoveSelectedAction(square);

export const clearMoveSelectedStartSquare = () => new ClearMoveSelectedAction();

export const resetGame = () => new ResetGameAction();