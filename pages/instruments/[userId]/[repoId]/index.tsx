import { Component, ChangeEvent } from 'react';
import Head from 'next/head.js';
import Crumb from '../../../../components/crumb.js';
import Layout, { siteTitle } from '../../../../components/layout.jsx';
import styles from '../../../../styles/plugins.module.css';
import GridItem from '../../../../components/grid-item.jsx';
import {
  PluginVersion,
  pluginLatest,
  PluginPack,
  pluginsGet,
} from '@studiorack/core';

type PluginListProps = {
  plugins: PluginVersion[];
  repoId: string;
  userId: string;
};

class PluginList extends Component<
  PluginListProps,
  {
    pluginsFiltered: PluginVersion[];
    query: string;
    repoId: string;
    userId: string;
  }
> {
  constructor(props: PluginListProps) {
    super(props);
    this.state = {
      pluginsFiltered: props.plugins || [],
      query: '',
      repoId: props.repoId,
      userId: props.userId,
    };
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={styles.plugins}>
          <Crumb items={['instruments', this.state.userId]}></Crumb>
          <h2>{this.state.repoId}</h2>
          <div className={styles.pluginsList}>
            {this.state.pluginsFiltered.map(
              (plugin: PluginVersion, pluginIndex: number) => (
                <GridItem
                  section="instruments"
                  plugin={plugin}
                  pluginIndex={pluginIndex}
                  key={`${plugin.id}-${pluginIndex}`}
                ></GridItem>
              ),
            )}
          </div>
        </section>
      </Layout>
    );
  }
}
export default PluginList;

export async function getStaticPaths() {
  const pluginPack: PluginPack = await pluginsGet('instruments');
  const list = [];
  for (const id in pluginPack) {
    const plugin: PluginVersion = pluginLatest(pluginPack[id]);
    list.push({
      params: {
        repoId: plugin.id?.split('/')[1],
        userId: plugin.id?.split('/')[0],
      },
    });
  }
  return {
    paths: list,
    fallback: false,
  };
}

type Params = {
  params: {
    repoId: string;
    userId: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const plugins = await pluginsGet('instruments');
  const list: PluginVersion[] = [];
  for (const pluginId in plugins) {
    const plugin: PluginVersion = pluginLatest(plugins[pluginId]);
    if (plugin.id === `${params.userId}/${params.repoId}`) {
      list.push(plugin);
    }
  }
  return {
    props: {
      plugins: list,
      repoId: params.repoId,
      userId: params.userId,
    },
  };
}
