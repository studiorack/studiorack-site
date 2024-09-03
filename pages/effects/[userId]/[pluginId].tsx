import { Component } from 'react';
import Crumb from '../../../components/crumb';
import Layout from '../../../components/layout';
import Head from 'next/head';
import styles from '../../../styles/plugin.module.css';
import { GetStaticPaths } from 'next';
import { withRouter, Router } from 'next/router';
import { PluginVersion, pluginFileUrl, pluginGet, pluginsGet, PluginPack } from '@studiorack/core';
import Dependency from '../../../components/dependency';
import Downloads from '../../../components/download';
import { pluginLicense } from '../../../lib/plugin';
import { pageTitle, timeSince } from '../../../lib/utils';
import Code from '../../../components/code';

type PluginProps = {
  plugin: PluginVersion;
  router: Router;
};

class PluginPage extends Component<
  PluginProps,
  {
    isPlaying: boolean;
    router: Router;
    plugin: PluginVersion;
  }
> {
  constructor(props: PluginProps) {
    super(props);
    this.state = {
      isPlaying: false,
      plugin: props.plugin,
      router: props.router,
    };
  }

  play = () => {
    const el = document.getElementById('audio') as HTMLAudioElement;
    if (el.paused) {
      el.removeEventListener('ended', this.ended);
      el.addEventListener('ended', this.ended);
      el.currentTime = 0;
      el.play();
      this.setState({ isPlaying: true });
    }
  };

  pause = () => {
    const el = document.getElementById('audio') as HTMLAudioElement;
    if (!el.paused) {
      el.pause();
      this.setState({ isPlaying: false });
    }
  };

  ended = () => {
    this.setState({ isPlaying: false });
  };

  getPlayButton() {
    if (this.state.isPlaying) {
      return (
        <img
          className={styles.imagePlay}
          src={`${this.state.router.basePath}/images/icon-pause.svg`}
          alt="Pause"
          onClick={this.pause}
        />
      );
    } else {
      return (
        <img
          className={styles.imagePlay}
          src={`${this.state.router.basePath}/images/icon-play.svg`}
          alt="Play"
          onClick={this.play}
        />
      );
    }
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>{pageTitle(['Effects', this.state.plugin.name])}</title>
          <meta name="description" content={this.state.plugin.description || ''} />
          <meta name="og:image" content={pluginFileUrl(this.state.plugin, 'image')} />
          <meta name="og:title" content={this.state.plugin.name || ''} />
        </Head>
        <article>
          <div className={styles.header}>
            <div className={styles.headerInner2}>
              <Crumb
                items={[
                  'effects',
                  this.state.plugin.id?.split('/')[0] || '',
                  this.state.plugin.id?.split('/')[1] || '',
                ]}
              ></Crumb>
            </div>
            <div className={styles.headerInner}>
              <div className={styles.media}>
                <div className={styles.imageContainer}>
                  {this.state.plugin.files.audio ? this.getPlayButton() : ''}
                  {this.state.plugin.files.image ? (
                    <img
                      className={styles.image}
                      src={pluginFileUrl(this.state.plugin, 'image')}
                      alt={this.state.plugin.name || ''}
                    />
                  ) : (
                    ''
                  )}
                </div>
                {this.state.plugin.files.audio ? (
                  <audio src={pluginFileUrl(this.state.plugin, 'audio')} id="audio">
                    Your browser does not support the audio element.
                  </audio>
                ) : (
                  ''
                )}
              </div>
              <div className={styles.details}>
                <h3 className={styles.title}>
                  {this.state.plugin.name || ''} <span className={styles.version}>v{this.state.plugin.version}</span>
                </h3>
                <p className={styles.author}>
                  By{' '}
                  <a href={this.state.plugin.homepage} target="_blank">
                    {this.state.plugin.author}
                  </a>
                </p>
                <p>
                  {this.state.plugin.description}
                  <Dependency plugin={this.state.plugin} />
                </p>
                <div className={styles.metadataList}>
                  {/* <div className={styles.metadata}><img className={styles.icon} src={`${this.state.router.basePath}/images/icon-filesize.svg`} alt="Filesize" loading="lazy" /> {formatBytes(this.state.plugin.files.linux.size)}</div> */}
                  <div className={styles.metadata}>
                    <img
                      className={styles.icon}
                      src={`${this.state.router.basePath}/images/icon-date.svg`}
                      alt="Date updated"
                      loading="lazy"
                    />{' '}
                    {timeSince(this.state.plugin.date)} ago
                  </div>
                  <div className={styles.metadata}>
                    <img
                      className={styles.icon}
                      src={`${this.state.router.basePath}/images/icon-license.svg`}
                      alt="License"
                      loading="lazy"
                    />{' '}
                    {this.state.plugin.license ? (
                      <a href={pluginLicense(this.state.plugin.license).url} target="_blank">
                        {pluginLicense(this.state.plugin.license).name}
                      </a>
                    ) : (
                      'none'
                    )}
                  </div>
                  <div className={styles.metadata}>
                    <img
                      className={styles.icon}
                      src={`${this.state.router.basePath}/images/icon-tag.svg`}
                      alt="Tags"
                      loading="lazy"
                    />
                    <ul className={styles.tags}>
                      {this.state.plugin.tags.map((tag: string, tagIndex: number) => (
                        <li className={styles.tag} key={`${tag}-${tagIndex}`}>
                          {tag}
                          {tagIndex !== this.state.plugin.tags.length - 1 ? ',' : ''}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.metadataFooter}>
                    <a href={this.state.plugin.homepage} target="_blank">
                      <button className="button button-clear">View source</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.options}>
            <div className={styles.row}>
              <Downloads plugin={this.state.plugin} />
              <Code plugin={this.state.plugin} />
            </div>
          </div>
        </article>
      </Layout>
    );
  }
}
export default withRouter(PluginPage);

export const getStaticPaths: GetStaticPaths = async () => {
  const pluginPack: PluginPack = await pluginsGet('effects');
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
