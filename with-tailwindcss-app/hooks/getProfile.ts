import useSWR from "swr";
import {
    CommonResponse,
    CommonResponseError
} from "../../../nextjs_chieftool_panel2/nextjs_chieftool_panel/with-tailwindcss-app/types/basicTypes";
import {Profile} from "../../../nextjs_chieftool_panel2/nextjs_chieftool_panel/with-tailwindcss-app/types/profile";
import {apiUrl} from "@/config";
import {fetcher} from "../helpers/fetcher";

export const getProfile = () => {

    const {data, error} = useSWR<CommonResponse<Profile>, CommonResponseError>(`${apiUrl}/api/me`, fetcher)

    return {
        user: data?.data,
        isLoading: !error && !data,
        isError: error
    }
}