import React from 'react'
import { withRouter } from 'react-router-dom'

const Header = props => {
  return (
    <nav className='navbar navbar-expand' style={{ borderBottom: '2px orangered solid' }}>
      <div className='container'>
        <div data-bs-hover-animate='tada' style={{ fontSize: '2em' }}>
          Campus <span style={{ color: 'rgba(255, 123, 28, 0.9)' }}>C</span>onnect
        </div>
        <button
          className='btn btn-danger btn-xs></button>'
          onClick={() => props.history.push('/forgetpassword')}
        >
          Forget Password ?
        </button>
        <button className='btn btn-primary btn-xs' onClick={props.onClick}>
          {props.text}
        </button>
      </div>
    </nav>
  )
}

export default React.memo(withRouter(Header))
