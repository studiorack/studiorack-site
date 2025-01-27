import {
  PluginEntry,
  PluginFiles,
  PluginLicense,
  PluginPack,
  PluginVersion,
  pluginFileUrl,
  pathGetExt,
  pathGetWithoutExt,
  ConfigList,
} from '@studiorack/core';
import { NextRouter } from 'next/router';
import { getCategories, getLicenses } from './api-browser';
import {
  Architecture,
  FileInterface,
  packageCompatibleFiles,
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

export function getParam(router: NextRouter, field: string) {
  return typeof router.query[field] === 'string' ? [router.query[field]] : router.query[field];
}

export function filterPlugins(types: PluginType[], router: NextRouter, packages: RegistryPackages) {
  const category = getParam(router, 'category');
  const categories: ConfigList = getCategories(types[0] === PluginType.Effect ? 'effects' : 'instruments');
  let categoryTags: string[] = [];
  if (category) {
    category.forEach(cat => {
      categoryTags = categoryTags.concat(categories[cat].tags.map(tag => tag.toLowerCase()));
    });
  }
  const license = getParam(router, 'license');
  const platform = getParam(router, 'platform');
  const search = router.query['search'] as string;

  const packagesFiltered: PackageInterface[] = [];
  for (const slug in packages) {
    const pkg: PackageInterface = packages[slug];
    const pkgVersion: PackageVersion | undefined = pkg.versions[pkg.version];
    if (pkgVersion) {
      const tagsLower: string[] = pkgVersion.tags.map(tag => tag.toLowerCase());
      if (types && !types.includes(pkgVersion.type as PluginType)) continue;
      if (category && categoryTags.filter(cat => tagsLower.includes(cat)).length === 0) continue;
      if (license && !license.includes(pkgVersion.license)) continue;
      if (platform && packageCompatibleFiles(pkgVersion, [Architecture.X64], platform as SystemType[]).length === 0)
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
