import styles from '../styles/components/download.module.css';
import { getBasePath } from '../lib/path';
import { formatBytes } from '../lib/utils';
import { fileTypes, PackageFile, PackageFileMap, pathGetExt, pathGetFilename, systemTypes } from '@open-audio-stack/core';

type DownloadsProps = {
  downloads: PackageFileMap;
};

// Short, DAW-familiar labels for what a file contains. Falls back to the raw value
// (uppercased) for anything not listed here, e.g. preset/project-only formats.
const FORMAT_LABELS: { [key: string]: string } = {
  aax: 'AAX',
  app: 'Standalone',
  clap: 'CLAP',
  component: 'AU',
  dll: 'VST',
  elf: 'Standalone',
  exe: 'Standalone',
  jsfx: 'JSFX',
  lv2: 'LV2',
  rta: 'RTA',
  sf2: 'SoundFont2',
  sfz: 'SFZ',
  so: 'VST',
  tdm: 'TDM',
  vst: 'VST',
  vst3: 'VST3',
};

// Row order within each OS section - most commonly used formats first.
const FORMAT_ORDER = ['vst3', 'clap', 'component', 'lv2', 'vst', 'dll', 'so', 'aax', 'rta', 'elf', 'app', 'exe'];

function formatSortIndex(format: string) {
  const index = FORMAT_ORDER.indexOf(format);
  return index === -1 ? FORMAT_ORDER.length : index;
}

// Sorts a file's own contained formats into the same priority order used for row order,
// so e.g. "elf, clap, lv2, so, vst3" in the source data renders as "VST3, CLAP, LV2, VST, Standalone".
function sortedContains(contains: string[]) {
  return [...contains].sort((a, b) => formatSortIndex(a) - formatSortIndex(b));
}

function formatLabels(contains: string[]) {
  return sortedContains(contains).map(format => FORMAT_LABELS[format] || format.toUpperCase());
}

// pathGetExt only returns the final segment (e.g. "xz"), which loses information for
// compound archive extensions like ".tar.xz" or ".tar.gz". Display-only - core's pathGetExt
// stays as-is since it's also used to match single-segment FileFormat values (e.g. 'gz').
function displayExt(url: string) {
  const ext = pathGetExt(url);
  const filename = pathGetFilename(url).toLowerCase();
  return ext && filename.endsWith(`.tar.${ext.toLowerCase()}`) ? `tar.${ext}` : ext;
}

const Downloads = ({ downloads }: DownloadsProps) => (
  <div className={`${styles.download}`}>
    <p>Download and install manually:</p>
    {Object.keys(downloads).map((system: string) => (
      <div className={styles.downloadSystem} key={system}>
        <div className={`${styles.downloadSystemName} ${styles['icon-' + system]}`}>
          {systemTypes.filter(systemType => systemType.value === system)[0].name}
        </div>
        <div className={styles.downloadFiles}>
          {[...downloads[system]]
            .sort((a: PackageFile, b: PackageFile) => {
              const indexDiff = formatSortIndex(sortedContains(a.contains)[0]) - formatSortIndex(sortedContains(b.contains)[0]);
              return indexDiff !== 0
                ? indexDiff
                : formatLabels(a.contains).join(', ').localeCompare(formatLabels(b.contains).join(', '));
            })
            .map((file: PackageFile) => (
              <div className={styles.downloadFile} key={`${file.url}-${file.architectures.join(',')}`}>
                <div className={styles.downloadFormat}>{formatLabels(file.contains).join(', ')}</div>
                <div className={styles.downloadMeta}>
                  <div className={styles.downloadArch}>
                    {file.architectures.map((arch: string) => (
                      <span className={styles.archBadge} key={arch}>
                        {arch}
                      </span>
                    ))}
                  </div>
                  <a
                    className={`button ${styles.downloadButton}`}
                    href={file.url}
                    title={`${pathGetFilename(file.url)} — ${formatBytes(file.size)} (${
                      fileTypes.filter(fileType => fileType.value === file.type)[0].name
                    })`}
                  >
                    {displayExt(file.url) ? `.${displayExt(file.url)}` : 'file'}
                    <img
                      className={styles.downloadButtonIcon}
                      src={`${getBasePath()}/images/icon-download.svg`}
                      alt="Download"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    ))}
  </div>
);

export default Downloads;
