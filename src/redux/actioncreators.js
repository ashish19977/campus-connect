const SIGN_IN = (payload = null) => {
  return {
    type: 'LOGIN',
    payload: { ...payload },
  }
}

const SIGN_UP = (payload = null) => {
  return {
    type: 'LOGIN',
    payload: { ...payload },
  }
}

const FORGET_PASSWORD = (payload = null) => {
  return {
    type: 'LOGIN',
    payload: { ...payload },
  }
}

export { SIGN_IN, SIGN_UP, FORGET_PASSWORD }
