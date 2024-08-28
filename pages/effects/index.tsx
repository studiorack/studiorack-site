import { PluginPack, PluginVersion } from '../../node_modules/@studiorack/core/build/types/plugin';
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
import { ConfigList } from '@studiorack/core';
import Header from '../../components/header';

type EffectsProps = {
  plugins: PluginVersion[];
};

const Effects = ({ plugins }: EffectsProps) => {
  const router = useRouter();
  const categories: ConfigList = configDefaults(
    'appFolder',
    'pluginFolder',
    'presetFolder',
    'projectFolder',
  ).pluginEffectCategories;
  const pluginsFiltered: PluginVersion[] = filterPlugins(categories, plugins, router);
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
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
  const pluginPack: PluginPack = await pluginsGet('effects');
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
