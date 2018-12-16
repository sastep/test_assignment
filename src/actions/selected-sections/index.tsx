import { Dispatch } from 'redux';

import {
  ADD_SELECTED_SECTIONS,
  REMOVE_SELECTED_SECTIONS,
} from '../actionTypes';

export const addSelectedSectionID = (id: string) => (dispatch: Dispatch<IActionType<string>>): void => {
  dispatch({
    type: ADD_SELECTED_SECTIONS,
    payload: id,
  });
};

export const removeSectionID = (id: string) => (dispatch: Dispatch<IActionType<string>>): void => {
  dispatch({
    type: REMOVE_SELECTED_SECTIONS,
    payload: id,
  });
};
