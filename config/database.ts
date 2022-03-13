/**
 * Config source: https://git.io/JesV9
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Application from '@ioc:Adonis/Core/Application'
import Env from '@ioc:Adonis/Core/Env'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'
import { OrmConfig } from '@ioc:Adonis/Lucid/Orm'

// interface DBConnection {
//   groups?: {
//     DB_CONNECTION?: string
//     DB_USER?: string
//     DB_PASSWORD?: string
//     DB_HOST?: string
//     DB_PORT?: string
//     DB_NAME?: string
//   }
// }

// const DB_CONNECTION_STRING: any & DBConnection =
//   /(?<DB_CONNECTION>\w+):\/\/(?<DB_USER>\w+):(?<DB_PASSWORD>\w+)@(?<DB_HOST>[A-Za-z0-9-.]+):(?<DB_PORT>\d+)\/(?<DB_NAME>[A-Za-z0-9-.]+)/gm.exec(
//     Env.get('DATABASE_URL', '')
//   )

// const {
//   DB_USER = null,
//   DB_PASSWORD = null,
//   DB_HOST = null,
//   DB_PORT = null,
//   DB_NAME = null,
// } = DB_CONNECTION_STRING?.groups

const databaseConfig: DatabaseConfig & { orm: Partial<OrmConfig> } = {
  /*
   |--------------------------------------------------------------------------
   | Connection
   |--------------------------------------------------------------------------
   |
   | The primary connection for making database queries across the application
   | You can use any key from the `connections` object defined in this same
   | file.
   |
   */
  connection: Env.get('DB_CONNECTION', 'pg') as string,

  connections: {
    /*
     |--------------------------------------------------------------------------
     | Sqlite
     |--------------------------------------------------------------------------
     |
     | Configuration for the Sqlite database.  Make sure to install the driver
     | from npm when using this connection
     |
     | npm i sqlite3
     |
     */
    sqlite: {
      client: 'sqlite',
      connection: {
        filename: Application.tmpPath('db.sqlite3'),
      },
      useNullAsDefault: true,
      healthCheck: false,
    },

    /*
     |--------------------------------------------------------------------------
     | Mysql config
     |--------------------------------------------------------------------------
     |
     | Configuration for Mysql database. Make sure to install the driver
     | from npm when using this connection
     |
     | npm i mysql
     |
     */
    mysql: {
      client: 'mysql',
      connection: {
        host: Env.get('DB_HOST', '127.0.0.1') as string,
        port: Number(Env.get('DB_PORT', 3306)),
        user: Env.get('DB_USER', 'postgres') as string,
        password: Env.get('DB_PASSWORD', 'docker') as string,
        database: Env.get('DB_NAME', 'postgres') as string,
      },
      healthCheck: false,
    },

    /*
     |--------------------------------------------------------------------------
     | PostgreSQL config
     |--------------------------------------------------------------------------
     |
     | Configuration for PostgreSQL database. Make sure to install the driver
     | from npm when using this connection
     |
     | npm i pg
     |
     */

    pg: {
      client: 'pg',
      connection: {
        host: Env.get('DB_HOST', 'localhost') as string,
        port: Number(Env.get('DB_PORT', 5432)),
        user: Env.get('DB_USER', 'lucid') as string,
        password: Env.get('DB_PASSWORD', 'lucid') as string,
        database: Env.get('DB_NAME', 'lucid') as string,
        ssl: false,
      },
      healthCheck: false,
    },
  },

  /*
   |--------------------------------------------------------------------------
   | Orm Configuration
   |--------------------------------------------------------------------------
   |
   | Following are some of the configuration options to tweak the conventional
   | settings of the ORM. For example:
   |
   | - Define a custom function to compute the default table name for a given model.
   | - Or define a custom function to compute the primary key for a given model.
   |
   */
  orm: {},
}

export default databaseConfig
