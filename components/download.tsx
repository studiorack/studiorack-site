import styles from '../styles/components/download.module.css';
import { getBasePath } from '../lib/path';
import { PackageVersion, PluginFile, PresetFile, ProjectFile, System } from '@open-audio-stack/core';
// import { pluginFileUrlCompressed } from '../lib/plugin';

type DownloadsProps = {
  plugin: PackageVersion;
};

const Downloads = ({ plugin }: DownloadsProps) => (
  <div className={`${styles.download}`}>
    <p>Download and install manually:</p>
    {plugin.tags.includes('sfz') || plugin.tags.includes('sf2') ? (
      <span>
        <a className={`button ${styles.downloadButton}`} href={plugin.files[0].url} title="High-quality">
          High-quality
          <img
            className={styles.downloadButtonIcon}
            src={`${getBasePath()}/images/icon-download.svg`}
            alt="Download"
            loading="lazy"
          />
        </a>
        {/* <a className={`button ${styles.downloadButton}`} href={pluginFileUrlCompressed(plugin, 'linux')} title="Compressed">
          Compressed
          <img
            className={styles.downloadButtonIcon}
            src={`${getBasePath()}/images/icon-download.svg`}
            alt="Download"
            loading="lazy"
          />
        </a> */}
      </span>
    ) : (
      <span>
        {plugin.files.map((file: PluginFile | PresetFile | ProjectFile) => (
          <a className={`button ${styles.downloadButton}`} href={file.url} title="Linux x64">
            {file.systems.map((system: System) => (
              <span key={system.type}>{system.type} </span>
            ))}
            ({file.architectures.join(', ')})
            <img
              className={styles.downloadButtonIcon}
              src={`${getBasePath()}/images/icon-download.svg`}
              alt="Download"
              loading="lazy"
            />
          </a>
        ))}
      </span>
    )}
  </div>
);

export default Downloads;
