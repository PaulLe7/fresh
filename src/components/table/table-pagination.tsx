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

  return (
    <div>
      {pageList.map((pageNum: any) => {
        return pageNum == '...' ? (
          <span className="px-2">...</span>
        ) : pageNum == page ? (
          <span className="px-2 font-bold">{pageNum}</span>
        ) : (
          <button
            className="px-2"
            onClick={() => {
              setPage(pageNum - 1);
            }}
          >
            {pageNum}
          </button>
        );
      })}
    </div>
  );
};
