import React from 'react'
import Header from './header'
import Footer from './footer'
import Features from './features'
import { connect } from 'react-redux'
import { SIGNIN } from '../redux/actions'

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  }
  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  handleSubmit = e => {
    e.preventDefault()
    this.props.signIn({ ...this.state })
  }
  render() {
    return (
      <>
        <Header onClick={() => this.props.history.push('/signup')} text='Sign Up' />
        <header className='masthead text-white text-center'>
          <div className='overlay'></div>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-9 mx-auto'>
                <h1 className='mb-5' style={{ fontSize: '1.8rem' }}>
                  Join and connect with friends and collegues around the globe.
                </h1>
              </div>
              <div className='col-md-10 col-lg-8 col-xl-7 mx-auto'>
                <form onSubmit={this.handleSubmit}>
                  <div className='form-row' style={{ justifyContent: 'center' }}>
                    <div className='col-12 col-md-9'>
                      <h1 style={{ fontSize: '2rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                        Sign in
                      </h1>
                      <input
                        onChange={this.handleChange}
                        value={this.state.email}
                        name='email'
                        className='form-control'
                        type='email'
                        placeholder='Enter your email...'
                        autoFocus
                        required
                        style={{ margin: '3% 0 3% 0', padding: '8px 12px' }}
                      />
                      <input
                        onChange={this.handleChange}
                        value={this.state.password}
                        name='password'
                        className='form-control'
                        type='password'
                        placeholder='Enter your password...'
                        required
                        style={{ margin: '3% 0 3% 0', padding: '8px 12px' }}
                      />
                      {this.props.alertStatus && (
                        <div className={`alert alert-${this.props.alertVariant}`} role='alert'>
                          {this.props.alertMessage}
                        </div>
                      )}
                      <button className='btn btn-primary btn-block' type='submit'>
                        {this.props.signInBtnText}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>
        <Features />
        <Footer />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    alertMessage: state.initialReducerState.alertMessage,
    alertStatus: state.initialReducerState.alertStatus,
    alertVariant: state.initialReducerState.alertVariant,
    signInBtnText: state.initialReducerState.signInBtnText,
  }
}
const mapDispatchToStore = dispatch => {
  return {
    signIn: payload => dispatch(SIGNIN(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToStore)(SignIn)
