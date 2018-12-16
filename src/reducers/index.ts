import { combineReducers } from 'redux';

import { selectedSections } from './selected-sections';
import { rootSections } from './root-sections';
import { subSections } from './sub-sections';

export default combineReducers({
  selectedSections,
  rootSections,
  subSections,
});
