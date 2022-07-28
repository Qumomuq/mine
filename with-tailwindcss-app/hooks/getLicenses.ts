import {apiUrl} from "@/config";
import {fetcher, fetcherError, StatusError} from "../helpers/fetcher";
import {License} from "../../../nextjs_chieftool_panel2/nextjs_chieftool_panel/with-tailwindcss-app/types/licenses";
import {
    CommonResponse,
    CommonResponseError,
    ErrorBackend
} from "../../../nextjs_chieftool_panel2/nextjs_chieftool_panel/with-tailwindcss-app/types/basicTypes";
import {wrapperUseSWR} from "../helpers/urlWrapper";
import {useRouter} from "next/router";

export const getLicenses = () => {

    const router = useRouter()
    const {
        data,
        error
    } = wrapperUseSWR<CommonResponse<License[]>, CommonResponseError>(`${apiUrl}/api/me/license/memosync`, fetcherError)

    return {
        licenses: data?.data,
        isLoading: !error && !data,
        isError: error
    }
}
