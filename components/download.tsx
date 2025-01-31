import styles from '../styles/components/download.module.css';
import { getBasePath } from '../lib/path';
import { PluginFile, PresetFile, ProjectFile, systemTypes } from '@open-audio-stack/core';
import { DownloadsInterface } from '../pages/plugins/[userId]/[pluginId]';

type DownloadsProps = {
  downloads: DownloadsInterface;
};

const Downloads = ({ downloads }: DownloadsProps) => (
  <div className={`${styles.download}`}>
    <p>Download and install manually:</p>
    {Object.keys(downloads).map((system: string) => (
      <div className={styles.downloadSystem}>
        <div className={`${styles.downloadSystemName} ${styles['icon-' + system]}`}>
          {systemTypes.filter(systemType => systemType.value === system)[0].name}
        </div>
        {downloads[system].map((file: PluginFile | PresetFile | ProjectFile) => (
          <div className={styles.downloadFile}>
            <a className={`button ${styles.downloadButton}`} href={file.url} title="Download">
              .{file.format}
              <img
                className={styles.downloadButtonIcon}
                src={`${getBasePath()}/images/icon-download.svg`}
                alt="Download"
                loading="lazy"
              />
            </a>
            <span className={styles.downloadSystemArch}>{file.architectures.join(', ')}</span>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Downloads;
