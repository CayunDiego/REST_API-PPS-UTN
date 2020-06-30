import app from './app';
import {PORT, HOST} from '../server/config';

async function main(){
    console.log(PORT)
    app().listen(PORT, HOST, () => console.log('Server on port ' + PORT ) );
}

main();