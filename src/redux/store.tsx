import { combineReducers, createStore } from 'redux';
import userEventsReducer from './user-Events/user-events.reducer';
import recorderReducer from '../redux/recoder/recoder.reducer';

const rootReducer = combineReducers({
  userEvents: userEventsReducer,
  recorder: recorderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
