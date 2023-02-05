import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Nav from '../Nav/Nav';
import s from './WebAppTemplate.module.css';

function WebAppTemplate() {
  return (
    <>
      <header className={s.header}>
        <Nav />
      </header>
      <main>
        {/* RENDER MAIN CONTENT */}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default WebAppTemplate;
