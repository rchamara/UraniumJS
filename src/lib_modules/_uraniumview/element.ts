import SuperElement from '../_uraniumview/SuperElement';
import {eventNamesCollectionObject} from '../_global/eventNameCollection';
import ElementInterface from '../_uraniumview/ElementInterface';
import {_UJSstylesheetLib, isStyleLoad,cssStyleClassJson} from '../_ujsstylesheet/ujsstylesheet';
import {_setElementCollectons, setEventListnerMap} from '../_global/globalvariable';

export class Element extends SuperElement implements ElementInterface<string>  {

    public elementID: string;
    public thisScope: any;
    
    public userDefinedElement: any;
    public glueObjectArray: any = [];
    public flagIndex: number = 0;
    public flagIndexMapArray: any = [];
    public eventDataObjectCollection: any = [];


    /**
     * get user defined HTML properties
     * @param userDefinedElement user defined HTML properties
     */
    constructor(userDefinedElement:any, thisScope: any, isSuperBase?: boolean) {
        super();
        this.thisScope = thisScope;
        this.getCssClassDefineHeight(userDefinedElement);
        this.setDNA(userDefinedElement);
        if (isSuperBase != undefined && isSuperBase) {
            userDefinedElement['ujs_id'] = 'root';
            userDefinedElement['id'] = 'root'; 
        } else {
            this.setSha1AsId(userDefinedElement);
        }
        this.bindEventListener(userDefinedElement, thisScope);
        this.initAttribute(userDefinedElement);
        this.passElementToCollection(userDefinedElement);
    }

    /**
     * pass user defined element attribute into object
     * @param userDefinedElement user defined HTML properties
     */
    initAttribute(userDefinedElement:any): void {
        this.userDefinedElement = userDefinedElement;
    }

    /**
     * @param userDefinedElement user defined HTML properties
     */
    setDNA(userDefinedElement: any): void {
        userDefinedElement['ujs_dna'] = this.ujsSha1(userDefinedElement);
    }

    /**
     * set sha1 id to element id
     * @param userDefinedElement user defined HTML properties
     */
    setSha1AsId(userDefinedElement:any): void {
        this.elementID = this.ujsSha1(userDefinedElement);
        userDefinedElement['ujs_id'] = this.elementID;
        return userDefinedElement;
    }
    
    bindEventListener(userDefinedElement: any, thisScope: any) {
        /**
         * create new object when user glue user-defined-element to parent
         *  TODO new logic add for set event action to dom
         * so no need to get event action starded name from array
         * remove array search and add user defined event name
         */
        let eventNamesKeyCollection = Object.keys(eventNamesCollectionObject);
        for(let nameKey of eventNamesKeyCollection) {
            let eventName = userDefinedElement[nameKey];
            if (eventName == undefined || eventName == null || eventName == '') continue;
            let dataObject = {
                functionName:eventName,
                actionName:eventNamesCollectionObject[nameKey]
            }
            this.eventDataObjectCollection.push(Object.create(dataObject));
        }
    }

    /**
     * glue method for bind the child element into this object
     * @param childUserDefinedElement user defined HTML properties
     */
    glue(childUserDefinedElementTemp:Element): void{
       let childUserDefinedElement = Object.create(childUserDefinedElementTemp);
       if(childUserDefinedElement == null || childUserDefinedElement == undefined){
           /**
            * child object is null or undefined show the console error
            */
           console.log("[UJS ERROR]:: child element that pass in glue method is NULL or UNDEFINED");
           return;
       }
       childUserDefinedElement.flagIndexMapArray.push({elementID:0});
       this.glueObjectArray.push(childUserDefinedElement.__proto__); //TODO replace __proto__ (deprecated)
    }

    /**
     * 
     * @param userDefinedElement 
     */
    getCssClassDefineHeight(userDefinedElement:any): void {
        if(userDefinedElement.class == undefined || userDefinedElement.class == '' || userDefinedElement.class == null) return;
        if(userDefinedElement.height == undefined || userDefinedElement.height == '' || userDefinedElement.height == null) {
            if(!isStyleLoad)  _UJSstylesheetLib();
            this.chooseValidHeightFromCSSRules(userDefinedElement);
        } 
    
    }

    /**
     * TODO what if user change class name after sertain time and change hight from rector method 
     */
    /**
     * 
     * @param userDefinedElement 
     */
    chooseValidHeightFromCSSRules(userDefinedElement:any): void {
        let isRulePriortySet: boolean = false;
        let elementName: string = userDefinedElement.element;
        if(elementName == undefined || elementName == '' || elementName == null) return; 
        let userDefinedClassNames: string = userDefinedElement.class;
        let userDefinedClassNamesArray:any = userDefinedClassNames.split(" ");
        for(let className of userDefinedClassNamesArray) {
            if(className == "") continue;
            let cssRule: any = cssStyleClassJson[className];
            if(cssRule != undefined) {
                let cssHeight: string = cssRule.height;
                if(cssHeight != "" && cssHeight != undefined) {
                    userDefinedElement['height'] = cssHeight;
                    userDefinedElement['ujs_height'] = cssHeight;
                    isRulePriortySet = true; 
                }
            } 
            if(!isRulePriortySet) {
                cssRule = cssStyleClassJson["."+className];
                if(cssRule != undefined) {
                   let cssHeight: string = cssRule.height;
                   if(cssHeight != "" && cssHeight != undefined) {
                    userDefinedElement['height'] = cssHeight;
                    userDefinedElement['ujs_height'] = cssHeight; 
                   }
                }
            }
  
        }
    } 

    /**
     * pass user defined modified object into collection
     * @param userDefinedElement user defined elements
     */
    private passElementToCollection(userDefinedElement: any) {
        _setElementCollectons(userDefinedElement);
    }
}

