import { Component } from 'react';
import Head from 'next/head';
import Crumb from '../../../components/crumb';
import Layout from '../../../components/layout';
import styles from '../../../styles/plugins.module.css';
import GridItem from '../../../components/grid-item';
import { PluginVersion, PluginPack, pluginsGet } from '@studiorack/core';
import { getPlugin } from '../../../lib/plugin';
import Header from '../../../components/header';
import { pageTitle } from '../../../lib/utils';

type PluginListProps = {
  plugins: PluginVersion[];
  userId: string;
};

class PluginList extends Component<
  PluginListProps,
  {
    pluginsFiltered: PluginVersion[];
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
          <title>{pageTitle(['Effects', this.state.userId])}</title>
        </Head>
        <section className={styles.plugins}>
          <Crumb items={['effects']}></Crumb>
          <Header title={this.state.userId} />
          <div className={styles.pluginsList}>
            {this.state.pluginsFiltered.map((plugin: PluginVersion, pluginIndex: number) => (
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
  }
}
export default PluginList;

export async function getStaticPaths() {
  const pluginPack: PluginPack = await pluginsGet('effects');
  const list = [];
  for (const pluginId in pluginPack) {
    const plugin: PluginVersion = getPlugin(pluginPack, pluginId);
    list.push({
      params: {
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
    userId: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const pluginPack = await pluginsGet('effects');
  const list: PluginVersion[] = [];
  for (const pluginId in pluginPack) {
    const plugin: PluginVersion = getPlugin(pluginPack, pluginId);
    console.log(plugin.id?.split('/')[0], params.userId);
    if (plugin.id?.split('/')[0] === params.userId) {
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
