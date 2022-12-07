import React from 'react';
import { CSVLink } from 'react-csv';
import Image from 'next/image';

interface Props {
  data: any;
}

export const ExportCSV = ({ data }: Props) => {
  const csvData = data;

  if (csvData) {
    return (
      <div>
        <CSVLink data={csvData}>
          <div className="flex flex-row text-gray-500">
            <div className="mr-5 flex flex-row items-center">
              Export page to CSV
            </div>
            <div className="ml-2 w-7 h-7 mt-0.5 mr-2 ">
              <Image
                className="text-typography-grey"
                src="/icons/document-download.svg"
                alt="Export CSV"
                width={24}
                height={24}
              />
            </div>
          </div>
        </CSVLink>
      </div>
    );
  } else {
    return <></>;
  }
};
