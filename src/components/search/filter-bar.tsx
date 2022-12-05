import { useState } from 'react';

interface Props {
  description: string;
  orderBy: string;
  order: string;
  setOrderBy: Function;
  setOrder: Function;
  setLimit: Function;
  limit?: number;
}

export const FilterBar = ({
  description,
  orderBy,
  order,
  setOrderBy,
  setOrder,
  limit,
  setLimit,
}: Props) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center p-2">
      <input
        type="checkbox"
        className="w-5 h-5 text-gray-500 border border-gray-300 rounded-md px-2 py-1"
        onChange={() => {
          if (!checked) {
            setOrderBy(orderBy);
            setOrder(order);
            setLimit(limit);
          } else {
            setLimit(0);
          }
          setChecked(!checked);
        }}
      />
      <label className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-300">
        {description}
      </label>
    </div>
  );
};
