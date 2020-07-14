import repos from './repos.json'

export interface Plugin {
  author: string,
  description: string,
  homepage: string,
  id: string,
  name: string,
  slug: string,
  tags: string,
  version: string
}

function toSlug(input: string) {
  return input.replace('/', '_')
}

function fromSlug(input: string) {
  return input.replace('_', '/')
}

export async function getPlugins() {
  return await Promise.all(repos.map(async (repo) => {
    const url = `https://github.com/${repo}/releases/latest/download/plugin.json`
    const res = await fetch(url)
    console.log(repo, url)
    return res.json().then((plugin) => {
      plugin.id = repo
      plugin.slug = toSlug(repo)
      return plugin
    })
  }))
}

export function getAllPluginPaths() {
  return repos.map((repo) => {
    return {
      params: {
        slug: toSlug(repo)
      }
    }
  })
}

export async function getPluginData(slug: string) {
  const repo = fromSlug(slug)
  const url = `https://github.com/${repo}/releases/latest/download/plugin.json`
  const res = await fetch(url)
  console.log(repo, url)
  return res.json().then((plugin) => {
    plugin.id = repo
    plugin.slug = toSlug(repo)
    return plugin
  })
}
