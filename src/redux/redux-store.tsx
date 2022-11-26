import {combineReducers, createStore} from 'redux';
import ProfileReducer from './profile-Reducer';
import DialogsReducer from './dialogs-Reducer';
import UsersReducer from './users-Reducer';

// export type  storeType = typeof store;

// export type RootReducerType = typeof reducers;

// export type StoreType = ReturnType<RootReducerType>

export type StateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer,
    userPage:UsersReducer
});

let store = createStore(reducers);


export default store;