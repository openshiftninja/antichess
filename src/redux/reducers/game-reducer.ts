import { GameState } from '../../models/GameState';
import { ReduxState } from '../../models/ReduxState';
import { Action } from '../../models/Action';
import { ActionName } from '../../enums/ActionName';
import { PieceSelectedAction } from '../../models/Actions';

const gameReducer = (state: GameState = new GameState(), action: Action) => {
  switch (action.type) {
    case ActionName.RESET_GAME:
      return GameState.resetGame();
    case ActionName.SWITCH_PLAYER:
      return state.switchPlayer();
    case ActionName.PIECE_SELECTED:
      return state.pieceSelected((action as PieceSelectedAction).square);
    case ActionName.CLEAR_PIECE_SELECTED:
      return state.clearPieceSelected();
    default:
      return state;
  }
};

export default gameReducer;