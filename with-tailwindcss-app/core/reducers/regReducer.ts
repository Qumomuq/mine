import {RegAction, RegActionTypes, RegState} from "@/types/reg";


const initialState: RegState = {
    preuser: {preuser: {success: null, data: null}},
    loading: false,
    error: null
}

export const RegReducer = (state = initialState, action: RegAction): RegState => {
    switch (action.type) {
        case RegActionTypes.CREATE_REG:
            return {loading: true, error: null, preuser: {preuser: {success: false, data: null}}}
        case RegActionTypes.CREATE_REG_SUCCESS:
            return {loading: false, error: null, preuser: action.payload,}
        case RegActionTypes.CREATE_REG_ERROR:
            return {loading: false, error: action.payload, preuser: {preuser: {success: false, data: null}}}
        default:
            return state
    }
}