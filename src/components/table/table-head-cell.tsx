import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  align?: string;
}

export const TableHeadCell = ({ children, align }: Props) => {
  return (
    <th
      className={`py-4 px-6 font-normal first-of-type:rounded-tl-lg last-of-type:rounded-tr-lg cursor-pointer ${align}`}
    >
      {children}
    </th>
  );
};
