import React from 'react'

export default props => (
  <footer className='footer bg-light' style={{ padding: '1rem' }}>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 my-auto h-100 text-center text-lg-left'>
          <ul className='list-inline mb-2'>
            <li className='list-inline-item'>
              <a href='https://www.google.com'>About</a>
            </li>
            <li className='list-inline-item'></li>
            <li className='list-inline-item'>
              <a href='https://www.google.com'>Contact</a>
            </li>
            <li className='list-inline-item'>
              <span></span>
            </li>
            <li className='list-inline-item'></li>
            <li className='list-inline-item'>
              <a href='https://www.google.com'>Privacy Policy</a>
            </li>
          </ul>
          <p className='text-muted small mb-4 mb-lg-0'>
            © Campus Connect 2020. All Rights Reserved.
          </p>
        </div>
        <div className='col-lg-6 my-auto h-100 text-center text-lg-right'>
          <ul className='list-inline mb-0'>
            <li className='list-inline-item'>
              <a href='https://www.google.com'>
                <i className='fa fa-facebook fa-2x fa-fw'></i>
                <i className='fa fa-whatsapp fa-2x fa-fw' style={{ color: 'rgb(30, 130, 13)' }}></i>
              </a>
            </li>
            <li className='list-inline-item'>
              <a href='https://www.google.com'>
                <i className='fa fa-twitter fa-2x fa-fw'></i>
              </a>
            </li>
            <li className='list-inline-item'>
              <a href='https://www.google.com'>
                <i
                  className='fa fa-instagram fa-2x fa-fw'
                  style={{ color: 'rgb(205, 37, 68)' }}
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)
