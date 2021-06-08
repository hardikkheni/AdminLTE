import { combineReducers, compose, createStore } from 'redux';
import themeReducer from './reducers/theme';
import authReducer from './reducers/auth';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const reducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
});

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
