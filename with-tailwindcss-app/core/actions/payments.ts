import {Dispatch} from "redux";
import {TokenAction, TokenActionTypes} from "@/types/auth";
import axios, {AxiosError, AxiosResponse} from "axios";
import {wrapUrl} from "@/helpers/urlWrapper";
import {apiUrl} from "@/config";
import {authHeader, setAuthToken} from "@/helpers/AuthHelper";
import {CommonResponse, CommonResponseError} from "@/types/basicTypes";

export enum ReasonPayment {
    MEMOSYNC = 1,
    COPYER = 2,
    FILL_BALANCE = 3,
    PROMOCODE = 4,
    CREDIT = 5
}

export interface NewPaymentRequest {
    amount: number,
    reason: ReasonPayment
}

export const addPayment = (amount: number, reason: ReasonPayment) => {

    return axios.post(
        wrapUrl(`${apiUrl}/api/me/payment`),
        JSON.stringify({amount, reason}),
        {
            headers: {
                ...authHeader(),
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }
    ).then(function (response: AxiosResponse<CommonResponse<any>>) {
        return response.data.success
    }).catch((e: AxiosError<CommonResponseError>) => {
        return e.response?.data.success
    })
}
