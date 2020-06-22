import React from 'react'
import Footer from './footer'
import Header from './header'

export default class ForgetPassword extends React.Component {
  render() {
    return (
      <>
        <Header onClick={() => this.props.history.push('/')} text='Sign In' />
        <div className='register'>
          <div className='form-container'>
            <form method='post'>
              <h2 className='text-center'>
                <strong>Create</strong> an account.
              </h2>
              <div className='form-group'>
                <input
                  className='form-control'
                  type='email'
                  name='email'
                  placeholder='Email'
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  className='form-control'
                  type='number'
                  name='otp'
                  placeholder='OTP'
                  required
                  disabled
                />
              </div>
              <div className='form-group'>
                <input
                  className='form-control'
                  type='password'
                  name='password'
                  placeholder='Password'
                  required
                  minLength='8'
                  disabled
                />
              </div>
              <div className='form-group'>
                <input
                  className='form-control'
                  type='password'
                  name='password-repeat'
                  placeholder='Password (repeat)'
                  minLength='8'
                  required
                  disabled
                />
              </div>
              <div className='alert alert-success' role='alert' style={{ textAlign: 'center' }}>
                text
              </div>
              <div className='form-group'>
                <button
                  className='btn btn-primary btn-block'
                  type='submit'
                  style={{ margin: '20px 0 0' }}
                >
                  Get OTP
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}
