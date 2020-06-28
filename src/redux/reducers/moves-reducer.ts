import { MovesList } from '../../models/MovesList';
import { Action } from '../../models/Action';
import { ActionName } from '../../enums/ActionName';
import { MovePieceAction } from '../../models/Actions';

const movesReducer = (state: MovesList = new MovesList(), action: Action) => {
  switch (action.type) {
    case ActionName.RESET_GAME:
      return new MovesList();
    case ActionName.MOVE_PIECE:
      return state.addMove((action as MovePieceAction))
  }
}