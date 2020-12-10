import { container } from 'tsyringe'

import CacheProvider from './models/CacheProvider'

import RedisCacheProvider from './implementations/RedisCacheProvider'

const providers = {
  redis: RedisCacheProvider,
}

container.registerSingleton<CacheProvider>('CacheProvider', providers.redis)
