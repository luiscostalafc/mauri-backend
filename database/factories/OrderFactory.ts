import Factory from '@ioc:Adonis/Lucid/Factory'
import Order from 'App/Models/Order'
import { randomDeliveryId } from './DeliveryFactory'
import { randomOrderStatusId } from './OrderStatusFactory'
import { randomUserId } from './UserFactory'

export const OrderFactory = Factory
  .define(Order, async () => ({
    userId: await randomUserId(),
    providerId: await randomUserId(),
    orderStatusId: await randomOrderStatusId(),
    deliveryId: await randomDeliveryId(),
  }))
  .build()

export async function randomOrderId () {
  const req = await Order.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return Number(ids[Math.floor(Math.random() * ids.length)])
}

export const fakeOrder = async () => ({
  userId: await randomUserId(),
  providerId: await randomUserId(),
  orderStatusId: await randomOrderStatusId(),
  deliveryId: await randomDeliveryId(),
})
