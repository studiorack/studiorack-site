import {
  ConfigList,
  PluginEntry,
  PluginFiles,
  PluginLicense,
  PluginPack,
  PluginVersion,
  pluginFileUrl,
  pathGetExt,
  pathGetWithoutExt,
} from '@studiorack/core';
import { NextRouter } from 'next/router';
import { includesValue } from './utils';
import { getLicenses } from './api-browser';
import {
  Architecture,
  FileInterface,
  PackageInterface,
  PackageVersion,
  PluginType,
  RegistryPackages,
  SystemType,
} from '@open-audio-stack/core';

export function packageCompatibleFilesMatch(pkg: PackageVersion, archList: Architecture[], sysList: SystemType[]) {
  return pkg.files.filter((file: FileInterface) => {
    const archMatches = file.architectures.filter(architecture => {
      return archList.includes(architecture);
    });
    const sysMatches = file.systems.filter(system => {
      return sysList.includes(system.type);
    });
    return archMatches.length && sysMatches.length;
  });
}

export function filterPlugins(
  types: PluginType[],
  categories: ConfigList,
  packages: RegistryPackages,
  router: NextRouter,
) {
  const category = router.query['category'] as string | string[];
  // Tidy this up later on.
  let categoryTags: string[] = [];
  if (category) {
    if (typeof category === 'string') {
      categoryTags = categories[category].tags;
    } else {
      category.forEach(cat => {
        categoryTags = categoryTags.concat(categories[cat].tags);
      });
    }
  }
  const license = router.query['license'] as string | string[];
  const platforms: string[] | undefined =
    typeof router.query['platform'] === 'string' ? [router.query['platform']] : router.query['platform'];
  const search: string = router.query['search'] as string;

  const packagesFiltered: PackageInterface[] = [];
  for (const slug in packages) {
    const pkg: PackageInterface = packages[slug];
    const pkgVersion: PackageVersion = pkg.versions[pkg.version];
    if (!types.includes(pkgVersion.type as PluginType)) continue;
    if (category && !includesValue(categoryTags, pkgVersion.tags)) continue;
    if (license && !includesValue(license, pkgVersion.license)) continue;
    if (platforms && !packageCompatibleFilesMatch(pkgVersion, [Architecture.X64], platforms as SystemType[]).length)
      continue;
    if (
      search &&
      pkg.slug.toLowerCase().indexOf(search.toLowerCase()) === -1 &&
      pkgVersion.name.toLowerCase().indexOf(search.toLowerCase()) === -1 &&
      pkgVersion.description.toLowerCase().indexOf(search.toLowerCase()) === -1 &&
      pkgVersion.tags.indexOf(search.toLowerCase()) === -1
    )
      continue;
    packagesFiltered.push(pkg);
  }
  return packagesFiltered.sort((a: PackageInterface, b: PackageInterface) => {
    return a.versions[a.version].name.localeCompare(b.versions[b.version].name);
  });
}

export function getPlugin(pluginPack: PluginPack, pluginId: string) {
  const pluginEntry: PluginEntry = pluginPack[pluginId];
  const plugin: PluginVersion = pluginEntry.versions[pluginEntry.version];
  plugin.id = pluginId;
  plugin.version = pluginEntry.version;
  return plugin;
}

export function pluginFileUrlCompressed(plugin: PluginVersion, type: keyof PluginFiles) {
  const fileUrl: string = pluginFileUrl(plugin, type);
  const fileWithoutExt: string = pathGetWithoutExt(fileUrl);
  const fileExt: string = pathGetExt(fileUrl);
  return `${fileWithoutExt}-compact.${fileExt}`;
}

export function pluginLicense(key: string | PluginLicense) {
  if (typeof key !== 'string') return key;
  const licenses: PluginLicense[] = getLicenses();
  let licenseMatch: PluginLicense = licenses[licenses.length - 1];
  licenses.forEach((license: PluginLicense) => {
    if (key === license.key) {
      licenseMatch = license;
      return;
    }
  });
  return licenseMatch;
}
