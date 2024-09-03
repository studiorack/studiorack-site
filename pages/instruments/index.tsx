import { ConfigList, PluginVersion } from '@studiorack/core';
import { useRouter } from 'next/router';
import { filterPlugins } from '../../lib/plugin';
import styles from '../../styles/plugins.module.css';
import Layout from '../../components/layout';
import Card from '../../components/card';
import Head from 'next/head';
import Filters from '../../components/filters';
import { GetStaticProps } from 'next';
import Header from '../../components/header';
import { pageTitle } from '../../lib/utils';
import { getCategories } from '../../lib/api-browser';
import { getPlugins } from '../../lib/api';

type InstrumentsProps = {
  plugins: PluginVersion[];
};

const Instruments = ({ plugins }: InstrumentsProps) => {
  const router = useRouter();
  const categories: ConfigList = getCategories('instruments');
  const pluginsFiltered: PluginVersion[] = filterPlugins(categories, plugins, router);
  return (
    <Layout>
      <Head>
        <title>{pageTitle(['Instruments'])}</title>
      </Head>
      <section className={styles.plugins}>
        <Header title="Instruments" count={pluginsFiltered.length} />
        <Filters section="instruments" />
        <div className={styles.pluginsList}>
          {pluginsFiltered.map((plugin: PluginVersion, pluginIndex: number) => (
            <Card
              section="instruments"
              plugin={plugin}
              pluginIndex={pluginIndex}
              key={`${plugin.id}-${pluginIndex}`}
            ></Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Instruments;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      plugins: await getPlugins('instruments'),
    },
  };
};
