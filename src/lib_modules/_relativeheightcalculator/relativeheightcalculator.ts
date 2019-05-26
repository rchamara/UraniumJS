import {Element} from '../_uraniumview/element';
import {rearrangeHeightAndWidth,stringValueManipulaterWithPixel, stringValueManipulaterWithPrecentage, isEqualToAuto} from '../_stringManipulater/stringmanipulatercontrollers';
/**
 * 
 * @param userElementObject HTML element that user created
 * @param parentRenderElementId value of the id attribute in userElementObject parent element
 * @param parentRenderElement element that userElementObject bind
 */
export function __elementRelativeHeightCalculator(userElementObject: Element,parentRenderElementId: string,parentRenderElement?: Element): void {
    if(parentRenderElementId == 'root') {
        userElementObject.userDefinedElement['ujs_r_height'] = 0;
    } else if(parentRenderElement != undefined && parentRenderElement != null){
        if(parentRenderElement.userDefinedElement.ujs_r_height != undefined && parentRenderElement.glueObjectArray.length > 1) {
            let previousNodeElement: Element = parentRenderElement.glueObjectArray[parentRenderElement.glueObjectArray.length - 2];
            if(previousNodeElement != undefined && previousNodeElement != null){
                if(previousNodeElement.userDefinedElement.height != undefined && previousNodeElement.userDefinedElement.height != ""){
                    userElementObject.userDefinedElement['ujs_r_height'] = rearrangeHeightAndWidth(previousNodeElement.userDefinedElement.height) + (+previousNodeElement.userDefinedElement.ujs_r_height);
                } else if(previousNodeElement.userDefinedElement.height == undefined && previousNodeElement.userDefinedElement.ujs_height != undefined){
                    userElementObject.userDefinedElement['ujs_r_height'] = previousNodeElement.userDefinedElement.ujs_height + previousNodeElement.userDefinedElement.ujs_r_height;
                } else{
                    console.log("[UJS ENGINE ERROR]:: something went wrong buddy! i am going down.");
                }
            } else{
                console.log("[UJS ENGINE ERROR]:: something went wrong buddy! i am going down.");
            }
        } else if (parentRenderElement.userDefinedElement.ujs_r_height != undefined && parentRenderElement.glueObjectArray.length == 1) {
            /**
             * if parent element has only one element
             */
            if(parentRenderElement.userDefinedElement.ujs_height != undefined){
                userElementObject.userDefinedElement['ujs_r_height'] = parentRenderElement.userDefinedElement.ujs_r_height;
            } else{
                console.log("[UJS ENGINE ERROR]:: something went wrong buddy! i am going down.");
            }
        }
        else{
            console.log("[UJS ENGINE ERROR]:: something went wrong buddy! i am going down.");
        }
    } else{
        console.log("[UJS ENGINE ERROR]:: something went wrong buddy! i am going down.");
        console.log("[UJS TIPS]:: this error can be happen if you changed the top root div id attribute value in index.html page");
        console.log("          :: the default value is 'root'");
    }
    __relativeHeightRecrusive(userElementObject);
}

/**
 * 
 * @param userElementObject HTML element that user create
 */
function __relativeHeightRecrusive(userElementObject: Element): void {
    if (userElementObject.glueObjectArray.length > 0) {
        for(let childElementIndex = 0; childElementIndex < userElementObject.glueObjectArray.length; childElementIndex++) {
            if(childElementIndex == 0) {
                userElementObject.glueObjectArray[childElementIndex].userDefinedElement['ujs_r_height'] = (userElementObject.userDefinedElement.ujs_r_height);
            } else {
                if(userElementObject.glueObjectArray[childElementIndex - 1].userDefinedElement.height != undefined){
                    userElementObject.glueObjectArray[childElementIndex].userDefinedElement['ujs_r_height'] = userElementObject.glueObjectArray[childElementIndex - 1].userDefinedElement.ujs_r_height + rearrangeHeightAndWidth(userElementObject.glueObjectArray[childElementIndex - 1].userDefinedElement.height);
                } else if(userElementObject.glueObjectArray[childElementIndex - 1].userDefinedElement.height == undefined && userElementObject.glueObjectArray[childElementIndex - 1].userDefinedElement.ujs_height != undefined){
                    userElementObject.glueObjectArray[childElementIndex].userDefinedElement['ujs_r_height'] = userElementObject.glueObjectArray[childElementIndex - 1].userDefinedElement.ujs_r_height + userElementObject.glueObjectArray[childElementIndex - 1].userDefinedElement.ujs_height;
                } else{
                }
            }
            if(userElementObject.glueObjectArray[childElementIndex].glueObjectArray.length > 0){
                __relativeHeightRecrusive(userElementObject.glueObjectArray[childElementIndex]);
            }
        }
    } else {
       // console.log("data:",JSON.parse(JSON.stringify(userElementObject)));
    }
    
}