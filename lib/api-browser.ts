import { ConfigList, PluginLicense } from '@studiorack/core';
import { configDefaults } from '../node_modules/@studiorack/core/build/config-defaults';

export function getCategories(section: string) {
  // Pass these through later.
  let categories: ConfigList = configDefaults(
    'appFolder',
    'pluginFolder',
    'presetFolder',
    'projectFolder',
  ).pluginInstrumentCategories;
  if (section === 'effects') {
    categories = configDefaults(
      'appFolder',
      'pluginFolder',
      'presetFolder',
      'projectFolder',
    ).pluginEffectCategories;
  }
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
  const licenses: PluginLicense[] = configDefaults(
    'appFolder',
    'pluginFolder',
    'presetFolder',
    'projectFolder',
  ).licenses;
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
