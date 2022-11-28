import gulp from 'gulp';

// Конфигурация
import path from '../config/path.js';

// Обработка изображений
export default () => {
  return gulp.src(path.copy.src)
    .pipe(gulp.dest(path.copy.dest))
};
