import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from '../navbar';
import { Footer } from '../footer';

function PageWrapper({ children }) {
  return (
    <div className="font-rose">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
PageWrapper.propTypes = {
  children: PropTypes.any,
};

export default PageWrapper;
