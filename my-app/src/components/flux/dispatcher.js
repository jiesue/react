import { Dispatcher } from 'flux'
import Store from './store'
const dispathcher  = new Dispatcher();

dispathcher.register((action)=>{
    if(action.type==="add"){
        Store.addNumber()
    }
});
export default dispathcher;