import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  TableRow,
  TableCell,
} from '../table';
import { ShareholderAvatarCell } from './shareholder-avatar-cell.tsx';

import getShareholders from '../../hooks/getShareholders';
import { formatNumbers } from '../../utils/formatNumbers';
import { formatDate } from '../../utils/formatDate';

export const ShareholderTable = () => {
  const { shareholders, totalShareholders, isLoading, isError } =
    getShareholders();

  const headings = [
    { name: 'name', align: 'text-left' },
    { name: 'postal code', align: 'text-left' },
    { name: 'current holding', align: 'text-right' },
    { name: 'held since', align: 'text-right' },
  ];

  const createAvatarCell = (
    firstName: string,
    lastName: string,
    email: string
  ) => {
    const fullName = `${firstName} ${lastName}`;
    const initials = `${firstName[0]}${lastName[0]}`;
    return (
      <ShareholderAvatarCell
        key={email}
        initials={initials}
        fullName={fullName}
        email={email || 'N/A'}
      />
    );
  };

  return (
    <div className="hidden w-full my-6 border rounded-lg border-secondary-grey-light md:block">
      <Table>
        <TableHead>
          <TableRow>
            {headings.map((heading) => (
              <TableHeadCell key={heading.name} align={heading.align}>
                {heading.name}
              </TableHeadCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {!isLoading &&
            !isError &&
            shareholders.map((shareholder: any) => (
              <TableRow key={shareholder.id}>
                <TableCell align="text-left">
                  {createAvatarCell(
                    shareholder.firstName,
                    shareholder.lastName,
                    shareholder.email
                  )}
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
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};
