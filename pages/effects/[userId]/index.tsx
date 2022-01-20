import { Component, ChangeEvent } from 'react';
import Head from 'next/head';
import Crumb from '../../../components/crumb';
import Layout, { siteTitle } from '../../../components/layout';
import styles from '../../../styles/plugins.module.css';
import GridItem from '../../../components/grid-item';
import { PluginInterface, pluginLatest, PluginPack, pluginsGet } from '@studiorack/core';

type PluginListProps = {
  plugins: PluginInterface[];
  userId: string;
};

class PluginList extends Component<
  PluginListProps,
  {
    pluginsFiltered: PluginInterface[];
    query: string;
    userId: string;
  }
> {
  constructor(props: PluginListProps) {
    super(props);
    this.state = {
      pluginsFiltered: props.plugins || [],
      query: '',
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
          <Crumb items={['effects']}></Crumb>
          <h2>{this.state.userId}</h2>
          <div className={styles.pluginsList}>
            {this.state.pluginsFiltered.map((plugin: PluginInterface, pluginIndex: number) => (
              <GridItem
                plugin={plugin}
                pluginIndex={pluginIndex}
                key={`${plugin.repo}/${plugin.id}-${pluginIndex}`}
              ></GridItem>
            ))}
          </div>
        </section>
      </Layout>
    );
  }
}
export default PluginList;

export async function getStaticPaths() {
  const pluginPack: PluginPack = await pluginsGet();
  const list = [];
  for (const id in pluginPack) {
    const plugin: PluginInterface = pluginLatest(pluginPack[id]);
    list.push({
      params: {
        userId: plugin.repo.split('/')[0],
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
    userId: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const plugins = await pluginsGet();
  const list: PluginInterface[] = [];
  for (const pluginId in plugins) {
    const plugin: PluginInterface = pluginLatest(plugins[pluginId]);
    console.log(plugin.repo.split('/')[0], params.userId);
    if (plugin.repo.split('/')[0] === params.userId) {
      list.push(plugin);
    }
  }
  return {
    props: {
      plugins: list,
      userId: params.userId,
    },
  };
}
