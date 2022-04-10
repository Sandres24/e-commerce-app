import React from 'react';
import './Footer.css';

const Footer = () => {
   return (
      <footer>
         <div className='copyright'>© Academlo 2022</div>
         <div className='social-networks'>
            <a
               href='https://www.instagram.com/academlohq/'
               target='_blank'
               rel='noreferrer'
            >
               <i className='fa-brands fa-instagram'></i>
            </a>
            <a
               href='https://www.linkedin.com/company/academlo/'
               target='_blank'
               rel='noreferrer'
            >
               <i className='fa-brands fa-linkedin-in'></i>
            </a>
            <a
               href='https://www.youtube.com/c/academlo'
               target='_blank'
               rel='noreferrer'
            >
               <i className='fa-brands fa-youtube'></i>
            </a>
         </div>
      </footer>
   );
};

export default Footer;
