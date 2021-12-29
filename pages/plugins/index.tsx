import { Component, ChangeEvent } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import styles from '../../styles/plugins.module.css';
import GridItem from '../../components/grid-item';
import { GetStaticProps } from 'next';
import { withRouter, Router } from 'next/router';
import { PluginInterface, pluginLatest, pluginsGet } from '@studiorack/core';

type PluginListProps = {
  plugins: PluginInterface[];
  router: Router;
};

class PluginList extends Component<
  PluginListProps,
  {
    pluginsFiltered: PluginInterface[];
    router: Router;
    query: string;
  }
> {
  constructor(props: PluginListProps) {
    super(props);
    this.state = {
      pluginsFiltered: props.plugins || [],
      router: props.router,
      query: '',
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
          <div className={styles.pluginsHeader}>
            <h3 className={styles.pluginsTitle}>
              Plugins <span className={styles.pluginCount}>({this.state.pluginsFiltered.length})</span>
            </h3>
            <input
              className={styles.pluginsSearch}
              placeholder="Filter by keyword"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </div>
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

export const getStaticProps: GetStaticProps = async () => {
  const plugins = await pluginsGet();
  const list: PluginInterface[] = [];
  for (const pluginId in plugins) {
    const plugin: PluginInterface = pluginLatest(plugins[pluginId]);
    list.push(plugin);
  }
  return {
    props: {
      plugins: list,
    },
  };
};
