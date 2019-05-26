import {routers, _setInitTriggerHeight} from '../../_global/globalvariable';
import {InstanceLoader} from '../InstanceLoader';
import {NamedThing} from '../NamedThing';
export class route {

    private pageClassName: any = null;

    constructor(routePath: string) {
        if (this.isValidate(routePath) && this.isRouteExist(routePath)) {
            this.changeURL(routePath);
            this.runClassInstace(this.pageClassName);
        } else {
            console.log("[UJS ERROR]:: route path is not valid");
        }
    }

    private isValidate(routePath: string): boolean{
        if (routePath == undefined || routePath == null) return false;
        if (routePath == '') return false;
        return true;
    }

    private isRouteExist(routePath: string): boolean {
        let keyValue: any = routers[routePath];
        if (keyValue == undefined) return false;
        if (keyValue == null) return false;
        this.pageClassName = keyValue; 
        return true;
    }

    /**
     * TODO give user for change url as user need
     * as a hash url or full url change
     */

    private changeURL(routePath: string, dataObject?: any): void {
        routePath =  this.addHashToPath(routePath);
        history.pushState({}, '', routePath);
        _setInitTriggerHeight(768);
    }

    private addHashToPath(routePath: string): string {
        let url = window.location.href;
        let hashUrl = url + "#"+routePath;
        return hashUrl; 
    }

    private runClassInstace(classInstance: any) {
         let classObject: any = InstanceLoader.getInstance<NamedThing>(classInstance);
         new classObject().decorateHeader();     //TODO change constructer call function into new function   
    }
    
}

