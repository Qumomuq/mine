import {Dispatch} from "redux";
import axios, {AxiosError, AxiosResponse} from "axios";
import {wrapUrl} from "@/helpers/urlWrapper";
import {apiUrl} from "@/config";
import {ErrorBackend} from "@/types/basicTypes";
import {RegAction, RegActionTypes} from "@/types/reg";

interface RegResponse {
    preuser: { preuser: { success: any, data: any } }
}

interface RegResponseError {
    success: boolean,
    data: ErrorBackend[]
}

export const getRegUser = (email: string, password: string) => {
    return async (dispatch: Dispatch<RegAction>) => {
        dispatch({type: RegActionTypes.CREATE_REG, ts: Date.now()});
        const data = await axios.post(
            wrapUrl(`${apiUrl}/api/user/register`),
            JSON.stringify({email, password}),
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        ).then(function (response: AxiosResponse<RegResponse>) {
            return dispatch({
                type: RegActionTypes.CREATE_REG_SUCCESS,
                payload: response.data.preuser,
                ts: Date.now()
            })
        }).catch((e: AxiosError<RegResponseError>) => {
            return dispatch({
                type: RegActionTypes.CREATE_REG_ERROR,
                payload: e.toString(),
                ts: Date.now()
            })
        })
        return data
    }
}
