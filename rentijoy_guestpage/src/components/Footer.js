import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading' style={{color:'#f00'}}>
          Join us to receive our best holiday offers
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>

      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              RENTIJOY<i className='fas fa-tape' />
            </Link>
          </div>
          <small className='website-rights'>RENTIJOY © 2021</small>
          <div className='social-icons'>
            <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
              <i className='fab fa-facebook-f' />
            </Link>
            <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
              <i className='fab fa-instagram' />
            </Link>
            <Link className='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'>
              <i className='fab fa-youtube' />
            </Link>
            <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
              <i className='fab fa-twitter' />
            </Link>
            <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='LinkedIn'>
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;