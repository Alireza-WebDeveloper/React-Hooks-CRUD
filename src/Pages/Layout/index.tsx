import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header';

type LayoutProps = {
  route?: any;
};

const Layout: FC<PropsWithChildren<LayoutProps>> = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
