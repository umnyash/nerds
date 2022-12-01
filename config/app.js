const isProd = process.argv.includes('--production');
const isDev = !isProd;

export default {
  isProd: isProd,
  isDev: isDev,

  pug: {
    pretty: isDev
  },

  webpack: {
    mode: isProd ? "production" : "development"
  },

  imagemin: {
    verbose: true
  },

  webp: {
    quality: 75
  },

  stacksvg: {
    output: 'icons'
  }
};
