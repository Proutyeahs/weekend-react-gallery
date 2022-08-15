const pg = require('pg');

const Pool = pg.Pool;

const url = require('url');

let config = {};

if (process.env.DATABASE_URL) {
    // Heroku gives a url, not a connection object
    // https://github.com/brianc/node-pg-pool
    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.split(':');

    config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: { rejectUnauthorized: false },
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    };
} else {
    config = new Pool({
        database: 'react_gallery',
        host: 'localhost',
        port: 5432,
        max: 10,
        idleTimeoutMillis: 30000
    })
}

    pool.on('connect', () => {
        console.log('Connected to database')
    })

    pool.on('error', () => {
        comsole.log('Error cconnecting to database')
    })

    module.exports = pool