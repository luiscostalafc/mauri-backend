import Database from '@ioc:Adonis/Lucid/Database'
import test from 'japa'
import supertest from 'supertest'
import { fakeOrderDatail } from '../../database/factories'
import { BASE_URL, responseData } from '../utils'

const MODULE = '/api/order-details'

test.group('OrderDetails', (group) => {
  
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
  })

  
  test('GET ensure list', async (assert) => {

    const { text } = await supertest(BASE_URL)
      .get(MODULE)
      .expect('Content-Type', /json/)
      .expect(200)

    assert.isNotEmpty(text)
  })
  test('POST ensure create', async (assert) => {
    const { text } = await supertest(BASE_URL)
      .post(MODULE)
      .send(await fakeOrderDatail())
      .expect('Content-Type', /json/)
      .expect(201)

    assert.isNotEmpty(responseData(text))
  })
  test('GET ensure show', async (assert) => {

    const { text } = await supertest(BASE_URL)
      .get(`${MODULE}/1`)
      .expect('Content-Type', /json/)
      .expect(200)

    assert.isNotEmpty(text)
  })
  test('POST ensure search', async (assert) => {

    const { text } = await supertest(BASE_URL)
      .post(`${MODULE}/search`)
      .send({ id: 1 })
      .expect('Content-Type', /json/)
      .expect(200)

    assert.isNotEmpty(text)
  })
  test('PUT ensure update', async (assert) => {

    const { text } = await supertest(BASE_URL)
      .put(`${MODULE}/1`)
      .send(await fakeOrderDatail())
      .expect('Content-Type', /json/)
      .expect(200)

    assert.isNotEmpty(text)
  })
  test('DELETE ensure delete', async (assert) => {

    const { text } = await supertest(BASE_URL)
      .delete(`${MODULE}/1`)
      .expect('Content-Type', /json/)
      .expect(200)

    assert.isNotEmpty(text)
  })
})