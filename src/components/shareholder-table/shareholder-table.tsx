import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  TableRow,
  TableCell,
} from '../table';

export const ShareholderTable = () => {
  const headings = [
    'name',
    'last contact',
    'postal code',
    'current holding',
    'held since',
  ];

  return (
    <Table>
      <TableHead>
        <TableRow>
          {headings.map((heading) => (
            <TableHeadCell key={heading}>{heading}</TableHeadCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Data</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
