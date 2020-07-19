// const package = require('./package.json')

module.exports = {
  basePath: (process.env.NODE_ENV === 'production') ? '/studiorack-registry' : '',
  generateBuildId: async () => {
    return 'latest' // TODO version the registry feed using package.version
  },
}
