import { Dispatch } from 'redux';

import {
  GET_SUB_SECTIONS_SUCCESS,
  GET_SUB_SECTIONS_PENDING,
  REMOVE_SUB_SECTIONS_SUCCESS,
} from '../actionTypes';

import { getSubSections } from '../../../api/api';

export const fetchSubSections = (id: string) => (dispatch: Dispatch<IActionType<IAPIResponse<ISectionData>>>): void => {
  dispatch({
    type: GET_SUB_SECTIONS_PENDING,
  });

  getSubSections(id)
    .then((subSections: {[key: string]: ISectionData}) => {
      dispatch({
        type: GET_SUB_SECTIONS_SUCCESS,
        payload: {
          [id]: subSections,
        },
      });
    });
};

export const removeSubSections = (id: string) => (dispatch: Dispatch<IActionType<string>>): void => {
  dispatch({
    type: REMOVE_SUB_SECTIONS_SUCCESS,
    payload: id,
  });
};
