import * as ACTIONS from './actioncreators'

export const SIGNIN = payload => dispatch => {
  console.log('dispatching from actions')
  dispatch(ACTIONS.SIGN_IN({ signInBtnText: 'Signin in ...' }))
  setTimeout(() => {
    if (payload.email === 'ashishmoria96@gmail.com')
      dispatch(
        ACTIONS.SIGN_IN({
          signInBtnText: 'Sign In',
          alertStatus: true,
          alertMessage: 'Sign iN successful',
        })
      )
    else
      dispatch(
        ACTIONS.SIGN_IN({
          signInBtnText: 'Sign In',
          alertStatus: true,
          alertVariant: 'danger',
          alertMessage: 'Wrong Email Adress',
        })
      )
  }, 2000)
}
