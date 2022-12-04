import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const TableHeadCell = ({ children }: Props) => {
  return <th>{children}</th>;
};
