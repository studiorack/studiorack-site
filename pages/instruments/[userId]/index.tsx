import { Component } from 'react';
import Head from 'next/head';
import Layout from '../../../components/layout';
import { PluginVersion, PluginPack, pluginsGet } from '@studiorack/core';
import { getPlugin } from '../../../lib/plugin';
import { pageTitle } from '../../../lib/utils';
import { GetStaticPaths } from 'next';
import List from '../../../components/list';

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
          <title>{pageTitle(['Instruments', this.state.userId])}</title>
        </Head>
        <List filters={false} plugins={this.state.pluginsFiltered} type="instruments" title={this.state.userId} />
      </Layout>
    );
  }
}
export default PluginList;

export const getStaticPaths: GetStaticPaths = async () => {
  const pluginPack: PluginPack = await pluginsGet('instruments');
  const paths = [];
  for (const pluginFullId in pluginPack) {
    const [userId] = pluginFullId.split('/');
    paths.push({
      params: {
        userId,
      },
    });
  }
  return {
    paths,
    fallback: false,
  };
};

type Params = {
  params: {
    userId: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const pluginPack: PluginPack = await pluginsGet('instruments');
  const plugins: PluginVersion[] = [];
  for (const pluginId in pluginPack) {
    if (pluginId.split('/')[0] === params.userId) {
      plugins.push(getPlugin(pluginPack, pluginId));
    }
  }
  return {
    props: {
      plugins,
      userId: params.userId,
    },
  };
}
