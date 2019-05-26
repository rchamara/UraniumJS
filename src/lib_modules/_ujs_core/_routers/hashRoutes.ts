import {_getRouters} from '../../_global/globalvariable';
export function HashRoutes(hash: any) {
        if (hash == undefined) {
            console.log("[UJS ERROR]:: No Routes defined");
        } else if (hash == null) {
            console.log("[UJS ERROR]:: No Routes defined");
        } else if (hash == '') {
            console.log("[UJS ERROR]:: No Routes defined");
        }
        try {
            let r = Object.create(_getRouters()[hash]).prototype.constructor;
            new r().decorateHeader();
        } catch (error) {
        }   
}