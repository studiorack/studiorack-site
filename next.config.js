// const package = require('./package.json')

module.exports = {
  basePath: (process.env.NODE_ENV === 'production') ? '/apm-registry' : '',
  generateBuildId: async () => {
    return 'latest' // TODO version the registry feed using package.version
  },
}
