import repos from './repos.json'

export interface Plugin {
  author: string,
  description: string,
  homepage: string,
  id: string,
  name: string,
  tags: string,
  version: string
}

export async function getPlugins() {
  return await Promise.all(repos.map(async (repo) => {
    const url = `https://github.com/${repo}/releases/latest/download/plugin.json`;
    const res = await fetch(url)
    console.log(repo, url)
    return res.json().then((plugin) => {
      plugin.id = repo.split('/')[1]
      return plugin
    })
  }))
}
