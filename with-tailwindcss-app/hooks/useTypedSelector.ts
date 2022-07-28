import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../../../nextjs_chieftool_panel2/nextjs_chieftool_panel/with-tailwindcss-app/core/reducers";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector