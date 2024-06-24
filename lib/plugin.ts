import { PluginCategory, PluginVersion } from '@studiorack/core';

function filterPlugins(
  category: string,
  plugins: PluginVersion[],
  pluginTypes: { [property: string]: PluginCategory },
  query: string,
): PluginVersion[] {
  console.log('filterPlugins', category, query);
  return plugins.filter((plugin: PluginVersion) => {
    const matchingTags = plugin.tags.filter(element =>
      pluginTypes[category].tags.includes(element),
    );
    if (
      (category === 'all' || matchingTags.length > 0) &&
      (plugin.name.toLowerCase().indexOf(query) !== -1 ||
        plugin.description.toLowerCase().indexOf(query) !== -1 ||
        plugin.tags.includes(query))
    ) {
      return plugin;
    }
    return false;
  });
}

export { filterPlugins };
