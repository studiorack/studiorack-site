const basePath = (process.env.NODE_ENV === 'production') ? '/apm-registry' : '';

module.exports = {
  basePath: basePath,
  env: {
    BASE_PATH: basePath,
  },
}
