import { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

const searchFieldList = [
  { field: 'Name', value: 'firstName' },
  { field: 'Email', value: 'email' },
];

interface Props {
  setSearchField: Function;
}

export const SearchNameEmailToggle = ({ setSearchField }: Props) => {
  const [selected, setSelected] = useState(searchFieldList[0]);

  useEffect(() => {
    setSearchField(selected.value);
  }, [selected, setSearchField]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative">
        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border border-secondary-grey-light rounded-lg">
          <span className="block truncate text-gray-500">{selected.field}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {searchFieldList.map((searchFieldList, searchFieldListIdx) => (
              <Listbox.Option
                key={searchFieldListIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-3 pr-4 ${
                    active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                  }`
                }
                value={searchFieldList}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {searchFieldList.field}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
