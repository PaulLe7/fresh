import swr from 'swr';

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
}

const getShareholders = ({
  searchTerm,
  searchField,
  cursor,
  page,
  pageSize,
  orderBy,
  order,
}: Props) => {
  const getQueryParams = (searchTerm: string, searchField: string) => {
    return `?searchTerm=${searchTerm}&searchField=${
      searchField == 'Name' ? 'firstName' : 'email'
    }${
      cursor ? '&cursor=' + cursor : ''
    }&page=${page}&pageSize=${pageSize}&orderBy=${
      orderBy == 'Name' ? 'firstName' : ''
    }&order=${order}`;
  };

  const params = getQueryParams(searchTerm, searchField);

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
