import gulp from 'gulp';

// Конфигурация
import path from '../config/path.js';

// Обработка изображений
export default () => {
  return gulp.src(path.copy.src, {base: path.copy.base})
    .pipe(gulp.dest(path.copy.dest))
};
