import {test, expect} from '@playwright/test'

test('Sign in with valid credentials', async ({request}) => {
  const response = await request.post('/auth', {
    data: {
      login: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
  })

  expect(response.status()).toEqual(200)
  expect(await response.json()).toEqual({
    token: expect.any(String),
  })
})
