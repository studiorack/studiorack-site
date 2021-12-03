import { Component } from 'react';
import Layout from '../../../../components/layout';
import Head from 'next/head';
import styles from '../../../../styles/plugin.module.css';
import { GetStaticPaths } from 'next';
import { withRouter, Router } from 'next/router';
import { PluginInterface, pluginGet, pluginsGet, PluginPack, pluginLatest } from '@studiorack/core';
import { pluginFileUrl } from '../../../../node_modules/@studiorack/core/dist/utils';

type PluginProps = {
  plugin: PluginInterface;
  router: Router;
};

class PluginPage extends Component<
  PluginProps,
  {
    isPlaying: boolean;
    router: Router;
    plugin: PluginInterface;
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

  formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  timeSince(date: string) {
    const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) {
      return Math.floor(interval) + ' years';
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + ' months';
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + ' days';
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + ' hours';
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + ' minutes';
    }
    return Math.floor(seconds) + ' seconds';
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
          <title>{this.state.plugin.name || ''}</title>
        </Head>
        <article>
          <div className={styles.header}>
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
                  { this.state.plugin.tags.includes('sfz') ? (
                    <span> (This instrument needs to be loaded into a <a href="/plugins/studiorack_sfizz_sfizz" target="_blank">SFZ player</a>)</span>
                    ) : (
                      ''
                    )}
                </p>
                <div className={styles.metadataList}>
                  {/* <div className={styles.metadata}><img className={styles.icon} src={`${this.state.router.basePath}/images/icon-filesize.svg`} alt="Filesize" loading="lazy" /> {this.formatBytes(this.state.plugin.size)}</div> */}
                  <div className={styles.metadata}>
                    <img
                      className={styles.icon}
                      src={`${this.state.router.basePath}/images/icon-date.svg`}
                      alt="Date updated"
                      loading="lazy"
                    />{' '}
                    {this.timeSince(this.state.plugin.date)} ago
                  </div>
                  <div className={styles.metadata}>
                    <img
                      className={styles.icon}
                      src={`${this.state.router.basePath}/images/icon-license.svg`}
                      alt="License"
                      loading="lazy"
                    />{' '}
                    {this.state.plugin.license ? (
                      <a href={this.state.plugin.license.url} target="_blank">
                        {this.state.plugin.license.name}
                      </a>
                    ) : (
                      'none'
                    )}
                  </div>
                  <div className={styles.metadata}>
                    <img className={styles.icon} src={`${this.state.router.basePath}/images/icon-tag.svg`} alt="Tags" loading="lazy" />
                    <ul className={styles.tags}>
                      {this.state.plugin.tags.map((tag: string, tagIndex: number) => (
                        <li className={styles.tag} key={`${tag}-${tagIndex}`}>
                          {tag},
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.options}>
            <div className={styles.row}>
              <div className={`${styles.cell} ${styles.download}`}>
                <p>Download and install manually:</p>
                {this.state.plugin.files.linux ? (
                  <a className={`button ${styles.button}`} href={pluginFileUrl(this.state.plugin, 'linux')}>
                    Linux
                  </a>
                ) : (
                  ''
                )}
                {this.state.plugin.files.mac ? (
                  <a className={`button ${styles.button}`} href={pluginFileUrl(this.state.plugin, 'mac')}>
                    MacOS
                  </a>
                ) : (
                  ''
                )}
                {this.state.plugin.files.win ? (
                  <a className={`button ${styles.button}`} href={pluginFileUrl(this.state.plugin, 'win')}>
                    Windows
                  </a>
                ) : (
                  ''
                )}
              </div>
              <div className={`${styles.cell} ${styles.install}`}>
                <p>Install via <a href="https://www.npmjs.com/package/@studiorack/cli" target="_blank">StudioRack CLI</a>:</p>
                { this.state.plugin.tags.includes('sfz') ? (
                  <pre className={styles.codeBox}>studiorack plugin install studiorack/sfizz/sfizz</pre>
                ) : (
                  ''
                )}
                <pre className={styles.codeBox}>
                  studiorack plugin install {this.state.plugin.repo}/{this.state.plugin.id}
                </pre>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    );
  }
}
export default withRouter(PluginPage);

export const getStaticPaths: GetStaticPaths = async () => {
  const pluginPack: PluginPack = await pluginsGet();
  const list = [];
  for (const id in pluginPack) {
    const plugin: PluginInterface = pluginLatest(pluginPack[id]);
    list.push({
      params: {
        pluginId: plugin.id,
        repoId: plugin.repo.split('/')[1],
        userId: plugin.repo.split('/')[0]
      },
    });
  }
  return {
    paths: list,
    fallback: false,
  };
};

type Params = {
  params: {
    pluginId: string;
    repoId: string;
    userId: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const plugin: PluginInterface = await pluginGet(`${params.userId}/${params.repoId}/${params.pluginId}`);
  return {
    props: {
      plugin,
    },
  };
}
