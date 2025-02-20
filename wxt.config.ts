import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-react'],
  outDir: 'dist',
  manifest: () => ({
    name: 'Fravity: AI co-pilot',
    permissions: ['storage'],
    key: import.meta.env.WXT_CRX_KEY,
  }),
  runner: {
    chromiumArgs: ['--user-data-dir=./.wxt/chrome-data'],
  }
});
