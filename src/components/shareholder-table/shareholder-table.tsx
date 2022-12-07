import { useState, useEffect } from 'react';
import moment from 'moment';

import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  TableRow,
  TableCell,
} from '../table';
import { Shareholder } from '../../types';
import { ShareholderMobileCell } from './shareholder-mobile-view-cell';
import { ShareholderAvatarCell } from './shareholder-avatar-cell';
import { SearchBar } from '../search/search';
import { TablePagination } from '../table/table-pagination';
import getShareholders from '../../hooks/getShareholders';
import { formatNumbers } from '../../utils/formatNumbers';
import { formatDate } from '../../utils/formatDate';

export const ShareholderTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchField, setSearchField] = useState('firstName');
  const [cursor, setCursor] = useState('');
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [orderBy, setOrderBy] = useState('firstName');
  const [order, setOrder] = useState('asc');
  const [limit, setLimit] = useState(0);

  const { shareholders, totalShareholders, myCursor, isLoading, isError } =
    getShareholders({
      searchTerm,
      searchField,
      cursor,
      page,
      pageSize,
      orderBy,
      order,
      limit,
    });

  useEffect(() => {
    setCursor(myCursor);
  }, [page]);

  const columnHeadings = [
    { name: 'name', value: 'firstName', align: 'text-left' },
    { name: 'postal code', value: 'postalCode', align: 'text-left' },
    { name: 'current holding', value: 'shareCount', align: 'text-right' },
    { name: 'held since', value: 'heldSince', align: 'text-right' },
    { name: 'held duration', value: 'heldSince', align: 'text-right' },
  ];

  return (
    <>
      {/* Search bar with filtering checkboxes*/}
      <div className="flex flex-row mt-4">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchField={searchField}
          setSearchField={setSearchField}
          setPage={setPage}
          setOrderBy={setOrderBy}
          setOrder={setOrder}
          setLimit={setLimit}
          data={shareholders}
        />
      </div>
      {/* Mobile view */}
      <div className="md:hidden w-full my-2 rounded-lg">
        {!isLoading &&
          !isError &&
          shareholders.map((shareholder: Shareholder) => (
            <ShareholderMobileCell
              key={`${shareholder.id}mobile`}
              shareholder={shareholder}
            />
          ))}
      </div>
      {/* Desktop view */}
      <div className="md:block hidden w-full border border-secondary-grey-light rounded-lg my-6 ">
        <Table>
          <TableHead>
            <TableRow>
              {columnHeadings.map((heading) => (
                <TableHeadCell
                  key={heading.name}
                  align={heading.align}
                  orderBy={orderBy}
                  order={order}
                  name={heading.value}
                  setOrder={setOrder}
                  setOrderBy={setOrderBy}
                  setPage={setPage}
                >
                  {heading.name}
                </TableHeadCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {!isLoading &&
              !isError &&
              shareholders.map((shareholder: Shareholder) => (
                <TableRow key={shareholder.id}>
                  <TableCell align="text-left">
                    <ShareholderAvatarCell
                      firstName={shareholder.firstName}
                      lastName={shareholder.lastName}
                      email={shareholder.email}
                    />
                  </TableCell>
                  <TableCell align="text-left">
                    {shareholder.postalCode || `N/A`}
                  </TableCell>
                  <TableCell align="text-right">
                    {formatNumbers(shareholder.shareCount)}
                  </TableCell>
                  <TableCell align="text-right">
                    {formatDate(shareholder.heldSince)}
                  </TableCell>
                  <TableCell align="text-right">
                    {moment
                      .duration(
                        moment(Date()).diff(moment(shareholder.heldSince))
                      )
                      .humanize()}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      {/* Pagination menu */}
      <TablePagination
        page={page}
        pageSize={pageSize}
        totalSize={totalShareholders}
        setPage={setPage}
        setPageSize={setPageSize}
      />
    </>
  );
};
