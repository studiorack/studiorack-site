import { Component, ChangeEvent, SyntheticEvent } from 'react';
import Head from 'next/head';
import Crumb from '../../../../components/crumb';
import Layout, { siteTitle } from '../../../../components/layout';
import styles from '../../../../styles/plugins.module.css';
import Link from 'next/link';
import { withRouter, Router } from 'next/router';
import { PluginInterface, pluginLatest, PluginPack, pluginsGet } from '@studiorack/core';
import { pluginFileUrl } from '../../../../node_modules/@studiorack/core/dist/utils';

type PluginListProps = {
  plugins: PluginInterface[];
  router: Router;
  repoId: string;
  userId: string;
};

class PluginList extends Component<
  PluginListProps,
  {
    pluginsFiltered: PluginInterface[];
    router: Router;
    query: string;
    repoId: string;
    userId: string;
  }
> {
  constructor(props: PluginListProps) {
    super(props);
    this.state = {
      pluginsFiltered: props.plugins || [],
      router: props.router,
      query: '',
      repoId: props.repoId,
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

  imageError = (event: SyntheticEvent) => {
    const el = event.target as HTMLImageElement;
    const fallback = `${this.state.router.basePath}/images/plugin.png`;
    if (el.getAttribute('src') !== fallback) {
      el.setAttribute('src', fallback);
    }
    return undefined;
  };

  render() {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={styles.plugins}>
          <Crumb items={['plugins', this.state.userId]}></Crumb>
          <h2>{this.state.repoId}</h2>
          <div className={styles.pluginsList}>
            {this.state.pluginsFiltered.map((plugin: PluginInterface, pluginIndex: number) => (
              <Link
                href="/plugins/[userId]/[repoId]/[pluginId]"
                as={`/plugins/${plugin.repo}/${plugin.id}`}
                key={`${plugin.repo}/${plugin.id}-${pluginIndex}`}
              >
                <div className={styles.plugin}>
                  <div className={styles.pluginDetails}>
                    <div className={styles.pluginHead}>
                      <h4 className={styles.pluginTitle}>
                        {plugin.name} <span className={styles.pluginVersion}>v{plugin.version}</span>
                      </h4>
                      <span className={styles.pluginButton}>
                        <img
                          className={styles.pluginButtonIcon}
                          src={`${this.state.router.basePath}/images/icon-download.svg`}
                          alt="Download"
                          loading="lazy"
                        />
                      </span>
                    </div>
                    <ul className={styles.pluginTags}>
                      <img
                        className={styles.pluginIcon}
                        src={`${this.state.router.basePath}/images/icon-tag.svg`}
                        alt="Tags"
                        loading="lazy"
                      />
                      {plugin.tags.map((tag: string, tagIndex: number) => (
                        <li className={styles.pluginTag} key={`${tag}-${tagIndex}-${pluginIndex}`}>
                          {tag},
                        </li>
                      ))}
                    </ul>
                  </div>
                  {plugin.files.image ? (
                    <img
                      className={styles.pluginImage}
                      src={pluginFileUrl(plugin, 'image')}
                      alt={plugin.name}
                      onError={this.imageError}
                      loading="lazy"
                    />
                  ) : (
                    ''
                  )}
                </div>
              </Link>
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
        repoId: plugin.repo.split('/')[1],
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
    repoId: string;
    userId: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const plugins = await pluginsGet();
  const list: PluginInterface[] = [];
  for (const pluginId in plugins) {
    const plugin: PluginInterface = pluginLatest(plugins[pluginId]);
    if (plugin.repo === `${params.userId}/${params.repoId}`) {
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
