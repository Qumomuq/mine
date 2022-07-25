import {ErrorBackend} from "@/types/basicTypes";

export interface Reg {
    preuser: { success: any, data: any }
}


export interface RegState {
    preuser: Reg
    loading: boolean;
    error: null | ErrorBackend[] | ErrorBackend | undefined | string;
}

export enum RegActionTypes {
    CREATE_REG = 'CREATE_REG',
    CREATE_REG_SUCCESS = 'CREATE_REG_SUCCESS',
    CREATE_REG_ERROR = 'CREATE_REG_ERROR',
}

interface CreateRegAction {
    type: RegActionTypes.CREATE_REG;
}

interface CreateRegSuccessAction {
    type: RegActionTypes.CREATE_REG_SUCCESS;
    payload: Reg;
}

interface CreateRegErrorAction {
    type: RegActionTypes.CREATE_REG_ERROR;
    payload: any;
}

export type RegAction = CreateRegAction | CreateRegSuccessAction | CreateRegErrorAction