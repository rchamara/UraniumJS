import {_setRouters} from '../../_global/globalvariable';
import {HashRoutes} from '../_routers/hashRoutes';
export class Routers {
    constructor(userDefineRouters: any) {
        if (userDefineRouters == undefined) {
            console.log("[UJS ERROR]:: No Routes defined");
        } else if (userDefineRouters == null) {
            console.log("[UJS ERROR]:: No Routes defined");
        } else if (userDefineRouters == '') {
            console.log("[UJS ERROR]:: No Routes defined");
        }
        _setRouters(userDefineRouters);   
    }
}

