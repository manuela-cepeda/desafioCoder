import dotenv from 'dotenv';
import minimist from 'minimist';

dotenv.config();
const {PORT} = minimist(process.argv.slice(2), {default:{PORT:8080}})

export default {
    app: {
        PORT:PORT
    },
    mongo: {
        MONGO_URL: process.env.MONGO_URL,
    }
   
}



