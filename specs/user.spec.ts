import {test, expect} from '@playwright/test'

test('Create user', async ({request}) => {
  const response = await request.post('/users')

  expect(response.status()).toEqual(200)
  expect(await response.json()).toEqual({
    id: expect.any(String),
    amount: expect.any(Number),
  })
})
