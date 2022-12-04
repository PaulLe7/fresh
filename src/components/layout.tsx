import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen min-w-screen p-2">
      {/* Search bar */}
      {/* Filtering checkboxes */}
      {children}
      {/* Pagination menu */}
    </div>
  );
};

export default Layout;
