require("dotenv/config");


const devConfig = [
  {
    name: 'mongo',
    type: 'mongodb',
    host: process.env.MONGO_HOST,
    port: 27017,
    database: process.env.MONGO_NAME,
    useUnifiedTopology: true,
    entities: [
      './providers/Notifications/infra/typeorm/schemas/*.ts'
    ]
  }
];

const prodConfig = [
  {
    name: 'mongo',
    type: 'mongodb',
    host: process.env.MONGO_HOST,
    port: 27017,
    database: process.env.MONGO_NAME,
    useUnifiedTopology: true,
    entities: [
      './dist/providers/Notifications/infra/typeorm/schemas/*.js'
    ]
  }
];

module.exports = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;
