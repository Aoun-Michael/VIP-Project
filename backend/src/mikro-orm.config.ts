// mikro-orm.config.ts
import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

const config: Options<PostgreSqlDriver> = {
  entities: [__dirname + '/dist/entities'],     // Compiled JS entities
  entitiesTs: [__dirname + '/src/entities'],    // Source TS entities
  dbName: 'my-db-name',                         // PostgreSQL database name
  user: 'my-db-user',                           // Database username
  password: 'my-db-password',                   // Database password
  host: 'localhost',                            // Database host (e.g., localhost)
  port: 5432,                                   // PostgreSQL default port
  driver: PostgreSqlDriver,                     // PostgreSQL driver
};

export default config;
