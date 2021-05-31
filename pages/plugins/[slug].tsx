import { Component } from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';
import styles from '../../styles/plugin.module.css';
import { GetStaticPaths } from 'next';
import { withRouter, Router } from 'next/router';
import { PluginInterface, pluginGet, pluginsGet } from '@studiorack/core';
import { idToSlug, slugToId } from '../../node_modules/@studiorack/core/dist/utils';

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
                      src={`https://github.com/${this.state.plugin.repo}/releases/download/${this.state.plugin.release}/${this.state.plugin.files.image.name}`}
                      alt={this.state.plugin.name || ''}
                    />
                  ) : (
                    ''
                  )}
                </div>
                {this.state.plugin.files.audio ? (
                  <audio
                    src={`https://github.com/${this.state.plugin.repo}/releases/download/${this.state.plugin.release}/${this.state.plugin.files.audio.name}`}
                    id="audio"
                  >
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
                <p>{this.state.plugin.description}</p>
                <div className={styles.metadataList}>
                  {/* <div className={styles.metadata}><img className={styles.icon} src={`${this.state.router.basePath}/images/icon-filesize.svg`} alt="Filesize" /> {this.formatBytes(this.state.plugin.size)}</div> */}
                  <div className={styles.metadata}>
                    <img
                      className={styles.icon}
                      src={`${this.state.router.basePath}/images/icon-date.svg`}
                      alt="Date updated"
                    />{' '}
                    {this.timeSince(this.state.plugin.date)} ago
                  </div>
                  <div className={styles.metadata}>
                    <img className={styles.icon} src={`${this.state.router.basePath}/images/icon-tag.svg`} alt="Tags" />
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
                  <a
                    className={`button ${styles.button}`}
                    href={`https://github.com/${this.state.plugin.repo}/releases/download/${this.state.plugin.release}/${this.state.plugin.files.linux.name}`}
                  >
                    Linux
                  </a>
                ) : (
                  ''
                )}
                {this.state.plugin.files.mac ? (
                  <a
                    className={`button ${styles.button}`}
                    href={`https://github.com/${this.state.plugin.repo}/releases/download/${this.state.plugin.release}/${this.state.plugin.files.mac.name}`}
                  >
                    MacOS
                  </a>
                ) : (
                  ''
                )}
                {this.state.plugin.files.win ? (
                  <a
                    className={`button ${styles.button}`}
                    href={`https://github.com/${this.state.plugin.repo}/releases/download/${this.state.plugin.release}/${this.state.plugin.files.win.name}`}
                  >
                    Windows
                  </a>
                ) : (
                  ''
                )}
              </div>
              <div className={`${styles.cell} ${styles.install}`}>
                <p>Install via command line:</p>
                <pre className={styles.codeBox}>studiorack plugin install {this.state.plugin.id}</pre>
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
  const paths = await pluginsGet();
  const list = [];
  for (const pluginId in paths) {
    list.push({
      params: {
        slug: idToSlug(pluginId),
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
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const pluginId = slugToId(params.slug);
  const plugin: PluginInterface = await pluginGet(pluginId);
  console.log(plugin);
  return {
    props: {
      plugin,
    },
  };
}
