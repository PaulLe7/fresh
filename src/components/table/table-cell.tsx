import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const TableCell = ({ children }: Props) => {
  return <td>{children}</td>;
};
