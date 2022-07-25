import {AlertStatus} from "@chakra-ui/alert/dist/declarations/src/alert";

export interface Popup {
    type: AlertStatus,
    message: string | null
}

export type PopupContextType = {
    updatePopup: (c: Popup) => void,
    popupObject: Popup
}
