export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
}

export function defineConfig(config: ThemeConfig) {
  // Generate additional configuration based on the provided theme config
  return {
    config
  };
}
