import cloneDeep from 'lodash.clonedeep';

import {
  GET_SUB_SECTIONS_PENDING,
  GET_SUB_SECTIONS_SUCCESS,
  REMOVE_SUB_SECTIONS_SUCCESS,
} from '../../actions/actionTypes';

const initialStore = {
  status: 0,
  payload: [],
};

export const subSections = (store = initialStore, action) => {
  switch (action.type) {
    case GET_SUB_SECTIONS_SUCCESS: {
      return ({
        status: 2,
        payload: [...store.payload, action.payload],
      });
    }
    case GET_SUB_SECTIONS_PENDING: {
      return ({
        status: 1,
        payload: [...store.payload],
      });
    }
    case REMOVE_SUB_SECTIONS_SUCCESS: {
      const subSections = cloneDeep(store.payload);

      action.payload.forEach((id) => {
        const index = subSections.findIndex(item => item[id]);

        console.log('Log ::: index :::', index);
        if (index >= 0) {
          subSections.splice(index, 1);
        }
      });

      return ({
        status: 2,
        payload: cloneDeep(subSections),
      });
    }
    default:
      return store;
  }
};
