import { FC } from 'react';

import NavLinks from '../NavLinks';

type HeaderProps = {
  data?: string;
};
const Header: FC<HeaderProps> = (): JSX.Element => {
  return (
    <header className="w-full bg-gray-300 dark:bg-gray-900">
      <div className="w-full flex flex-wrap justify-between items-center p-2">
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
