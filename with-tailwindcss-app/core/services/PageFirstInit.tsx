import {createContext, useState} from "react";
import {Popup, PopupContextType} from "@/types/popup";

export const PopupContext = createContext<PopupContextType>({
    popupObject: {} as Popup, updatePopup(c: Popup): void {
    }
});

export const PageFirstInit = (props: { children: any }) => {
    /*const { getProfileData } = useActions()
    const userToken = useUser()
    useEffect(() => {
        if (userToken.user) {
            getProfileData()
        }
    }, [userToken]);*/
    const [popupObject, setPopup] = useState<Popup>({message: null, type: "loading"})
    const updatePopup = (popup: Popup) => {
        setPopup(popup)
    }
    return (
        <>
            <PopupContext.Provider value={{
                updatePopup, popupObject
            }}>
                {props.children}
            </PopupContext.Provider>
        </>
    )
}