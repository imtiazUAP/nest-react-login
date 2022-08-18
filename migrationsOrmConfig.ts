export = {
    type: process.env.DB_TYPE,
    host: process.env.LOCALHOST,
    database: process.env.MYSQL_DB,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_DB_PORT,
    entities: ['dist/src/entities/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    cli: {
        migrationsDir: 'migrations',
    },
    synchronize: false,
    logging: true,
};