import styles from '../styles/components/download.module.css';
import { getBasePath } from '../lib/path';
import { PackageVersion, PluginFile, PresetFile, ProjectFile, System, systemTypes } from '@open-audio-stack/core';

type DownloadsProps = {
  plugin: PackageVersion;
};

const Downloads = ({ plugin }: DownloadsProps) => (
  <div className={`${styles.download}`}>
    <p>Download and install manually:</p>
    {/* {plugin.tags.includes('sfz') || plugin.tags.includes('sf2') ? (
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
      </span>
    ) : ( */}
    <span>
      {plugin.files.map((file: PluginFile | PresetFile | ProjectFile) => (
        <div className={styles.downloadFile}>
          {file.systems.map((system: System) => (
            <div className={`${styles.downloadSystem} ${styles['icon-' + system.type]}`}>
              <span className={styles.downloadSystemName}>
                {systemTypes.filter(systemType => systemType.value === system.type)[0].name}
              </span>
              <span className={styles.downloadSystemArch}>{file.architectures.join(', ')}</span>
            </div>
          ))}
          <a className={`button ${styles.downloadButton}`} href={file.url} title="Download">
            <img
              className={styles.downloadButtonIcon}
              src={`${getBasePath()}/images/icon-download.svg`}
              alt="Download"
              loading="lazy"
            />
          </a>
        </div>
      ))}
    </span>
    {/* )} */}
  </div>
);

export default Downloads;
