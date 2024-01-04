import pgPromise from 'pg-promise'

const pgp = pgPromise({})

const db = pgp({
  user: 'ca_db',
  password: 'ca_db',
  host: 'localhost',
  port: 5432,
  database: 'ca_db',
  idleTimeoutMillis: 100,
})

export default db
