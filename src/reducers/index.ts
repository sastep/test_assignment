import { combineReducers } from 'redux';

import { rootSections } from './root-sections';
import { subSections } from './sub-sections';

export default combineReducers({
  rootSections,
  subSections,
});
