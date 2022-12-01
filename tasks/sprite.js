import gulp from 'gulp';

// Конфигурация
import path from '../config/path.js';
import app from '../config/app.js';

// Плагины
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import { stacksvg } from 'gulp-stacksvg';

// Создание спрайта
export default () => {
  return gulp.src(path.sprite.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'Sprite',
        message: error.message
      }))
    }))
    .pipe(stacksvg(app.stacksvg))
    .pipe(gulp.dest(path.sprite.dest))
};
