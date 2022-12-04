import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const TableHead = ({ children }: Props) => {
  return <thead>{children}</thead>;
};
