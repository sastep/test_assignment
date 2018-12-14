import { Dispatch } from 'redux';

import {
  GET_SUB_SECTIONS_SUCCESS,
  GET_SUB_SECTIONS_PENDING,
  REMOVE_SUB_SECTIONS_SUCCESS,
} from '../actionTypes';

import { getSubSections } from '../../../api/api';

export const fetchSubSections = (id: string) => (dispatch: Dispatch): void => {
  dispatch({
    type: GET_SUB_SECTIONS_PENDING,
  });

  getSubSections(id)
    .then((subSections) => {
      dispatch({
        type: GET_SUB_SECTIONS_SUCCESS,
        payload: {
          [id]: subSections,
        },
      });
    });
};

export const removeSubSections = (ids: string[]) => (dispatch: Dispatch): void => {
  dispatch({
    type: REMOVE_SUB_SECTIONS_SUCCESS,
    payload: ids,
  });
};
