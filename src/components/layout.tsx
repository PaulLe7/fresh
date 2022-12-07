import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen min-w-screen md:p-2 p-4 bg-secondary-grey-light-2 md:bg-white">
      {/* 
      ABOUT BELOW LAYOUT: 
      --------------------------------------------------------------------------------
      Wouldn't work since state would then be in layout which is bad design
      Hence, why all of the parts below (e.g. Search bar, filtering, pagination menu) 
      were instead placed inside src/components/shareholder-table/shareholder-table
      --------------------------------------------------------------------------------
       */}
      {/* Search bar */}
      {/* Filtering checkboxes */}
      {children}
      {/* Pagination menu */}
    </div>
  );
};

export default Layout;
