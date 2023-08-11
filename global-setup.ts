import {type FullConfig, request} from '@playwright/test'

export default async function (config: FullConfig) {
  const baseURL = config.projects.at(0).use.baseURL

  if (!baseURL) {
    throw new Error('Base URL is not set!')
  }

  const client = await request.newContext({baseURL})

  const response = await client.post('/auth', {
    data: {
      login: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
  })

  const {token} = await response.json()

  if (!token) {
    throw new Error('Failed to obtain a token!')
  }

  process.env.TOKEN = token
}
