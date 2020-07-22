import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import {
  AddressFactory,
  CardFactory,
  GroupFactory,
  SubgroupFactory,
  UserFactory,
  DeliveryFactory,
  PermissionFactory,
  UserGroupFactory,
  PhoneFactory,
  OrderStatusFactory,
  OrderDetailFactory,
  AssetFactory,
  ProductFactory,
  ProductAplicationFactory,
  ProductDimensionFactory,
  ProductDescriptionFactory,
  ProductVariationFactory,
  OperationFactory,
  StockOperationFactory,
  SynonymFactory,
  ProductAsingmentFactory,
} from 'Database/factories'
import { OrderFactory } from 'Database/factories/OrderFactory'

export default class AddressSeeder extends BaseSeeder {
  public async run () {
    await CardFactory.createMany(10)
    await AddressFactory.createMany(10)
    await GroupFactory.createMany(10)
    await SubgroupFactory.createMany(10)
    await UserFactory.createMany(10)
    await DeliveryFactory.createMany(10)
    await PermissionFactory.createMany(10)
    await PermissionFactory.createMany(10)
    await UserGroupFactory.createMany(10)
    await PhoneFactory.createMany(10)
    await OrderStatusFactory.createMany(10)
    await OrderFactory.createMany(10)
    await OrderDetailFactory.createMany(10)
    await AssetFactory.createMany(10)
    await ProductFactory.createMany(10)
    await ProductAplicationFactory.createMany(10)
    await ProductAsingmentFactory.createMany(10)
    await ProductDimensionFactory.createMany(10)
    await ProductDescriptionFactory.createMany(10)
    await ProductVariationFactory.createMany(10)
    await OperationFactory.createMany(10)
    await StockOperationFactory.createMany(10)
    await SynonymFactory.createMany(10)

    // await OrderHasProductsFactory.createMany(10)
    // await CardHasUsersFactory.createMany(10)
    // await UserHasPermissionsFactory.createMany(10)
    // await UserHasPhonesFactory.createMany(10)
    // await GroupsHasUsersFactory.createMany(10)
    // await GroupsHasAssetsFactory.createMany(10)
    // await ProductHasAssetsFactory.createMany(10)
    // await AssetsHasUsersFactory.createMany(10)
  }
}
