import { ConfigList, PluginVersion } from '@studiorack/core';
import { useRouter } from 'next/router';
import { filterPlugins } from '../../lib/plugin';
import Layout from '../../components/layout';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { pageTitle } from '../../lib/utils';
import { getCategories } from '../../lib/api-browser';
import { getPlugins } from '../../lib/api';
import List from '../../components/list';

type EffectsProps = {
  plugins: PluginVersion[];
};

const Effects = ({ plugins }: EffectsProps) => {
  const router = useRouter();
  const categories: ConfigList = getCategories('effects');
  const pluginsFiltered: PluginVersion[] = filterPlugins(categories, plugins, router);
  return (
    <Layout>
      <Head>
        <title>{pageTitle(['Effects'])}</title>
      </Head>
      <List items={pluginsFiltered} type="effects" title="Effects" />
    </Layout>
  );
};

export default Effects;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      plugins: await getPlugins('effects'),
    },
  };
};
