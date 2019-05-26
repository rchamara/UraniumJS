import {Element} from '../_uraniumview/element';
import SuperElement from '../_uraniumview/superelement';
/**
 * 
 * @param userChangedAttributesObject jason object that include user new attributes or new attributes values for current attribute 
 * @param effectiveUserDefinedElement user definded element object references that changes are done
 */
export function Reactor(userChangedAttributesObject: any,effectiveUserDefinedElement: Element): void{
    if(effectiveUserDefinedElement == null || effectiveUserDefinedElement == undefined ){
        console.log('[UJS ERROR]:: no affective html element refereces is define.');
        console.log('[UJS TIPS]::  make sure to pass valid affective html element referece');
        return;
    }
    let userchangedAttributesJsonKeyValues: any = (<any>Object).entries(userChangedAttributesObject);
    let domNode = document.getElementById(effectiveUserDefinedElement.userDefinedElement.ujs_id);
    if(domNode == null || domNode == undefined){
        console.log('[UJS ERROR]:: can not find DOM element with that element object reference');
        console.log('[UJS TIPS]::  make sure to render that element object before changing that element attributes');
        return;
    }
    for(let keyAndValue of userchangedAttributesJsonKeyValues) {
        effectiveUserDefinedElement.userDefinedElement[keyAndValue[0]] = keyAndValue[1];
        switch(keyAndValue[0]){
            case 'accept_charset':
                domNode.setAttribute('accept-charset',keyAndValue[1]);
                break;
            case 'http_equiv':
                domNode.setAttribute('http-equiv',keyAndValue[1]);
                break;
            case 'addclass':
                for(let individualClassName of __classNameSpliter(keyAndValue[1])){
                    domNode.classList.add(individualClassName);
                }
                break;
            case 'class':
                domNode = removeCurrentClasses(domNode);
                for(let individualClassName of __classNameSpliter(keyAndValue[1])){
                    domNode.classList.add(individualClassName);
                }
                break;
            default:
                domNode.setAttribute(keyAndValue[0],keyAndValue[1]);
        }
    }
    __generateNewId(effectiveUserDefinedElement,domNode);
}

/**
 * 
 * @param absoluteClassName full name of the class names
 */
function __classNameSpliter(absoluteClassName: string): any { return absoluteClassName.split(" "); }

/**
 * 
 * @param updatedEffectiveUserDefinedElement element object that updated with new keys and values
 */
function __generateNewId(updatedEffectiveUserDefinedElement: Element,domNode: any): void{
    let newElementID = new SuperElement().ujsSha1(updatedEffectiveUserDefinedElement);
    updatedEffectiveUserDefinedElement.userDefinedElement['ujs_id'] = newElementID;
    updatedEffectiveUserDefinedElement.userDefinedElement['id'] = newElementID; 
    domNode.setAttribute('id',newElementID);
}
/**
 * 
 * @param domNode 
 */
function removeCurrentClasses(domNode: any): any {
    for (let className of domNode.classList) {
        domNode.classList.remove(className);
    }
    return domNode;
}
