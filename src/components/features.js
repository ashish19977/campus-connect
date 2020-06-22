import React from 'react'

export default props => (
  <>
    <section className='features-icons bg-light text-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4' data-aos='fade-up' data-aos-duration='1000'>
            <div className='mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3'>
              <div className='d-flex features-icons-icon'>
                <i className='icon-people m-auto text-primary' data-bs-hover-animate='pulse'></i>
              </div>
              <h3>Always Connected</h3>
              <p className='lead mb-0'>
                Super Easy to Connect with school , college and university mates.
              </p>
            </div>
          </div>
          <div className='col-lg-4' data-aos='fade-up' data-aos-duration='1000'>
            <div className='mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3'>
              <div className='d-flex features-icons-icon'>
                <i className='icon-globe m-auto text-primary' data-bs-hover-animate='pulse'></i>
              </div>
              <h3>Millions of People</h3>
              <p className='lead mb-0'>People around the globe are connected.</p>
            </div>
          </div>
          <div className='col-lg-4' data-aos='fade-up' data-aos-duration='1000'>
            <div className='mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3'>
              <div className='d-flex features-icons-icon'>
                <i className='icon-bulb m-auto text-primary' data-bs-hover-animate='pulse'></i>
              </div>
              <h3>Share Ideas</h3>
              <p className='lead mb-0'>Share your ideas in groups or people</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='call-to-action text-white text-center'>
      <div className='overlay'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-9 mx-auto'>
            <h2 className='mb-4'>What you have for us ? Leave us a Message</h2>
          </div>
          <div className='col-md-10 col-lg-8 col-xl-7 mx-auto'>
            <form>
              <div className='form-row d-flex align-items-center'>
                <div className='col-12 col-md-9 mb-2 mb-md-0'>
                  <textarea className='form-control' placeholder='Leave your message...' />
                </div>
                <div className='col-12 col-md-3'>
                  <button
                    className='btn btn-primary btn-block'
                    type='submit'
                    style={{ padding: '5px' }}
                  >
                    &nbsp;Send us
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
)
