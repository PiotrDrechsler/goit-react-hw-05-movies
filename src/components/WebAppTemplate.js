import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Nav from './Nav';

function WebAppTemplate() {
  return (
    <>
      <header>
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
