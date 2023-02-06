import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Nav from '../Nav/Nav';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={s.header}>
        <Nav />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
