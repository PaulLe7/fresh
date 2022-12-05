import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen min-w-screen md:p-2 p-4 bg-secondary-grey-light-2 md:bg-white">
      {/* Search bar */}
      {/* Filtering checkboxes */}
      {children}
      {/* Pagination menu */}
    </div>
  );
};

export default Layout;
