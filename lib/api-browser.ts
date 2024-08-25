import { ConfigList, PluginLicense } from '@studiorack/core';
import { configDefaults } from '../node_modules/@studiorack/core/build/config-defaults';

export function getCategories(): string[] {
  const categories: ConfigList = configDefaults(
    'appFolder',
    'pluginFolder',
    'presetFolder',
    'projectFolder',
  ).pluginInstrumentCategories;
  return Object.keys(categories)
    .map((key: string) => {
      return categories[key].name;
    })
    .sort((a, b) => a.localeCompare(b));
}

export function getLicenses(): string[] {
  const licenses: PluginLicense[] = configDefaults(
    'appFolder',
    'pluginFolder',
    'presetFolder',
    'projectFolder',
  ).licenses;
  return licenses
    .map((license: PluginLicense) => {
      return license.key;
    })
    .sort((a, b) => a.localeCompare(b));
}

export function getPlatforms(): string[] {
  return ['Linux', 'Mac', 'Windows'];
}
