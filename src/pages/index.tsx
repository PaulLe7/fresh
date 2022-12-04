import type { NextPage } from 'next';
import Layout from '../components/layout';
import { ShareholderTable } from '../components/shareholder-table/shareholder-table';

// TODO: Start here, good luck!
const Home: NextPage = () => {
  return (
    <Layout>
      <ShareholderTable />
    </Layout>
  );
};

export default Home;
