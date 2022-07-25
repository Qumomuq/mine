import {TokenAction, TokenActionTypes, TokenState} from "@/types/auth";

const initialState: TokenState = {
    token: {token: null},
    loading: false,
    error: null
}

export const AuthReducer = (state = initialState, action: TokenAction): TokenState => {
    switch (action.type) {
        case TokenActionTypes.FETCH_TOKEN:
            return {loading: true, error: null, token: {token: null}}
        case TokenActionTypes.FETCH_TOKEN_SUCCESS:
            return {loading: false, error: null, token: action.payload}
        case TokenActionTypes.FETCH_TOKEN_ERROR:
            return {loading: false, error: action.payload, token: {token: null}}
        default:
            return state
    }
}