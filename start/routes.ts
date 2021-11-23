/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route.post('/login', 'AuthController.login')
Route.post('/logout', 'AuthController.logout')
Route.post('/forgot', 'ForgotPasswordController.store')

Route
  .group(() => {
    Route.post('addresses/search','AddressesController.search')
    Route.resource('addresses','AddressesController').apiOnly()
    Route.post('assets/search','AssetsController.search')
    Route.resource('assets','AssetsController').apiOnly()
    Route.post('cards/search','CardsController.search')
    Route.resource('cards','CardsController').apiOnly()
    Route.post('deliveries/search','DeliveriesController.search')
    Route.resource('deliveries','DeliveriesController').apiOnly()
    Route.post('groups/search','GroupsController.search')
    Route.resource('groups','GroupsController').apiOnly()
    Route.post('operations/search','OperationsController.search')
    Route.resource('operations','OperationsController').apiOnly()
    Route.post('orders/search','OrdersController.search')
    Route.resource('orders','OrdersController').apiOnly()
    Route.post('order-details/search','OrderDetailsController.search')
    Route.resource('order-details','OrderDetailsController').apiOnly()
    Route.post('order-statuses/search','OrderStatusesController.search')
    Route.resource('order-statuses','OrderStatusesController').apiOnly()
    Route.post('permissions/search','PermissionsController.search')
    Route.resource('permissions','PermissionsController').apiOnly()
    Route.post('phones/search','PhonesController.search')
    Route.resource('phones','PhonesController').apiOnly()
    Route.post('products/search','ProductsController.search')
    Route.post('products/distinct','ProductsController.distinct')
    Route.post('products/excel','ProductsController.excel')
    Route.resource('products','ProductsController').apiOnly()
    Route.post('product-asingment/search','ProductAsingmentsController.search')
    Route.resource('product-asingment','ProductAsingmentsController').apiOnly()
    Route.post('product-variation/search','ProductVariationsController.search')
    Route.resource('product-variation','ProductVariationsController').apiOnly()
    Route.post('stock-operations/search','StockOperationsController.search')
    Route.resource('stock-operations','StockOperationsController').apiOnly()
    Route.resource('stock','StockController').apiOnly()
    Route.resource('stock-types','StockTypeController').apiOnly()
    Route.post('subgroups/search','SubgroupsController.search')
    Route.resource('subgroups','SubgroupsController').apiOnly()
    Route.post('synonyms/search','SynonymsController.search')
    Route.resource('synonyms','SynonymsController').apiOnly()
    Route.post('users/search','UsersController.search')
    Route.resource('users','UsersController').apiOnly()
    Route.post('user-groups/search','UserGroupsController.search')
    Route.resource('user-groups','UserGroupsController').apiOnly()
    Route.resource('reset', 'ResetPasswordController').apiOnly()
    Route.resource('mercadopago', 'MercadoPagoController').apiOnly()
  })
  .prefix('/api')
  // .middleware('auth')
