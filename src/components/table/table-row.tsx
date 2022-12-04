import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const TableRow = ({ children }: Props) => {
  return <tr className={`border-y`}>{children}</tr>;
};
