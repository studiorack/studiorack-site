// const package = require('./package.json')

module.exports = {
  basePath: (process.env.NODE_ENV === 'production') ? '/studiorack-site' : '',
  generateBuildId: async () => {
    return 'latest' // TODO version the site feed using package.version
  },
}
