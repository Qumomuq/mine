export function authHeader() {
    // return authorization header with jwt token
    let user = localStorage.getItem('token');

    if (user) {
        return {'Authorization': 'Bearer ' + user};
    } else {
        return {'Authorization': ''};
    }
}

export function authExists() {
    return localStorage.getItem('token') !== null
}

// export function regExists() {
//     return data.prefixes
// }

export function getAuthToken() {
    return localStorage.getItem('token');
}

export function setAuthToken(token: string | null) {
    if (typeof token === "string") {
        localStorage.setItem('token', token)
    }
}

export function logout() {
    return localStorage.removeItem('token')
}