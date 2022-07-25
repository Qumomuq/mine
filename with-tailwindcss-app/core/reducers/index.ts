import {combineReducers} from "redux";
import {AuthReducer} from "./authReducer"
import {RegReducer} from "./regReducer";


export const rootReducer = combineReducers({
    reg: RegReducer,
    auth: AuthReducer,
})

export type RootState = ReturnType<typeof rootReducer>