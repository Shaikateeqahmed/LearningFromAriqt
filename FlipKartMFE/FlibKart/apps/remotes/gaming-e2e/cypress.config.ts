import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run gaming:serve:development',
        production: 'nx run gaming:serve:production',
      },
      ciWebServerCommand: 'nx run gaming:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
