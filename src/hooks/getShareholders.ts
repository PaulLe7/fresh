import swr from 'swr';

const fetcher = (queryParams = '') =>
  fetch(`/api/shareholders${queryParams}`).then((res) => res.json());

interface Props {
  searchTerm: string;
  searchField: string;
}

const getShareholders = ({ searchTerm, searchField }: Props) => {
  const getQueryParams = (searchTerm: string, searchField: string) => {
    return `?searchTerm=${searchTerm}&searchField=${
      searchField == 'Name' ? 'firstName' : 'email'
    }`;
  };

  const params = getQueryParams(searchTerm, searchField);
  console.log(params);

  const { data, error } = swr(params, fetcher);

  return {
    shareholders: data?.shareholders,
    totalShareholders: data?.totalShareholders,
    isLoading: !error && !data,
    isError: error,
  };
};

export default getShareholders;
