import { Component, ChangeEvent } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import styles from '../../styles/plugins.module.css';
import GridItem from '../../components/grid-item';
import { GetStaticProps } from 'next';
import { PluginCategory, PluginInterface, pluginLatest, PluginPack, pluginsGet } from '@studiorack/core';
import { configDefaults } from '../../node_modules/@studiorack/core/dist/config-defaults';

type PluginListProps = {
  category: string;
  pluginTypes: { [property: string]: PluginCategory };
  plugins: PluginInterface[];
  pluginsFiltered: PluginInterface[];
  query: string;
};

class PluginList extends Component<
  PluginListProps,
  {
    category: string;
    pluginTypes: { [property: string]: PluginCategory };
    plugins: PluginInterface[];
    pluginsFiltered: PluginInterface[];
    query: string;
  }
> {
  constructor(props: PluginListProps) {
    super(props);
    this.state = {
      category: 'all',
      pluginTypes: configDefaults().pluginInstrumentCategories,
      plugins: props.plugins || [],
      pluginsFiltered: props.pluginsFiltered || [],
      query: '',
    };
  }

  filterPlugins = () => {
    console.log('filterPlugins', this.state);
    return this.state.plugins.filter((plugin: PluginInterface) => {
      const matchingTags = plugin.tags.filter((element) =>
        this.state.pluginTypes[this.state.category].tags.includes(element)
      );
      if (
        (this.state.category === 'all' || matchingTags.length > 0) &&
        (plugin.name.toLowerCase().indexOf(this.state.query) !== -1 ||
          plugin.description.toLowerCase().indexOf(this.state.query) !== -1 ||
          plugin.tags.includes(this.state.query))
      ) {
        return plugin;
      }
      return false;
    });
  };

  handleChange = (event: ChangeEvent) => {
    const el = event.target as HTMLInputElement;
    const query = el.value ? el.value.toLowerCase() : '';
    this.setState({ query }, () => {
      this.setState({ pluginsFiltered: this.filterPlugins() });
    });
  };

  isSelected = (path: string) => {
    return this.state.category === path ? 'selected' : '';
  };

  selectCategory = (event: React.MouseEvent): void => {
    const category = (event.currentTarget as HTMLTextAreaElement).getAttribute('data-category') || '';
    this.setState({ category }, () => {
      this.setState({ pluginsFiltered: this.filterPlugins() });
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
          <ul className={styles.pluginsCategory}>
            {Object.keys(this.state.pluginTypes).map((projectTypeKey: string, projectTypeIndex: number) => (
              <li key={`${projectTypeKey}-${projectTypeIndex}`}>
                <a
                  data-category={projectTypeKey}
                  onClick={this.selectCategory}
                  className={this.isSelected(projectTypeKey)}
                >
                  {this.state.pluginTypes[projectTypeKey].name}
                </a>
              </li>
            ))}
          </ul>
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

export const getStaticProps: GetStaticProps = async () => {
  const plugins: PluginPack = await pluginsGet();
  const list: PluginInterface[] = [];
  for (const pluginId in plugins) {
    const plugin: PluginInterface = pluginLatest(plugins[pluginId]);
    list.push(plugin);
  }
  return {
    props: {
      plugins: list,
      pluginsFiltered: list,
    },
  };
};
