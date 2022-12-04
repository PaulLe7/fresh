import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  align?: string;
}

export const TableCell = ({ children, align }: Props) => {
  return (
    <td
      className={`py-4 px-6 first-of-type:rounded-bl-lg last-of-type:rounded-br-lg ${align}`}
    >
      {children}
    </td>
  );
};
