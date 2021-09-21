import { createStore, combineReducers, Reducer, Action } from "redux";
import { IUser } from "../schame/user";


type UserAction = Action<string> & { data?: IUser }

const userReducer: Reducer<any, UserAction> = (state = {}, actions) => {
  console.log('userReducer', state, actions);

  switch (actions.type) {
    case 'USER_SET':
      return { ...state, ...actions.data };
    case 'USER_UPDATE':
      return state;
    case 'USER_REMOVE':
      return state;
    default:
      return state;
  }
}

const reducer: Reducer<any, Action<any>> = (state) => state;
const reducers = combineReducers({
  user: userReducer,
});


const store = createStore(reducers);

export default store;