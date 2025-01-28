import { configDefaults, PluginLicense } from '@studiorack/core';

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
