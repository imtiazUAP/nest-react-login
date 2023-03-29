import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import * as dotenv from 'dotenv';
dotenv.config();

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: process.env.MYSQL_DB_HOST,
  database: 'nest_react_login_db',
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  entities: ['dist/src/server/entities/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'migrations',
  },
  synchronize: false,
};

export default config;
