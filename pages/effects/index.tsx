import { PluginVersion } from '../../node_modules/@studiorack/core/build/types/plugin';
import { useRouter } from 'next/router';
import { filterPlugins } from '../../lib/plugin';
import styles from '../../styles/plugins.module.css';
import Layout from '../../components/layout';
import GridItem from '../../components/grid-item';
import Head from 'next/head';
import Filters from '../../components/filters';
import { GetStaticProps } from 'next';
import { ConfigList } from '@studiorack/core';
import Header from '../../components/header';
import { pageTitle } from '../../lib/utils';
import { getCategories } from '../../lib/api-browser';
import { getPlugins } from '../../lib/api';

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
      <section className={styles.plugins}>
        <Header title="Effects" count={pluginsFiltered.length} />
        <Filters section="effects" />
        <div className={styles.pluginsList}>
          {pluginsFiltered.map((plugin: PluginVersion, pluginIndex: number) => (
            <GridItem
              section="effects"
              plugin={plugin}
              pluginIndex={pluginIndex}
              key={`${plugin.id}-${pluginIndex}`}
            ></GridItem>
          ))}
        </div>
      </section>
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
