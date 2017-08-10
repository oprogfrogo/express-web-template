// Update with your config settings.

module.exports = {
    development: {
        client: 'mysql',
        connection: {
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            port: process.env.DB_PORT
        },
        pool: {
            min: 2,
            max: 10
        }
    },
    staging: {
        client: 'mysql',
        connection: {
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            port: process.env.DB_PORT
        },
        pool: {
            min: 2,
            max: 10
        }
    },
    production: {
        client: 'mysql',
        connection: {
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            port: process.env.DB_PORT
        },
        pool: {
            min: 2,
            max: 10
        }
    }
};