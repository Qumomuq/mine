import axios from "axios";
import {wrapUrl} from "./urlWrapper";
import {authHeader} from "./AuthHelper";

export const fetcher = (url: string) => {
    const response = axios.get(wrapUrl(url),
        {
            headers: {
                ...authHeader(),
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }
    ).then(res => {
        return res.data
    })
    return response
}

export const fetcherError = (url: string) => {
    const response = axios.get(wrapUrl(url),
        {
            headers: {
                ...authHeader(),
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }
    ).then(res => {
        return res.data
    }).catch(e => {
        throw new StatusError(e.response.status, e.response.data)
    })
    return response
}

export class StatusError extends Error {
    constructor(public code: number, message?: string) {
        super(message)
    }
}
