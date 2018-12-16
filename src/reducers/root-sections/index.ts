import {
  GET_ROOT_SECTIONS_SUCCESS,
  GET_ROOT_SECTIONS_PENDING,
} from '../../actions/actionTypes';

const initialStore: IAPIResponse<ISectionData> = {
  status: 0,
  payload: {},
};

export const rootSections = (
  store: IAPIResponse<ISectionData> = initialStore,
  action: IActionType<ISectionData>,
): IAPIResponse<ISectionData> => {
  switch (action.type) {
    case GET_ROOT_SECTIONS_SUCCESS: {
      return ({
        status: 2,
        payload: action.payload,
      });
    }
    case GET_ROOT_SECTIONS_PENDING: {
      return ({
        status: 1,
      });
    }
    default:
      return store;
  }
};
