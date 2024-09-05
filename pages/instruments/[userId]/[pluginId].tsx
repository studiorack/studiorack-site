import { Component } from 'react';
import Layout from '../../../components/layout';
import Head from 'next/head.js';
import { GetStaticPaths } from 'next';
import { withRouter, Router } from 'next/router.js';
import { PluginVersion, PluginPack, pluginFileUrl, pluginGet, pluginsGet } from '@studiorack/core';
import { pageTitle } from '../../../lib/utils';
import Details from '../../../components/details';

declare global {
  interface Window {
    Sfz: any;
  }
}

type PluginProps = {
  plugin: PluginVersion;
  router: Router;
};

class PluginPage extends Component<
  PluginProps,
  {
    router: Router;
    plugin: PluginVersion;
  }
> {
  constructor(props: PluginProps) {
    super(props);
    this.state = {
      plugin: props.plugin,
      router: props.router,
    };
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>{pageTitle(['Instruments', this.state.plugin.name])}</title>
          <meta name="description" content={this.state.plugin.description || ''} />
          <meta name="og:image" content={pluginFileUrl(this.state.plugin, 'image')} />
          <meta name="og:title" content={this.state.plugin.name || ''} />
        </Head>
        <Details plugin={this.state.plugin} type="effects" />
      </Layout>
    );
  }
}
export default withRouter(PluginPage);

export const getStaticPaths: GetStaticPaths = async () => {
  const pluginPack: PluginPack = await pluginsGet('instruments');
  const paths = [];
  for (const pluginFullId in pluginPack) {
    const [userId, pluginId] = pluginFullId.split('/');
    paths.push({
      params: {
        pluginId,
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
    pluginId: string;
    userId: string;
  };
};

export async function getStaticProps({ params }: Params) {
  return {
    props: {
      plugin: await pluginGet(`${params.userId}/${params.pluginId}`),
    },
  };
}
