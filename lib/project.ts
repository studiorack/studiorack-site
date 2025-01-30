import { NextRouter } from 'next/router';
import {
  Architecture,
  packageCompatibleFiles,
  PackageInterface,
  PackageVersion,
  RegistryPackages,
  SystemType,
} from '@open-audio-stack/core';
import { getParam } from './plugin';

export function fileContains(pkgVersion: PackageVersion, categories: string[]) {
  return (
    pkgVersion.files.filter(file => {
      return (
        file.contains.filter(format => {
          return categories.includes(format);
        }).length > 0
      );
    }).length > 0
  );
}

export function filterProjects(router: NextRouter, packages: RegistryPackages) {
  const type = getParam(router, 'type');
  const category = getParam(router, 'category');
  const license = getParam(router, 'license');
  const system = getParam(router, 'system');
  const search = getParam(router, 'search');
  const packagesFiltered: PackageInterface[] = [];
  for (const slug in packages) {
    const pkg: PackageInterface = packages[slug];
    const pkgVersion: PackageVersion | undefined = pkg.versions[pkg.version];
    if (pkgVersion) {
      if (type && !type.includes(pkgVersion.type)) continue;
      if (category && !fileContains(pkgVersion, category)) continue;
      if (license && !license.includes(pkgVersion.license)) continue;
      if (system && packageCompatibleFiles(pkgVersion, [Architecture.X64], system as SystemType[]).length === 0)
        continue;
      if (
        search &&
        pkg.slug.toLowerCase().indexOf(search[0].toLowerCase()) === -1 &&
        pkgVersion.name.toLowerCase().indexOf(search[0].toLowerCase()) === -1 &&
        pkgVersion.description.toLowerCase().indexOf(search[0].toLowerCase()) === -1 &&
        pkgVersion.tags.indexOf(search[0].toLowerCase()) === -1
      )
        continue;
      packagesFiltered.push(pkg);
    }
  }
  return packagesFiltered.sort((a: PackageInterface, b: PackageInterface) => {
    return a.versions[a.version].name.localeCompare(b.versions[b.version].name);
  });
}
