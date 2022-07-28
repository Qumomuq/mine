import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreators from '../../../nextjs_chieftool_panel2/nextjs_chieftool_panel/with-tailwindcss-app/core/actions'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}