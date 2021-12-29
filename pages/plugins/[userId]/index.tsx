import { Component, ChangeEvent } from 'react';
import Head from 'next/head';
import Crumb from '../../../components/crumb';
import Layout, { siteTitle } from '../../../components/layout';
import styles from '../../../styles/plugins.module.css';
import GridItem from '../../../components/grid-item';
import { withRouter, Router } from 'next/router';
import { PluginInterface, pluginLatest, PluginPack, pluginsGet } from '@studiorack/core';

type PluginListProps = {
  plugins: PluginInterface[];
  router: Router;
  userId: string;
};

class PluginList extends Component<
  PluginListProps,
  {
    pluginsFiltered: PluginInterface[];
    router: Router;
    query: string;
    userId: string;
  }
> {
  constructor(props: PluginListProps) {
    super(props);
    this.state = {
      pluginsFiltered: props.plugins || [],
      router: props.router,
      query: '',
      userId: props.userId,
    };
  }

  handleChange = (event: ChangeEvent) => {
    const el = event.target as HTMLInputElement;
    const query = el.value ? el.value.toLowerCase() : '';
    const filtered = this.props.plugins.filter((plugin: PluginInterface) => {
      if (
        plugin.name.toLowerCase().indexOf(query) !== -1 ||
        plugin.description.toLowerCase().indexOf(query) !== -1 ||
        plugin.tags.filter((tag) => tag.toLowerCase().indexOf(query) !== -1).length
      ) {
        return plugin;
      }
      return false;
    });
    this.setState({
      pluginsFiltered: filtered || [],
      query,
    });
  };

  render() {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={styles.plugins}>
          <Crumb items={['plugins']}></Crumb>
          <h2>{this.state.userId}</h2>
          <div className={styles.pluginsList}>
            {this.state.pluginsFiltered.map((plugin: PluginInterface, pluginIndex: number) => (
              <GridItem plugin={plugin} pluginIndex={pluginIndex}></GridItem>
            ))}
          </div>
        </section>
      </Layout>
    );
  }
}
export default withRouter(PluginList);

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
