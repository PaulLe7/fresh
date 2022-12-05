import { ReactNode } from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';

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
        className={clsx('group flex flex-row w-full h-full  items-center', {
          ['justify-start']: align === 'text-left',
          ['justify-end']: align === 'text-right',
        })}
      >
        {align === 'text-right' && isCurrentOrderBy ? (
          <div className="relative w-2 h-2 mr-2">
            <Image
              className={clsx(
                'group-hover:text-typography-disabled text stroke-1',
                {
                  ['rotate-180']: order === 'asc',
                }
              )}
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
              className={clsx('group-hover:text-typography-disabled stroke-1', {
                ['rotate-180']: order === 'asc',
              })}
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
