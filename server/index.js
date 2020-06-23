import app from './app';
import {PORT} from '../server/config'

async function main(){
    await app().listen(PORT);
    console.log('Server on port ' + PORT);
}

main();