import {ErrorBackend} from "@/types/basicTypes";

export interface Auth {
    token: string | null
}


export interface TokenState {
    token: Auth
    loading: boolean;
    error: null | ErrorBackend[] | ErrorBackend | undefined | string;
}

export enum TokenActionTypes {
    FETCH_TOKEN = 'FETCH_TOKEN',
    FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS',
    FETCH_TOKEN_ERROR = 'FETCH_TOKEN_ERROR',
}

interface FetchTokenAction {
    type: TokenActionTypes.FETCH_TOKEN;
}

interface FetchTokenSuccessAction {
    type: TokenActionTypes.FETCH_TOKEN_SUCCESS;
    payload: Auth
}

interface FetchTokenErrorAction {
    type: TokenActionTypes.FETCH_TOKEN_ERROR;
    payload: string | undefined;
}

export type TokenAction = FetchTokenAction | FetchTokenSuccessAction | FetchTokenErrorAction