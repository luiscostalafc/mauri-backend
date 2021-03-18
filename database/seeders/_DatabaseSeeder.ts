import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Group from 'App/Models/Group'
import User from 'App/Models/User'
import {
  AddressFactory,
  CardFactory,
  DeliveryFactory,
  OperationFactory,
  OrderDetailFactory,
  OrderStatusFactory,
  PermissionFactory,
  PhoneFactory,
  ProductAsingmentFactory,
  ProductFactory,
  ProductVariationFactory,
  StockOperationFactory,
  SubgroupFactory,
  SynonymFactory,
  UserFactory,
  UserGroupFactory,
} from 'Database/factories'
import { OrderFactory } from 'Database/factories/OrderFactory'

export default class AddressSeeder extends BaseSeeder {
  public async run () {
    await Group.updateOrCreateMany('group',[
      {group: 'Auto Peças'},
      {group: 'Moto Peças'},
      {group: 'Bicicletas'},
      {group: 'Ferramentas'},
      {group: 'Livraria'},
      {group: 'Papelaria'},
    ])
    await SubgroupFactory.createMany(10)
    await UserFactory.createMany(10)
    await DeliveryFactory.createMany(10)
    await PermissionFactory.createMany(10)
    await PermissionFactory.createMany(10)
    await UserGroupFactory.createMany(10)
    await CardFactory.createMany(10)
    await AddressFactory.createMany(10)
    await PhoneFactory.createMany(10)
    await OrderStatusFactory.createMany(10)
    await OrderFactory.createMany(10)
    await OrderDetailFactory.createMany(10)
    // await AssetFactory.createMany(10)
    await ProductFactory.createMany(10)
    await ProductAsingmentFactory.createMany(10)
    await ProductVariationFactory.createMany(10)
    await OperationFactory.createMany(10)
    await StockOperationFactory.createMany(10)
    await SynonymFactory.createMany(10)
    await User.updateOrCreateMany('email',[
      {
        name: 'admin of system',
        username: 'admin',
        password: 'secret',
        activity: 'boss',
        complete_name: 'Muri',
        email: 'mauri@mauri.com',
        rg: '123456789',
        cpf_cnpj: '123.456.789-12',
        nick: 'admin',
        is_provider: true,
        inactive: false,
      },
      {
        name: 'user test',
        username: 'test',
        password: 'secret',
        activity: 'test',
        complete_name: 'test',
        email: 'test@test.com',
        rg: '987654321',
        cpf_cnpj: '987.654.321-98',
        nick: 'test',
        is_provider: true,
        inactive: false,
      },
    ])

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
