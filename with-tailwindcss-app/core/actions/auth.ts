import {Dispatch} from "redux";
import axios, {AxiosError, AxiosResponse} from "axios";
import {wrapUrl} from "@/helpers/urlWrapper";
import {apiUrl} from "@/config";
import {setAuthToken} from "@/helpers/AuthHelper";
import {TokenAction, TokenActionTypes} from "@/types/auth";
import {CommonResponseError} from "@/types/basicTypes";

interface AuthResponse {
    token: string
}

export const authUser = (username: string, password: string) => {
    return axios.post(
        wrapUrl(`${apiUrl}/api/user/auth`),
        JSON.stringify({username, password}),
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }
    ).then(function (response: AxiosResponse<AuthResponse>) {
        setAuthToken(response.data.token)
        return true
    }).catch((e: AxiosError<CommonResponseError>) => {
        return false
    })
}