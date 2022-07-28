import {authExists} from "../helpers/AuthHelper";

//можно использовать только после загрузки браузером компонента localstorage
//null - если localstorage не загружен, false - no token, true - token exists
export const useUser = () => {
    if (typeof localStorage === 'undefined') {
        return false
    }

    const authData = authExists();
    if (!authData) {
        return false
    }

    //TODO
    //check cache as 5 min in localstorage
    //if less than 5 min >= freely get new page
    //else check token valid on page change
    return true
}