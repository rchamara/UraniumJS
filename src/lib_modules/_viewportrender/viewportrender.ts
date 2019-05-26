import {Element} from '../_uraniumview/element';
import {cssStyleClassJson} from '../_ujsstylesheet/ujsstylesheet';
import {rearrangeHeightAndWidth, stringValueManipulaterWithPixel, stringValueManipulaterWithPrecentage, isEqualToAuto} from '../_stringManipulater/stringmanipulatercontrollers';
/**
 * 
 * @param userDefinedRenderElement element that user defined and pass to render
 * @param parentRenderElementDocumentObject  parent element object in HTML document
 *  that userDefinedRenderElement glued
 * @param parentRenderElement
 */
export function __viewPortRender(userDefinedRenderElement: Element,parentRenderElementDocumentObject: any,parentRenderElement?: Element): void {
    if(userDefinedRenderElement != null && userDefinedRenderElement != undefined){
        if(parentRenderElementDocumentObject != null && parentRenderElementDocumentObject != undefined){
            let ujsHeightValue = __elementHeightCalculator(userDefinedRenderElement);
            userDefinedRenderElement.userDefinedElement['ujs_height'] = ujsHeightValue;
            if(parentRenderElementDocumentObject.id != 'root'){
                parentRenderElement.userDefinedElement['ujs_height'] = ujsHeightValue;
            }
        } else{
            console.log("[UJS ERROR]:: parent html element is not document object");
            console.log("[UJS TIPS]::  check your parent html element is rendered before child element render");
            console.log("[UJS TIPS]::  check your parent html element's parent elements are rendered ");
        }
    } else{
        console.log("[UJS ERROR]:: user defined html element is null or undefined,");
        console.log("              make sure to render valid html element.");
    }
}
/**
 * 
 * @param userElementObject element that user defined and pass by the __viewPortRender method
 */
function __elementHeightCalculator(userElementObject: Element): number {
    let elementHeight: number = 0;
    for(let childElement of userElementObject.glueObjectArray) {
        if(childElement.userDefinedElement.ujs_height == undefined && childElement.userDefinedElement.height == undefined){
            elementHeight = elementHeight + (+cssStyleClassJson[childElement.userDefinedElement.class]) + __elementHeightCalculator(childElement);
            continue;
        } else if(childElement.userDefinedElement.height != undefined){
            let rearrangeValue = rearrangeHeightAndWidth(childElement.userDefinedElement.height);
            elementHeight = elementHeight + rearrangeValue;
            childElement.userDefinedElement['ujs_height'] = rearrangeValue;
            continue;
        } else if(childElement.userDefinedElement.ujs_height != undefined){
            // TODO: remove integer parse if ujs_r_height always integer 
            elementHeight = elementHeight + (+childElement.userDefinedElement.ujs_height);
            continue;
        } else{
            console.log("[UJS ENGINE ERROR]:: something went wrong buddy! i am going down....");
            break;
        }
    }
    userElementObject.userDefinedElement['ujs_height'] = elementHeight;
    return elementHeight;
}


