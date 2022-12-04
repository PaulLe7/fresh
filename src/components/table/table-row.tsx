import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const TableRow = ({ children }: Props) => {
  return (
    <tr
      className={`border-y last-of-type:border-b-0 last-of-type:border-y-0 text-sm `}
    >
      {children}
    </tr>
  );
};
