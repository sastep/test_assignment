import { Dispatch } from 'redux';

import {
  GET_ROOT_SECTIONS_SUCCESS,
  GET_ROOT_SECTIONS_PENDING,
} from '../actionTypes';

import { getRootSections } from '../../../api/api';
import { ISectionData } from '../../../api/types';

export const fetchRootSections = () => (dispatch: Dispatch): void => {
  dispatch({
    type: GET_ROOT_SECTIONS_PENDING,
  });

  getRootSections()
    .then((rootSections: ISectionData) => {
      dispatch({
        type: GET_ROOT_SECTIONS_SUCCESS,
        payload: rootSections,
      });
    });
};
