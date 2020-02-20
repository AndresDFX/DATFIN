const { Pool } = require('pg');

const pool = new Pool({
  host:'ec2-35-172-85-250.compute-1.amazonaws.com',
  database:'d9us7tqbev1nfr',
  user:'d9us7tqbev1nfr',
  password:'1e282532d8910b56c9e2489f3968ae4a024fd09cad30282568e7c2b1bd825bdb',
  port:5432,
  ssl:true
});

//console.log('Conectado a la bd');
module.exports = pool;