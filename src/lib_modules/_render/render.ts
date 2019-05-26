import {Element} from '../_uraniumview/element';
import {rootElement} from '../_superBaseElement/superBaseElement';
import {__viewPortRender} from '../_viewportrender/viewportrender';
import {__recrusive} from '../_recrusive/recrusive';
import {__recrusiveInjector} from '../_recrusive/recrusiveInjector';
import {renderBucket} from '../_global/globalvariable';
import {__elementRelativeHeightCalculator} from '../_relativeheightcalculator/relativeheightcalculator';
import {initTriggerHeight, _setInitTriggerHeight, setCurrentHashValue, getCurrentHashValue,getEventListnerMap} from '../_global/globalvariable';
import {INIT_TRIGGER_HEIGHT} from '../_global/globalconstant';
import {HashRoutes} from '../_ujs_core/_routers/hashRoutes';
import {eventNamesCollectionObject} from '../_global/eventNameCollection';
/**
 * 
 * @param userDefinedRenderElement element that user defined and pass to render
 * @param parentRenderElement optional param, describe what is the element that render
 * element should bind
 */
export function Render(userDefinedRenderElement: Element, parentRenderElement?: Element, isNeedClearParent?: boolean): void {
  /**
   * TODO get default parentRenderElementId from common config file or CDN(if possiable)
   */
  let parentRenderElementId: string = 'root';
  let parentElement: Element = null;
  if(parentRenderElement != null && parentRenderElement != undefined) {
    if(parentRenderElement.userDefinedElement != null && 
        parentRenderElement.userDefinedElement != undefined && 
          parentRenderElement.userDefinedElement.ujs_id != null && 
            parentRenderElement.userDefinedElement.ujs_id != undefined &&
             parentRenderElement.userDefinedElement.ujs_id !== ""){
      parentRenderElementId = parentRenderElement.userDefinedElement.ujs_id;
    } else{
      console.log("[UJS ERROR]:: parent element has not proper ujs_id make sure to pass valid element");
    }
    parentElement = parentRenderElement;
  } else if ((parentRenderElement == null || parentRenderElement == undefined) && (isNeedClearParent != undefined && isNeedClearParent == false)) {
    rootElement.glue(userDefinedRenderElement);
    parentElement = rootElement;
  } else {
    rootElement.glueObjectArray = [];
    rootElement.glue(userDefinedRenderElement);
    parentElement = rootElement;
  }
  let parentDOMNodeElement: any = document.getElementById(parentRenderElementId);
  __viewPortRender(userDefinedRenderElement,parentDOMNodeElement,parentRenderElement);
  __elementRelativeHeightCalculator(userDefinedRenderElement,parentRenderElementId,parentRenderElement);
  if (isNeedClearParent != null && !undefined && isNeedClearParent) {
    if (parentRenderElement != null && parentRenderElement != undefined) {
      parentRenderElement.glueObjectArray = [];
    }
   // __recrusiveInjector(userDefinedRenderElement,parentElement.flagIndex,parentElement);
    //parentDOMNodeElement.innerHTML = __recrusive(userDefinedRenderElement,parentElement.flagIndex,parentElement);
  } else {
    __recrusiveInjector(userDefinedRenderElement,parentElement.flagIndex,parentElement);
    //parentDOMNodeElement.innerHTML = parentDOMNodeElement.innerHTML+__recrusive(userDefinedRenderElement,parentElement.flagIndex,parentElement);
  }
}



/**
 * 
 */
window.onscroll = function (event) {  
  let supportPageOffset: any = window.pageXOffset !== undefined;
  let isCSS1Compat: boolean = ((document.compatMode || "") === "CSS1Compat");
  let x: number = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft; 
  var y: number = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  if((y+screen.height) > initTriggerHeight) {
    _setInitTriggerHeight(initTriggerHeight + INIT_TRIGGER_HEIGHT);
    renderBucket.forEach((value , key) => {
        let bucketElement = key;
        if((bucketElement.glueObjectArray.length > bucketElement.flagIndex) && (getCurrentHashValue() == value)) {
         // let parent_div: any = document.getElementById(bucketElement.userDefinedElement.ujs_id);
         // let innerHTML: any = parent_div.innerHTML;
         // parent_div.innerHTML =innerHTML + __recrusive(bucketElement,true,bucketElement);
         __recrusiveInjector(bucketElement,true,bucketElement);
        }
    });
  }

}


window.onhashchange =  function (event) {
  let hashValue = window.location.hash;
  if (hashValue == "") {
    HashRoutes('/');
  } else {
    let reg = new RegExp('#');
    hashValue = hashValue.replace(reg,'');
    HashRoutes(hashValue);
  }
};

window.onpopstate = function (event) {
  if (history.state && history.state.id === 'homepage') {
      // Render new content for the hompage
  }
};

/**
 * this function is call when user or system reload the page
 * if url is share or paste in new place, component will render
 * according to the route that user defined
 */
window.onload = function (event) {
  let hashValue = window.location.hash;
  if (hashValue == "") {
    HashRoutes('/');
  } else {
    let reg = new RegExp('#');
    hashValue = hashValue.replace(reg,'');
    HashRoutes(hashValue);
  }
};

