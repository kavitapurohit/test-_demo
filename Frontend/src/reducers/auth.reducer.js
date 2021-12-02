import {
  LOGOUT,
  LOG_IN,
  SIGN_UP,
  LIST_USER,
} from '../action/reducer.types'

export default function (state = {}, action) {
  switch (action.type) {
    case LIST_USER:
      console.log(' Auth Reducer Data:', action.payload.Customer)
      return {
        ...state,
        ListUser: action.payload.Customer,
      }
    case SIGN_UP:
      console.log(' Auth Reducer Data:', action)
      return {
        ...state,
        SignUpData: action.payload,
      }
    case LOG_IN:
      console.log('Auth reducer data:', action)

      return {
        ...state,
        loginData: action.payload,
      }
    case LOGOUT:
      console.log('logout data ')
      return {
        ...state,
        isLoggedOut: action.status === 200,
      }
    case 'CLEAR_LOGOUT':
      return {
        ...state,
        isLoggedOut: false,
      }
    default:
      return state
  }
}
