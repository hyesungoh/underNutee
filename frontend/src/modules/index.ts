import { combineReducers } from "redux";
import user from "modules/user/user";

const rootReducer = combineReducers({
    user,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
