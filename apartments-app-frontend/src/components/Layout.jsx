import React from 'react';
import MainLogo from './MainLogo';

const Layout = props => {
  const { children } = props;

  return (
    <>
      <MainLogo />
      {children}
    </>
  );
};

export default Layout;
