interface Props {
  description: string;
  value: any;
}

export const FilterBar = ({ description, value }: Props) => {
  return (
    <div className="flex items-center p-2">
      <input
        type="checkbox"
        value={value}
        className="align-middle w-5 h-5 text-blue-200 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
      />
      <label className="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300">
        {description}
      </label>
    </div>
  );
};
