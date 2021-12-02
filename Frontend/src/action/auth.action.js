import {
  LOG_IN,
  LOGOUT,
  SIGN_UP,
  LIST_USER,
} from './reducer.types'
import {apiAction} from './api.action'
import {APIEndpoints, url} from './endpoint'

export function listUser(data){
  console.log('hello auth action')
  return apiAction({
    url: url + APIEndpoints.listuser,
    method: 'get',
    label: LIST_USER,
    isTokenSkipped: true,
    showLoader: true,
    data,
  })
}

export function SignUpUser(data) {
  console.log('Data in Auth.Action: ', data)
  return apiAction({
    url: url + APIEndpoints.signup,
    method: 'post',
    label: SIGN_UP,
    isTokenSkipped: true,
    showLoader: true,
    data,
  })
}
export function loginUser(data) {
  console.log('login auth action:',data)
  return apiAction({
    url: url + APIEndpoints.login,
    method: 'post',
    label: LOG_IN,
    isTokenSkipped: true,
    showLoader: true,
    data,
  })
}
export function logoutUser() {
  return apiAction({
    url: url + APIEndpoints.logout,
    method: 'get',
    label: LOGOUT,
    showLoader: true,
  })
}
