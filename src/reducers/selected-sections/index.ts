import {
  ADD_SELECTED_SECTIONS,
  REMOVE_SELECTED_SECTIONS,
} from '../../actions/actionTypes';

export const selectedSections = (store: string[] = [], action: IActionType<string>): string[] => {
  switch (action.type) {
    case ADD_SELECTED_SECTIONS: {
      return ([ ...store, action.payload ]);
    }
    case REMOVE_SELECTED_SECTIONS: {
      const selectedSections: string[] = [ ...store ];
      const index: number = selectedSections.findIndex((id: string): boolean => id === action.payload);

      if (index >= 0) {
        selectedSections.splice(index, 1);
      }

      return (selectedSections);
    }
    default:
      return store;
  }
};
