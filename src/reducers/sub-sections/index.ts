import cloneDeep from 'lodash.clonedeep';

import {
  GET_SUB_SECTIONS_PENDING,
  GET_SUB_SECTIONS_SUCCESS,
  REMOVE_SUB_SECTIONS_SUCCESS,
} from '../../actions/actionTypes';

const initialStore: IAPIResponse<ISectionData> = {
  status: 0,
  payload: {},
};

export const subSections = (
  store: IAPIResponse<ISectionData> = initialStore,
  action: IActionType<ISectionData | string>,
): IAPIResponse<ISectionData> => {
  switch (action.type) {
    case GET_SUB_SECTIONS_SUCCESS: {
      return ({
        status: 2,
        payload: {
          ...store.payload,
          ...(typeof action.payload === 'object' && action.payload),
        },
      });
    }
    case GET_SUB_SECTIONS_PENDING: {
      return ({
        status: 1,
        payload: { ...store.payload },
      });
    }
    case REMOVE_SUB_SECTIONS_SUCCESS: {
      const subSections: ISectionData = {};

      Object.keys(store.payload).forEach((key: string) => {
        if (key !== action.payload) {
          subSections[ key ] = cloneDeep(store.payload[ key ]);
        }
      });

      return ({
        status: store.status,
        payload: subSections,
      });
    }
    default:
      return store;
  }
};
