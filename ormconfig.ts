import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import * as dotenv from 'dotenv';
dotenv.config();

const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: process.env.MYSQL_DB_HOST,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    entities: ['dist/src/**/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    cli: {
        migrationsDir: 'migrations',
    },
    synchronize: false,
    logging: true,
}

export default config;