import {defineConfig, devices} from '@playwright/test'
import 'dotenv/config'

export default defineConfig({
  globalSetup: require.resolve('./global-setup'),
  testDir: './specs',
  reporter: [
    ['list'],
    ['html', {open: 'never'}],
  ],
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on',
    extraHTTPHeaders: {
      Authorization: process.env.TOKEN,
    },
  },
})
