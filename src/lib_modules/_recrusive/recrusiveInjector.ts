import {Element} from '../_uraniumview/element';
import {_setFlagPoint, _getElementCollectons, eventListnerArray} from '../_global/globalvariable';
import {initTriggerHeight, flagPoint} from '../_global/globalvariable';
import {styleAttributes} from '../_global/styleAttributs';
import {__recrusive} from '../_recrusive/recrusive';

var grandParent: any = document.getElementById("root");
/**
 * 
 * @param userDefinedRenderElement HTML element that need to convert string type
 */
export function __recrusiveInjector(userDefinedRenderElement: Element, flagIndex?: any, parentRenderElement?: Element): void {
    let parentNode: any = getParentFromDOM(parentRenderElement);
    if (parentNode == undefined) {
        let nodeCollectionString = __recrusive(userDefinedRenderElement, flagIndex, parentRenderElement);
        grandParent.innerHTML = grandParent.innerHTML+ nodeCollectionString;
        addEvent();
    } else {
        let domParentNodeAllChilds:any = Array.from(getAllBranchesInNode(parentNode));
        let domParentChildLength: any =  domParentNodeAllChilds.length;
        //let domParentChildIndexClone = domParentNodeAllChilds.
        if (domParentNodeAllChilds.length == 0) { 
            let nodeCollectionString = __recrusive(userDefinedRenderElement, flagIndex, parentRenderElement);
            parentNode.innerHTML = nodeCollectionString;
            addEvent();
           
           // parentNode.innerHTML =  __recrusive(userDefinedRenderElement, flagIndex, parentRenderElement);
        } else if (flagIndex == true) {
            let newNodeArray: any = [];
            for (let childIndex = (userDefinedRenderElement.flagIndex+1); childIndex < userDefinedRenderElement.glueObjectArray.length; childIndex++) {
               // console.log('childIndex',childIndex);
               // console.log("userDefinedRenderElement:", userDefinedRenderElement);
                let parser = new DOMParser();
                let nodeCollectionString = __recrusive(userDefinedRenderElement.glueObjectArray[childIndex], userDefinedRenderElement.flagIndex, userDefinedRenderElement);
                if (nodeCollectionString == '') break; 
                let node = parser.parseFromString(nodeCollectionString,'text/html');
                let nodeClone = node;
                nodeClone = node;
                newNodeArray.push(nodeClone.body.children[0]);
                addEvent();
                // parentNode.appendChild(nodeClone.body.children[0].children[2]);
                // parentNode.insertBefore(node.body.children[0].childNodes[childIndex], null);
            }
            for (let node of newNodeArray) {
                parentNode.appendChild(node);
                addEvent(); 
            }
        } else {
            grandParent = parentNode;
            let children_size = domParentNodeAllChilds.length;
            for (let domParentChildIndex = 0; domParentChildIndex < children_size; domParentChildIndex++) {
                try {
                    let  newElement = parentRenderElement.glueObjectArray[domParentChildIndex];
                    switch(sameNodeStatus(domParentNodeAllChilds[domParentChildIndex], newElement)) {
                                    case 0:
                                        let parser = new DOMParser();
                                        let nodeCollectionString = __recrusive(newElement, newElement.flagIndex, parentRenderElement);
                                        let node = parser.parseFromString(nodeCollectionString,'text/html');
                                        parentNode.replaceChild(node.body.firstChild,domParentNodeAllChilds[domParentChildIndex]);
                                        addEvent();
                                        break;

                                    case 1:
                                        if (newElement.glueObjectArray.length > 0) {
                                            __recrusiveInjector(newElement.glueObjectArray[0],newElement.flagIndex,newElement);
                                        }
                                        break;

                    }

                } catch(error) {
                    //remove old node
                    //parentNode.removeChild(domParentNodeAllChilds[domParentChildIndex]);
                    document.getElementById(parentRenderElement.userDefinedElement.ujs_id).removeChild(domParentNodeAllChilds[domParentChildIndex]);
                }
                if (domParentChildIndex == (domParentChildLength-1)) {
                    if (parentRenderElement.glueObjectArray.length > domParentNodeAllChilds.length) {
                        let parser = new DOMParser();
                        let nodeCollectionString = __recrusive(parentRenderElement, flagIndex, parentRenderElement);
                        let node = parser.parseFromString(nodeCollectionString,'text/html');
                        let nodeClone = node;
                        let childrenSize : number = node.body.children[0].childNodes.length;
                        let newNodeArray: any = [];
                        for (let childIndex = (domParentChildIndex+1); childIndex < childrenSize; childIndex++) {
                            nodeClone = node;
                            newNodeArray.push(nodeClone.body.children[0].children[childIndex]) ;
                           // parentNode.appendChild(nodeClone.body.children[0].children[2]);
                           // parentNode.insertBefore(node.body.children[0].childNodes[childIndex], null);
                        }
                        for (let node of newNodeArray) {
                            parentNode.appendChild(node);
                            addEvent(); 
                        }
                        
                    }
                }
            }
        }
    } 
}

