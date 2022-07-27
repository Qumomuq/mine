import {isDebug} from "@/config";
import useSWR, {SWRResponse} from "swr";
import {useRouter} from "next/router";
import {StatusError} from "./fetcher";
import {logout} from "./AuthHelper";

export const wrapUrl = (url: string) => {
    if (isDebug) {
        return url + '?XDEBUG_SESSION=XDEBUG_ECLIPSE'
    }
    return url
}

export const wrapperUseSWR = <T, Y>(key: string, fetcher: any) => {
    const router = useRouter()
    const response: SWRResponse<T, Y> = useSWR<T, Y>(key, fetcher,
        {
            onError() {
                if (response.error instanceof StatusError) {
                    if (response.error.code === 401) {
                        logout()
                        router.push("/login")
                    }
                }
            },
        }
    )
    return response
}