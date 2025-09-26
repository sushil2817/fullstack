import http from 'http';
import {env} from './env';
import {logger} from './logger.js'

async function main(){
    try{
        const PORT:number = +(env.PORT ?? 8000)

        const server = http.createServer();
        server.listen(PORT,()=>{
            logger.info(`Server is running on PORT ${PORT}`)
        })

    }catch(e){
        logger.error(`Error startingm server`,e)
    }
}

main();