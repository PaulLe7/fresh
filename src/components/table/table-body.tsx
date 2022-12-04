import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const TableBody = ({ children }: Props) => {
  return <tbody>{children}</tbody>;
};
