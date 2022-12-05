import { ReactNode } from 'react';
import Image from 'next/image';

interface Props {
  children: ReactNode;
  align: string;
  orderBy: string;
  order: string;
  name: string;
  setOrder: Function;
  setOrderBy: Function;
  setPage: Function;
}

export const TableHeadCell = ({
  children,
  align,
  orderBy,
  order,
  name,
  setOrder,
  setOrderBy,
  setPage,
}: Props) => {
  const isCurrentOrderBy = orderBy === name ? true : false;

  const newOrder = isCurrentOrderBy && order === 'asc' ? 'desc' : 'asc';

  return (
    <th
      className={`text-xs py-4 px-6 font-normal first-of-type:rounded-tl-lg last-of-type:rounded-tr-lg cursor-pointer ${align}`}
      onClick={() => {
        setOrderBy(name);
        setOrder(newOrder);
        setPage(0);
      }}
    >
      <div
        className={`group flex flex-row w-full h-full  items-center ${
          align === 'text-left'
            ? 'justify-start'
            : align === 'text-right'
            ? 'justify-end'
            : ''
        }`}
      >
        {align === 'text-right' && isCurrentOrderBy ? (
          <div className="relative w-2 h-2 mr-2">
            <Image
              className={`
                group-hover:text-typography-disabled text stroke-1 ${
                  order === 'asc' ? 'rotate-180' : ''
                }
              )`}
              src="/icons/arrow.svg"
              alt="Mail Icon"
              layout="fill"
            />
          </div>
        ) : null}
        {children}
        {align === 'text-left' && isCurrentOrderBy ? (
          <div className="relative w-2 h-2 ml-2">
            <Image
              className={`
              group-hover:text-typography-disabled text stroke-1 ${
                order === 'asc' ? 'rotate-180' : ''
              }
            )`}
              src="/icons/arrow.svg"
              alt="Mail Icon"
              layout="fill"
            />
          </div>
        ) : null}
      </div>
    </th>
  );
};
