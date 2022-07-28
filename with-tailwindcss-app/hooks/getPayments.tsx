import useSWR, {useSWRConfig} from "swr";
import {apiUrl} from "@/config";

import {fetcher, fetcherError, StatusError} from "../helpers/fetcher";
import {
    CommonResponse,
    CommonResponseError
} from "../../../nextjs_chieftool_panel2/nextjs_chieftool_panel/with-tailwindcss-app/types/basicTypes";
import * as React from "react";
import {logout} from "../helpers/AuthHelper";
import {useRouter} from "next/router";
import {wrapperUseSWR} from "../helpers/urlWrapper";

export interface Payment {
    id: number,
    user_id: number,
    amount: number,
    reason_id: number,
    time_at: number,
    status: number,
    transaction_id: string,
}

export const getPayments = () => {
    const {cache} = useSWRConfig()
    const router = useRouter()
    const {
        data,
        error
    } = wrapperUseSWR<CommonResponse<Payment[]>, CommonResponseError>(`${apiUrl}/api/me/payment`, fetcherError)

    return {
        payments: data?.data,
        isLoading: !error && !data,
        isError: error
    }
}
