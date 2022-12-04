import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const TableHead = ({ children }: Props) => {
  return (
    <thead className="uppercase bg-secondary-grey-light-2">{children}</thead>
  );
};
