import {
  PluginPack,
  PluginVersion,
} from '../../node_modules/@studiorack/core/build/types/plugin';
import { useRouter } from 'next/router';
import { filterPlugins, getPlugin } from '../../lib/plugin';
import styles from '../../styles/plugins.module.css';
import Layout, { siteTitle } from '../../components/layout';
import GridItem from '../../components/grid-item';
import Head from 'next/head';
import Filters from '../../components/filters';
import { GetStaticProps } from 'next';
import { configDefaults } from '../../node_modules/@studiorack/core/build/config-defaults';
import { pluginsGet } from '../../node_modules/@studiorack/core/build/plugin';

type InstrumentsProps = {
  plugins: PluginVersion[];
};

const Instruments = ({ plugins }: InstrumentsProps) => {
  const router = useRouter();
  const pluginsFiltered: PluginVersion[] = filterPlugins(plugins, router);
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.plugins}>
        <div className={styles.pluginsHeader}>
          <h3 className={styles.pluginsTitle}>
            Instruments{' '}
            <span className={styles.pluginCount}>
              ({pluginsFiltered.length})
            </span>
          </h3>
        </div>
        <Filters />
        <div className={styles.pluginsList}>
          {pluginsFiltered.map((plugin: PluginVersion, pluginIndex: number) => (
            <GridItem
              section="instruments"
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

export default Instruments;

export const getStaticProps: GetStaticProps = async () => {
  const pluginPack: PluginPack = await pluginsGet('instruments');
  const plugins: PluginVersion[] = [];
  for (const pluginId in pluginPack) {
    const plugin: PluginVersion = getPlugin(pluginPack, pluginId);
    plugins.push(plugin);
  }
  return {
    props: {
      plugins,
    },
  };
};
