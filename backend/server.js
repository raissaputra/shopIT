const app = require('./app');
const connectDatabase = require('./config/database')

const dotenv = require('dotenv');

// setting up config file
dotenv.config({path : 'backend/config/config.env'})

// connection to database
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server on port running :  ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
}) 