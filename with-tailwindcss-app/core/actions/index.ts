import * as TokenActionCreators from './auth'
import * as RegActionCreators from './regi'

export default {
    ...TokenActionCreators,
    ...RegActionCreators,
}