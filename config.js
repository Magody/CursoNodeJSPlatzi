const config = {
    dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/telegram',  //usa variable de entorno o la mia
    host: process.env.HOST || 'http://localhost',
    port: process.env.PORT || 3003,
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    files: process.env.PUBLIC_ROUTE_FILES || '/files',
    
}

module.exports = config