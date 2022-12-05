import { useState } from 'react';
import Image from 'next/image';
import { SearchNameEmailToggle } from './search-name-email-select';
import { FilterBar } from './filter-bar';
import { ExportCSV } from '../../utils/exportPage';

interface Props {
  searchTerm: string;
  setSearchTerm: Function;
  searchField: string;
  setSearchField: Function;
  setPage: Function;
  setOrderBy: Function;
  setOrder: Function;
  setLimit: Function;
  data: any;
}

export const SearchBar = ({
  searchTerm,
  setSearchTerm,
  setSearchField,
  setPage,
  setOrder,
  setOrderBy,
  setLimit,
  data,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPage(0);
  };

  return (
    <div className="flex flex-row text-sm w-full">
      <div className="flex flex-row border border-secondary-grey-light rounded-lg px-4 py-2 focus-within:ring">
        <div className="w-5 h-5 p-0.5">
          <Image
            className=" text-typography-grey"
            src="/icons/magnifying-glass.svg"
            alt="Mail Icon"
            width={16}
            height={16}
          />
        </div>
        <input
          type="text"
          placeholder="Search Name or Email"
          value={searchTerm}
          autoComplete="off"
          onChange={handleChange}
          className="pl-2 hover:border-transparent focus:outline-none"
        />
      </div>
      <div className="ml-2">
        <SearchNameEmailToggle setSearchField={setSearchField} />
      </div>
      <div className="ml-auto flex flex-row items-center">
        <FilterBar
          description="Only top 50 holders"
          orderBy="shareCount"
          order="desc"
          setOrderBy={setOrderBy}
          setOrder={setOrder}
          setLimit={setLimit}
          limit={50}
        />
      </div>
      {/* // align items to left of screen */}
      <div className="ml-10 flex flex-row items-center">
        <ExportCSV data={data} />
      </div>
    </div>
  );
};
