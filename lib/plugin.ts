import { configDefaults } from '../node_modules/@studiorack/core/build/config-defaults';
import {
  PluginEntry,
  PluginLicense,
  PluginPack,
  PluginVersion,
} from '../node_modules/@studiorack/core/build/types/plugin';
import { NextRouter } from 'next/router';
import { includesValue } from './utils';

// Temporary code until refactor.
export function filterPlugins(
  plugins: PluginVersion[],
  router: NextRouter,
): PluginVersion[] {
  const category = (router.query.category as string | string[]) || 'all';
  const categories = configDefaults(
    'appFolder',
    'pluginFolder',
    'presetFolder',
    'projectFolder',
  ).pluginInstrumentCategories;
  const search = (router.query.search as string) || '';
  let categoryTags: string[] = [];
  if (typeof category === 'string') {
    categoryTags = categories[category].tags;
  } else {
    category.forEach(category => {
      categoryTags = categoryTags.concat(categories[category].tags);
    });
  }
  console.log('filterPlugins', categoryTags, search);

  return plugins.filter((plugin: PluginVersion) => {
    if (
      router.query['license'] &&
      !includesValue(router.query['license'], pluginLicense(plugin.license).key)
    )
      return false;
    // if (router.query['platform'] && !plugin.files[router.query['platform']]) return false;
    const matchingTags = plugin.tags.filter(pluginTag =>
      categoryTags.includes(pluginTag),
    );
    if (
      (category === 'all' || matchingTags.length > 0) &&
      (plugin.author.toLowerCase().indexOf(search) !== -1 ||
        plugin.id?.toLowerCase().indexOf(search) !== -1 ||
        plugin.name.toLowerCase().indexOf(search) !== -1 ||
        plugin.description.toLowerCase().indexOf(search) !== -1 ||
        plugin.tags.includes(search))
    ) {
      return plugin;
    }
    return false;
  });
}

export function getPlugin(pluginPack: PluginPack, pluginId: string) {
  const pluginEntry: PluginEntry = pluginPack[pluginId];
  const plugin: PluginVersion = pluginEntry.versions[pluginEntry.version];
  plugin.id = pluginId;
  plugin.version = pluginEntry.version;
  return plugin;
}

export function pluginLicense(key: string | PluginLicense) {
  if (typeof key !== 'string') return key;
  const licenses: PluginLicense[] = configDefaults(
    'appFolder',
    'pluginFolder',
    'presetFolder',
    'projectFolder',
  ).licenses;
  let licenseMatch: PluginLicense = licenses[licenses.length - 1];
  licenses.forEach((license: PluginLicense) => {
    if (key === license.key) {
      licenseMatch = license;
      return;
    }
  });
  return licenseMatch;
}
