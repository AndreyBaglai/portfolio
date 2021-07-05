import React from 'react';

import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        &#169; 2021 Created by:{' '}
        <a className="footer-link" href="https://github.com/AndreyBaglai">
          Andrey Baglai
        </a>
      </div>
      <a href="https://rs.school/js/" className="footer-logo">
        <img src="./images/icons/footer-logo.svg" alt="footer logo" />
      </a>
    </footer>
  );
}