/**
 * @todo error when user press back button  and click element button function call 
 * not working.
 * hint: after back button click twice and click forward button and element button click 
 * function call correctly
 */
function addEvent() {
    for (let userDefinedRenderElement of eventListnerArray) {
        eventCaller(userDefinedRenderElement);
        eventListnerArray.shift();
    }
}

/**
 * get all event and pass into addEventListner
 */
function eventCaller(userDefinedRenderElement: Element) {
    try {
        for (let dataObject of userDefinedRenderElement.eventDataObjectCollection) {
            let actionName: any = dataObject.actionName;
            let functionName: any = dataObject.functionName;
            let thisScope = userDefinedRenderElement.thisScope;
            let elementID = userDefinedRenderElement.elementID;
            if (actionName != undefined && functionName != undefined) {
                addEventListner(actionName,functionName,thisScope,elementID);
            }
        }
    } catch (error) {

    }
}

/**
 * add  event listner into dom element
 */
function addEventListner(actionName: any, functionName: any,thisScope: any,elementId: string) {
    try {
        let getElementFromDOM = document.getElementById(elementId);
        let functionBodyInstances = thisScope[functionName];
        /**
         * previous logic use for add event action to dom
         * BAD:- if two time method call it add two different event to dom
         * still comment for future purpose
         * 
         * getElementFromDOM.addEventListener(actionName, (e: Event) => functionBodyInstances());
         * 
         */
        getElementFromDOM.onclick = functionBodyInstances;

    } catch (error) {

    }
}

/**
 * 
 * @param id id of the element
 */
function findHTMLInElementCollection(id: string): any {
    return _getElementCollectons(id);
}

/**
 * check grand child element is same as new child
 */
function sameNodeStatus(oldNode: any, newNode: any): number {

        let nodeObject = findHTMLInElementCollection(oldNode.id);
        if (nodeObject != null &&  nodeObject.ujs_dna == newNode.userDefinedElement.ujs_dna) {
            return 1;
        } else {
            return 0;
        }
}

/**
 * @param parentHTMLElement html documented object
 * get all child and grand childs from node
 */
function getAllBranchesInNode(parentHTMLElement: any) {
    let branchNodeCollections = [];
    if (parentHTMLElement == undefined) {
        return undefined;
    } else {
      // branchNodeCollections = parentHTMLElement.getElementsByTagName('*');
       branchNodeCollections = parentHTMLElement.children;
    }
    return branchNodeCollections
}

/**
 * @param parentObject parent object
 * get the document object from html document by its id
 */
function getParentFromDOM(parentObject: Element): any {
    let parentNode = undefined;    
    try {
        parentNode = document.getElementById(parentObject.userDefinedElement.ujs_id);
    } catch(error) {
        console.log("[UJS ERROR]:: can not find node in document");
    }
    return parentNode;
}


