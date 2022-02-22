import { config } from 'dotenv'
config()

const Config = {
    ENV: process.env.NODE_ENV, 
    DB: {
        CONNECTION_STRING: process.env.CONNECTION_STRING
    },
    TOKEN_PASSWORD: process.env.TOKEN_PASSWORD
}


export default Config