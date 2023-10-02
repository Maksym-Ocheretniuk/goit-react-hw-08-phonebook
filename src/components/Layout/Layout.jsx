import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <h1>Layout</h1>

      <AppBar />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
