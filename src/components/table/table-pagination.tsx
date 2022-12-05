import Image from 'next/image';

interface Props {
  page: number;
  pageSize: number;
  totalSize: number;
  setPage: Function;
  setPageSize: Function;
}
// pagination menu
export const TablePagination = ({
  page,
  pageSize,
  totalSize,
  setPage,
  setPageSize,
}: Props) => {
  const numPages = Math.ceil(totalSize / pageSize);

  // since page is 0 indexed, we need to add 1 to the page number
  page += 1;

  const pageList =
    // if there are 7 or fewer pages, show all pages
    numPages <= 7
      ? [...Array.from({ length: 7 }, (_, i) => i + 1)]
      : // if the current page is 1 or the last page, show the first 3 and last 3 pages
      page == 1 || page == numPages
      ? [1, 2, 3, '...', numPages - 2, numPages - 1, numPages]
      : // if the current page is 2 show the first 4 and last 2 pages
      page == 2
      ? [1, 2, 3, 4, '...', numPages - 1, numPages]
      : // if the current page is 3 show the first 5 and last 1 page
      page == 3
      ? [1, 2, 3, 4, 5, '...', numPages]
      : // if the current page is the last page - 1, show the first 2 and last 4 pages
      page == numPages - 1
      ? [
          1,
          '...',
          numPages - 4,
          numPages - 3,
          numPages - 2,
          numPages - 1,
          numPages,
        ]
      : // if the current page is the last page - 2, show the first 1 and last 5 pages
      page == numPages - 2
      ? [
          1,
          '...',
          numPages - 5,
          numPages - 4,
          numPages - 3,
          numPages - 2,
          numPages,
        ]
      : // if the current page is > 4 and < the last page - 3, show the first page, page +1 and page -1, and the last page
        [1, '...', page - 1, page, page + 1, '...', numPages];

  const firstShowingResult = page * pageSize - pageSize + 1;
  const lastShowingResult =
    page * pageSize > totalSize ? totalSize : page * pageSize;

  return (
    <div className="flex flex-row">
      <div className="flex flex-row items-center">
        <div className="text-sm text-gray-500">
          Showing <span className="font-bold">{firstShowingResult}</span> to{' '}
          <span className="font-bold">{lastShowingResult}</span> of{' '}
          <span className="font-bold">{totalSize} results</span>
        </div>
        <div className="flex flex-row items-center ml-10 md:flex hidden">
          <div className="text-sm text-gray-500 ">Rows per page:</div>
          <div className="ml-2">
            <select
              className="text-sm text-gray-500 border border-gray-300 rounded-md px-2 py-1"
              value={pageSize}
              onChange={(e) => {
                setPageSize(parseInt(e.target.value));
                setPage(0);
              }}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center ml-auto"></div>

      <button
        className="font-semibold border w-9 h-9"
        disabled={page === 1}
        onClick={() => {
          setPage(page - 1 + -1);
        }}
      >
        <Image
          className=" text-typography-grey"
          src="/icons/arrow-left.svg"
          alt="Mail Icon"
          width={10}
          height={10}
        />
      </button>
      <div>
        {pageList.map((pageNum: any) => {
          return pageNum == '...' ? (
            <span className="px-2">...</span>
          ) : pageNum == page ? (
            <button
              className="px-2 hidden border w-9 h-9 font-semibold sm:inline-block"
              disabled
            >
              <span className="text-primary-black font-extrabold ">
                {pageNum}
              </span>
            </button>
          ) : (
            <button
              className="font-normal border w-9 h-9"
              onClick={() => {
                setPage(pageNum - 1);
              }}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
      <div>
        <button
          className="font-semibold border w-9 h-9"
          disabled={page === numPages}
          onClick={() => {
            setPage(page - 1 + 1);
          }}
        >
          <Image
            className=" text-typography-grey"
            src="/icons/arrow-right.svg"
            alt="Mail Icon"
            width={10}
            height={10}
          />
        </button>
      </div>
    </div>
  );
};
