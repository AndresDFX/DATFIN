module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'DATFIN', 
        user: process.env.DB_USER || 'postgres', 
        password: process.env.DB_NAME || 'pokemon', 
        options: {
            dialect: process.env.DIALECT || 'postgres',
            host: process.env.HOST || 'localhost'
        }
    }   

}