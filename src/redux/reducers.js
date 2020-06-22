import * as ACTION from './actioncreators'
import { combineReducers } from 'redux'

const initialReducerState = {
  alertStatus: false,
  alertMessage: '',
  alertVariant: 'success',
  signInBtnText: 'Sign In',
  signUpBtnText: 'Sign Up',
  forgetPasswordBtnText: 'Get OTP',
}

const initialReducer = (state = initialReducerState, action) => {
  switch (action.type) {
    case ACTION.SIGN_IN().type:
      console.log(action)
      return {
        ...state,
        ...action.payload,
      }
    case ACTION.SIGN_UP().type:
      return {
        ...state,
        ...action.payload,
      }
    case ACTION.FORGET_PASSWORD().type:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
const rootReducer = combineReducers({ initialReducerState: initialReducer })

export default rootReducer
