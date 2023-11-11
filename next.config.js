module.exports = {
  async redirects() {
    return [
      {
        source: '/:path(.{1,})', // this will redirect any other paths to `/`
        destination: '/Firmware',
        permanent: true
      },
      {
        source: '/404',
        destination: '/Firmware',
        permanent: true
      }
    ]
  },
};
