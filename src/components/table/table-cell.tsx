import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  align?: string;
}

export const TableCell = ({ children, align }: Props) => {
  return <td className={`py-5 px-6 ${align}`}>{children}</td>;
};
