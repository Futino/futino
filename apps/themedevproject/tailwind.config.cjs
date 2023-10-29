import config from './theme.config';
import { join } from 'path';
console.log(config.config.tailwind);
config.config.tailwind.content = [
  './src/**/*.{html,js,svelte,ts}',
  join(require.resolve('lorc'),
    '../**/*.{html,js,svelte,ts,ttf}',
  ),
];
module.exports = config.config.tailwind;
