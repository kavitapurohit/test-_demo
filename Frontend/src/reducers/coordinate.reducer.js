import {
  LIST_USER
} from '../action/reducer.types'

export default function (state = {}, action) {
  switch (action.type) {
    case LIST_USER:
      return {
        ...state,
        List: action.payload,
      }
    default:
      return state
  }
}
