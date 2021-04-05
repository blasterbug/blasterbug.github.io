import React from 'react';

import Header from './Header';
import Footer from './Footer';
import useScrollToTop from '../hooks/useScrollToTop';

function Page({ children }) {
  useScrollToTop();
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Page;
