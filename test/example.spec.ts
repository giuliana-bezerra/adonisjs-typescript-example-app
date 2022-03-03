import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Example', () => {
  test('assert sum', (assert) => {
    assert.equal(2 + 2, 4)
  })

  test('it should return hello world', async (assert) => {
    const { body } = await supertest(BASE_URL).get('/').expect(200)
    assert.exists(body)
    assert.deepEqual(body, { hello: 'world' })
  })
})