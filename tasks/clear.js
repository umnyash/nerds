// Конфигурация
import path from '../config/path.js';

// Плагины
import del from 'del';

export default () => {
  return del(path.root);
};