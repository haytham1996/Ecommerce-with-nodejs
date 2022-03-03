import { config } from 'dotenv'
config()

const Config = {
    ENV: process.env.NODE_ENV, 
    DB: {
        CONNECTION_STRING: process.env.CONNECTION_STRING
    },
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_PASSWORD, 
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_PASSWORD
}


export default Config