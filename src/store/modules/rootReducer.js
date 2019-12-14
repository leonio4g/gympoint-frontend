import { combineReducers } from 'redux';

import auth from './auth/reducer';
import students from './students/reducer';
import plans from './Plans/reducer';
import enrollment from './enrollment/reducer';

export default combineReducers({
  auth,
  students,
  plans,
  enrollment,
});
