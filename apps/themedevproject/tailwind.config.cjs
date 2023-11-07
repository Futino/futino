import config from './lib/theme.config';
import { join } from 'path';

config.config.tailwind.content = [
  './src/**/*.{html,js,svelte,ts}',
  join(require.resolve('lorc'),
    '../**/*.{html,js,svelte,ts,ttf}',
  ),
];

module.exports = config.config.tailwind;
