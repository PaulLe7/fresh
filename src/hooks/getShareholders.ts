import swr from 'swr';

const fetcher = () => fetch('/api/shareholders').then((res) => res.json());

const getShareholders = () => {
  const { data, error } = swr('/api/shareholders', fetcher);

  return {
    shareholders: data?.shareholders,
    totalShareholders: data?.totalShareholders,
    isLoading: !error && !data,
    isError: error,
  };
};

export default getShareholders;
