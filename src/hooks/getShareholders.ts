import swr from 'swr';

// this is used later in the useSWR function below
// basically, it's a function that takes a query string and returns a promise
const fetcher = (queryParams = '') =>
  fetch(`/api/shareholders${queryParams}`).then((res) => res.json());

interface Props {
  searchTerm: string;
  searchField: string;
  cursor?: string;
  page: number;
  pageSize: number;
  orderBy: string;
  order: string;
  limit: number;
}

const getShareholders = ({
  searchTerm,
  searchField,
  cursor,
  page,
  pageSize,
  orderBy,
  order,
  limit,
}: Props) => {
  const getQueryParams = (searchTerm: string, searchField: string) => {
    return `?searchTerm=${searchTerm}&searchField=${searchField}${
      cursor && page > 1 ? '&cursor=' + cursor : ''
    }&page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&order=${order}${
      limit != 0 ? '&limit=' + limit : ''
    }`;
  };

  const params = getQueryParams(searchTerm, searchField);

  console.log(params);

  // params are provided to the fetcher and swr handles the rest
  const { data, error } = swr(params, fetcher);

  return {
    shareholders: data?.shareholders,
    totalShareholders: data?.totalShareholders,
    myCursor: data?.myCursor,
    isLoading: !error && !data,
    isError: error,
  };
};

export default getShareholders;
