const pathSrc = './source';
const pathDest = './build';

export default {
  root: pathDest,
  
  pug: {
    src: pathSrc + '/pug/*.pug',
    watch: pathSrc + '/pug/**/*.pug',
    dest: pathDest
  },

  scss: {
    src: pathSrc + '/sass/*.{sass,scss}',
    watch: pathSrc + '/sass/**/*.{sass,scss}',
    dest: pathDest + '/css'
  },

  js: {
    src: pathSrc + '/js/*.js',
    watch: pathSrc + '/js/**/*.js',
    dest: pathDest + '/js'
  },

  img: {
    src: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
    watch: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
    dest: pathDest + '/img'
  },

  sprite: {
    src: pathSrc + '/img/icons/**/*.svg',
    watch: pathSrc + '/img/icons/**/*.svg',
    dest: pathDest + '/img'
  },

  copy: {
    src: [
      pathSrc + '/fonts/**/*.{woff2, woff}',
      pathSrc + '/*.ico',
      pathSrc + '/*.webmanifest'
    ],
    watch: [
      pathSrc + '/fonts/**/*.{woff2, woff}',
      pathSrc + '/*.ico',
      pathSrc + '/*.webmanifest'
    ],
    dest: pathDest
  }
};