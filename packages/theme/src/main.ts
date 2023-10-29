import { ConfigParameters, ThemeConfig } from './infra';

import genTailwind from './tailwind';

export default (parameters: ConfigParameters) => {
  let config: ThemeConfig = {
    tailwind: genTailwind(parameters),
    test: "test",
  };

  return config;
}
