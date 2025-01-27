import { configDefaults, ConfigList, PluginLicense } from '@studiorack/core';

export function getCategories(section: string): ConfigList {
  if (section === 'effects') {
    return {
      all: {
        name: 'All',
        tags: ['All'],
      },
      chorus: {
        name: 'Chorus/Phaser',
        tags: ['Chorus', 'Phaser'],
      },
      compression: {
        name: 'Compression/Distortion',
        tags: ['Compression', 'Distortion', 'Amplifier', 'Amp'],
      },
      eq: {
        name: 'EQ/Pan',
        tags: ['EQ', 'Equalizer', 'Pan'],
      },
      filter: {
        name: 'Filter',
        tags: ['Filter'],
      },
      reverb: {
        name: 'Reverb/Delay',
        tags: ['Reverb', 'Delay'],
      },
    };
  }
  return {
    all: {
      name: 'All',
      tags: ['All'],
    },
    drums: {
      name: 'Drums',
      tags: ['Drums', 'Percussion'],
    },
    guitar: {
      name: 'Guitar',
      tags: ['Guitar', 'String'],
    },
    keys: {
      name: 'Keys',
      tags: ['Keys', 'Piano'],
    },
    orchestral: {
      name: 'Orchestral',
      tags: ['Orchestral', 'Orchestra', 'Strings', 'Woodwind', 'Brass'],
    },
    samplers: {
      name: 'Samplers',
      tags: ['Samplers', 'Sampler', 'Sample'],
    },
    synths: {
      name: 'Synths',
      tags: ['Synths', 'Synth', 'Synthesizer'],
    },
    vocals: {
      name: 'Vocals',
      tags: ['Vocals'],
    },
  };
}

export function getCategoriesLabels(section: string) {
  const categories: ConfigList = getCategories(section);
  // Remove in core library if not needed.
  delete categories['all'];
  return Object.keys(categories)
    .map((key: string) => {
      return {
        label: categories[key].name,
        value: key,
      };
    })
    .sort((a, b) => a.label.localeCompare(b.label));
}

export function getLicenses() {
  return configDefaults('app', 'plugin', 'preset', 'project').licenses;
}

export function getLicensesLabels() {
  const licenses: PluginLicense[] = getLicenses();
  return licenses
    .map((license: PluginLicense) => {
      return {
        label: license.name,
        value: license.key,
      };
    })
    .sort((a, b) => a.label.localeCompare(b.label));
}

export function getPlatforms() {
  return [
    {
      label: 'Linux',
      value: 'linux',
    },
    {
      label: 'Mac',
      value: 'mac',
    },
    {
      label: 'Windows',
      value: 'win',
    },
  ];
}

export function getPlatformsLabels() {
  return getPlatforms();
}
