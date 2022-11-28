import gulp from 'gulp';
import browserSync from 'browser-sync';

// Конфигурация
import path from './config/path.js';
import app from './config/app.js';

// Задачи
import clear from './tasks/clear.js';
import pug from './tasks/pug.js';
import scss from './tasks/scss.js';
import js from './tasks/js.js';
import img from './tasks/img.js';
import sprite from './tasks/sprite.js';
import copy from './tasks/copy.js';

// Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  });
};

// Наблюдение
const watcher = () => {
  gulp.watch(path.pug.watch, pug).on('all', browserSync.reload);
  gulp.watch(path.scss.watch, scss).on('all', browserSync.reload);
  gulp.watch(path.js.watch, js).on('all', browserSync.reload);
  gulp.watch(path.img.watch, img).on('all', browserSync.reload);
  gulp.watch(path.sprite.watch, sprite).on('all', browserSync.reload);
  gulp.watch(path.copy.watch, copy).on('all', browserSync.reload);
};

const build = gulp.series(
  clear,
  gulp.parallel(pug, scss, js, img, sprite, copy)
);

const dev = gulp.series(
  build,
  gulp.parallel(server, watcher)
);

// Публичные задачи
export {pug, scss, js, img, sprite, copy};

// Сборка
export default app.isProd ? build : dev;
