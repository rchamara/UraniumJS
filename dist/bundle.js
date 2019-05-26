(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = require("../../src/lib_modules/_uraniumview/element");
const render_1 = require("../../src/lib_modules/_render/render");
const routescore_1 = require("../../src/lib_modules/_ujs_core/_routesOperation/routescore");
class HomePageView {
    constructor() {
        this.x = 0;
        this.baseElement = new element_1.Element({
            'element': 'div'
        }, this);
        this.baseElement1 = new element_1.Element({
            'element': 'div',
            'class': 'child-first',
            'tag': 'baseElement1'
        }, this);
        this.baseElement11 = new element_1.Element({
            'element': 'div',
            'class': 'child-first',
            'innerHTML': '11'
        }, this);
        this.baseElement12 = new element_1.Element({
            'element': 'div',
            'class': 'child-first',
            'innerHTML': '12'
        }, this);
        this.baseElement13 = new element_1.Element({
            'element': 'div',
            'class': 'child-first',
            'innerHTML': '13'
        }, this);
        this.baseElement14 = new element_1.Element({
            'element': 'div',
            'class': 'child-first',
            'innerHTML': '14'
        }, this);
        this.baseElement15 = new element_1.Element({
            'element': 'div',
            'class': 'child-first',
            'innerHTML': '15'
        }, this);
        this.baseElement16 = new element_1.Element({
            'element': 'div',
            'class': 'child-first',
            'innerHTML': '16'
        }, this);
        this.baseElement2 = new element_1.Element({
            'element': 'div',
            'class': 'child-second'
        }, this);
        this.headerElement = new element_1.Element({
            'element': 'div',
            'class': 'header',
            'tag': 'header'
        }, this);
        this.tempElement = new element_1.Element({
            'element': 'div',
            'class': 'tempclass'
        }, this);
        this.button = new element_1.Element({
            'element': 'button',
            'class': 'button',
            'onclick': 'onClickArrowMethod',
            'tag': 'button'
        }, this);
        this.div1 = new element_1.Element({
            'element': 'div',
            'class': 'firstNode'
        }, this);
        /////////////////////////////
        this.node1 = new element_1.Element({
            'element': 'div',
            'class': 'child-first',
            'innerHTML': 'Yashoda + Ruwan'
        }, this);
        this.node2 = new element_1.Element({
            'element': 'div',
            'class': 'child-first',
            'innerHTML': 'Yashoda + Ruwan'
        }, this);
        this.node3 = new element_1.Element({
            'element': 'div',
            'class': 'child-first'
        }, this);
        this.node4 = new element_1.Element({
            'element': 'div',
            'class': 'child-first'
        }, this);
        this.node5 = new element_1.Element({
            'element': 'div',
            'class': 'child-first'
        }, this);
        this.node6 = new element_1.Element({
            'element': 'div',
            'class': 'child-first'
        }, this);
        this.node7 = new element_1.Element({
            'element': 'div',
            'class': 'child-first'
        }, this);
        this.node8 = new element_1.Element({
            'element': 'div',
            'class': 'child-first'
        }, this);
        this.node9 = new element_1.Element({
            'element': 'div',
            'class': 'child-first'
        }, this);
        this.onClickArrowMethod = () => {
            console.log("you in are in fat arrow function");
            new routescore_1.route('/second');
            // let loc: string = window.location.href;
            // console.log("url:", window.location.href);
            // document.location.href = loc +"/t";
            // let div: Element = new Element({
            //     'element': 'div',
            //     'class': 'firstNode',
            //     'innerHTML': this.x,
            //     'tag': 'mytag'
            // }, this);
            // this.x = ++this.x;
            // this.baseElement2.glue(div);
            // Render(div, this.baseElement2);
            //window.history.back();
        };
        // this.decorateHeader();
    }
    decorateHeader() {
        //     this.headerElement.glue(this.button);
        //     this.baseElement1.glue(this.headerElement);
        //     this.baseElement1.glue(this.tempElement);
        //     this.baseElement.glue(this.baseElement1);
        //     this.baseElement.glue(this.baseElement2);
        // //     this.baseElement.glue(this.baseElement11);
        //      this.baseElement.glue(this.baseElement12);
        //     this.baseElement.glue(this.baseElement13);
        //     this.baseElement.glue(this.baseElement14);
        //     this.baseElement.glue(this.baseElement15);
        //     this.baseElement.glue(this.baseElement16);
        //this.div1.glue(this.baseElement1);
        // this.baseElement.glue(this.baseElement1);
        // this.baseElement.glue(this.baseElement2);
        // this.baseElement.glue(this.baseElement1);
        // this.baseElement.glue(this.baseElement2);
        // this.baseElement.glue(this.baseElement1);
        // this.baseElement.glue(this.baseElement2);
        // this.baseElement.glue(this.baseElement2);
        // this.baseElement.glue(this.div1);
        this.node1.glue(this.button);
        this.baseElement.glue(this.node1);
        this.baseElement.glue(this.node2);
        this.baseElement.glue(this.node3);
        this.baseElement.glue(this.node4);
        this.baseElement.glue(this.node5);
        this.baseElement.glue(this.node6);
        this.baseElement.glue(this.node7);
        this.baseElement.glue(this.node8);
        this.baseElement.glue(this.node9);
        render_1.Render(this.baseElement);
    }
}
exports.HomePageView = HomePageView;

},{"../../src/lib_modules/_render/render":11,"../../src/lib_modules/_ujs_core/_routesOperation/routescore":18,"../../src/lib_modules/_uraniumview/element":21}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = require("../../src/lib_modules/_uraniumview/element");
const render_1 = require("../../src/lib_modules/_render/render");
class SecondPage {
    constructor() {
        this.x = 0;
        this.baseElement = new element_1.Element({
            'element': 'div'
        }, this);
        this.baseElement1 = new element_1.Element({
            'element': 'div',
            'class': 'child-first',
            'tag': 'baseElement1'
        }, this);
        this.baseElement11 = new element_1.Element({
            'element': 'div',
            'class': 'child-first',
            'innerHTML': '11'
        }, this);
        this.baseElement12 = new element_1.Element({
            'element': 'div',
            'class': 'child-first',
            'innerHTML': '12'
        }, this);
        this.baseElement13 = new element_1.Element({
            'element': 'div',
            'class': 'child-first',
            'innerHTML': '13'
        }, this);
        this.baseElement14 = new element_1.Element({
            'element': 'div',
            'class': 'child-first',
            'innerHTML': '14'
        }, this);
        this.baseElement15 = new element_1.Element({
            'element': 'div',
            'class': 'child-first',
            'innerHTML': '15'
        }, this);
        this.baseElement16 = new element_1.Element({
            'element': 'div',
            'class': 'child-first',
            'innerHTML': '16'
        }, this);
        this.baseElement2 = new element_1.Element({
            'element': 'div',
            'class': 'child-second'
        }, this);
        this.headerElement = new element_1.Element({
            'element': 'div',
            'class': 'header',
            'tag': 'header'
        }, this);
        this.tempElement = new element_1.Element({
            'element': 'div',
            'class': 'tempclass'
        }, this);
        this.button = new element_1.Element({
            'element': 'button',
            'class': 'button',
            'onclick': 'onClickArrowMethod',
            'tag': 'button'
        }, this);
        this.div1 = new element_1.Element({
            'element': 'div',
            'class': 'firstNode'
        }, this);
        /////////////////////////////
        this.node1 = new element_1.Element({
            'element': 'div',
            'class': 'child-second'
        }, this);
        this.node2 = new element_1.Element({
            'element': 'div',
            'class': 'child-second'
        }, this);
        this.node3 = new element_1.Element({
            'element': 'div',
            'class': 'child-second'
        }, this);
        this.node4 = new element_1.Element({
            'element': 'div',
            'class': 'child-second'
        }, this);
        this.node5 = new element_1.Element({
            'element': 'div',
            'class': 'child-second'
        }, this);
        this.node6 = new element_1.Element({
            'element': 'div',
            'class': 'child-second'
        }, this);
        this.node7 = new element_1.Element({
            'element': 'div',
            'class': 'child-second'
        }, this);
        this.node8 = new element_1.Element({
            'element': 'div',
            'class': 'child-second'
        }, this);
        this.node9 = new element_1.Element({
            'element': 'div',
            'class': 'child-second'
        }, this);
        this.onClickArrowMethod = () => {
            console.log("you are in fat arrow function");
            // new route('/');
            // let loc: string = window.location.href;
            // console.log("url:", window.location.href);
            // document.location.href = loc +"/t";
            // let div: Element = new Element({
            //     'element': 'div',
            //     'class': 'firstNode',
            //     'innerHTML': this.x,
            //     'tag': 'mytag'
            // }, this);
            // this.x = ++this.x;
            // this.baseElement2.glue(div);
            // Render(div, this.baseElement2);
            //window.history.back();
        };
        // this.decorateHeader();
    }
    decorateHeader() {
        this.node1.glue(this.button);
        this.baseElement.glue(this.node1);
        this.baseElement.glue(this.node2);
        // this.node1.glue(this.node2);
        // this.node3.glue(this.node1);
        // this.node3.glue(this.node2);
        this.baseElement.glue(this.node3);
        this.baseElement.glue(this.node4);
        this.baseElement.glue(this.node5);
        this.baseElement.glue(this.node6);
        this.baseElement.glue(this.node7);
        this.baseElement.glue(this.node8);
        this.baseElement.glue(this.node9);
        render_1.Render(this.baseElement);
    }
}
exports.SecondPage = SecondPage;

},{"../../src/lib_modules/_render/render":11,"../../src/lib_modules/_uraniumview/element":21}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Routers_1 = require("../../src/lib_modules/_ujs_core/_routers/Routers");
const HomePageView_1 = require("../pages/HomePageView");
const secondPage_1 = require("../pages/secondPage");
class routes extends Routers_1.Routers {
    constructor() {
        super({
            '/': HomePageView_1.HomePageView,
            '/second': secondPage_1.SecondPage
        });
    }
}
exports.routes = routes;

},{"../../src/lib_modules/_ujs_core/_routers/Routers":16,"../pages/HomePageView":1,"../pages/secondPage":2}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventNamesCollectionObject = {
    /**
     * Focus events
     * */
    'onfocus': 'focus',
    'onblur': 'blur',
    /**
     * WebSocket events
     */
    'onopen': 'open',
    'onmessage': 'message',
    'onerror': 'error',
    'onclose': 'close',
    /**
     * Session History events
     */
    'onpagehide': 'pagehide',
    'onpageshow': 'pageshow',
    'onpopstate': 'popstate',
    /**
     * CSS Animation events
     */
    'onanimationstart': 'animationstart',
    'onanimationend': 'animationend',
    'animationiteration': 'animationiteration',
    /**
     * CSS Transition events
     */
    'ontransitionstart': 'transitionstart',
    'ontransitioncancel': 'transitioncancel',
    'ontransitionend': 'transitionend',
    'ontransitionrun': 'transitionrun',
    /**
     * Form events
     */
    'onreset': 'reset',
    'onsubmit': 'submit',
    /**
     * Printing events
     */
    'onbeforeprint': 'beforeprint',
    'onafterprint': 'afterprint',
    /**
     * Text Composition events
     */
    'oncompositionstart': 'compositionstart',
    'oncompositionupdate': 'compositionupdate',
    'oncompositionend': 'compositionend',
    /**
     * View events
     */
    'onfullscreenchange': 'fullscreenchange',
    'onfullscreenerror': 'fullscreenerror',
    'onresize': 'resize',
    'onscroll': 'scroll',
    /**
     * Clipboard events
     */
    'oncut': 'cut',
    'oncopy': 'copy',
    'onpaste': 'paste',
    /**
     * Keyboard events
     */
    'onkeydown': 'keydown',
    'onkeypress': 'keypress',
    'onkeyup': 'keyup',
    /**
     * Mouse events
     */
    'onauxclick': 'auxclick',
    'onclick': 'click',
    'oncontextmenu': 'contextmenu',
    'ondblclick': 'dblclick',
    'onmousedown': 'mousedown',
    'onmouseenter': 'mouseenter',
    'onmouseleave': 'mouseleave',
    'onmousemove': 'mousemove',
    'onmouseover': 'mouseover',
    'onmouseout': 'mouseout',
    'onmouseup': 'mouseup',
    'onpointerlockchange': 'pointerlockchange',
    'onpointerlockerror': 'pointerlockerror',
    'onselect': 'select',
    'onwheel': 'wheel',
    /**
     * Drag & Drop events
     */
    'ondrag': 'drag',
    'ondragend': 'dragend',
    'ondragenter': 'dragenter',
    'ondragstart': 'dragstart',
    'ondragleave': 'dragleave',
    'ondragover': 'dragover',
    'ondrop': 'drop',
    /**
     * Media events
     */
    'onaudioprocess': 'audioprocess',
    'oncanplay': 'canplay',
    'oncanplaythrough': 'canplaythrough',
    'oncomplete': 'complete',
    'ondurationchange': 'durationchange',
    'onemptied': 'emptied',
    'onended': 'ended',
    'onloadeddata': 'loadeddata',
    'onloadedmetadata': 'loadedmetadata',
    'onpause': 'pause',
    'onplay': 'play',
    'onplaying': 'playing',
    'onratechange': 'ratechange',
    'onseeked': 'seeked',
    'onseeking': 'seeking',
    'onstalled': 'stalled',
    'onsuspend': 'suspend',
    'ontimeupdate': 'timeupdate',
    'onvolumechange': 'volumechange',
    'onwaiting': 'waiting',
    /**
     * Progress events
     */
    'onabort': 'abort',
    'onload': 'load',
    'onloadend': 'loadend',
    'onloadstart': 'loadstart',
    'onprogress': 'progress',
    'ontimeout': 'timeout',
    /**
     * Storage events
     */
    'onchange': 'change',
    'onstorage': 'storage',
    /**
     * Update events
     */
    'onchecking': 'checking',
    'ondownloading': 'downloading',
    'onnoupdate': 'noupdate',
    'onobsolete': 'obsolete',
    'onupdateready': 'updateready',
    /**
     * Value change events
     */
    'onbroadcast': 'broadcast',
    'onCheckboxStateChange': 'CheckboxStateChange',
    'onhashchange': 'hashchange',
    'oninput': 'input',
    'onRadioStateChange': 'RadioStateChange',
    'onreadystatechange': 'readystatechange',
    'onValueChange': 'ValueChange',
    /**
     * Uncategorized events
     */
    'oninvalid': 'invalid',
    'onlocalized': 'localized',
    'onshow': 'show'
};

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INIT_TRIGGER_HEIGHT = 768;
exports.FLAG_POINT_VALUE = 0;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalconstant_1 = require("../_global/globalconstant");
exports.renderBucket = new Map();
exports.initTriggerHeight = globalconstant_1.INIT_TRIGGER_HEIGHT;
exports.flagPoint = globalconstant_1.FLAG_POINT_VALUE;
exports.routers = {};
exports.elementCollectons = new Set();
exports.grandParent = document.getElementById("root");
exports.eventListnerMap = new Map();
exports.eventListnerArray = [];
/**
 * setter for eventListenerMap
 */
function setEventListnerMap(key, value) {
    exports.eventListnerMap.set(key, value);
}
exports.setEventListnerMap = setEventListnerMap;
/**
 * getter for eventListnerMap
 */
function getEventListnerMap(key) {
    return exports.eventListnerMap.get(key);
}
exports.getEventListnerMap = getEventListnerMap;
/**
 * set currentHashValue
 */
function setCurrentHashValue(hashValue) {
    exports.currentHashValue = hashValue;
}
exports.setCurrentHashValue = setCurrentHashValue;
/**
 * get currentHashValue
 */
function getCurrentHashValue() {
    let hashValue = window.location.hash;
    if (hashValue == "") {
        hashValue = "#/";
    }
    return hashValue;
}
exports.getCurrentHashValue = getCurrentHashValue;
/**
 * set render bucket
 */
function setRenderBucket(key, vlaue) {
    if (!isRenderBucketHasKey(key, vlaue))
        exports.renderBucket.set(key, vlaue);
}
exports.setRenderBucket = setRenderBucket;
function isRenderBucketHasKey(newKey, currentValue) {
    let keyHas = false;
    exports.renderBucket.forEach((value, key) => {
        if (key.elementID == newKey.elementID && value == currentValue) {
            keyHas = true;
        }
    });
    return keyHas;
}
/**
 * find the parent unique flag index and increment it by 1
 */
function flagIndexIncrementer(userDefinedElement, grandParent) {
    if (userDefinedElement == null || userDefinedElement == undefined)
        console.log("ERROR: userdeined element is not valid");
    if (grandParent == null || grandParent == undefined)
        console.log("ERROR: grandParent is not valid");
}
exports.flagIndexIncrementer = flagIndexIncrementer;
/**
 * set flagIndexGrandParent
 */
function setFlagIndexGrandParent(flagIndexGrandParentValue) {
    this.flagIndexGrandParent = flagIndexGrandParentValue;
}
exports.setFlagIndexGrandParent = setFlagIndexGrandParent;
/**
 * get flagIndexGrandParent
 */
function getFlagIndexGrandParent() {
    return this.flagIndexGrandParent;
}
exports.getFlagIndexGrandParent = getFlagIndexGrandParent;
/**
 * get element Object from collections
 * @param ujsId id of the element
 */
function _getElementCollectons(ujsId) {
    for (let element of exports.elementCollectons) {
        if (element.ujs_id == ujsId) {
            return element;
        }
    }
    return null;
}
exports._getElementCollectons = _getElementCollectons;
/**
 * setter element for elementCollectons variable
 * @param userDefinedElement user created element
 */
function _setElementCollectons(userDefinedElement) {
    exports.elementCollectons.add(userDefinedElement);
}
exports._setElementCollectons = _setElementCollectons;
/**
 *
 * @param newInitTriggerHeight new value of initTriggerHeight varibale
 */
function _setInitTriggerHeight(newInitTriggerHeight) {
    this.initTriggerHeight = newInitTriggerHeight;
}
exports._setInitTriggerHeight = _setInitTriggerHeight;
/**
 *
 * @param newFlagPoint new value of flagPoint varibale
 */
function _setFlagPoint(newFlagPoint) {
    this.flagPoint = newFlagPoint;
}
exports._setFlagPoint = _setFlagPoint;
/**
 *
 * @param userDefinedRouters user defined router object
 */
function _setRouters(userDefinedRouters) {
    this.routers = userDefinedRouters;
}
exports._setRouters = _setRouters;
/**
 *
 * getter for routers variable
 */
function _getRouters() {
    return this.routers;
}
exports._getRouters = _getRouters;

},{"../_global/globalconstant":5}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {routes} from '../../../test/homepage/routes';
const routes_1 = require("../../../controllers/routes/routes");
new routes_1.routes();
//ignite 

},{"../../../controllers/routes/routes":3}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalvariable_1 = require("../_global/globalvariable");
const globalvariable_2 = require("../_global/globalvariable");
/**
 *
 * @param userDefinedRenderElement HTML element that need to convert string type
 */
function __recrusive(userDefinedRenderElement, flagIndex, parentRenderElement) {
    if (userDefinedRenderElement.userDefinedElement.ujs_r_height > globalvariable_2.initTriggerHeight) {
        if ((flagIndex != undefined || flagIndex != null) && (flagIndex != true || flagIndex != false)) {
            parentRenderElement.flagIndex = flagIndex;
        }
        if (flagIndex != undefined && (flagIndex != true || flagIndex != false)) {
            //renderBucket.set(parentRenderElement, flagIndex);
            globalvariable_1.setRenderBucket(parentRenderElement, globalvariable_1.getCurrentHashValue());
        }
        else {
            //renderBucket.set(parentRenderElement, 0);
            globalvariable_1.setRenderBucket(parentRenderElement, globalvariable_1.getCurrentHashValue());
        }
        return "";
    }
    ;
    let temporyInnerHtml;
    if (userDefinedRenderElement.glueObjectArray.length == 0) {
        if (userDefinedRenderElement.userDefinedElement.innerHTML != null || userDefinedRenderElement.userDefinedElement.innerHTML != undefined) {
            temporyInnerHtml = String(userDefinedRenderElement.userDefinedElement.innerHTML);
        }
        parentRenderElement.flagIndex = (+parentRenderElement.flagIndex) + 1;
    }
    else {
        for (let i = userDefinedRenderElement.flagIndex; i < userDefinedRenderElement.glueObjectArray.length; i++) {
            let recrusive_result = __recrusive(userDefinedRenderElement.glueObjectArray[i], i, userDefinedRenderElement);
            if (temporyInnerHtml == undefined) {
                temporyInnerHtml = recrusive_result;
            }
            else {
                temporyInnerHtml = temporyInnerHtml + recrusive_result;
            }
            if (recrusive_result == "")
                break;
        }
    }
    globalvariable_1.eventListnerArray.push(userDefinedRenderElement);
    return domElementCreater(temporyInnerHtml, userDefinedRenderElement, flagIndex);
}
exports.__recrusive = __recrusive;
/**
 *
 * @param temporyInnerHtml hold the previous html elements
 * @param userDefinedRenderElement user defined html element
 * @param flagIndex point that previous render stopped
 */
function domElementCreater(temporyInnerHtml, userDefinedRenderElement, flagIndex) {
    let DOMElement;
    let acceptValue = userDefinedRenderElement.userDefinedElement.accept ? (" accept='" + userDefinedRenderElement.userDefinedElement.accept + "'") : '';
    let acceptcharsetValue = userDefinedRenderElement.userDefinedElement.accept_charset ? (" accept-charset='" + userDefinedRenderElement.userDefinedElement.accept_charset + "'") : '';
    let accesskeyValue = userDefinedRenderElement.userDefinedElement.accesskey ? (" accesskey='" + userDefinedRenderElement.userDefinedElement.accesskey + "'") : '';
    let actionValue = userDefinedRenderElement.userDefinedElement.action ? (" action='" + userDefinedRenderElement.userDefinedElement.action + "'") : '';
    let alignValue = userDefinedRenderElement.userDefinedElement.align ? (" align='" + userDefinedRenderElement.userDefinedElement.align + "'") : '';
    let allowValue = userDefinedRenderElement.userDefinedElement.allow ? (" allow='" + userDefinedRenderElement.userDefinedElement.allow + "'") : '';
    let altValue = userDefinedRenderElement.userDefinedElement.alt ? (" alt='" + userDefinedRenderElement.userDefinedElement.alt + "'") : '';
    let asyncValue = userDefinedRenderElement.userDefinedElement.async ? (" async='" + userDefinedRenderElement.userDefinedElement.async + "'") : '';
    let autocapitalizeValue = userDefinedRenderElement.userDefinedElement.autocapitalize ? (" autocapitalize='" + userDefinedRenderElement.userDefinedElement.autocapitalize + "'") : '';
    let autocompleteValue = userDefinedRenderElement.userDefinedElement.autocomplete ? (" autocomplete='" + userDefinedRenderElement.userDefinedElement.autocomplete + "'") : '';
    let autofocusValue = userDefinedRenderElement.userDefinedElement.autofocus ? (" autofocus='" + userDefinedRenderElement.userDefinedElement.autofocus + "'") : '';
    let autoplayValue = userDefinedRenderElement.userDefinedElement.autoplay ? (" autoplay='" + userDefinedRenderElement.userDefinedElement.autoplay + "'") : '';
    let bgcolorValue = userDefinedRenderElement.userDefinedElement.bgcolor ? (" bgcolor='" + userDefinedRenderElement.userDefinedElement.bgcolor + "'") : '';
    let borderValue = userDefinedRenderElement.userDefinedElement.border ? (" border='" + userDefinedRenderElement.userDefinedElement.border + "'") : '';
    let bufferedValue = userDefinedRenderElement.userDefinedElement.buffered ? (" buffered='" + userDefinedRenderElement.userDefinedElement.buffered + "'") : '';
    let challengeValue = userDefinedRenderElement.userDefinedElement.challenge ? (" challenge='" + userDefinedRenderElement.userDefinedElement.challenge + "'") : '';
    let charsetValue = userDefinedRenderElement.userDefinedElement.charset ? (" charset='" + userDefinedRenderElement.userDefinedElement.charset + "'") : '';
    let checkedValue = userDefinedRenderElement.userDefinedElement.checked ? (" checked='" + userDefinedRenderElement.userDefinedElement.checked + "'") : '';
    let citeValue = userDefinedRenderElement.userDefinedElement.cite ? (" cite='" + userDefinedRenderElement.userDefinedElement.cite + "'") : '';
    let classValue = userDefinedRenderElement.userDefinedElement.class ? (" class='" + userDefinedRenderElement.userDefinedElement.class + "'") : '';
    let codeValue = userDefinedRenderElement.userDefinedElement.code ? (" code='" + userDefinedRenderElement.userDefinedElement.code + "'") : '';
    let codebaseValue = userDefinedRenderElement.userDefinedElement.codebase ? (" codebase='" + userDefinedRenderElement.userDefinedElement.codebase + "'") : '';
    let colorValue = userDefinedRenderElement.userDefinedElement.color ? (" color='" + userDefinedRenderElement.userDefinedElement.color + "'") : '';
    let colsValue = userDefinedRenderElement.userDefinedElement.cols ? (" cols='" + userDefinedRenderElement.userDefinedElement.cols + "'") : '';
    let colspanValue = userDefinedRenderElement.userDefinedElement.colspan ? (" colspan='" + userDefinedRenderElement.userDefinedElement.colspan + "'") : '';
    let contentValue = userDefinedRenderElement.userDefinedElement.content ? (" content='" + userDefinedRenderElement.userDefinedElement.content + "'") : '';
    let contenteditableValue = userDefinedRenderElement.userDefinedElement.contenteditable ? (" contenteditable='" + userDefinedRenderElement.userDefinedElement.contenteditable + "'") : '';
    let contextmenuValue = userDefinedRenderElement.userDefinedElement.contextmenu ? (" contextmenu='" + userDefinedRenderElement.userDefinedElement.contextmenu + "'") : '';
    let controlsValue = userDefinedRenderElement.userDefinedElement.controls ? (" controls='" + userDefinedRenderElement.userDefinedElement.controls + "'") : '';
    let coordsValue = userDefinedRenderElement.userDefinedElement.coords ? (" coords='" + userDefinedRenderElement.userDefinedElement.coords + "'") : '';
    let crossoriginValue = userDefinedRenderElement.userDefinedElement.crossorigin ? (" crossorigin='" + userDefinedRenderElement.userDefinedElement.crossorigin + "'") : '';
    let cspValue = userDefinedRenderElement.userDefinedElement.csp ? (" csp='" + userDefinedRenderElement.userDefinedElement.csp + "'") : '';
    let dataValue = userDefinedRenderElement.userDefinedElement.data ? (" data='" + userDefinedRenderElement.userDefinedElement.data + "'") : '';
    let data_StarValue = userDefinedRenderElement.userDefinedElement.data_star ? (" data-*='" + userDefinedRenderElement.userDefinedElement.data_star + "'") : '';
    let datetimeValue = userDefinedRenderElement.userDefinedElement.datetime ? (" datetime='" + userDefinedRenderElement.userDefinedElement.datetime + "'") : '';
    let decodingValue = userDefinedRenderElement.userDefinedElement.decoding ? (" decoding='" + userDefinedRenderElement.userDefinedElement.decoding + "'") : '';
    let defaultValue = userDefinedRenderElement.userDefinedElement.default ? (" default='" + userDefinedRenderElement.userDefinedElement.default + "'") : '';
    let deferValue = userDefinedRenderElement.userDefinedElement.defer ? (" defer='" + userDefinedRenderElement.userDefinedElement.defer + "'") : '';
    let dirValue = userDefinedRenderElement.userDefinedElement.dir ? (" dir='" + userDefinedRenderElement.userDefinedElement.dir + "'") : '';
    let dirnameValue = userDefinedRenderElement.userDefinedElement.dirname ? (" dirname='" + userDefinedRenderElement.userDefinedElement.dirname + "'") : '';
    let disabledValue = userDefinedRenderElement.userDefinedElement.disabled ? (" disabled='" + userDefinedRenderElement.userDefinedElement.disabled + "'") : '';
    let downloadValue = userDefinedRenderElement.userDefinedElement.download ? (" download='" + userDefinedRenderElement.userDefinedElement.download + "'") : '';
    let draggableValue = userDefinedRenderElement.userDefinedElement.draggable ? (" draggable='" + userDefinedRenderElement.userDefinedElement.draggable + "'") : '';
    let dropzoneValue = userDefinedRenderElement.userDefinedElement.dropzone ? (" dropzone='" + userDefinedRenderElement.userDefinedElement.dropzone + "'") : '';
    let enctypeValue = userDefinedRenderElement.userDefinedElement.enctype ? (" enctype='" + userDefinedRenderElement.userDefinedElement.enctype + "'") : '';
    let forValue = userDefinedRenderElement.userDefinedElement.for ? (" for='" + userDefinedRenderElement.userDefinedElement.for + "'") : '';
    let formValue = userDefinedRenderElement.userDefinedElement.form ? (" form='" + userDefinedRenderElement.userDefinedElement.form + "'") : '';
    let formactionValue = userDefinedRenderElement.userDefinedElement.formaction ? (" formaction='" + userDefinedRenderElement.userDefinedElement.formaction + "'") : '';
    let headersValue = userDefinedRenderElement.userDefinedElement.headers ? (" headers='" + userDefinedRenderElement.userDefinedElement.headers + "'") : '';
    let hiddenValue = userDefinedRenderElement.userDefinedElement.hidden ? (" hidden='" + userDefinedRenderElement.userDefinedElement.hidden + "'") : '';
    let highValue = userDefinedRenderElement.userDefinedElement.high ? (" high='" + userDefinedRenderElement.userDefinedElement.high + "'") : '';
    let hrefValue = userDefinedRenderElement.userDefinedElement.href ? (" href='" + userDefinedRenderElement.userDefinedElement.href + "'") : '';
    let hreflangValue = userDefinedRenderElement.userDefinedElement.hreflang ? (" hreflang='" + userDefinedRenderElement.userDefinedElement.hreflang + "'") : '';
    let http_equivValue = userDefinedRenderElement.userDefinedElement.http_equiv ? (" http-equiv='" + userDefinedRenderElement.userDefinedElement.http_equiv + "'") : '';
    let iconValue = userDefinedRenderElement.userDefinedElement.icon ? (" icon='" + userDefinedRenderElement.userDefinedElement.icon + "'") : '';
    let idValue = userDefinedRenderElement.userDefinedElement.ujs_id ? (" id='" + userDefinedRenderElement.userDefinedElement.ujs_id + "'") : '';
    let importanceValue = userDefinedRenderElement.userDefinedElement.importance ? (" importance='" + userDefinedRenderElement.userDefinedElement.importance + "'") : '';
    let integrityValue = userDefinedRenderElement.userDefinedElement.integrity ? (" integrity='" + userDefinedRenderElement.userDefinedElement.integrity + "'") : '';
    let ismapValue = userDefinedRenderElement.userDefinedElement.ismap ? (" ismap='" + userDefinedRenderElement.userDefinedElement.ismap + "'") : '';
    let itempropValue = userDefinedRenderElement.userDefinedElement.itemprop ? (" itemprop='" + userDefinedRenderElement.userDefinedElement.itemprop + "'") : '';
    let keytypeValue = userDefinedRenderElement.userDefinedElement.itemprop ? (" keytype='" + userDefinedRenderElement.userDefinedElement.keytype + "'") : '';
    let kindValue = userDefinedRenderElement.userDefinedElement.kind ? (" kind='" + userDefinedRenderElement.userDefinedElement.kind + "'") : '';
    let labelValue = userDefinedRenderElement.userDefinedElement.label ? (" label='" + userDefinedRenderElement.userDefinedElement.label + "'") : '';
    let langValue = userDefinedRenderElement.userDefinedElement.lang ? (" lang='" + userDefinedRenderElement.userDefinedElement.lang + "'") : '';
    let languageValue = userDefinedRenderElement.userDefinedElement.language ? (" language='" + userDefinedRenderElement.userDefinedElement.language + "'") : '';
    let lazyloadValue = userDefinedRenderElement.userDefinedElement.lazyload ? (" lazyload='" + userDefinedRenderElement.userDefinedElement.lazyload + "'") : '';
    let listValue = userDefinedRenderElement.userDefinedElement.list ? (" list='" + userDefinedRenderElement.userDefinedElement.list + "'") : '';
    let loopValue = userDefinedRenderElement.userDefinedElement.loop ? (" loop='" + userDefinedRenderElement.userDefinedElement.loop + "'") : '';
    let lowValue = userDefinedRenderElement.userDefinedElement.low ? (" low='" + userDefinedRenderElement.userDefinedElement.low + "'") : '';
    let manifestValue = userDefinedRenderElement.userDefinedElement.manifest ? (" manifest='" + userDefinedRenderElement.userDefinedElement.manifest + "'") : '';
    let maxValue = userDefinedRenderElement.userDefinedElement.max ? (" max='" + userDefinedRenderElement.userDefinedElement.max + "'") : '';
    let maxlengthValue = userDefinedRenderElement.userDefinedElement.maxlength ? (" maxlength='" + userDefinedRenderElement.userDefinedElement.maxlength + "'") : '';
    let minlengthValue = userDefinedRenderElement.userDefinedElement.minlength ? (" minlength='" + userDefinedRenderElement.userDefinedElement.minlength + "'") : '';
    let mediaValue = userDefinedRenderElement.userDefinedElement.media ? (" media='" + userDefinedRenderElement.userDefinedElement.media + "'") : '';
    let methodValue = userDefinedRenderElement.userDefinedElement.method ? (" method='" + userDefinedRenderElement.userDefinedElement.method + "'") : '';
    let minValue = userDefinedRenderElement.userDefinedElement.min ? (" min='" + userDefinedRenderElement.userDefinedElement.min + "'") : '';
    let multipleValue = userDefinedRenderElement.userDefinedElement.multiple ? (" multiple='" + userDefinedRenderElement.userDefinedElement.multiple + "'") : '';
    let mutedValue = userDefinedRenderElement.userDefinedElement.muted ? (" muted='" + userDefinedRenderElement.userDefinedElement.muted + "'") : '';
    let nameValue = userDefinedRenderElement.userDefinedElement.name ? (" name='" + userDefinedRenderElement.userDefinedElement.name + "'") : '';
    let novalidateValue = userDefinedRenderElement.userDefinedElement.novalidate ? (" novalidate='" + userDefinedRenderElement.userDefinedElement.novalidate + "'") : '';
    let openValue = userDefinedRenderElement.userDefinedElement.open ? (" open='" + userDefinedRenderElement.userDefinedElement.open + "'") : '';
    let optimumValue = userDefinedRenderElement.userDefinedElement.optimum ? (" optimum='" + userDefinedRenderElement.userDefinedElement.optimum + "'") : '';
    let patternValue = userDefinedRenderElement.userDefinedElement.pattern ? (" pattern='" + userDefinedRenderElement.userDefinedElement.pattern + "'") : '';
    let pingValue = userDefinedRenderElement.userDefinedElement.ping ? (" ping='" + userDefinedRenderElement.userDefinedElement.ping + "'") : '';
    let placeholderValue = userDefinedRenderElement.userDefinedElement.placeholder ? (" placeholder='" + userDefinedRenderElement.userDefinedElement.placeholder + "'") : '';
    let posterValue = userDefinedRenderElement.userDefinedElement.poster ? (" poster='" + userDefinedRenderElement.userDefinedElement.poster + "'") : '';
    let preloadValue = userDefinedRenderElement.userDefinedElement.preload ? (" preload='" + userDefinedRenderElement.userDefinedElement.preload + "'") : '';
    let radiogroupValue = userDefinedRenderElement.userDefinedElement.radiogroup ? (" radiogroup='" + userDefinedRenderElement.userDefinedElement.radiogroup + "'") : '';
    let readonlyValue = userDefinedRenderElement.userDefinedElement.readonly ? (" readonly='" + userDefinedRenderElement.userDefinedElement.readonly + "'") : '';
    let relValue = userDefinedRenderElement.userDefinedElement.rel ? (" rel='" + userDefinedRenderElement.userDefinedElement.rel + "'") : '';
    let requiredValue = userDefinedRenderElement.userDefinedElement.required ? (" required='" + userDefinedRenderElement.userDefinedElement.required + "'") : '';
    let reversedValue = userDefinedRenderElement.userDefinedElement.reversed ? (" reversed='" + userDefinedRenderElement.userDefinedElement.reversed + "'") : '';
    let rowsValue = userDefinedRenderElement.userDefinedElement.rows ? (" rows='" + userDefinedRenderElement.userDefinedElement.rows + "'") : '';
    let rowspanValue = userDefinedRenderElement.userDefinedElement.rowspan ? (" rowspan='" + userDefinedRenderElement.userDefinedElement.rowspan + "'") : '';
    let sandboxValue = userDefinedRenderElement.userDefinedElement.sandbox ? (" sandbox='" + userDefinedRenderElement.userDefinedElement.sandbox + "'") : '';
    let scopeValue = userDefinedRenderElement.userDefinedElement.scope ? (" scope='" + userDefinedRenderElement.userDefinedElement.scope + "'") : '';
    let scopedValue = userDefinedRenderElement.userDefinedElement.scoped ? (" scoped='" + userDefinedRenderElement.userDefinedElement.scoped + "'") : '';
    let selectedValue = userDefinedRenderElement.userDefinedElement.selected ? (" selected='" + userDefinedRenderElement.userDefinedElement.selected + "'") : '';
    let shapeValue = userDefinedRenderElement.userDefinedElement.shape ? (" shape='" + userDefinedRenderElement.userDefinedElement.shape + "'") : '';
    let sizeValue = userDefinedRenderElement.userDefinedElement.size ? (" size='" + userDefinedRenderElement.userDefinedElement.size + "'") : '';
    let sizesValue = userDefinedRenderElement.userDefinedElement.sizes ? (" sizes='" + userDefinedRenderElement.userDefinedElement.sizes + "'") : '';
    let slotValue = userDefinedRenderElement.userDefinedElement.slot ? (" slot='" + userDefinedRenderElement.userDefinedElement.slot + "'") : '';
    let spanValue = userDefinedRenderElement.userDefinedElement.span ? (" span='" + userDefinedRenderElement.userDefinedElement.span + "'") : '';
    let spellcheckValue = userDefinedRenderElement.userDefinedElement.spellcheck ? (" spellcheck='" + userDefinedRenderElement.userDefinedElement.spellcheck + "'") : '';
    let srcValue = userDefinedRenderElement.userDefinedElement.src ? (" src='" + userDefinedRenderElement.userDefinedElement.src + "'") : '';
    let srcdocValue = userDefinedRenderElement.userDefinedElement.srcdoc ? (" srcdoc='" + userDefinedRenderElement.userDefinedElement.srcdoc + "'") : '';
    let srclangValue = userDefinedRenderElement.userDefinedElement.srclang ? (" srclang='" + userDefinedRenderElement.userDefinedElement.srclang + "'") : '';
    let srcsetValue = userDefinedRenderElement.userDefinedElement.srcset ? (" srcset='" + userDefinedRenderElement.userDefinedElement.srcset + "'") : '';
    let startValue = userDefinedRenderElement.userDefinedElement.start ? (" start='" + userDefinedRenderElement.userDefinedElement.start + "'") : '';
    let stepValue = userDefinedRenderElement.userDefinedElement.step ? (" step='" + userDefinedRenderElement.userDefinedElement.step + "'") : '';
    let styleValue = userDefinedRenderElement.userDefinedElement.style ? (" style='" + userDefinedRenderElement.userDefinedElement.style + "'") : '';
    let summaryValue = userDefinedRenderElement.userDefinedElement.summary ? (" summary='" + userDefinedRenderElement.userDefinedElement.summary + "'") : '';
    let tabindexValue = userDefinedRenderElement.userDefinedElement.tabindex ? (" tabindex='" + userDefinedRenderElement.userDefinedElement.tabindex + "'") : '';
    let titleValue = userDefinedRenderElement.userDefinedElement.title ? (" title='" + userDefinedRenderElement.userDefinedElement.title + "'") : '';
    let translateValue = userDefinedRenderElement.userDefinedElement.translate ? (" translate='" + userDefinedRenderElement.userDefinedElement.translate + "'") : '';
    let typeValue = userDefinedRenderElement.userDefinedElement.type ? (" type='" + userDefinedRenderElement.userDefinedElement.type + "'") : '';
    let usemapValue = userDefinedRenderElement.userDefinedElement.usemap ? (" usemappe='" + userDefinedRenderElement.userDefinedElement.usemap + "'") : '';
    let valueValue = userDefinedRenderElement.userDefinedElement.value ? (" value='" + userDefinedRenderElement.userDefinedElement.value + "'") : '';
    let widthValue = userDefinedRenderElement.userDefinedElement.width ? (" width='" + userDefinedRenderElement.userDefinedElement.width + "'") : '';
    let wrapValue = userDefinedRenderElement.userDefinedElement.wrap ? (" wrap='" + userDefinedRenderElement.userDefinedElement.wrap + "'") : '';
    /**
     * show the warnning if attibutes are not valid
     */
    userDefinedRenderElement.userDefinedElement.addclass ? (console.log('[UJS WARRNING]:: add classes is not valid here, use Reactor to add classes values')) : '';
    userDefinedRenderElement.userDefinedElement.id ? (console.log('[UJS WARRNING]:: setting id value is not valid')) : '';
    if ((temporyInnerHtml == undefined || temporyInnerHtml == null || temporyInnerHtml == "") && flagIndex !== true) {
        DOMElement = "<" + userDefinedRenderElement.userDefinedElement.element +
            acceptValue +
            acceptcharsetValue +
            accesskeyValue +
            actionValue +
            alignValue +
            allowValue +
            altValue +
            asyncValue +
            autocapitalizeValue +
            autocompleteValue +
            autofocusValue +
            autoplayValue +
            bgcolorValue +
            borderValue +
            bufferedValue +
            challengeValue +
            charsetValue +
            checkedValue +
            citeValue +
            classValue +
            codeValue +
            codebaseValue +
            colorValue +
            colsValue +
            colspanValue +
            contentValue +
            contenteditableValue +
            contextmenuValue +
            controlsValue +
            coordsValue +
            crossoriginValue +
            cspValue +
            dataValue +
            data_StarValue +
            datetimeValue +
            decodingValue +
            defaultValue +
            deferValue +
            dirValue +
            dirnameValue +
            disabledValue +
            downloadValue +
            draggableValue +
            dropzoneValue +
            enctypeValue +
            forValue +
            formValue +
            formactionValue +
            headersValue +
            hiddenValue +
            highValue +
            hrefValue +
            hreflangValue +
            http_equivValue +
            iconValue +
            idValue +
            importanceValue +
            integrityValue +
            ismapValue +
            itempropValue +
            keytypeValue +
            kindValue +
            labelValue +
            langValue +
            languageValue +
            lazyloadValue +
            listValue +
            loopValue +
            lowValue +
            manifestValue +
            maxValue +
            maxlengthValue +
            minlengthValue +
            mediaValue +
            methodValue +
            minValue +
            multipleValue +
            mutedValue +
            nameValue +
            novalidateValue +
            openValue +
            optimumValue +
            patternValue +
            pingValue +
            placeholderValue +
            posterValue +
            preloadValue +
            radiogroupValue +
            readonlyValue +
            relValue +
            requiredValue +
            reversedValue +
            rowsValue +
            rowspanValue +
            sandboxValue +
            scopeValue +
            scopedValue +
            selectedValue +
            shapeValue +
            sizeValue +
            sizesValue +
            slotValue +
            spanValue +
            spellcheckValue +
            srcValue +
            srcdocValue +
            srclangValue +
            srcsetValue +
            startValue +
            stepValue +
            styleValue +
            summaryValue +
            tabindexValue +
            titleValue +
            translateValue +
            typeValue +
            usemapValue +
            valueValue +
            widthValue +
            wrapValue +
            ">" +
            "</" + userDefinedRenderElement.userDefinedElement.element + ">";
    }
    else if (flagIndex === true) {
        DOMElement = temporyInnerHtml;
    }
    else {
        DOMElement = "<" + userDefinedRenderElement.userDefinedElement.element +
            acceptValue +
            acceptcharsetValue +
            accesskeyValue +
            actionValue +
            alignValue +
            allowValue +
            altValue +
            asyncValue +
            autocapitalizeValue +
            autocompleteValue +
            autofocusValue +
            autoplayValue +
            bgcolorValue +
            borderValue +
            bufferedValue +
            challengeValue +
            charsetValue +
            checkedValue +
            citeValue +
            classValue +
            codeValue +
            codebaseValue +
            colorValue +
            colsValue +
            colspanValue +
            contentValue +
            contenteditableValue +
            contextmenuValue +
            controlsValue +
            coordsValue +
            crossoriginValue +
            cspValue +
            dataValue +
            data_StarValue +
            datetimeValue +
            decodingValue +
            defaultValue +
            deferValue +
            dirValue +
            dirnameValue +
            disabledValue +
            downloadValue +
            draggableValue +
            dropzoneValue +
            enctypeValue +
            forValue +
            formValue +
            formactionValue +
            headersValue +
            hiddenValue +
            highValue +
            hrefValue +
            hreflangValue +
            http_equivValue +
            iconValue +
            idValue +
            importanceValue +
            integrityValue +
            ismapValue +
            itempropValue +
            keytypeValue +
            kindValue +
            labelValue +
            langValue +
            languageValue +
            lazyloadValue +
            listValue +
            loopValue +
            lowValue +
            manifestValue +
            maxValue +
            maxlengthValue +
            minlengthValue +
            mediaValue +
            methodValue +
            minValue +
            multipleValue +
            mutedValue +
            nameValue +
            novalidateValue +
            openValue +
            optimumValue +
            patternValue +
            pingValue +
            placeholderValue +
            posterValue +
            preloadValue +
            radiogroupValue +
            readonlyValue +
            relValue +
            requiredValue +
            reversedValue +
            rowsValue +
            rowspanValue +
            sandboxValue +
            scopeValue +
            scopedValue +
            selectedValue +
            shapeValue +
            sizeValue +
            sizesValue +
            slotValue +
            spanValue +
            spellcheckValue +
            srcValue +
            srcdocValue +
            srclangValue +
            srcsetValue +
            startValue +
            stepValue +
            styleValue +
            summaryValue +
            tabindexValue +
            titleValue +
            translateValue +
            typeValue +
            usemapValue +
            valueValue +
            widthValue +
            wrapValue +
            ">" +
            temporyInnerHtml +
            "</" + userDefinedRenderElement.userDefinedElement.element + ">";
    }
    return DOMElement;
}

},{"../_global/globalvariable":6}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalvariable_1 = require("../_global/globalvariable");
const recrusive_1 = require("../_recrusive/recrusive");
var grandParent = document.getElementById("root");
/**
 *
 * @param userDefinedRenderElement HTML element that need to convert string type
 */
function __recrusiveInjector(userDefinedRenderElement, flagIndex, parentRenderElement) {
    let parentNode = getParentFromDOM(parentRenderElement);
    if (parentNode == undefined) {
        let nodeCollectionString = recrusive_1.__recrusive(userDefinedRenderElement, flagIndex, parentRenderElement);
        grandParent.innerHTML = grandParent.innerHTML + nodeCollectionString;
        addEvent();
    }
    else {
        let domParentNodeAllChilds = Array.from(getAllBranchesInNode(parentNode));
        let domParentChildLength = domParentNodeAllChilds.length;
        //let domParentChildIndexClone = domParentNodeAllChilds.
        if (domParentNodeAllChilds.length == 0) {
            let nodeCollectionString = recrusive_1.__recrusive(userDefinedRenderElement, flagIndex, parentRenderElement);
            parentNode.innerHTML = nodeCollectionString;
            addEvent();
            // parentNode.innerHTML =  __recrusive(userDefinedRenderElement, flagIndex, parentRenderElement);
        }
        else if (flagIndex == true) {
            let newNodeArray = [];
            for (let childIndex = (userDefinedRenderElement.flagIndex + 1); childIndex < userDefinedRenderElement.glueObjectArray.length; childIndex++) {
                // console.log('childIndex',childIndex);
                // console.log("userDefinedRenderElement:", userDefinedRenderElement);
                let parser = new DOMParser();
                let nodeCollectionString = recrusive_1.__recrusive(userDefinedRenderElement.glueObjectArray[childIndex], userDefinedRenderElement.flagIndex, userDefinedRenderElement);
                if (nodeCollectionString == '')
                    break;
                let node = parser.parseFromString(nodeCollectionString, 'text/html');
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
        }
        else {
            grandParent = parentNode;
            let children_size = domParentNodeAllChilds.length;
            for (let domParentChildIndex = 0; domParentChildIndex < children_size; domParentChildIndex++) {
                try {
                    let newElement = parentRenderElement.glueObjectArray[domParentChildIndex];
                    switch (sameNodeStatus(domParentNodeAllChilds[domParentChildIndex], newElement)) {
                        case 0:
                            let parser = new DOMParser();
                            let nodeCollectionString = recrusive_1.__recrusive(userDefinedRenderElement, userDefinedRenderElement.flagIndex, parentRenderElement);
                            let node = parser.parseFromString(nodeCollectionString, 'text/html');
                            parentNode.replaceChild(node.body.firstChild, domParentNodeAllChilds[domParentChildIndex]);
                            addEvent();
                            break;
                        case 1:
                            if (newElement.glueObjectArray.length > 0) {
                                __recrusiveInjector(newElement.glueObjectArray[0], newElement.flagIndex, newElement);
                            }
                            break;
                    }
                }
                catch (error) {
                    //remove old node
                    //parentNode.removeChild(domParentNodeAllChilds[domParentChildIndex]);
                    document.getElementById(parentRenderElement.userDefinedElement.ujs_id).removeChild(domParentNodeAllChilds[domParentChildIndex]);
                }
                if (domParentChildIndex == (domParentChildLength - 1)) {
                    if (parentRenderElement.glueObjectArray.length > domParentNodeAllChilds.length) {
                        let parser = new DOMParser();
                        let nodeCollectionString = recrusive_1.__recrusive(parentRenderElement, flagIndex, parentRenderElement);
                        let node = parser.parseFromString(nodeCollectionString, 'text/html');
                        let nodeClone = node;
                        let childrenSize = node.body.children[0].childNodes.length;
                        let newNodeArray = [];
                        for (let childIndex = (domParentChildIndex + 1); childIndex < childrenSize; childIndex++) {
                            nodeClone = node;
                            newNodeArray.push(nodeClone.body.children[0].children[childIndex]);
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
exports.__recrusiveInjector = __recrusiveInjector;
/**
 * @todo error when user press back button  and click element button function call
 * not working.
 * hint: after back button click twice and click forward button and element button click
 * function call correctly
 */
function addEvent() {
    for (let userDefinedRenderElement of globalvariable_1.eventListnerArray) {
        eventCaller(userDefinedRenderElement);
        globalvariable_1.eventListnerArray.shift();
    }
}
/**
 * get all event and pass into addEventListner
 */
function eventCaller(userDefinedRenderElement) {
    try {
        for (let dataObject of userDefinedRenderElement.eventDataObjectCollection) {
            let actionName = dataObject.actionName;
            let functionName = dataObject.functionName;
            let thisScope = userDefinedRenderElement.thisScope;
            let elementID = userDefinedRenderElement.elementID;
            if (actionName != undefined && functionName != undefined) {
                addEventListner(actionName, functionName, thisScope, elementID);
            }
        }
    }
    catch (error) {
    }
}
/**
 * add  event listner into dom element
 */
function addEventListner(actionName, functionName, thisScope, elementId) {
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
    }
    catch (error) {
    }
}
/**
 *
 * @param id id of the element
 */
function findHTMLInElementCollection(id) {
    return globalvariable_1._getElementCollectons(id);
}
/**
 * checke grand child element is same as new child
 */
function sameNodeStatus(oldNode, newNode) {
    let nodeObject = findHTMLInElementCollection(oldNode.id);
    if (nodeObject != null && nodeObject.ujs_dna == newNode.userDefinedElement.ujs_dna) {
        return 1;
    }
    else {
        return 0;
    }
}
/**
 * @param parentHTMLElement html documented object
 * get all child and grand childs from node
 */
function getAllBranchesInNode(parentHTMLElement) {
    let branchNodeCollections = [];
    if (parentHTMLElement == undefined) {
        return undefined;
    }
    else {
        // branchNodeCollections = parentHTMLElement.getElementsByTagName('*');
        branchNodeCollections = parentHTMLElement.children;
    }
    return branchNodeCollections;
}
/**
 * @param parentObject parent object
 * get the document object from html document by its id
 */
function getParentFromDOM(parentObject) {
    let parentNode = undefined;
    try {
        parentNode = document.getElementById(parentObject.userDefinedElement.ujs_id);
    }
    catch (error) {
        console.log("[UJS ERROR]:: can not find node in document");
    }
    return parentNode;
}

},{"../_global/globalvariable":6,"../_recrusive/recrusive":8}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stringmanipulatercontrollers_1 = require("../_stringManipulater/stringmanipulatercontrollers");
/**
 *
 * @param userElementObject HTML element that user created
 * @param parentRenderElementId value of the id attribute in userElementObject parent element
 * @param parentRenderElement element that userElementObject bind
 */
function __elementRelativeHeightCalculator(userElementObject, parentRenderElementId, parentRenderElement) {
    if (parentRenderElementId == 'root') {
        userElementObject.userDefinedElement['ujs_r_height'] = 0;
    }
    else if (parentRenderElement != undefined && parentRenderElement != null) {
        if (parentRenderElement.userDefinedElement.ujs_r_height != undefined && parentRenderElement.glueObjectArray.length > 1) {
            let previousNodeElement = parentRenderElement.glueObjectArray[parentRenderElement.glueObjectArray.length - 2];
            if (previousNodeElement != undefined && previousNodeElement != null) {
                if (previousNodeElement.userDefinedElement.height != undefined && previousNodeElement.userDefinedElement.height != "") {
                    userElementObject.userDefinedElement['ujs_r_height'] = stringmanipulatercontrollers_1.rearrangeHeightAndWidth(previousNodeElement.userDefinedElement.height) + (+previousNodeElement.userDefinedElement.ujs_r_height);
                }
                else if (previousNodeElement.userDefinedElement.height == undefined && previousNodeElement.userDefinedElement.ujs_height != undefined) {
                    userElementObject.userDefinedElement['ujs_r_height'] = previousNodeElement.userDefinedElement.ujs_height + previousNodeElement.userDefinedElement.ujs_r_height;
                }
                else {
                    console.log("[UJS ENGINE ERROR]:: something went wrong buddy! i am going down.");
                }
            }
            else {
                console.log("[UJS ENGINE ERROR]:: something went wrong buddy! i am going down.");
            }
        }
        else if (parentRenderElement.userDefinedElement.ujs_r_height != undefined && parentRenderElement.glueObjectArray.length == 1) {
            /**
             * if parent element has only one element
             */
            if (parentRenderElement.userDefinedElement.ujs_height != undefined) {
                userElementObject.userDefinedElement['ujs_r_height'] = parentRenderElement.userDefinedElement.ujs_r_height;
            }
            else {
                console.log("[UJS ENGINE ERROR]:: something went wrong buddy! i am going down.");
            }
        }
        else {
            console.log("[UJS ENGINE ERROR]:: something went wrong buddy! i am going down.");
        }
    }
    else {
        console.log("[UJS ENGINE ERROR]:: something went wrong buddy! i am going down.");
        console.log("[UJS TIPS]:: this error can be happen if you changed the top root div id attribute value in index.html page");
        console.log("          :: the default value is 'root'");
    }
    __relativeHeightRecrusive(userElementObject);
}
exports.__elementRelativeHeightCalculator = __elementRelativeHeightCalculator;
/**
 *
 * @param userElementObject HTML element that user create
 */
function __relativeHeightRecrusive(userElementObject) {
    if (userElementObject.glueObjectArray.length > 0) {
        for (let childElementIndex = 0; childElementIndex < userElementObject.glueObjectArray.length; childElementIndex++) {
            if (childElementIndex == 0) {
                userElementObject.glueObjectArray[childElementIndex].userDefinedElement['ujs_r_height'] = (userElementObject.userDefinedElement.ujs_r_height);
            }
            else {
                if (userElementObject.glueObjectArray[childElementIndex - 1].userDefinedElement.height != undefined) {
                    userElementObject.glueObjectArray[childElementIndex].userDefinedElement['ujs_r_height'] = userElementObject.glueObjectArray[childElementIndex - 1].userDefinedElement.ujs_r_height + stringmanipulatercontrollers_1.rearrangeHeightAndWidth(userElementObject.glueObjectArray[childElementIndex - 1].userDefinedElement.height);
                }
                else if (userElementObject.glueObjectArray[childElementIndex - 1].userDefinedElement.height == undefined && userElementObject.glueObjectArray[childElementIndex - 1].userDefinedElement.ujs_height != undefined) {
                    userElementObject.glueObjectArray[childElementIndex].userDefinedElement['ujs_r_height'] = userElementObject.glueObjectArray[childElementIndex - 1].userDefinedElement.ujs_r_height + userElementObject.glueObjectArray[childElementIndex - 1].userDefinedElement.ujs_height;
                }
                else {
                }
            }
            if (userElementObject.glueObjectArray[childElementIndex].glueObjectArray.length > 0) {
                __relativeHeightRecrusive(userElementObject.glueObjectArray[childElementIndex]);
            }
        }
    }
    else {
        // console.log("data:",JSON.parse(JSON.stringify(userElementObject)));
    }
}

},{"../_stringManipulater/stringmanipulatercontrollers":13}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const superBaseElement_1 = require("../_superBaseElement/superBaseElement");
const viewportrender_1 = require("../_viewportrender/viewportrender");
const recrusiveInjector_1 = require("../_recrusive/recrusiveInjector");
const globalvariable_1 = require("../_global/globalvariable");
const relativeheightcalculator_1 = require("../_relativeheightcalculator/relativeheightcalculator");
const globalvariable_2 = require("../_global/globalvariable");
const globalconstant_1 = require("../_global/globalconstant");
const hashRoutes_1 = require("../_ujs_core/_routers/hashRoutes");
/**
 *
 * @param userDefinedRenderElement element that user defined and pass to render
 * @param parentRenderElement optional param, describe what is the element that render
 * element should bind
 */
function Render(userDefinedRenderElement, parentRenderElement, isNeedClearParent) {
    /**
     * TODO get default parentRenderElementId from common config file or CDN(if possiable)
     */
    let parentRenderElementId = 'root';
    let parentElement = null;
    if (parentRenderElement != null && parentRenderElement != undefined) {
        if (parentRenderElement.userDefinedElement != null &&
            parentRenderElement.userDefinedElement != undefined &&
            parentRenderElement.userDefinedElement.ujs_id != null &&
            parentRenderElement.userDefinedElement.ujs_id != undefined &&
            parentRenderElement.userDefinedElement.ujs_id !== "") {
            parentRenderElementId = parentRenderElement.userDefinedElement.ujs_id;
        }
        else {
            console.log("[UJS ERROR]:: parent element has not proper ujs_id make sure to pass valid element");
        }
        parentElement = parentRenderElement;
    }
    else if ((parentRenderElement == null || parentRenderElement == undefined) && (isNeedClearParent != undefined && isNeedClearParent == false)) {
        superBaseElement_1.rootElement.glue(userDefinedRenderElement);
        parentElement = superBaseElement_1.rootElement;
    }
    else {
        superBaseElement_1.rootElement.glueObjectArray = [];
        superBaseElement_1.rootElement.glue(userDefinedRenderElement);
        parentElement = superBaseElement_1.rootElement;
    }
    let parentDOMNodeElement = document.getElementById(parentRenderElementId);
    viewportrender_1.__viewPortRender(userDefinedRenderElement, parentDOMNodeElement, parentRenderElement);
    relativeheightcalculator_1.__elementRelativeHeightCalculator(userDefinedRenderElement, parentRenderElementId, parentRenderElement);
    if (isNeedClearParent != null && !undefined && isNeedClearParent) {
        if (parentRenderElement != null && parentRenderElement != undefined) {
            parentRenderElement.glueObjectArray = [];
        }
        // __recrusiveInjector(userDefinedRenderElement,parentElement.flagIndex,parentElement);
        //parentDOMNodeElement.innerHTML = __recrusive(userDefinedRenderElement,parentElement.flagIndex,parentElement);
    }
    else {
        recrusiveInjector_1.__recrusiveInjector(userDefinedRenderElement, parentElement.flagIndex, parentElement);
        //parentDOMNodeElement.innerHTML = parentDOMNodeElement.innerHTML+__recrusive(userDefinedRenderElement,parentElement.flagIndex,parentElement);
    }
}
exports.Render = Render;
/**
 *
 */
window.onscroll = function (event) {
    let supportPageOffset = window.pageXOffset !== undefined;
    let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    let x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
    var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    if ((y + screen.height) > globalvariable_2.initTriggerHeight) {
        globalvariable_2._setInitTriggerHeight(globalvariable_2.initTriggerHeight + globalconstant_1.INIT_TRIGGER_HEIGHT);
        globalvariable_1.renderBucket.forEach((value, key) => {
            let bucketElement = key;
            if ((bucketElement.glueObjectArray.length > bucketElement.flagIndex) && (globalvariable_2.getCurrentHashValue() == value)) {
                // let parent_div: any = document.getElementById(bucketElement.userDefinedElement.ujs_id);
                // let innerHTML: any = parent_div.innerHTML;
                // parent_div.innerHTML =innerHTML + __recrusive(bucketElement,true,bucketElement);
                recrusiveInjector_1.__recrusiveInjector(bucketElement, true, bucketElement);
            }
        });
    }
};
window.onhashchange = function (event) {
    let hashValue = window.location.hash;
    if (hashValue == "") {
        hashRoutes_1.HashRoutes('/');
    }
    else {
        let reg = new RegExp('#');
        hashValue = hashValue.replace(reg, '');
        hashRoutes_1.HashRoutes(hashValue);
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
        hashRoutes_1.HashRoutes('/');
    }
    else {
        let reg = new RegExp('#');
        hashValue = hashValue.replace(reg, '');
        hashRoutes_1.HashRoutes(hashValue);
    }
};

},{"../_global/globalconstant":5,"../_global/globalvariable":6,"../_recrusive/recrusiveInjector":9,"../_relativeheightcalculator/relativeheightcalculator":10,"../_superBaseElement/superBaseElement":14,"../_ujs_core/_routers/hashRoutes":17,"../_viewportrender/viewportrender":22}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sha1 {
    hash(msg, utf8encode) {
        utf8encode = (typeof utf8encode == 'undefined') ? true : utf8encode;
        // convert string to UTF-8, as SHA only deals with byte-streams
        if (utf8encode)
            msg = this.encode(msg);
        // constants [§4.2.1]
        let K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
        // PREPROCESSING 
        msg += String.fromCharCode(0x80); // add trailing '1' bit (+ 0's padding) to string [§5.1.1]
        // convert string msg into 512-bit/16-integer blocks arrays of ints [§5.2.1]
        let l = msg.length / 4 + 2; // length (in 32-bit integers) of msg + ‘1’ + appended length
        let N = Math.ceil(l / 16); // number of 16-integer-blocks required to hold 'l' ints
        let M = new Array(N);
        for (let i = 0; i < N; i++) {
            M[i] = new Array(16);
            for (let j = 0; j < 16; j++) { // encode 4 chars per integer, big-endian encoding
                M[i][j] = (msg.charCodeAt(i * 64 + j * 4) << 24) | (msg.charCodeAt(i * 64 + j * 4 + 1) << 16) |
                    (msg.charCodeAt(i * 64 + j * 4 + 2) << 8) | (msg.charCodeAt(i * 64 + j * 4 + 3));
            } // note running off the end of msg is ok 'cos bitwise ops on NaN return 0
        }
        // add length (in bits) into final pair of 32-bit integers (big-endian) [§5.1.1]
        // note: most significant word would be (len-1)*8 >>> 32, but since JS converts
        // bitwise-op args to 32 bits, we need to simulate this by arithmetic operators
        M[N - 1][14] = ((msg.length - 1) * 8) / Math.pow(2, 32);
        M[N - 1][14] = Math.floor(M[N - 1][14]);
        M[N - 1][15] = ((msg.length - 1) * 8) & 0xffffffff;
        // set initial hash value [§5.3.1]
        let H0 = 0x67452301;
        let H1 = 0xefcdab89;
        let H2 = 0x98badcfe;
        let H3 = 0x10325476;
        let H4 = 0xc3d2e1f0;
        // HASH COMPUTATION [§6.1.2]
        let W = new Array(80);
        let a, b, c, d, e;
        for (let i = 0; i < N; i++) {
            // 1 - prepare message schedule 'W'
            for (let t = 0; t < 16; t++)
                W[t] = M[i][t];
            for (let t = 16; t < 80; t++)
                W[t] = this.ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
            // 2 - initialise five working variables a, b, c, d, e with previous hash value
            a = H0;
            b = H1;
            c = H2;
            d = H3;
            e = H4;
            // 3 - main loop
            for (let t = 0; t < 80; t++) {
                let s = Math.floor(t / 20); // seq for blocks of 'f' functions and 'K' constants
                let T = (this.ROTL(a, 5) + this.f(s, b, c, d) + e + K[s] + W[t]) & 0xffffffff;
                e = d;
                d = c;
                c = this.ROTL(b, 30);
                b = a;
                a = T;
            }
            // 4 - compute the new intermediate hash value
            H0 = (H0 + a) & 0xffffffff; // note 'addition modulo 2^32'
            H1 = (H1 + b) & 0xffffffff;
            H2 = (H2 + c) & 0xffffffff;
            H3 = (H3 + d) & 0xffffffff;
            H4 = (H4 + e) & 0xffffffff;
        }
        return this.toHexStr(H0) + this.toHexStr(H1) +
            this.toHexStr(H2) + this.toHexStr(H3) + this.toHexStr(H4);
    }
    ROTL(x, n) {
        return (x << n) | (x >>> (32 - n));
    }
    f(s, x, y, z) {
        switch (s) {
            case 0: return (x & y) ^ (~x & z); // Ch()
            case 1: return x ^ y ^ z; // Parity()
            case 2: return (x & y) ^ (x & z) ^ (y & z); // Maj()
            case 3: return x ^ y ^ z; // Parity()
        }
    }
    toHexStr(n) {
        let s = "", v;
        for (let i = 7; i >= 0; i--) {
            v = (n >>> (i * 4)) & 0xf;
            s += v.toString(16);
        }
        return s;
    }
    encode(strUni) {
        // use regular expressions & String.replace callback function for better efficiency 
        // than procedural approaches
        let strUtf = strUni.toString().replace(/[\u0080-\u07ff]/g, // U+0080 - U+07FF => 2 bytes 110yyyyy, 10zzzzzz
        function (c) {
            let cc = c.charCodeAt(0);
            return String.fromCharCode(0xc0 | cc >> 6, 0x80 | cc & 0x3f);
        });
        strUtf = strUtf.toString().replace(/[\u0800-\uffff]/g, // U+0800 - U+FFFF => 3 bytes 1110xxxx, 10yyyyyy, 10zzzzzz
        function (c) {
            let cc = c.charCodeAt(0);
            return String.fromCharCode(0xe0 | cc >> 12, 0x80 | cc >> 6 & 0x3F, 0x80 | cc & 0x3f);
        });
        return strUtf;
    }
    decode(strUtf) {
        // note: decode 3-byte chars first as decoded 2-byte strings could appear to be 3-byte char!
        let strUni = strUtf.toString().replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, // 3-byte chars
        function (c) {
            let cc = ((c.charCodeAt(0) & 0x0f) << 12) | ((c.charCodeAt(1) & 0x3f) << 6) | (c.charCodeAt(2) & 0x3f);
            return String.fromCharCode(cc);
        });
        strUni = strUni.toString().replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, // 2-byte chars
        function (c) {
            let cc = (c.charCodeAt(0) & 0x1f) << 6 | c.charCodeAt(1) & 0x3f;
            return String.fromCharCode(cc);
        });
        return strUni;
    }
}
exports.default = Sha1;

},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param attributeValue
 */
function rearrangeHeightAndWidth(attributeValue) {
    let manipulateWithPixelValue = stringValueManipulaterWithPixel(attributeValue);
    if (manipulateWithPixelValue != null)
        return +manipulateWithPixelValue;
    let manipulateWithPrecentageValue = stringValueManipulaterWithPrecentage(attributeValue);
    if (manipulateWithPrecentageValue != null)
        return +manipulateWithPrecentageValue;
}
exports.rearrangeHeightAndWidth = rearrangeHeightAndWidth;
/**
 *
 * @param attributeValue
 */
function stringValueManipulaterWithPixel(attributeValue) {
    return attributeValue.split("px")[0];
}
exports.stringValueManipulaterWithPixel = stringValueManipulaterWithPixel;
/**
 *
 * @param attributeValue
 */
function stringValueManipulaterWithPrecentage(attributeValue) {
    return attributeValue.split("%")[0];
}
exports.stringValueManipulaterWithPrecentage = stringValueManipulaterWithPrecentage;
/**
 *
 * @param attributeValue
 */
function isEqualToAuto(attributeValue) {
    if (attributeValue == "auto")
        return true;
    return false;
}
exports.isEqualToAuto = isEqualToAuto;

},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = require("../_uraniumview/element");
exports.rootElement = new element_1.Element({
    'element': 'div'
}, this, true);

},{"../_uraniumview/element":21}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InstanceLoader {
    static getInstance(classInstance, ...args) {
        var instance = Object.create(classInstance).prototype.constructor;
        instance.constructor.apply(classInstance, args);
        return instance;
    }
}
exports.InstanceLoader = InstanceLoader;

},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalvariable_1 = require("../../_global/globalvariable");
class Routers {
    constructor(userDefineRouters) {
        if (userDefineRouters == undefined) {
            console.log("[UJS ERROR]:: No Routes defined");
        }
        else if (userDefineRouters == null) {
            console.log("[UJS ERROR]:: No Routes defined");
        }
        else if (userDefineRouters == '') {
            console.log("[UJS ERROR]:: No Routes defined");
        }
        globalvariable_1._setRouters(userDefineRouters);
    }
}
exports.Routers = Routers;

},{"../../_global/globalvariable":6}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalvariable_1 = require("../../_global/globalvariable");
function HashRoutes(hash) {
    if (hash == undefined) {
        console.log("[UJS ERROR]:: No Routes defined");
    }
    else if (hash == null) {
        console.log("[UJS ERROR]:: No Routes defined");
    }
    else if (hash == '') {
        console.log("[UJS ERROR]:: No Routes defined");
    }
    try {
        let r = Object.create(globalvariable_1._getRouters()[hash]).prototype.constructor;
        new r().decorateHeader();
    }
    catch (error) {
    }
}
exports.HashRoutes = HashRoutes;

},{"../../_global/globalvariable":6}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalvariable_1 = require("../../_global/globalvariable");
const InstanceLoader_1 = require("../InstanceLoader");
class route {
    constructor(routePath) {
        this.pageClassName = null;
        if (this.isValidate(routePath) && this.isRouteExist(routePath)) {
            this.changeURL(routePath);
            this.runClassInstace(this.pageClassName);
        }
        else {
            console.log("[UJS ERROR]:: route path is not valid");
        }
    }
    isValidate(routePath) {
        if (routePath == undefined || routePath == null)
            return false;
        if (routePath == '')
            return false;
        return true;
    }
    isRouteExist(routePath) {
        let keyValue = globalvariable_1.routers[routePath];
        if (keyValue == undefined)
            return false;
        if (keyValue == null)
            return false;
        this.pageClassName = keyValue;
        return true;
    }
    /**
     * TODO give user for change url as user need
     * as a hash url or full url change
     */
    changeURL(routePath, dataObject) {
        routePath = this.addHashToPath(routePath);
        history.pushState({}, '', routePath);
        globalvariable_1._setInitTriggerHeight(768);
    }
    addHashToPath(routePath) {
        let url = window.location.href;
        let hashUrl = url + "#" + routePath;
        return hashUrl;
    }
    runClassInstace(classInstance) {
        let classObject = InstanceLoader_1.InstanceLoader.getInstance(classInstance);
        new classObject().decorateHeader(); //TODO change constructer call function into new function   
    }
}
exports.route = route;

},{"../../_global/globalvariable":6,"../InstanceLoader":15}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * this variable use for get styles are loaded previosly or not
 */
exports.isStyleLoad = false;
/**
 * cssStyleClassJson variable hold all the css rules as json object
 * if its empty it mean index page is not load css
 */
exports.cssStyleClassJson = {};
/**
 * get the all css style that user laod from HTML index page
 * this methods only call one time, loading all css into javasciipt variable is effecient
 * more than it load from document object in need
 */
function _UJSstylesheetLib() {
    exports.isStyleLoad = true;
    let cssstylesheet = document.styleSheets;
    for (let cssStyleSheetIndex = 0; cssStyleSheetIndex < cssstylesheet.length; cssStyleSheetIndex++) {
        getStyleSheetRules(cssstylesheet[cssStyleSheetIndex].rules);
    }
    return;
}
exports._UJSstylesheetLib = _UJSstylesheetLib;
/**
 *
 * @param styleSheetrules all stylesheets that user load from index.html file
 */
function getStyleSheetRules(styleSheetrules) {
    for (let styleSheetRulesIndex = 0; styleSheetRulesIndex < styleSheetrules.length; styleSheetRulesIndex++) {
        appendStyleIntocssStyleClassJson(styleSheetrules[styleSheetRulesIndex]);
    }
    return;
}
/**
 *
 * @param styleSheetRule all rules in one single stylesheet page
 */
function appendStyleIntocssStyleClassJson(styleSheetRule) {
    exports.cssStyleClassJson[styleSheetRule.selectorText.replace('.', '')] = styleSheetRule.style;
    return;
}

},{}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sha1_1 = require("../_sha1/sha1");
class SuperElement {
    /**
     * @param elementObject object need to calculate sha1 hash
     */
    ujsSha1(elementObject) {
        return this.ujsIdcreater(elementObject);
    }
    /**
     * create an one string bind all attribute into one string
     * pass the string into sha1 class for calculate unique sha1 hash
     * @param elementObject object need to calculate sha1 hash
     */
    ujsIdcreater(elementObject) {
        var keys_arrays = Object.entries(elementObject);
        var glue_string;
        for (var e_index = 0; e_index < keys_arrays.length; e_index++) {
            if (keys_arrays[e_index][1] == undefined || keys_arrays[e_index][1] == null)
                continue; //avoid unneccesery attributes from id
            if (keys_arrays[e_index][0] == "id")
                continue;
            if (keys_arrays[e_index][0] == "bind")
                continue;
            if (glue_string == null || glue_string == undefined) {
                glue_string = keys_arrays[e_index][1];
                continue;
            }
            glue_string = glue_string + keys_arrays[e_index][1];
        }
        return new sha1_1.default().hash(glue_string, true);
    }
}
exports.default = SuperElement;

},{"../_sha1/sha1":12}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SuperElement_1 = require("../_uraniumview/SuperElement");
const eventNameCollection_1 = require("../_global/eventNameCollection");
const ujsstylesheet_1 = require("../_ujsstylesheet/ujsstylesheet");
const globalvariable_1 = require("../_global/globalvariable");
class Element extends SuperElement_1.default {
    /**
     * get user defined HTML properties
     * @param userDefinedElement user defined HTML properties
     */
    constructor(userDefinedElement, thisScope, isSuperBase) {
        super();
        this.glueObjectArray = [];
        this.flagIndex = 0;
        this.flagIndexMapArray = [];
        this.eventDataObjectCollection = [];
        this.thisScope = thisScope;
        this.getCssClassDefineHeight(userDefinedElement);
        this.setDNA(userDefinedElement);
        if (isSuperBase != undefined && isSuperBase) {
            userDefinedElement['ujs_id'] = 'root';
            userDefinedElement['id'] = 'root';
        }
        else {
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
    initAttribute(userDefinedElement) {
        this.userDefinedElement = userDefinedElement;
    }
    /**
     * @param userDefinedElement user defined HTML properties
     */
    setDNA(userDefinedElement) {
        userDefinedElement['ujs_dna'] = this.ujsSha1(userDefinedElement);
    }
    /**
     * set sha1 id to element id
     * @param userDefinedElement user defined HTML properties
     */
    setSha1AsId(userDefinedElement) {
        this.elementID = this.ujsSha1(userDefinedElement);
        userDefinedElement['ujs_id'] = this.elementID;
        return userDefinedElement;
    }
    bindEventListener(userDefinedElement, thisScope) {
        /**
         * create new object when user glue user-defined-element to parent
         *  TODO new logic add for set event action to dom
         * so no need to get event action starded name from array
         * remove array search and add user defined event name
         */
        let eventNamesKeyCollection = Object.keys(eventNameCollection_1.eventNamesCollectionObject);
        for (let nameKey of eventNamesKeyCollection) {
            let eventName = userDefinedElement[nameKey];
            if (eventName == undefined || eventName == null || eventName == '')
                continue;
            let dataObject = {
                functionName: eventName,
                actionName: eventNameCollection_1.eventNamesCollectionObject[nameKey]
            };
            this.eventDataObjectCollection.push(Object.create(dataObject));
        }
    }
    /**
     * glue method for bind the child element into this object
     * @param childUserDefinedElement user defined HTML properties
     */
    glue(childUserDefinedElementTemp) {
        let childUserDefinedElement = Object.create(childUserDefinedElementTemp);
        if (childUserDefinedElement == null || childUserDefinedElement == undefined) {
            /**
             * child object is null or undefined show the console error
             */
            console.log("[UJS ERROR]:: child element that pass in glue method is NULL or UNDEFINED");
            return;
        }
        childUserDefinedElement.flagIndexMapArray.push({ elementID: 0 });
        this.glueObjectArray.push(childUserDefinedElement.__proto__); //TODO replace __proto__ (deprecated)
    }
    /**
     *
     * @param userDefinedElement
     */
    getCssClassDefineHeight(userDefinedElement) {
        if (userDefinedElement.class == undefined || userDefinedElement.class == '' || userDefinedElement.class == null)
            return;
        if (userDefinedElement.height == undefined || userDefinedElement.height == '' || userDefinedElement.height == null) {
            if (!ujsstylesheet_1.isStyleLoad)
                ujsstylesheet_1._UJSstylesheetLib();
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
    chooseValidHeightFromCSSRules(userDefinedElement) {
        let isRulePriortySet = false;
        let elementName = userDefinedElement.element;
        if (elementName == undefined || elementName == '' || elementName == null)
            return;
        let userDefinedClassNames = userDefinedElement.class;
        let userDefinedClassNamesArray = userDefinedClassNames.split(" ");
        for (let className of userDefinedClassNamesArray) {
            if (className == "")
                continue;
            let cssRule = ujsstylesheet_1.cssStyleClassJson[className];
            if (cssRule != undefined) {
                let cssHeight = cssRule.height;
                if (cssHeight != "" && cssHeight != undefined) {
                    userDefinedElement['height'] = cssHeight;
                    userDefinedElement['ujs_height'] = cssHeight;
                    isRulePriortySet = true;
                }
            }
            if (!isRulePriortySet) {
                cssRule = ujsstylesheet_1.cssStyleClassJson["." + className];
                if (cssRule != undefined) {
                    let cssHeight = cssRule.height;
                    if (cssHeight != "" && cssHeight != undefined) {
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
    passElementToCollection(userDefinedElement) {
        globalvariable_1._setElementCollectons(userDefinedElement);
    }
}
exports.Element = Element;

},{"../_global/eventNameCollection":4,"../_global/globalvariable":6,"../_ujsstylesheet/ujsstylesheet":19,"../_uraniumview/SuperElement":20}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ujsstylesheet_1 = require("../_ujsstylesheet/ujsstylesheet");
const stringmanipulatercontrollers_1 = require("../_stringManipulater/stringmanipulatercontrollers");
/**
 *
 * @param userDefinedRenderElement element that user defined and pass to render
 * @param parentRenderElementDocumentObject  parent element object in HTML document
 *  that userDefinedRenderElement glued
 * @param parentRenderElement
 */
function __viewPortRender(userDefinedRenderElement, parentRenderElementDocumentObject, parentRenderElement) {
    if (userDefinedRenderElement != null && userDefinedRenderElement != undefined) {
        if (parentRenderElementDocumentObject != null && parentRenderElementDocumentObject != undefined) {
            let ujsHeightValue = __elementHeightCalculator(userDefinedRenderElement);
            userDefinedRenderElement.userDefinedElement['ujs_height'] = ujsHeightValue;
            if (parentRenderElementDocumentObject.id != 'root') {
                parentRenderElement.userDefinedElement['ujs_height'] = ujsHeightValue;
            }
        }
        else {
            console.log("[UJS ERROR]:: parent html element is not document object");
            console.log("[UJS TIPS]::  check your parent html element is rendered before child element render");
            console.log("[UJS TIPS]::  check your parent html element's parent elements are rendered ");
        }
    }
    else {
        console.log("[UJS ERROR]:: user defined html element is null or undefined,");
        console.log("              make sure to render valid html element.");
    }
}
exports.__viewPortRender = __viewPortRender;
/**
 *
 * @param userElementObject element that user defined and pass by the __viewPortRender method
 */
function __elementHeightCalculator(userElementObject) {
    let elementHeight = 0;
    for (let childElement of userElementObject.glueObjectArray) {
        if (childElement.userDefinedElement.ujs_height == undefined && childElement.userDefinedElement.height == undefined) {
            elementHeight = elementHeight + (+ujsstylesheet_1.cssStyleClassJson[childElement.userDefinedElement.class]) + __elementHeightCalculator(childElement);
            continue;
        }
        else if (childElement.userDefinedElement.height != undefined) {
            let rearrangeValue = stringmanipulatercontrollers_1.rearrangeHeightAndWidth(childElement.userDefinedElement.height);
            elementHeight = elementHeight + rearrangeValue;
            childElement.userDefinedElement['ujs_height'] = rearrangeValue;
            continue;
        }
        else if (childElement.userDefinedElement.ujs_height != undefined) {
            // TODO: remove integer parse if ujs_r_height always integer 
            elementHeight = elementHeight + (+childElement.userDefinedElement.ujs_height);
            continue;
        }
        else {
            console.log("[UJS ENGINE ERROR]:: something went wrong buddy! i am going down....");
            break;
        }
    }
    userElementObject.userDefinedElement['ujs_height'] = elementHeight;
    return elementHeight;
}

},{"../_stringManipulater/stringmanipulatercontrollers":13,"../_ujsstylesheet/ujsstylesheet":19}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjb250cm9sbGVycy9wYWdlcy9Ib21lUGFnZVZpZXcudHMiLCJjb250cm9sbGVycy9wYWdlcy9zZWNvbmRQYWdlLnRzIiwiY29udHJvbGxlcnMvcm91dGVzL3JvdXRlcy50cyIsInNyYy9saWJfbW9kdWxlcy9fZ2xvYmFsL2V2ZW50TmFtZUNvbGxlY3Rpb24udHMiLCJzcmMvbGliX21vZHVsZXMvX2dsb2JhbC9nbG9iYWxjb25zdGFudC50cyIsInNyYy9saWJfbW9kdWxlcy9fZ2xvYmFsL2dsb2JhbHZhcmlhYmxlLnRzIiwic3JjL2xpYl9tb2R1bGVzL19pZ25pdGUvaWduaXRlLnRzIiwic3JjL2xpYl9tb2R1bGVzL19yZWNydXNpdmUvcmVjcnVzaXZlLnRzIiwic3JjL2xpYl9tb2R1bGVzL19yZWNydXNpdmUvcmVjcnVzaXZlSW5qZWN0b3IudHMiLCJzcmMvbGliX21vZHVsZXMvX3JlbGF0aXZlaGVpZ2h0Y2FsY3VsYXRvci9yZWxhdGl2ZWhlaWdodGNhbGN1bGF0b3IudHMiLCJzcmMvbGliX21vZHVsZXMvX3JlbmRlci9yZW5kZXIudHMiLCJzcmMvbGliX21vZHVsZXMvX3NoYTEvc2hhMS50cyIsInNyYy9saWJfbW9kdWxlcy9fc3RyaW5nTWFuaXB1bGF0ZXIvc3RyaW5nbWFuaXB1bGF0ZXJjb250cm9sbGVycy50cyIsInNyYy9saWJfbW9kdWxlcy9fc3VwZXJCYXNlRWxlbWVudC9zdXBlckJhc2VFbGVtZW50LnRzIiwic3JjL2xpYl9tb2R1bGVzL191anNfY29yZS9JbnN0YW5jZUxvYWRlci50cyIsInNyYy9saWJfbW9kdWxlcy9fdWpzX2NvcmUvX3JvdXRlcnMvUm91dGVycy50cyIsInNyYy9saWJfbW9kdWxlcy9fdWpzX2NvcmUvX3JvdXRlcnMvaGFzaFJvdXRlcy50cyIsInNyYy9saWJfbW9kdWxlcy9fdWpzX2NvcmUvX3JvdXRlc09wZXJhdGlvbi9yb3V0ZXNjb3JlLnRzIiwic3JjL2xpYl9tb2R1bGVzL191anNzdHlsZXNoZWV0L3Vqc3N0eWxlc2hlZXQudHMiLCJzcmMvbGliX21vZHVsZXMvX3VyYW5pdW12aWV3L1N1cGVyRWxlbWVudC50cyIsInNyYy9saWJfbW9kdWxlcy9fdXJhbml1bXZpZXcvZWxlbWVudC50cyIsInNyYy9saWJfbW9kdWxlcy9fdmlld3BvcnRyZW5kZXIvdmlld3BvcnRyZW5kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLHdFQUFtRTtBQUNuRSxpRUFBNEQ7QUFDNUQsNEZBQWtGO0FBS2xGLE1BQWEsWUFBWTtJQStIckI7UUE3SE8sTUFBQyxHQUFVLENBQUMsQ0FBQztRQUViLGdCQUFXLEdBQVksSUFBSSxpQkFBTyxDQUFDO1lBQ3RDLFNBQVMsRUFBRSxLQUFLO1NBQ25CLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFHRCxpQkFBWSxHQUFZLElBQUksaUJBQU8sQ0FBQztZQUN2QyxTQUFTLEVBQUUsS0FBSztZQUNoQixPQUFPLEVBQUUsYUFBYTtZQUN0QixLQUFLLEVBQUUsY0FBYztTQUN4QixFQUFDLElBQUksQ0FBQyxDQUFDO1FBRUQsa0JBQWEsR0FBWSxJQUFJLGlCQUFPLENBQUM7WUFDeEMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsT0FBTyxFQUFFLGFBQWE7WUFDdEIsV0FBVyxFQUFFLElBQUk7U0FDcEIsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNELGtCQUFhLEdBQVksSUFBSSxpQkFBTyxDQUFDO1lBQ3hDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLFdBQVcsRUFBRSxJQUFJO1NBQ3BCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDRCxrQkFBYSxHQUFZLElBQUksaUJBQU8sQ0FBQztZQUN4QyxTQUFTLEVBQUUsS0FBSztZQUNoQixPQUFPLEVBQUUsYUFBYTtZQUN0QixXQUFXLEVBQUUsSUFBSTtTQUNwQixFQUFDLElBQUksQ0FBQyxDQUFDO1FBRUQsa0JBQWEsR0FBWSxJQUFJLGlCQUFPLENBQUM7WUFDeEMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsT0FBTyxFQUFFLGFBQWE7WUFDdEIsV0FBVyxFQUFFLElBQUk7U0FDcEIsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNELGtCQUFhLEdBQVksSUFBSSxpQkFBTyxDQUFDO1lBQ3hDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLFdBQVcsRUFBRSxJQUFJO1NBQ3BCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDRCxrQkFBYSxHQUFZLElBQUksaUJBQU8sQ0FBQztZQUN4QyxTQUFTLEVBQUUsS0FBSztZQUNoQixPQUFPLEVBQUUsYUFBYTtZQUN0QixXQUFXLEVBQUUsSUFBSTtTQUNwQixFQUFDLElBQUksQ0FBQyxDQUFDO1FBRUQsaUJBQVksR0FBWSxJQUFJLGlCQUFPLENBQUM7WUFDdkMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsT0FBTyxFQUFFLGNBQWM7U0FDMUIsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUlELGtCQUFhLEdBQVksSUFBSSxpQkFBTyxDQUFDO1lBQ3hDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLEtBQUssRUFBRSxRQUFRO1NBQ2xCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFFRCxnQkFBVyxHQUFZLElBQUksaUJBQU8sQ0FBQztZQUN0QyxTQUFTLEVBQUUsS0FBSztZQUNoQixPQUFPLEVBQUUsV0FBVztTQUN2QixFQUFDLElBQUksQ0FBQyxDQUFDO1FBRUQsV0FBTSxHQUFZLElBQUksaUJBQU8sQ0FBQztZQUNqQyxTQUFTLEVBQUUsUUFBUTtZQUNuQixPQUFPLEVBQUUsUUFBUTtZQUNqQixTQUFTLEVBQUUsb0JBQW9CO1lBQy9CLEtBQUssRUFBRSxRQUFRO1NBQ2xCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFFRCxTQUFJLEdBQVksSUFBSSxpQkFBTyxDQUFDO1lBQy9CLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxXQUFXO1NBQ3ZCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCw2QkFBNkI7UUFDdEIsVUFBSyxHQUFZLElBQUksaUJBQU8sQ0FBQztZQUNoQyxTQUFTLEVBQUUsS0FBSztZQUNoQixPQUFPLEVBQUUsYUFBYTtZQUN0QixXQUFXLEVBQUMsaUJBQWlCO1NBQ2hDLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFFRCxVQUFLLEdBQVksSUFBSSxpQkFBTyxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLFdBQVcsRUFBQyxpQkFBaUI7U0FDaEMsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUVELFVBQUssR0FBWSxJQUFJLGlCQUFPLENBQUM7WUFDaEMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsT0FBTyxFQUFFLGFBQWE7U0FDekIsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUVELFVBQUssR0FBWSxJQUFJLGlCQUFPLENBQUM7WUFDaEMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsT0FBTyxFQUFFLGFBQWE7U0FDekIsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUVELFVBQUssR0FBWSxJQUFJLGlCQUFPLENBQUM7WUFDaEMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsT0FBTyxFQUFFLGFBQWE7U0FDekIsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUVELFVBQUssR0FBWSxJQUFJLGlCQUFPLENBQUM7WUFDaEMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsT0FBTyxFQUFFLGFBQWE7U0FDekIsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUVELFVBQUssR0FBWSxJQUFJLGlCQUFPLENBQUM7WUFDaEMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsT0FBTyxFQUFFLGFBQWE7U0FDekIsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUVELFVBQUssR0FBWSxJQUFJLGlCQUFPLENBQUM7WUFDaEMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsT0FBTyxFQUFFLGFBQWE7U0FDekIsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUVELFVBQUssR0FBWSxJQUFJLGlCQUFPLENBQUM7WUFDaEMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsT0FBTyxFQUFFLGFBQWE7U0FDekIsRUFBQyxJQUFJLENBQUMsQ0FBQztRQTJDUix1QkFBa0IsR0FBRyxHQUFHLEVBQUU7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2hELElBQUksa0JBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyQiwwQ0FBMEM7WUFDMUMsNkNBQTZDO1lBQzdDLHNDQUFzQztZQUN0QyxtQ0FBbUM7WUFDbkMsd0JBQXdCO1lBQ3hCLDRCQUE0QjtZQUM1QiwyQkFBMkI7WUFDM0IscUJBQXFCO1lBQ3JCLFlBQVk7WUFDWixxQkFBcUI7WUFDckIsK0JBQStCO1lBQy9CLGtDQUFrQztZQUNsQyx3QkFBd0I7UUFDNUIsQ0FBQyxDQUFBO1FBdERFLHlCQUF5QjtJQUM1QixDQUFDO0lBRUQsY0FBYztRQUNkLDRDQUE0QztRQUM1QyxrREFBa0Q7UUFDbEQsZ0RBQWdEO1FBQ2hELGdEQUFnRDtRQUNoRCxnREFBZ0Q7UUFDaEQsb0RBQW9EO1FBQ3BELGtEQUFrRDtRQUNsRCxpREFBaUQ7UUFDakQsaURBQWlEO1FBQ2pELGlEQUFpRDtRQUNqRCxpREFBaUQ7UUFDN0Msb0NBQW9DO1FBQ3BDLDRDQUE0QztRQUM1Qyw0Q0FBNEM7UUFDNUMsNENBQTRDO1FBQzVDLDRDQUE0QztRQUM1Qyw0Q0FBNEM7UUFDNUMsNENBQTRDO1FBQzVDLDRDQUE0QztRQUM1QyxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLGVBQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFN0IsQ0FBQztDQXFCSjtBQXpMRCxvQ0F5TEM7Ozs7O0FDaE1ELHdFQUFtRTtBQUNuRSxpRUFBNEQ7QUFNNUQsTUFBYSxVQUFVO0lBNkhuQjtRQTNITyxNQUFDLEdBQVUsQ0FBQyxDQUFDO1FBRWIsZ0JBQVcsR0FBWSxJQUFJLGlCQUFPLENBQUM7WUFDdEMsU0FBUyxFQUFFLEtBQUs7U0FDbkIsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUdELGlCQUFZLEdBQVksSUFBSSxpQkFBTyxDQUFDO1lBQ3ZDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLEtBQUssRUFBRSxjQUFjO1NBQ3hCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFFRCxrQkFBYSxHQUFZLElBQUksaUJBQU8sQ0FBQztZQUN4QyxTQUFTLEVBQUUsS0FBSztZQUNoQixPQUFPLEVBQUUsYUFBYTtZQUN0QixXQUFXLEVBQUUsSUFBSTtTQUNwQixFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0Qsa0JBQWEsR0FBWSxJQUFJLGlCQUFPLENBQUM7WUFDeEMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsT0FBTyxFQUFFLGFBQWE7WUFDdEIsV0FBVyxFQUFFLElBQUk7U0FDcEIsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNELGtCQUFhLEdBQVksSUFBSSxpQkFBTyxDQUFDO1lBQ3hDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLFdBQVcsRUFBRSxJQUFJO1NBQ3BCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFFRCxrQkFBYSxHQUFZLElBQUksaUJBQU8sQ0FBQztZQUN4QyxTQUFTLEVBQUUsS0FBSztZQUNoQixPQUFPLEVBQUUsYUFBYTtZQUN0QixXQUFXLEVBQUUsSUFBSTtTQUNwQixFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0Qsa0JBQWEsR0FBWSxJQUFJLGlCQUFPLENBQUM7WUFDeEMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsT0FBTyxFQUFFLGFBQWE7WUFDdEIsV0FBVyxFQUFFLElBQUk7U0FDcEIsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNELGtCQUFhLEdBQVksSUFBSSxpQkFBTyxDQUFDO1lBQ3hDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLFdBQVcsRUFBRSxJQUFJO1NBQ3BCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFFRCxpQkFBWSxHQUFZLElBQUksaUJBQU8sQ0FBQztZQUN2QyxTQUFTLEVBQUUsS0FBSztZQUNoQixPQUFPLEVBQUUsY0FBYztTQUMxQixFQUFDLElBQUksQ0FBQyxDQUFDO1FBSUQsa0JBQWEsR0FBWSxJQUFJLGlCQUFPLENBQUM7WUFDeEMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsT0FBTyxFQUFFLFFBQVE7WUFDakIsS0FBSyxFQUFFLFFBQVE7U0FDbEIsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUVELGdCQUFXLEdBQVksSUFBSSxpQkFBTyxDQUFDO1lBQ3RDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxXQUFXO1NBQ3ZCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFFRCxXQUFNLEdBQVksSUFBSSxpQkFBTyxDQUFDO1lBQ2pDLFNBQVMsRUFBRSxRQUFRO1lBQ25CLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLFNBQVMsRUFBRSxvQkFBb0I7WUFDL0IsS0FBSyxFQUFFLFFBQVE7U0FDbEIsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUVELFNBQUksR0FBWSxJQUFJLGlCQUFPLENBQUM7WUFDL0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsT0FBTyxFQUFFLFdBQVc7U0FDdkIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULDZCQUE2QjtRQUN0QixVQUFLLEdBQVksSUFBSSxpQkFBTyxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxjQUFjO1NBQzFCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFFRCxVQUFLLEdBQVksSUFBSSxpQkFBTyxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxjQUFjO1NBQzFCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFFRCxVQUFLLEdBQVksSUFBSSxpQkFBTyxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxjQUFjO1NBQzFCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFFRCxVQUFLLEdBQVksSUFBSSxpQkFBTyxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxjQUFjO1NBQzFCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFFRCxVQUFLLEdBQVksSUFBSSxpQkFBTyxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxjQUFjO1NBQzFCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFFRCxVQUFLLEdBQVksSUFBSSxpQkFBTyxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxjQUFjO1NBQzFCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFFRCxVQUFLLEdBQVksSUFBSSxpQkFBTyxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxjQUFjO1NBQzFCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFFRCxVQUFLLEdBQVksSUFBSSxpQkFBTyxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxjQUFjO1NBQzFCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFFRCxVQUFLLEdBQVksSUFBSSxpQkFBTyxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxjQUFjO1NBQzFCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUEwQlIsdUJBQWtCLEdBQUcsR0FBRyxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUM5QyxrQkFBa0I7WUFDakIsMENBQTBDO1lBQzFDLDZDQUE2QztZQUM3QyxzQ0FBc0M7WUFDdEMsbUNBQW1DO1lBQ25DLHdCQUF3QjtZQUN4Qiw0QkFBNEI7WUFDNUIsMkJBQTJCO1lBQzNCLHFCQUFxQjtZQUNyQixZQUFZO1lBQ1oscUJBQXFCO1lBQ3JCLCtCQUErQjtZQUMvQixrQ0FBa0M7WUFDbEMsd0JBQXdCO1FBQzVCLENBQUMsQ0FBQTtRQXJDRSx5QkFBeUI7SUFDNUIsQ0FBQztJQUVELGNBQWM7UUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQywrQkFBK0I7UUFDL0IsK0JBQStCO1FBQy9CLCtCQUErQjtRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsZUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUU3QixDQUFDO0NBcUJKO0FBdEtELGdDQXNLQzs7Ozs7QUM3S0QsOEVBQXlFO0FBQ3pFLHdEQUFtRDtBQUNuRCxvREFBK0M7QUFDL0MsTUFBYSxNQUFPLFNBQVEsaUJBQU87SUFDL0I7UUFDSSxLQUFLLENBQUM7WUFDRixHQUFHLEVBQUUsMkJBQVk7WUFDakIsU0FBUyxFQUFFLHVCQUFVO1NBQ3hCLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQVBELHdCQU9DOzs7OztBQ1ZVLFFBQUEsMEJBQTBCLEdBQVE7SUFDekM7O1NBRUs7SUFDTCxTQUFTLEVBQUUsT0FBTztJQUNsQixRQUFRLEVBQUUsTUFBTTtJQUVoQjs7T0FFRztJQUNILFFBQVEsRUFBRSxNQUFNO0lBQ2hCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLFNBQVMsRUFBRSxPQUFPO0lBQ2xCLFNBQVMsRUFBRSxPQUFPO0lBRWxCOztPQUVHO0lBQ0gsWUFBWSxFQUFFLFVBQVU7SUFDeEIsWUFBWSxFQUFFLFVBQVU7SUFDeEIsWUFBWSxFQUFFLFVBQVU7SUFFeEI7O09BRUc7SUFDSCxrQkFBa0IsRUFBRSxnQkFBZ0I7SUFDcEMsZ0JBQWdCLEVBQUUsY0FBYztJQUNoQyxvQkFBb0IsRUFBRSxvQkFBb0I7SUFFMUM7O09BRUc7SUFDSCxtQkFBbUIsRUFBRSxpQkFBaUI7SUFDdEMsb0JBQW9CLEVBQUUsa0JBQWtCO0lBQ3hDLGlCQUFpQixFQUFFLGVBQWU7SUFDbEMsaUJBQWlCLEVBQUUsZUFBZTtJQUVsQzs7T0FFRztJQUNILFNBQVMsRUFBRSxPQUFPO0lBQ2xCLFVBQVUsRUFBRSxRQUFRO0lBRXBCOztPQUVHO0lBQ0gsZUFBZSxFQUFFLGFBQWE7SUFDOUIsY0FBYyxFQUFFLFlBQVk7SUFFNUI7O09BRUc7SUFDSCxvQkFBb0IsRUFBRSxrQkFBa0I7SUFDeEMscUJBQXFCLEVBQUUsbUJBQW1CO0lBQzFDLGtCQUFrQixFQUFFLGdCQUFnQjtJQUVwQzs7T0FFRztJQUNILG9CQUFvQixFQUFFLGtCQUFrQjtJQUN4QyxtQkFBbUIsRUFBRSxpQkFBaUI7SUFDdEMsVUFBVSxFQUFFLFFBQVE7SUFDcEIsVUFBVSxFQUFFLFFBQVE7SUFFcEI7O09BRUc7SUFDSCxPQUFPLEVBQUUsS0FBSztJQUNkLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLFNBQVMsRUFBRSxPQUFPO0lBRWxCOztPQUVHO0lBQ0gsV0FBVyxFQUFFLFNBQVM7SUFDdEIsWUFBWSxFQUFFLFVBQVU7SUFDeEIsU0FBUyxFQUFFLE9BQU87SUFFbEI7O09BRUc7SUFDSCxZQUFZLEVBQUUsVUFBVTtJQUN4QixTQUFTLEVBQUUsT0FBTztJQUNsQixlQUFlLEVBQUUsYUFBYTtJQUM5QixZQUFZLEVBQUUsVUFBVTtJQUN4QixhQUFhLEVBQUUsV0FBVztJQUMxQixjQUFjLEVBQUUsWUFBWTtJQUM1QixjQUFjLEVBQUUsWUFBWTtJQUM1QixhQUFhLEVBQUUsV0FBVztJQUMxQixhQUFhLEVBQUUsV0FBVztJQUMxQixZQUFZLEVBQUUsVUFBVTtJQUN4QixXQUFXLEVBQUUsU0FBUztJQUN0QixxQkFBcUIsRUFBRSxtQkFBbUI7SUFDMUMsb0JBQW9CLEVBQUUsa0JBQWtCO0lBQ3hDLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLFNBQVMsRUFBRSxPQUFPO0lBRWxCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLE1BQU07SUFDaEIsV0FBVyxFQUFFLFNBQVM7SUFDdEIsYUFBYSxFQUFFLFdBQVc7SUFDMUIsYUFBYSxFQUFFLFdBQVc7SUFDMUIsYUFBYSxFQUFFLFdBQVc7SUFDMUIsWUFBWSxFQUFFLFVBQVU7SUFDeEIsUUFBUSxFQUFFLE1BQU07SUFFaEI7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRSxjQUFjO0lBQ2hDLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLGtCQUFrQixFQUFFLGdCQUFnQjtJQUNwQyxZQUFZLEVBQUUsVUFBVTtJQUN4QixrQkFBa0IsRUFBRSxnQkFBZ0I7SUFDcEMsV0FBVyxFQUFFLFNBQVM7SUFDdEIsU0FBUyxFQUFFLE9BQU87SUFDbEIsY0FBYyxFQUFFLFlBQVk7SUFDNUIsa0JBQWtCLEVBQUUsZ0JBQWdCO0lBQ3BDLFNBQVMsRUFBRSxPQUFPO0lBQ2xCLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLGNBQWMsRUFBRSxZQUFZO0lBQzVCLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLGNBQWMsRUFBRSxZQUFZO0lBQzVCLGdCQUFnQixFQUFFLGNBQWM7SUFDaEMsV0FBVyxFQUFFLFNBQVM7SUFFdEI7O09BRUc7SUFDSCxTQUFTLEVBQUUsT0FBTztJQUNsQixRQUFRLEVBQUUsTUFBTTtJQUNoQixXQUFXLEVBQUUsU0FBUztJQUN0QixhQUFhLEVBQUUsV0FBVztJQUMxQixZQUFZLEVBQUUsVUFBVTtJQUN4QixXQUFXLEVBQUUsU0FBUztJQUV0Qjs7T0FFRztJQUNILFVBQVUsRUFBRSxRQUFRO0lBQ3BCLFdBQVcsRUFBRSxTQUFTO0lBRXRCOztPQUVHO0lBQ0gsWUFBWSxFQUFFLFVBQVU7SUFDeEIsZUFBZSxFQUFFLGFBQWE7SUFDOUIsWUFBWSxFQUFFLFVBQVU7SUFDeEIsWUFBWSxFQUFFLFVBQVU7SUFDeEIsZUFBZSxFQUFFLGFBQWE7SUFFOUI7O09BRUc7SUFDSCxhQUFhLEVBQUUsV0FBVztJQUMxQix1QkFBdUIsRUFBRSxxQkFBcUI7SUFDOUMsY0FBYyxFQUFFLFlBQVk7SUFDNUIsU0FBUyxFQUFFLE9BQU87SUFDbEIsb0JBQW9CLEVBQUUsa0JBQWtCO0lBQ3hDLG9CQUFvQixFQUFFLGtCQUFrQjtJQUN4QyxlQUFlLEVBQUUsYUFBYTtJQUU5Qjs7T0FFRztJQUNILFdBQVcsRUFBRSxTQUFTO0lBQ3RCLGFBQWEsRUFBRSxXQUFXO0lBQzFCLFFBQVEsRUFBRSxNQUFNO0NBQ25CLENBQUM7Ozs7O0FDOUtXLFFBQUEsbUJBQW1CLEdBQUcsR0FBRyxDQUFDO0FBQzFCLFFBQUEsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDOzs7OztBQ0RsQyw4REFBZ0Y7QUFHckUsUUFBQSxZQUFZLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUN6QixRQUFBLGlCQUFpQixHQUFXLG9DQUFtQixDQUFDO0FBQ2hELFFBQUEsU0FBUyxHQUFXLGlDQUFnQixDQUFDO0FBQ3JDLFFBQUEsT0FBTyxHQUFRLEVBQUUsQ0FBQztBQUNsQixRQUFBLGlCQUFpQixHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7QUFDOUIsUUFBQSxXQUFXLEdBQVEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUduRCxRQUFBLGVBQWUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQzVCLFFBQUEsaUJBQWlCLEdBQVEsRUFBRSxDQUFDO0FBRXZDOztHQUVHO0FBQ0gsU0FBZ0Isa0JBQWtCLENBQUMsR0FBUSxFQUFFLEtBQVU7SUFDbkQsdUJBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFGRCxnREFFQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0Isa0JBQWtCLENBQUMsR0FBUTtJQUN2QyxPQUFPLHVCQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFGRCxnREFFQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0IsbUJBQW1CLENBQUMsU0FBYztJQUM5Qyx3QkFBZ0IsR0FBRyxTQUFTLENBQUM7QUFDakMsQ0FBQztBQUZELGtEQUVDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixtQkFBbUI7SUFDbEMsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDckMsSUFBSSxTQUFTLElBQUksRUFBRSxFQUFFO1FBQ2xCLFNBQVMsR0FBRyxJQUFJLENBQUM7S0FDbkI7SUFDRCxPQUFPLFNBQVMsQ0FBQztBQUNsQixDQUFDO0FBTkQsa0RBTUM7QUFFRDs7R0FFRztBQUNILFNBQWdCLGVBQWUsQ0FBQyxHQUFRLEVBQUUsS0FBVTtJQUNoRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztRQUFFLG9CQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN4RSxDQUFDO0FBRkQsMENBRUM7QUFFRCxTQUFTLG9CQUFvQixDQUFDLE1BQVcsRUFBRSxZQUFpQjtJQUN4RCxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDbkIsb0JBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDakMsSUFBSSxHQUFHLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLElBQUksS0FBSyxJQUFJLFlBQVksRUFBRTtZQUM1RCxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixvQkFBb0IsQ0FBQyxrQkFBMkIsRUFBRSxXQUFvQjtJQUNsRixJQUFJLGtCQUFrQixJQUFJLElBQUksSUFBSSxrQkFBa0IsSUFBSSxTQUFTO1FBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO0lBQ3pILElBQUksV0FBVyxJQUFJLElBQUksSUFBSSxXQUFXLElBQUksU0FBUztRQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN4RyxDQUFDO0FBSEQsb0RBR0M7QUFFRDs7R0FFRztBQUNILFNBQWdCLHVCQUF1QixDQUFDLHlCQUE4QjtJQUNsRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcseUJBQXlCLENBQUM7QUFDMUQsQ0FBQztBQUZELDBEQUVDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQix1QkFBdUI7SUFDbkMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUE7QUFDcEMsQ0FBQztBQUZELDBEQUVDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBZ0IscUJBQXFCLENBQUMsS0FBYTtJQUMvQyxLQUFJLElBQUksT0FBTyxJQUFJLHlCQUFpQixFQUFFO1FBQ2xDLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxLQUFLLEVBQUU7WUFDekIsT0FBTyxPQUFPLENBQUM7U0FDbEI7S0FDSjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFQRCxzREFPQztBQUVEOzs7R0FHRztBQUNILFNBQWdCLHFCQUFxQixDQUFDLGtCQUF1QjtJQUN6RCx5QkFBaUIsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBRkQsc0RBRUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFnQixxQkFBcUIsQ0FBQyxvQkFBNEI7SUFDOUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLG9CQUFvQixDQUFDO0FBQ2xELENBQUM7QUFGRCxzREFFQztBQUVEOzs7R0FHRztBQUNILFNBQWdCLGFBQWEsQ0FBQyxZQUFvQjtJQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztBQUNsQyxDQUFDO0FBRkQsc0NBRUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFnQixXQUFXLENBQUMsa0JBQXVCO0lBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUM7QUFDdEMsQ0FBQztBQUZELGtDQUVDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBZ0IsV0FBVztJQUN2QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsQ0FBQztBQUZELGtDQUVDOzs7OztBQ3hJRCx1REFBdUQ7QUFDdkQsK0RBQTBEO0FBQzFELElBQUksZUFBTSxFQUFFLENBQUM7QUFDYixTQUFTOzs7OztBQ0ZULDhEQUErSDtBQUMvSCw4REFBNkc7QUFFN0c7OztHQUdHO0FBQ0gsU0FBZ0IsV0FBVyxDQUFDLHdCQUFpQyxFQUFFLFNBQWUsRUFBRSxtQkFBNkI7SUFDekcsSUFBRyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEdBQUcsa0NBQWlCLEVBQUU7UUFDN0UsSUFBRyxDQUFDLFNBQVMsSUFBSSxTQUFTLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxTQUFTLElBQUksS0FBSyxDQUFDLEVBQUM7WUFDMUYsbUJBQW1CLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUM3QztRQUNELElBQUksU0FBUyxJQUFJLFNBQVMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLEtBQUssQ0FBQyxFQUFFO1lBQ3JFLG1EQUFtRDtZQUNuRCxnQ0FBZSxDQUFDLG1CQUFtQixFQUFFLG9DQUFtQixFQUFFLENBQUMsQ0FBQztTQUMvRDthQUFNO1lBQ0gsMkNBQTJDO1lBQzNDLGdDQUFlLENBQUMsbUJBQW1CLEVBQUUsb0NBQW1CLEVBQUUsQ0FBQyxDQUFDO1NBQy9EO1FBQ0gsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUFBLENBQUM7SUFDRixJQUFJLGdCQUF3QixDQUFDO0lBQzdCLElBQUcsd0JBQXdCLENBQUMsZUFBZSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUc7UUFDdEQsSUFBRyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLElBQUksSUFBSSxJQUFJLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFNBQVMsSUFBSSxTQUFTLEVBQUM7WUFDbkksZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BGO1FBQ0YsbUJBQW1CLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsR0FBRSxDQUFDLENBQUM7S0FDdEU7U0FBTTtRQUNILEtBQUksSUFBSSxDQUFDLEdBQUcsd0JBQXdCLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQ3JHLElBQUksZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLENBQUMsQ0FBQTtZQUMxRyxJQUFHLGdCQUFnQixJQUFJLFNBQVMsRUFBRTtnQkFDOUIsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7YUFDdkM7aUJBQUs7Z0JBQ0YsZ0JBQWdCLEdBQUcsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7YUFDMUQ7WUFDRCxJQUFJLGdCQUFnQixJQUFJLEVBQUU7Z0JBQUUsTUFBTTtTQUNyQztLQUNKO0lBQ0Qsa0NBQWlCLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDakQsT0FBTyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBQyx3QkFBd0IsRUFBQyxTQUFTLENBQUMsQ0FBQztBQUNsRixDQUFDO0FBakNELGtDQWlDQztBQUNEOzs7OztHQUtHO0FBQ0gsU0FBUyxpQkFBaUIsQ0FBQyxnQkFBd0IsRUFBRSx3QkFBaUMsRUFBRSxTQUFlO0lBQ25HLElBQUksVUFBa0IsQ0FBQztJQUN2QixJQUFJLFdBQVcsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3pKLElBQUksa0JBQWtCLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLGNBQWMsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hMLElBQUksY0FBYyxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsU0FBUyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckssSUFBSSxXQUFXLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN6SixJQUFJLFVBQVUsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLEtBQUssR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JKLElBQUksVUFBVSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckosSUFBSSxRQUFRLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3SSxJQUFJLFVBQVUsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLEtBQUssR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JKLElBQUksbUJBQW1CLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLGNBQWMsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3pMLElBQUksaUJBQWlCLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFlBQVksR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pMLElBQUksY0FBYyxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsU0FBUyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckssSUFBSSxhQUFhLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqSyxJQUFJLFlBQVksR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE9BQU8sR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdKLElBQUksV0FBVyxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDekosSUFBSSxhQUFhLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqSyxJQUFJLGNBQWMsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFNBQVMsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JLLElBQUksWUFBWSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0osSUFBSSxZQUFZLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3SixJQUFJLFNBQVMsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLElBQUksR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pKLElBQUksVUFBVSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckosSUFBSSxTQUFTLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqSixJQUFJLGFBQWEsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFFBQVEsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pLLElBQUksVUFBVSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckosSUFBSSxTQUFTLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqSixJQUFJLFlBQVksR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE9BQU8sR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdKLElBQUksWUFBWSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0osSUFBSSxvQkFBb0IsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsZUFBZSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0wsSUFBSSxnQkFBZ0IsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsV0FBVyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0ssSUFBSSxhQUFhLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqSyxJQUFJLFdBQVcsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3pKLElBQUksZ0JBQWdCLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFdBQVcsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdLLElBQUksUUFBUSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0ksSUFBSSxTQUFTLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqSixJQUFJLGNBQWMsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFNBQVMsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2xLLElBQUksYUFBYSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakssSUFBSSxhQUFhLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqSyxJQUFJLFlBQVksR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE9BQU8sR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdKLElBQUksVUFBVSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckosSUFBSSxRQUFRLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3SSxJQUFJLFlBQVksR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE9BQU8sR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdKLElBQUksYUFBYSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakssSUFBSSxhQUFhLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqSyxJQUFJLGNBQWMsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFNBQVMsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JLLElBQUksYUFBYSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakssSUFBSSxZQUFZLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3SixJQUFJLFFBQVEsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdJLElBQUksU0FBUyxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakosSUFBSSxlQUFlLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN6SyxJQUFJLFlBQVksR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE9BQU8sR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdKLElBQUksV0FBVyxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDekosSUFBSSxTQUFTLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqSixJQUFJLFNBQVMsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLElBQUksR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pKLElBQUksYUFBYSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakssSUFBSSxlQUFlLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN6SyxJQUFJLFNBQVMsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLElBQUksR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pKLElBQUksT0FBTyxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakosSUFBSSxlQUFlLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN6SyxJQUFJLGNBQWMsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFNBQVMsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JLLElBQUksVUFBVSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckosSUFBSSxhQUFhLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqSyxJQUFJLFlBQVksR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE9BQU8sR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzlKLElBQUksU0FBUyxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakosSUFBSSxVQUFVLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNySixJQUFJLFNBQVMsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLElBQUksR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pKLElBQUksYUFBYSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakssSUFBSSxhQUFhLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqSyxJQUFJLFNBQVMsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLElBQUksR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pKLElBQUksU0FBUyxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakosSUFBSSxRQUFRLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3SSxJQUFJLGFBQWEsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFFBQVEsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pLLElBQUksUUFBUSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0ksSUFBSSxjQUFjLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNySyxJQUFJLGNBQWMsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFNBQVMsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JLLElBQUksVUFBVSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckosSUFBSSxXQUFXLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN6SixJQUFJLFFBQVEsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdJLElBQUksYUFBYSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakssSUFBSSxVQUFVLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNySixJQUFJLFNBQVMsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLElBQUksR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pKLElBQUksZUFBZSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsVUFBVSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDekssSUFBSSxTQUFTLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqSixJQUFJLFlBQVksR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE9BQU8sR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdKLElBQUksWUFBWSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0osSUFBSSxTQUFTLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqSixJQUFJLGdCQUFnQixHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3SyxJQUFJLFdBQVcsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3pKLElBQUksWUFBWSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0osSUFBSSxlQUFlLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN6SyxJQUFJLGFBQWEsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFFBQVEsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pLLElBQUksUUFBUSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0ksSUFBSSxhQUFhLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqSyxJQUFJLGFBQWEsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFFBQVEsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pLLElBQUksU0FBUyxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakosSUFBSSxZQUFZLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3SixJQUFJLFlBQVksR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE9BQU8sR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdKLElBQUksVUFBVSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckosSUFBSSxXQUFXLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN6SixJQUFJLGFBQWEsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFFBQVEsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pLLElBQUksVUFBVSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckosSUFBSSxTQUFTLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqSixJQUFJLFVBQVUsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLEtBQUssR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JKLElBQUksU0FBUyxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakosSUFBSSxTQUFTLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqSixJQUFJLGVBQWUsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFVBQVUsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3pLLElBQUksUUFBUSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0ksSUFBSSxXQUFXLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN6SixJQUFJLFlBQVksR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE9BQU8sR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdKLElBQUksV0FBVyxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDekosSUFBSSxVQUFVLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNySixJQUFJLFNBQVMsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLElBQUksR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pKLElBQUksVUFBVSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckosSUFBSSxZQUFZLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3SixJQUFJLGFBQWEsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFFBQVEsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pLLElBQUksVUFBVSxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckosSUFBSSxjQUFjLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNySyxJQUFJLFNBQVMsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLElBQUksR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pKLElBQUksV0FBVyxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDM0osSUFBSSxVQUFVLEdBQVcsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNySixJQUFJLFVBQVUsR0FBVyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLEtBQUssR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JKLElBQUksU0FBUyxHQUFXLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUksd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFcEo7O09BRUc7SUFDSCx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtRkFBbUYsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5Six3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUVySCxJQUFHLENBQUMsZ0JBQWdCLElBQUksU0FBUyxJQUFJLGdCQUFnQixJQUFJLElBQUksSUFBSSxnQkFBZ0IsSUFBSSxFQUFFLENBQUMsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFDO1FBQzNHLFVBQVUsR0FBRyxHQUFHLEdBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsT0FBTztZQUNoRCxXQUFXO1lBQ1gsa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxXQUFXO1lBQ1gsVUFBVTtZQUNWLFVBQVU7WUFDVixRQUFRO1lBQ1IsVUFBVTtZQUNWLG1CQUFtQjtZQUNuQixpQkFBaUI7WUFDakIsY0FBYztZQUNkLGFBQWE7WUFDYixZQUFZO1lBQ1osV0FBVztZQUNYLGFBQWE7WUFDYixjQUFjO1lBQ2QsWUFBWTtZQUNaLFlBQVk7WUFDWixTQUFTO1lBQ1QsVUFBVTtZQUNWLFNBQVM7WUFDVCxhQUFhO1lBQ2IsVUFBVTtZQUNWLFNBQVM7WUFDVCxZQUFZO1lBQ1osWUFBWTtZQUNaLG9CQUFvQjtZQUNwQixnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIsUUFBUTtZQUNSLFNBQVM7WUFDVCxjQUFjO1lBQ2QsYUFBYTtZQUNiLGFBQWE7WUFDYixZQUFZO1lBQ1osVUFBVTtZQUNWLFFBQVE7WUFDUixZQUFZO1lBQ1osYUFBYTtZQUNiLGFBQWE7WUFDYixjQUFjO1lBQ2QsYUFBYTtZQUNiLFlBQVk7WUFDWixRQUFRO1lBQ1IsU0FBUztZQUNULGVBQWU7WUFDZixZQUFZO1lBQ1osV0FBVztZQUNYLFNBQVM7WUFDVCxTQUFTO1lBQ1QsYUFBYTtZQUNiLGVBQWU7WUFDZixTQUFTO1lBQ1QsT0FBTztZQUNQLGVBQWU7WUFDZixjQUFjO1lBQ2QsVUFBVTtZQUNWLGFBQWE7WUFDYixZQUFZO1lBQ1osU0FBUztZQUNULFVBQVU7WUFDVixTQUFTO1lBQ1QsYUFBYTtZQUNiLGFBQWE7WUFDYixTQUFTO1lBQ1QsU0FBUztZQUNULFFBQVE7WUFDUixhQUFhO1lBQ2IsUUFBUTtZQUNSLGNBQWM7WUFDZCxjQUFjO1lBQ2QsVUFBVTtZQUNWLFdBQVc7WUFDWCxRQUFRO1lBQ1IsYUFBYTtZQUNiLFVBQVU7WUFDVixTQUFTO1lBQ1QsZUFBZTtZQUNmLFNBQVM7WUFDVCxZQUFZO1lBQ1osWUFBWTtZQUNaLFNBQVM7WUFDVCxnQkFBZ0I7WUFDaEIsV0FBVztZQUNYLFlBQVk7WUFDWixlQUFlO1lBQ2YsYUFBYTtZQUNiLFFBQVE7WUFDUixhQUFhO1lBQ2IsYUFBYTtZQUNiLFNBQVM7WUFDVCxZQUFZO1lBQ1osWUFBWTtZQUNaLFVBQVU7WUFDVixXQUFXO1lBQ1gsYUFBYTtZQUNiLFVBQVU7WUFDVixTQUFTO1lBQ1QsVUFBVTtZQUNWLFNBQVM7WUFDVCxTQUFTO1lBQ1QsZUFBZTtZQUNmLFFBQVE7WUFDUixXQUFXO1lBQ1gsWUFBWTtZQUNaLFdBQVc7WUFDWCxVQUFVO1lBQ1YsU0FBUztZQUNULFVBQVU7WUFDVixZQUFZO1lBQ1osYUFBYTtZQUNiLFVBQVU7WUFDVixjQUFjO1lBQ2QsU0FBUztZQUNULFdBQVc7WUFDWCxVQUFVO1lBQ1YsVUFBVTtZQUNWLFNBQVM7WUFDaEIsR0FBRztZQUNILElBQUksR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEdBQUMsR0FBRyxDQUFDO0tBQzdFO1NBQUssSUFBRyxTQUFTLEtBQUssSUFBSSxFQUFDO1FBQ3hCLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztLQUNqQztTQUFLO1FBQ0YsVUFBVSxHQUFHLEdBQUcsR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPO1lBQ2hELFdBQVc7WUFDWCxrQkFBa0I7WUFDbEIsY0FBYztZQUNkLFdBQVc7WUFDWCxVQUFVO1lBQ1YsVUFBVTtZQUNWLFFBQVE7WUFDUixVQUFVO1lBQ1YsbUJBQW1CO1lBQ25CLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2QsYUFBYTtZQUNiLFlBQVk7WUFDWixXQUFXO1lBQ1gsYUFBYTtZQUNiLGNBQWM7WUFDZCxZQUFZO1lBQ1osWUFBWTtZQUNaLFNBQVM7WUFDVCxVQUFVO1lBQ1YsU0FBUztZQUNULGFBQWE7WUFDYixVQUFVO1lBQ1YsU0FBUztZQUNULFlBQVk7WUFDWixZQUFZO1lBQ1osb0JBQW9CO1lBQ3BCLGdCQUFnQjtZQUNoQixhQUFhO1lBQ2IsV0FBVztZQUNYLGdCQUFnQjtZQUNoQixRQUFRO1lBQ1IsU0FBUztZQUNULGNBQWM7WUFDZCxhQUFhO1lBQ2IsYUFBYTtZQUNiLFlBQVk7WUFDWixVQUFVO1lBQ1YsUUFBUTtZQUNSLFlBQVk7WUFDWixhQUFhO1lBQ2IsYUFBYTtZQUNiLGNBQWM7WUFDZCxhQUFhO1lBQ2IsWUFBWTtZQUNaLFFBQVE7WUFDUixTQUFTO1lBQ1QsZUFBZTtZQUNmLFlBQVk7WUFDWixXQUFXO1lBQ1gsU0FBUztZQUNULFNBQVM7WUFDVCxhQUFhO1lBQ2IsZUFBZTtZQUNmLFNBQVM7WUFDVCxPQUFPO1lBQ1AsZUFBZTtZQUNmLGNBQWM7WUFDZCxVQUFVO1lBQ1YsYUFBYTtZQUNiLFlBQVk7WUFDWixTQUFTO1lBQ1QsVUFBVTtZQUNWLFNBQVM7WUFDVCxhQUFhO1lBQ2IsYUFBYTtZQUNiLFNBQVM7WUFDVCxTQUFTO1lBQ1QsUUFBUTtZQUNSLGFBQWE7WUFDYixRQUFRO1lBQ1IsY0FBYztZQUNkLGNBQWM7WUFDZCxVQUFVO1lBQ1YsV0FBVztZQUNYLFFBQVE7WUFDUixhQUFhO1lBQ2IsVUFBVTtZQUNWLFNBQVM7WUFDVCxlQUFlO1lBQ2YsU0FBUztZQUNULFlBQVk7WUFDWixZQUFZO1lBQ1osU0FBUztZQUNULGdCQUFnQjtZQUNoQixXQUFXO1lBQ1gsWUFBWTtZQUNaLGVBQWU7WUFDZixhQUFhO1lBQ2IsUUFBUTtZQUNSLGFBQWE7WUFDYixhQUFhO1lBQ2IsU0FBUztZQUNULFlBQVk7WUFDWixZQUFZO1lBQ1osVUFBVTtZQUNWLFdBQVc7WUFDWCxhQUFhO1lBQ2IsVUFBVTtZQUNWLFNBQVM7WUFDVCxVQUFVO1lBQ1YsU0FBUztZQUNULFNBQVM7WUFDVCxlQUFlO1lBQ2YsUUFBUTtZQUNSLFdBQVc7WUFDWCxZQUFZO1lBQ1osV0FBVztZQUNYLFVBQVU7WUFDVixTQUFTO1lBQ1QsVUFBVTtZQUNWLFlBQVk7WUFDWixhQUFhO1lBQ2IsVUFBVTtZQUNWLGNBQWM7WUFDZCxTQUFTO1lBQ1QsV0FBVztZQUNYLFVBQVU7WUFDVixVQUFVO1lBQ1YsU0FBUztZQUNqQixHQUFHO1lBQ0YsZ0JBQWdCO1lBQ2pCLElBQUksR0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEdBQUMsR0FBRyxDQUFDO0tBQzVFO0lBQ0QsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQzs7Ozs7QUM3YUQsOERBQWtHO0FBR2xHLHVEQUFvRDtBQUVwRCxJQUFJLFdBQVcsR0FBUSxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZEOzs7R0FHRztBQUNILFNBQWdCLG1CQUFtQixDQUFDLHdCQUFpQyxFQUFFLFNBQWUsRUFBRSxtQkFBNkI7SUFDakgsSUFBSSxVQUFVLEdBQVEsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUM1RCxJQUFJLFVBQVUsSUFBSSxTQUFTLEVBQUU7UUFDekIsSUFBSSxvQkFBb0IsR0FBRyx1QkFBVyxDQUFDLHdCQUF3QixFQUFFLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pHLFdBQVcsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsR0FBRSxvQkFBb0IsQ0FBQztRQUNwRSxRQUFRLEVBQUUsQ0FBQztLQUNkO1NBQU07UUFDSCxJQUFJLHNCQUFzQixHQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUM5RSxJQUFJLG9CQUFvQixHQUFTLHNCQUFzQixDQUFDLE1BQU0sQ0FBQztRQUMvRCx3REFBd0Q7UUFDeEQsSUFBSSxzQkFBc0IsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3BDLElBQUksb0JBQW9CLEdBQUcsdUJBQVcsQ0FBQyx3QkFBd0IsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztZQUNqRyxVQUFVLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFDO1lBQzVDLFFBQVEsRUFBRSxDQUFDO1lBRVosaUdBQWlHO1NBQ25HO2FBQU0sSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO1lBQzFCLElBQUksWUFBWSxHQUFRLEVBQUUsQ0FBQztZQUMzQixLQUFLLElBQUksVUFBVSxHQUFHLENBQUMsd0JBQXdCLENBQUMsU0FBUyxHQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsR0FBRyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxFQUFFO2dCQUN2SSx3Q0FBd0M7Z0JBQ3hDLHNFQUFzRTtnQkFDckUsSUFBSSxNQUFNLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztnQkFDN0IsSUFBSSxvQkFBb0IsR0FBRyx1QkFBVyxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsRUFBRSx3QkFBd0IsQ0FBQyxTQUFTLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztnQkFDM0osSUFBSSxvQkFBb0IsSUFBSSxFQUFFO29CQUFFLE1BQU07Z0JBQ3RDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3BFLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDckIsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxRQUFRLEVBQUUsQ0FBQztnQkFDWCxrRUFBa0U7Z0JBQ2xFLCtFQUErRTthQUNsRjtZQUNELEtBQUssSUFBSSxJQUFJLElBQUksWUFBWSxFQUFFO2dCQUMzQixVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixRQUFRLEVBQUUsQ0FBQzthQUNkO1NBQ0o7YUFBTTtZQUNILFdBQVcsR0FBRyxVQUFVLENBQUM7WUFDekIsSUFBSSxhQUFhLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxDQUFDO1lBQ2xELEtBQUssSUFBSSxtQkFBbUIsR0FBRyxDQUFDLEVBQUUsbUJBQW1CLEdBQUcsYUFBYSxFQUFFLG1CQUFtQixFQUFFLEVBQUU7Z0JBQzFGLElBQUk7b0JBQ0EsSUFBSyxVQUFVLEdBQUcsbUJBQW1CLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQzNFLFFBQU8sY0FBYyxDQUFDLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDLEVBQUUsVUFBVSxDQUFDLEVBQUU7d0JBQ2hFLEtBQUssQ0FBQzs0QkFDRixJQUFJLE1BQU0sR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDOzRCQUM3QixJQUFJLG9CQUFvQixHQUFHLHVCQUFXLENBQUMsd0JBQXdCLEVBQUUsd0JBQXdCLENBQUMsU0FBUyxFQUFFLG1CQUFtQixDQUFDLENBQUM7NEJBQzFILElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUMsV0FBVyxDQUFDLENBQUM7NEJBQ3BFLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDOzRCQUMxRixRQUFRLEVBQUUsQ0FBQzs0QkFDWCxNQUFNO3dCQUVWLEtBQUssQ0FBQzs0QkFDRixJQUFJLFVBQVUsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQ0FDdkMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQyxVQUFVLENBQUMsU0FBUyxFQUFDLFVBQVUsQ0FBQyxDQUFDOzZCQUN0Rjs0QkFDRCxNQUFNO3FCQUV6QjtpQkFFSjtnQkFBQyxPQUFNLEtBQUssRUFBRTtvQkFDWCxpQkFBaUI7b0JBQ2pCLHNFQUFzRTtvQkFDdEUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO2lCQUNuSTtnQkFDRCxJQUFJLG1CQUFtQixJQUFJLENBQUMsb0JBQW9CLEdBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2pELElBQUksbUJBQW1CLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUU7d0JBQzVFLElBQUksTUFBTSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7d0JBQzdCLElBQUksb0JBQW9CLEdBQUcsdUJBQVcsQ0FBQyxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLENBQUMsQ0FBQzt3QkFDNUYsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsRUFBQyxXQUFXLENBQUMsQ0FBQzt3QkFDcEUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO3dCQUNyQixJQUFJLFlBQVksR0FBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO3dCQUNwRSxJQUFJLFlBQVksR0FBUSxFQUFFLENBQUM7d0JBQzNCLEtBQUssSUFBSSxVQUFVLEdBQUcsQ0FBQyxtQkFBbUIsR0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEdBQUcsWUFBWSxFQUFFLFVBQVUsRUFBRSxFQUFFOzRCQUNwRixTQUFTLEdBQUcsSUFBSSxDQUFDOzRCQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFFOzRCQUNyRSxrRUFBa0U7NEJBQ2xFLCtFQUErRTt5QkFDakY7d0JBQ0QsS0FBSyxJQUFJLElBQUksSUFBSSxZQUFZLEVBQUU7NEJBQzNCLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQzdCLFFBQVEsRUFBRSxDQUFDO3lCQUNkO3FCQUVKO2lCQUNKO2FBQ0o7U0FDSjtLQUNKO0FBQ0wsQ0FBQztBQXhGRCxrREF3RkM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQVMsUUFBUTtJQUNiLEtBQUssSUFBSSx3QkFBd0IsSUFBSSxrQ0FBaUIsRUFBRTtRQUNwRCxXQUFXLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN0QyxrQ0FBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUM3QjtBQUNMLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsV0FBVyxDQUFDLHdCQUFpQztJQUNsRCxJQUFJO1FBQ0EsS0FBSyxJQUFJLFVBQVUsSUFBSSx3QkFBd0IsQ0FBQyx5QkFBeUIsRUFBRTtZQUN2RSxJQUFJLFVBQVUsR0FBUSxVQUFVLENBQUMsVUFBVSxDQUFDO1lBQzVDLElBQUksWUFBWSxHQUFRLFVBQVUsQ0FBQyxZQUFZLENBQUM7WUFDaEQsSUFBSSxTQUFTLEdBQUcsd0JBQXdCLENBQUMsU0FBUyxDQUFDO1lBQ25ELElBQUksU0FBUyxHQUFHLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztZQUNuRCxJQUFJLFVBQVUsSUFBSSxTQUFTLElBQUksWUFBWSxJQUFJLFNBQVMsRUFBRTtnQkFDdEQsZUFBZSxDQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUMsU0FBUyxFQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2hFO1NBQ0o7S0FDSjtJQUFDLE9BQU8sS0FBSyxFQUFFO0tBRWY7QUFDTCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGVBQWUsQ0FBQyxVQUFlLEVBQUUsWUFBaUIsRUFBQyxTQUFjLEVBQUMsU0FBaUI7SUFDeEYsSUFBSTtRQUNBLElBQUksaUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzRCxJQUFJLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRDs7Ozs7OztXQU9HO1FBQ0gsaUJBQWlCLENBQUMsT0FBTyxHQUFHLHFCQUFxQixDQUFDO0tBRXJEO0lBQUMsT0FBTyxLQUFLLEVBQUU7S0FFZjtBQUNMLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFTLDJCQUEyQixDQUFDLEVBQVU7SUFDM0MsT0FBTyxzQ0FBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGNBQWMsQ0FBQyxPQUFZLEVBQUUsT0FBWTtJQUUxQyxJQUFJLFVBQVUsR0FBRywyQkFBMkIsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekQsSUFBSSxVQUFVLElBQUksSUFBSSxJQUFLLFVBQVUsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtRQUNqRixPQUFPLENBQUMsQ0FBQztLQUNaO1NBQU07UUFDSCxPQUFPLENBQUMsQ0FBQztLQUNaO0FBQ1QsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsb0JBQW9CLENBQUMsaUJBQXNCO0lBQ2hELElBQUkscUJBQXFCLEdBQUcsRUFBRSxDQUFDO0lBQy9CLElBQUksaUJBQWlCLElBQUksU0FBUyxFQUFFO1FBQ2hDLE9BQU8sU0FBUyxDQUFDO0tBQ3BCO1NBQU07UUFDTCx1RUFBdUU7UUFDdEUscUJBQXFCLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDO0tBQ3JEO0lBQ0QsT0FBTyxxQkFBcUIsQ0FBQTtBQUNoQyxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBUyxnQkFBZ0IsQ0FBQyxZQUFxQjtJQUMzQyxJQUFJLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDM0IsSUFBSTtRQUNBLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNoRjtJQUFDLE9BQU0sS0FBSyxFQUFFO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO0tBQzlEO0lBQ0QsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQzs7Ozs7QUMxTUQscUdBQWdMO0FBQ2hMOzs7OztHQUtHO0FBQ0gsU0FBZ0IsaUNBQWlDLENBQUMsaUJBQTBCLEVBQUMscUJBQTZCLEVBQUMsbUJBQTZCO0lBQ3BJLElBQUcscUJBQXFCLElBQUksTUFBTSxFQUFFO1FBQ2hDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM1RDtTQUFNLElBQUcsbUJBQW1CLElBQUksU0FBUyxJQUFJLG1CQUFtQixJQUFJLElBQUksRUFBQztRQUN0RSxJQUFHLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLFlBQVksSUFBSSxTQUFTLElBQUksbUJBQW1CLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkgsSUFBSSxtQkFBbUIsR0FBWSxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN2SCxJQUFHLG1CQUFtQixJQUFJLFNBQVMsSUFBSSxtQkFBbUIsSUFBSSxJQUFJLEVBQUM7Z0JBQy9ELElBQUcsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsTUFBTSxJQUFJLFNBQVMsSUFBSSxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFDO29CQUNqSCxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsR0FBRyxzREFBdUIsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzFMO3FCQUFNLElBQUcsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsTUFBTSxJQUFJLFNBQVMsSUFBSSxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLElBQUksU0FBUyxFQUFDO29CQUNuSSxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEdBQUcsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDO2lCQUNsSztxQkFBSztvQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLG1FQUFtRSxDQUFDLENBQUM7aUJBQ3BGO2FBQ0o7aUJBQUs7Z0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO2FBQ3BGO1NBQ0o7YUFBTSxJQUFJLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLFlBQVksSUFBSSxTQUFTLElBQUksbUJBQW1CLENBQUMsZUFBZSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDNUg7O2VBRUc7WUFDSCxJQUFHLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLFVBQVUsSUFBSSxTQUFTLEVBQUM7Z0JBQzlELGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQzthQUM5RztpQkFBSztnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLG1FQUFtRSxDQUFDLENBQUM7YUFDcEY7U0FDSjthQUNHO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO1NBQ3BGO0tBQ0o7U0FBSztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUVBQW1FLENBQUMsQ0FBQztRQUNqRixPQUFPLENBQUMsR0FBRyxDQUFDLDZHQUE2RyxDQUFDLENBQUM7UUFDM0gsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0tBQzNEO0lBQ0QseUJBQXlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBcENELDhFQW9DQztBQUVEOzs7R0FHRztBQUNILFNBQVMseUJBQXlCLENBQUMsaUJBQTBCO0lBQ3pELElBQUksaUJBQWlCLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDOUMsS0FBSSxJQUFJLGlCQUFpQixHQUFHLENBQUMsRUFBRSxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLGlCQUFpQixFQUFFLEVBQUU7WUFDOUcsSUFBRyxpQkFBaUIsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDako7aUJBQU07Z0JBQ0gsSUFBRyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBQztvQkFDL0YsaUJBQWlCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLFlBQVksR0FBRyxzREFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3BTO3FCQUFNLElBQUcsaUJBQWlCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sSUFBSSxTQUFTLElBQUksaUJBQWlCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLFVBQVUsSUFBSSxTQUFTLEVBQUM7b0JBQzdNLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEdBQUcsaUJBQWlCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQztpQkFDL1E7cUJBQUs7aUJBQ0w7YUFDSjtZQUNELElBQUcsaUJBQWlCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7Z0JBQy9FLHlCQUF5QixDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7YUFDbkY7U0FDSjtLQUNKO1NBQU07UUFDSixzRUFBc0U7S0FDeEU7QUFFTCxDQUFDOzs7OztBQ3RFRCw0RUFBa0U7QUFDbEUsc0VBQW1FO0FBRW5FLHVFQUFvRTtBQUNwRSw4REFBdUQ7QUFDdkQsb0dBQXdHO0FBQ3hHLDhEQUFnSjtBQUNoSiw4REFBOEQ7QUFDOUQsaUVBQTREO0FBRTVEOzs7OztHQUtHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFDLHdCQUFpQyxFQUFFLG1CQUE2QixFQUFFLGlCQUEyQjtJQUNsSDs7T0FFRztJQUNILElBQUkscUJBQXFCLEdBQVcsTUFBTSxDQUFDO0lBQzNDLElBQUksYUFBYSxHQUFZLElBQUksQ0FBQztJQUNsQyxJQUFHLG1CQUFtQixJQUFJLElBQUksSUFBSSxtQkFBbUIsSUFBSSxTQUFTLEVBQUU7UUFDbEUsSUFBRyxtQkFBbUIsQ0FBQyxrQkFBa0IsSUFBSSxJQUFJO1lBQzdDLG1CQUFtQixDQUFDLGtCQUFrQixJQUFJLFNBQVM7WUFDakQsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsTUFBTSxJQUFJLElBQUk7WUFDbkQsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsTUFBTSxJQUFJLFNBQVM7WUFDekQsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBQztZQUM1RCxxQkFBcUIsR0FBRyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7U0FDdkU7YUFBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0ZBQW9GLENBQUMsQ0FBQztTQUNuRztRQUNELGFBQWEsR0FBRyxtQkFBbUIsQ0FBQztLQUNyQztTQUFNLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLElBQUksbUJBQW1CLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxTQUFTLElBQUksaUJBQWlCLElBQUksS0FBSyxDQUFDLEVBQUU7UUFDOUksOEJBQVcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUMzQyxhQUFhLEdBQUcsOEJBQVcsQ0FBQztLQUM3QjtTQUFNO1FBQ0wsOEJBQVcsQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLDhCQUFXLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDM0MsYUFBYSxHQUFHLDhCQUFXLENBQUM7S0FDN0I7SUFDRCxJQUFJLG9CQUFvQixHQUFRLFFBQVEsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMvRSxpQ0FBZ0IsQ0FBQyx3QkFBd0IsRUFBQyxvQkFBb0IsRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3BGLDREQUFpQyxDQUFDLHdCQUF3QixFQUFDLHFCQUFxQixFQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEcsSUFBSSxpQkFBaUIsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksaUJBQWlCLEVBQUU7UUFDaEUsSUFBSSxtQkFBbUIsSUFBSSxJQUFJLElBQUksbUJBQW1CLElBQUksU0FBUyxFQUFFO1lBQ25FLG1CQUFtQixDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7U0FDMUM7UUFDRix1RkFBdUY7UUFDdEYsK0dBQStHO0tBQ2hIO1NBQU07UUFDTCx1Q0FBbUIsQ0FBQyx3QkFBd0IsRUFBQyxhQUFhLENBQUMsU0FBUyxFQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BGLDhJQUE4STtLQUMvSTtBQUNILENBQUM7QUF0Q0Qsd0JBc0NDO0FBSUQ7O0dBRUc7QUFDSCxNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVUsS0FBSztJQUMvQixJQUFJLGlCQUFpQixHQUFRLE1BQU0sQ0FBQyxXQUFXLEtBQUssU0FBUyxDQUFDO0lBQzlELElBQUksWUFBWSxHQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxLQUFLLFlBQVksQ0FBQyxDQUFDO0lBQzNFLElBQUksQ0FBQyxHQUFXLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN2SSxJQUFJLENBQUMsR0FBVyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDckksSUFBRyxDQUFDLENBQUMsR0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsa0NBQWlCLEVBQUU7UUFDeEMsc0NBQXFCLENBQUMsa0NBQWlCLEdBQUcsb0NBQW1CLENBQUMsQ0FBQztRQUMvRCw2QkFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRyxHQUFHLEVBQUUsRUFBRTtZQUNqQyxJQUFJLGFBQWEsR0FBRyxHQUFHLENBQUM7WUFDeEIsSUFBRyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9DQUFtQixFQUFFLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ3hHLDBGQUEwRjtnQkFDMUYsNkNBQTZDO2dCQUM3QyxtRkFBbUY7Z0JBQ25GLHVDQUFtQixDQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsYUFBYSxDQUFDLENBQUM7YUFDdEQ7UUFDTCxDQUFDLENBQUMsQ0FBQztLQUNKO0FBRUgsQ0FBQyxDQUFBO0FBR0QsTUFBTSxDQUFDLFlBQVksR0FBSSxVQUFVLEtBQUs7SUFDcEMsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDckMsSUFBSSxTQUFTLElBQUksRUFBRSxFQUFFO1FBQ25CLHVCQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakI7U0FBTTtRQUNMLElBQUksR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsQ0FBQztRQUN0Qyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3ZCO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLEtBQUs7SUFDakMsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLFVBQVUsRUFBRTtRQUNsRCxxQ0FBcUM7S0FDeEM7QUFDSCxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLEtBQUs7SUFDN0IsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDckMsSUFBSSxTQUFTLElBQUksRUFBRSxFQUFFO1FBQ25CLHVCQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakI7U0FBTTtRQUNMLElBQUksR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsQ0FBQztRQUN0Qyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3ZCO0FBQ0gsQ0FBQyxDQUFDOzs7OztBQ2xIRixNQUFxQixJQUFJO0lBQ3JCLElBQUksQ0FBQyxHQUFVLEVBQUUsVUFBa0I7UUFDL0IsVUFBVSxHQUFJLENBQUMsT0FBTyxVQUFVLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBRXJFLCtEQUErRDtRQUMvRCxJQUFJLFVBQVU7WUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV2QyxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUV6RCxpQkFBaUI7UUFFakIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBRSwwREFBMEQ7UUFFN0YsNEVBQTRFO1FBQzVFLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFFLDZEQUE2RDtRQUN4RixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFHLHdEQUF3RDtRQUNuRixJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVyQixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyQixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUcsa0RBQWtEO2dCQUM1RSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBQyxFQUFFLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUMsRUFBRSxHQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUUsRUFBRSxDQUFDO29CQUN6RSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFDLEVBQUUsR0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUMsRUFBRSxHQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsRSxDQUFDLHlFQUF5RTtTQUM1RTtRQUNELGdGQUFnRjtRQUNoRiwrRUFBK0U7UUFDL0UsK0VBQStFO1FBQy9FLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3RGLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBRTdDLGtDQUFrQztRQUNsQyxJQUFJLEVBQUUsR0FBRyxVQUFVLENBQUM7UUFDcEIsSUFBSSxFQUFFLEdBQUcsVUFBVSxDQUFDO1FBQ3BCLElBQUksRUFBRSxHQUFHLFVBQVUsQ0FBQztRQUNwQixJQUFJLEVBQUUsR0FBRyxVQUFVLENBQUM7UUFDcEIsSUFBSSxFQUFFLEdBQUcsVUFBVSxDQUFDO1FBRXBCLDRCQUE0QjtRQUU1QixJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBRXRCLG1DQUFtQztZQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRyxDQUFDLEdBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLEtBQUssSUFBSSxDQUFDLEdBQUMsRUFBRSxFQUFFLENBQUMsR0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFbkYsK0VBQStFO1lBQy9FLENBQUMsR0FBRyxFQUFFLENBQUM7WUFBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRXZDLGdCQUFnQjtZQUNoQixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN2QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLG9EQUFvRDtnQkFDOUUsSUFBSSxDQUFDLEdBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUM5RSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ04sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDUDtZQUVELDhDQUE4QztZQUM5QyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUUsOEJBQThCO1lBQ3pELEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7WUFDekIsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztZQUN6QixFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDO1lBQ3pCLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7U0FDMUI7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELElBQUksQ0FBQyxDQUFLLEVBQUUsQ0FBSztRQUNiLE9BQU8sQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUcsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsQ0FBQyxDQUFDLENBQUssRUFBRSxDQUFLLEVBQUUsQ0FBSyxFQUFFLENBQUs7UUFDeEIsUUFBUSxDQUFDLEVBQUU7WUFDUCxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFXLE9BQU87WUFDcEQsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQW9CLFdBQVc7WUFDeEQsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUUsUUFBUTtZQUNyRCxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBb0IsV0FBVztTQUN2RDtJQUNULENBQUM7SUFFRCxRQUFRLENBQUMsQ0FBSztRQUNWLElBQUksQ0FBQyxHQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDWixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLElBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFHLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN4RSxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBYTtRQUNoQixvRkFBb0Y7UUFDcEYsNkJBQTZCO1FBQzdCLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQ2xDLGtCQUFrQixFQUFHLGdEQUFnRDtRQUNyRSxVQUFTLENBQUs7WUFDZCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsRUFBRSxJQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsRUFBRSxHQUFDLElBQUksQ0FBQyxDQUFDO1FBQUMsQ0FBQyxDQUM5RCxDQUFDO1FBQ0YsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQzlCLGtCQUFrQixFQUFHLDBEQUEwRDtRQUMvRSxVQUFTLENBQUs7WUFDZCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsRUFBRSxJQUFFLEVBQUUsRUFBRSxJQUFJLEdBQUcsRUFBRSxJQUFFLENBQUMsR0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLEVBQUUsR0FBQyxJQUFJLENBQUMsQ0FBQztRQUFDLENBQUMsQ0FDbEYsQ0FBQztRQUNGLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBYTtRQUNmLDRGQUE0RjtRQUM3RixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUNsQyxnREFBZ0QsRUFBRyxlQUFlO1FBQ2xFLFVBQVMsQ0FBSztZQUNkLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFFLENBQUMsQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5RixPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFBQyxDQUFDLENBQ3BDLENBQUM7UUFDRixNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FDOUIsaUNBQWlDLEVBQWtCLGVBQWU7UUFDbEUsVUFBUyxDQUFLO1lBQ2QsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQztZQUMxRCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFBQyxDQUFDLENBQ3BDLENBQUM7UUFDRixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0NBQ0o7QUEvSEQsdUJBK0hDOzs7OztBQy9IRDs7O0dBR0c7QUFDSCxTQUFnQix1QkFBdUIsQ0FBQyxjQUFzQjtJQUMxRCxJQUFJLHdCQUF3QixHQUFXLCtCQUErQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3ZGLElBQUcsd0JBQXdCLElBQUksSUFBSTtRQUFFLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQztJQUN0RSxJQUFJLDZCQUE2QixHQUFXLG9DQUFvQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pHLElBQUcsNkJBQTZCLElBQUksSUFBSTtRQUFFLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQztBQUNwRixDQUFDO0FBTEQsMERBS0M7QUFFRDs7O0dBR0c7QUFDSCxTQUFnQiwrQkFBK0IsQ0FBQyxjQUFzQjtJQUNsRSxPQUFPLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUZELDBFQUVDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBZ0Isb0NBQW9DLENBQUMsY0FBc0I7SUFDdkUsT0FBTyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFGRCxvRkFFQztBQUVEOzs7R0FHRztBQUNILFNBQWdCLGFBQWEsQ0FBQyxjQUFzQjtJQUNoRCxJQUFHLGNBQWMsSUFBSSxNQUFNO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDekMsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUhELHNDQUdDOzs7OztBQ2xDRCxxREFBZ0Q7QUFFckMsUUFBQSxXQUFXLEdBQVksSUFBSSxpQkFBTyxDQUFDO0lBQzFDLFNBQVMsRUFBRSxLQUFLO0NBQ25CLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDOzs7OztBQ0pmLE1BQWEsY0FBYztJQUN2QixNQUFNLENBQUMsV0FBVyxDQUFJLGFBQWtCLEVBQUMsR0FBRyxJQUFXO1FBQ25ELElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUNsRSxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEQsT0FBVyxRQUFRLENBQUM7SUFDeEIsQ0FBQztDQUNKO0FBTkQsd0NBTUM7Ozs7O0FDTkQsaUVBQXlEO0FBRXpELE1BQWEsT0FBTztJQUNoQixZQUFZLGlCQUFzQjtRQUM5QixJQUFJLGlCQUFpQixJQUFJLFNBQVMsRUFBRTtZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7U0FDbEQ7YUFBTSxJQUFJLGlCQUFpQixJQUFJLElBQUksRUFBRTtZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7U0FDbEQ7YUFBTSxJQUFJLGlCQUFpQixJQUFJLEVBQUUsRUFBRTtZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7U0FDbEQ7UUFDRCw0QkFBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUNKO0FBWEQsMEJBV0M7Ozs7O0FDYkQsaUVBQXlEO0FBQ3pELFNBQWdCLFVBQVUsQ0FBQyxJQUFTO0lBQzVCLElBQUksSUFBSSxJQUFJLFNBQVMsRUFBRTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7S0FDbEQ7U0FBTSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0tBQ2xEO1NBQU0sSUFBSSxJQUFJLElBQUksRUFBRSxFQUFFO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztLQUNsRDtJQUNELElBQUk7UUFDQSxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLDRCQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7UUFDakUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUM1QjtJQUFDLE9BQU8sS0FBSyxFQUFFO0tBQ2Y7QUFDVCxDQUFDO0FBYkQsZ0NBYUM7Ozs7O0FDZEQsaUVBQTRFO0FBQzVFLHNEQUFpRDtBQUVqRCxNQUFhLEtBQUs7SUFJZCxZQUFZLFNBQWlCO1FBRnJCLGtCQUFhLEdBQVEsSUFBSSxDQUFDO1FBRzlCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzVELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztTQUN4RDtJQUNMLENBQUM7SUFFTyxVQUFVLENBQUMsU0FBaUI7UUFDaEMsSUFBSSxTQUFTLElBQUksU0FBUyxJQUFJLFNBQVMsSUFBSSxJQUFJO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDOUQsSUFBSSxTQUFTLElBQUksRUFBRTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxZQUFZLENBQUMsU0FBaUI7UUFDbEMsSUFBSSxRQUFRLEdBQVEsd0JBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxJQUFJLFFBQVEsSUFBSSxTQUFTO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDeEMsSUFBSSxRQUFRLElBQUksSUFBSTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7O09BR0c7SUFFSyxTQUFTLENBQUMsU0FBaUIsRUFBRSxVQUFnQjtRQUNqRCxTQUFTLEdBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDckMsc0NBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVPLGFBQWEsQ0FBQyxTQUFpQjtRQUNuQyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUMvQixJQUFJLE9BQU8sR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFDLFNBQVMsQ0FBQztRQUNsQyxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRU8sZUFBZSxDQUFDLGFBQWtCO1FBQ3JDLElBQUksV0FBVyxHQUFRLCtCQUFjLENBQUMsV0FBVyxDQUFhLGFBQWEsQ0FBQyxDQUFDO1FBQzdFLElBQUksV0FBVyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBSyw0REFBNEQ7SUFDekcsQ0FBQztDQUVKO0FBakRELHNCQWlEQzs7Ozs7QUNwREQ7O0dBRUc7QUFDUSxRQUFBLFdBQVcsR0FBWSxLQUFLLENBQUM7QUFDeEM7OztHQUdHO0FBQ1EsUUFBQSxpQkFBaUIsR0FBUSxFQUFFLENBQUM7QUFDdkM7Ozs7R0FJRztBQUNILFNBQWdCLGlCQUFpQjtJQUM3QixtQkFBVyxHQUFHLElBQUksQ0FBQztJQUNuQixJQUFJLGFBQWEsR0FBb0IsUUFBUSxDQUFDLFdBQVcsQ0FBQztJQUMxRCxLQUFJLElBQUksa0JBQWtCLEdBQUcsQ0FBQyxFQUFFLGtCQUFrQixHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsRUFBRTtRQUM3RixrQkFBa0IsQ0FBRSxhQUFhLENBQUMsa0JBQWtCLENBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEY7SUFDRCxPQUFPO0FBQ1gsQ0FBQztBQVBELDhDQU9DO0FBQ0Q7OztHQUdHO0FBQ0gsU0FBUyxrQkFBa0IsQ0FBQyxlQUFvQjtJQUM1QyxLQUFJLElBQUksb0JBQW9CLEdBQUcsQ0FBQyxFQUFFLG9CQUFvQixHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsRUFBRTtRQUNyRyxnQ0FBZ0MsQ0FBQyxlQUFlLENBQUMsb0JBQW9CLENBQWlCLENBQUMsQ0FBQztLQUMzRjtJQUNELE9BQU87QUFDWCxDQUFDO0FBQ0Q7OztHQUdHO0FBQ0gsU0FBUyxnQ0FBZ0MsQ0FBQyxjQUE0QjtJQUNsRSx5QkFBaUIsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQ3RGLE9BQU87QUFDWCxDQUFDOzs7OztBQ3ZDRCx3Q0FBaUM7QUFFakMsTUFBcUIsWUFBWTtJQUU3Qjs7T0FFRztJQUNILE9BQU8sQ0FBQyxhQUFrQjtRQUN0QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxZQUFZLENBQUMsYUFBa0I7UUFDM0IsSUFBSSxXQUFXLEdBQVMsTUFBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2RCxJQUFJLFdBQVcsQ0FBQztRQUNoQixLQUFJLElBQUksT0FBTyxHQUFHLENBQUMsRUFBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUUsRUFBQztZQUN4RCxJQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUk7Z0JBQUUsU0FBUyxDQUFDLHNDQUFzQztZQUM1SCxJQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJO2dCQUFJLFNBQVM7WUFDL0MsSUFBRyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTTtnQkFBRSxTQUFTO1lBQy9DLElBQUcsV0FBVyxJQUFJLElBQUksSUFBSSxXQUFXLElBQUksU0FBUyxFQUFFO2dCQUFFLFdBQVcsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsU0FBUzthQUFDO1lBQ25HLFdBQVcsR0FBRyxXQUFXLEdBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO1FBRUQsT0FBTyxJQUFJLGNBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUVKO0FBNUJELCtCQTRCQzs7Ozs7QUM5QkQsK0RBQXdEO0FBQ3hELHdFQUEwRTtBQUUxRSxtRUFBaUc7QUFDakcsOERBQW9GO0FBRXBGLE1BQWEsT0FBUSxTQUFRLHNCQUFZO0lBWXJDOzs7T0FHRztJQUNILFlBQVksa0JBQXNCLEVBQUUsU0FBYyxFQUFFLFdBQXFCO1FBQ3JFLEtBQUssRUFBRSxDQUFDO1FBWEwsb0JBQWUsR0FBUSxFQUFFLENBQUM7UUFDMUIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixzQkFBaUIsR0FBUSxFQUFFLENBQUM7UUFDNUIsOEJBQXlCLEdBQVEsRUFBRSxDQUFDO1FBU3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLFdBQVcsSUFBSSxTQUFTLElBQUksV0FBVyxFQUFFO1lBQ3pDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUN0QyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDckM7YUFBTTtZQUNILElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVEOzs7T0FHRztJQUNILGFBQWEsQ0FBQyxrQkFBc0I7UUFDaEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO0lBQ2pELENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU0sQ0FBQyxrQkFBdUI7UUFDMUIsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXLENBQUMsa0JBQXNCO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2xELGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDOUMsT0FBTyxrQkFBa0IsQ0FBQztJQUM5QixDQUFDO0lBRUQsaUJBQWlCLENBQUMsa0JBQXVCLEVBQUUsU0FBYztRQUNyRDs7Ozs7V0FLRztRQUNILElBQUksdUJBQXVCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxnREFBMEIsQ0FBQyxDQUFDO1FBQ3RFLEtBQUksSUFBSSxPQUFPLElBQUksdUJBQXVCLEVBQUU7WUFDeEMsSUFBSSxTQUFTLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUMsSUFBSSxTQUFTLElBQUksU0FBUyxJQUFJLFNBQVMsSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLEVBQUU7Z0JBQUUsU0FBUztZQUM3RSxJQUFJLFVBQVUsR0FBRztnQkFDYixZQUFZLEVBQUMsU0FBUztnQkFDdEIsVUFBVSxFQUFDLGdEQUEwQixDQUFDLE9BQU8sQ0FBQzthQUNqRCxDQUFBO1lBQ0QsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDbEU7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBSSxDQUFDLDJCQUFtQztRQUNyQyxJQUFJLHVCQUF1QixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN6RSxJQUFHLHVCQUF1QixJQUFJLElBQUksSUFBSSx1QkFBdUIsSUFBSSxTQUFTLEVBQUM7WUFDdkU7O2VBRUc7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLDJFQUEyRSxDQUFDLENBQUM7WUFDekYsT0FBTztTQUNWO1FBQ0QsdUJBQXVCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxxQ0FBcUM7SUFDdEcsQ0FBQztJQUVEOzs7T0FHRztJQUNILHVCQUF1QixDQUFDLGtCQUFzQjtRQUMxQyxJQUFHLGtCQUFrQixDQUFDLEtBQUssSUFBSSxTQUFTLElBQUksa0JBQWtCLENBQUMsS0FBSyxJQUFJLEVBQUUsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLElBQUksSUFBSTtZQUFFLE9BQU87UUFDdkgsSUFBRyxrQkFBa0IsQ0FBQyxNQUFNLElBQUksU0FBUyxJQUFJLGtCQUFrQixDQUFDLE1BQU0sSUFBSSxFQUFFLElBQUksa0JBQWtCLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUMvRyxJQUFHLENBQUMsMkJBQVc7Z0JBQUcsaUNBQWlCLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsNkJBQTZCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUMxRDtJQUVMLENBQUM7SUFFRDs7T0FFRztJQUNIOzs7T0FHRztJQUNILDZCQUE2QixDQUFDLGtCQUFzQjtRQUNoRCxJQUFJLGdCQUFnQixHQUFZLEtBQUssQ0FBQztRQUN0QyxJQUFJLFdBQVcsR0FBVyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7UUFDckQsSUFBRyxXQUFXLElBQUksU0FBUyxJQUFJLFdBQVcsSUFBSSxFQUFFLElBQUksV0FBVyxJQUFJLElBQUk7WUFBRSxPQUFPO1FBQ2hGLElBQUkscUJBQXFCLEdBQVcsa0JBQWtCLENBQUMsS0FBSyxDQUFDO1FBQzdELElBQUksMEJBQTBCLEdBQU8scUJBQXFCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RFLEtBQUksSUFBSSxTQUFTLElBQUksMEJBQTBCLEVBQUU7WUFDN0MsSUFBRyxTQUFTLElBQUksRUFBRTtnQkFBRSxTQUFTO1lBQzdCLElBQUksT0FBTyxHQUFRLGlDQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hELElBQUcsT0FBTyxJQUFJLFNBQVMsRUFBRTtnQkFDckIsSUFBSSxTQUFTLEdBQVcsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDdkMsSUFBRyxTQUFTLElBQUksRUFBRSxJQUFJLFNBQVMsSUFBSSxTQUFTLEVBQUU7b0JBQzFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxHQUFHLFNBQVMsQ0FBQztvQkFDekMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLEdBQUcsU0FBUyxDQUFDO29CQUM3QyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7aUJBQzNCO2FBQ0o7WUFDRCxJQUFHLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ2xCLE9BQU8sR0FBRyxpQ0FBaUIsQ0FBQyxHQUFHLEdBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzNDLElBQUcsT0FBTyxJQUFJLFNBQVMsRUFBRTtvQkFDdEIsSUFBSSxTQUFTLEdBQVcsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDdkMsSUFBRyxTQUFTLElBQUksRUFBRSxJQUFJLFNBQVMsSUFBSSxTQUFTLEVBQUU7d0JBQzdDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxHQUFHLFNBQVMsQ0FBQzt3QkFDekMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLEdBQUcsU0FBUyxDQUFDO3FCQUM3QztpQkFDSDthQUNKO1NBRUo7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssdUJBQXVCLENBQUMsa0JBQXVCO1FBQ25ELHNDQUFxQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNKO0FBdkpELDBCQXVKQzs7Ozs7QUM1SkQsbUVBQWtFO0FBQ2xFLHFHQUFpTDtBQUNqTDs7Ozs7O0dBTUc7QUFDSCxTQUFnQixnQkFBZ0IsQ0FBQyx3QkFBaUMsRUFBQyxpQ0FBc0MsRUFBQyxtQkFBNkI7SUFDbkksSUFBRyx3QkFBd0IsSUFBSSxJQUFJLElBQUksd0JBQXdCLElBQUksU0FBUyxFQUFDO1FBQ3pFLElBQUcsaUNBQWlDLElBQUksSUFBSSxJQUFJLGlDQUFpQyxJQUFJLFNBQVMsRUFBQztZQUMzRixJQUFJLGNBQWMsR0FBRyx5QkFBeUIsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3pFLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxHQUFHLGNBQWMsQ0FBQztZQUMzRSxJQUFHLGlDQUFpQyxDQUFDLEVBQUUsSUFBSSxNQUFNLEVBQUM7Z0JBQzlDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxHQUFHLGNBQWMsQ0FBQzthQUN6RTtTQUNKO2FBQUs7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7WUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzRkFBc0YsQ0FBQyxDQUFDO1lBQ3BHLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEVBQThFLENBQUMsQ0FBQztTQUMvRjtLQUNKO1NBQUs7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLCtEQUErRCxDQUFDLENBQUM7UUFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO0tBQ3hFO0FBQ0wsQ0FBQztBQWpCRCw0Q0FpQkM7QUFDRDs7O0dBR0c7QUFDSCxTQUFTLHlCQUF5QixDQUFDLGlCQUEwQjtJQUN6RCxJQUFJLGFBQWEsR0FBVyxDQUFDLENBQUM7SUFDOUIsS0FBSSxJQUFJLFlBQVksSUFBSSxpQkFBaUIsQ0FBQyxlQUFlLEVBQUU7UUFDdkQsSUFBRyxZQUFZLENBQUMsa0JBQWtCLENBQUMsVUFBVSxJQUFJLFNBQVMsSUFBSSxZQUFZLENBQUMsa0JBQWtCLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBQztZQUM5RyxhQUFhLEdBQUcsYUFBYSxHQUFHLENBQUMsQ0FBQyxpQ0FBaUIsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN0SSxTQUFTO1NBQ1o7YUFBTSxJQUFHLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFDO1lBQzFELElBQUksY0FBYyxHQUFHLHNEQUF1QixDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRixhQUFhLEdBQUcsYUFBYSxHQUFHLGNBQWMsQ0FBQztZQUMvQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLEdBQUcsY0FBYyxDQUFDO1lBQy9ELFNBQVM7U0FDWjthQUFNLElBQUcsWUFBWSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsSUFBSSxTQUFTLEVBQUM7WUFDOUQsNkRBQTZEO1lBQzdELGFBQWEsR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM5RSxTQUFTO1NBQ1o7YUFBSztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0VBQXNFLENBQUMsQ0FBQztZQUNwRixNQUFNO1NBQ1Q7S0FDSjtJQUNELGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxHQUFHLGFBQWEsQ0FBQztJQUNuRSxPQUFPLGFBQWEsQ0FBQztBQUN6QixDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHtFbGVtZW50fSBmcm9tICcuLi8uLi9zcmMvbGliX21vZHVsZXMvX3VyYW5pdW12aWV3L2VsZW1lbnQnO1xuaW1wb3J0IHtSZW5kZXJ9IGZyb20gJy4uLy4uL3NyYy9saWJfbW9kdWxlcy9fcmVuZGVyL3JlbmRlcic7XG5pbXBvcnQge3JvdXRlfSBmcm9tICcuLi8uLi9zcmMvbGliX21vZHVsZXMvX3Vqc19jb3JlL19yb3V0ZXNPcGVyYXRpb24vcm91dGVzY29yZSc7XG5pbXBvcnQge1JlYWN0b3J9IGZyb20gJy4uLy4uL3NyYy9saWJfbW9kdWxlcy9fcmVhY3Rvci9yZWFjdG9yJztcblxuaW1wb3J0IHtfVUpTc3R5bGVzaGVldExpYiwgaXNTdHlsZUxvYWQsY3NzU3R5bGVDbGFzc0pzb259IGZyb20gJy4uLy4uL3NyYy9saWJfbW9kdWxlcy9fdWpzc3R5bGVzaGVldC91anNzdHlsZXNoZWV0JztcblxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlVmlldyB7XG5cbiAgICBwdWJsaWMgeDogbnVtYmVyID0wO1xuXG4gICAgcHVibGljIGJhc2VFbGVtZW50OiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnXG4gICAgfSx0aGlzKTtcblxuXG4gICAgcHVibGljIGJhc2VFbGVtZW50MTogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgJ2NsYXNzJzogJ2NoaWxkLWZpcnN0JyxcbiAgICAgICAgJ3RhZyc6ICdiYXNlRWxlbWVudDEnXG4gICAgfSx0aGlzKTtcblxuICAgIHB1YmxpYyBiYXNlRWxlbWVudDExOiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAnY2hpbGQtZmlyc3QnLFxuICAgICAgICAnaW5uZXJIVE1MJzogJzExJ1xuICAgIH0sdGhpcyk7XG4gICAgcHVibGljIGJhc2VFbGVtZW50MTI6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCh7XG4gICAgICAgICdlbGVtZW50JzogJ2RpdicsXG4gICAgICAgICdjbGFzcyc6ICdjaGlsZC1maXJzdCcsXG4gICAgICAgICdpbm5lckhUTUwnOiAnMTInXG4gICAgfSx0aGlzKTtcbiAgICBwdWJsaWMgYmFzZUVsZW1lbnQxMzogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgJ2NsYXNzJzogJ2NoaWxkLWZpcnN0JyxcbiAgICAgICAgJ2lubmVySFRNTCc6ICcxMydcbiAgICB9LHRoaXMpO1xuXG4gICAgcHVibGljIGJhc2VFbGVtZW50MTQ6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCh7XG4gICAgICAgICdlbGVtZW50JzogJ2RpdicsXG4gICAgICAgICdjbGFzcyc6ICdjaGlsZC1maXJzdCcsXG4gICAgICAgICdpbm5lckhUTUwnOiAnMTQnXG4gICAgfSx0aGlzKTtcbiAgICBwdWJsaWMgYmFzZUVsZW1lbnQxNTogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgJ2NsYXNzJzogJ2NoaWxkLWZpcnN0JyxcbiAgICAgICAgJ2lubmVySFRNTCc6ICcxNSdcbiAgICB9LHRoaXMpO1xuICAgIHB1YmxpYyBiYXNlRWxlbWVudDE2OiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAnY2hpbGQtZmlyc3QnLFxuICAgICAgICAnaW5uZXJIVE1MJzogJzE2J1xuICAgIH0sdGhpcyk7XG5cbiAgICBwdWJsaWMgYmFzZUVsZW1lbnQyOiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAnY2hpbGQtc2Vjb25kJ1xuICAgIH0sdGhpcyk7XG5cblxuXG4gICAgcHVibGljIGhlYWRlckVsZW1lbnQ6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCh7XG4gICAgICAgICdlbGVtZW50JzogJ2RpdicsXG4gICAgICAgICdjbGFzcyc6ICdoZWFkZXInLFxuICAgICAgICAndGFnJzogJ2hlYWRlcidcbiAgICB9LHRoaXMpO1xuXG4gICAgcHVibGljIHRlbXBFbGVtZW50OiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAndGVtcGNsYXNzJ1xuICAgIH0sdGhpcyk7XG5cbiAgICBwdWJsaWMgYnV0dG9uOiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdidXR0b24nLFxuICAgICAgICAnY2xhc3MnOiAnYnV0dG9uJyxcbiAgICAgICAgJ29uY2xpY2snOiAnb25DbGlja0Fycm93TWV0aG9kJyxcbiAgICAgICAgJ3RhZyc6ICdidXR0b24nXG4gICAgfSx0aGlzKTtcblxuICAgIHB1YmxpYyBkaXYxOiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAnZmlyc3ROb2RlJ1xuICAgIH0sIHRoaXMpO1xuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBwdWJsaWMgbm9kZTE6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCh7XG4gICAgICAgICdlbGVtZW50JzogJ2RpdicsXG4gICAgICAgICdjbGFzcyc6ICdjaGlsZC1maXJzdCcsXG4gICAgICAgICdpbm5lckhUTUwnOidZYXNob2RhICsgUnV3YW4nXG4gICAgfSx0aGlzKTtcblxuICAgIHB1YmxpYyBub2RlMjogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgJ2NsYXNzJzogJ2NoaWxkLWZpcnN0JyxcbiAgICAgICAgJ2lubmVySFRNTCc6J1lhc2hvZGEgKyBSdXdhbidcbiAgICB9LHRoaXMpO1xuXG4gICAgcHVibGljIG5vZGUzOiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAnY2hpbGQtZmlyc3QnXG4gICAgfSx0aGlzKTtcblxuICAgIHB1YmxpYyBub2RlNDogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgJ2NsYXNzJzogJ2NoaWxkLWZpcnN0J1xuICAgIH0sdGhpcyk7XG5cbiAgICBwdWJsaWMgbm9kZTU6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCh7XG4gICAgICAgICdlbGVtZW50JzogJ2RpdicsXG4gICAgICAgICdjbGFzcyc6ICdjaGlsZC1maXJzdCdcbiAgICB9LHRoaXMpO1xuXG4gICAgcHVibGljIG5vZGU2OiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAnY2hpbGQtZmlyc3QnXG4gICAgfSx0aGlzKTtcblxuICAgIHB1YmxpYyBub2RlNzogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgJ2NsYXNzJzogJ2NoaWxkLWZpcnN0J1xuICAgIH0sdGhpcyk7XG5cbiAgICBwdWJsaWMgbm9kZTg6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCh7XG4gICAgICAgICdlbGVtZW50JzogJ2RpdicsXG4gICAgICAgICdjbGFzcyc6ICdjaGlsZC1maXJzdCdcbiAgICB9LHRoaXMpO1xuXG4gICAgcHVibGljIG5vZGU5OiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAnY2hpbGQtZmlyc3QnXG4gICAgfSx0aGlzKTtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgIC8vIHRoaXMuZGVjb3JhdGVIZWFkZXIoKTtcbiAgICB9XG5cbiAgICBkZWNvcmF0ZUhlYWRlcigpIHtcbiAgICAvLyAgICAgdGhpcy5oZWFkZXJFbGVtZW50LmdsdWUodGhpcy5idXR0b24pO1xuICAgIC8vICAgICB0aGlzLmJhc2VFbGVtZW50MS5nbHVlKHRoaXMuaGVhZGVyRWxlbWVudCk7XG4gICAgLy8gICAgIHRoaXMuYmFzZUVsZW1lbnQxLmdsdWUodGhpcy50ZW1wRWxlbWVudCk7XG4gICAgLy8gICAgIHRoaXMuYmFzZUVsZW1lbnQuZ2x1ZSh0aGlzLmJhc2VFbGVtZW50MSk7XG4gICAgLy8gICAgIHRoaXMuYmFzZUVsZW1lbnQuZ2x1ZSh0aGlzLmJhc2VFbGVtZW50Mik7XG4gICAgLy8gLy8gICAgIHRoaXMuYmFzZUVsZW1lbnQuZ2x1ZSh0aGlzLmJhc2VFbGVtZW50MTEpO1xuICAgIC8vICAgICAgdGhpcy5iYXNlRWxlbWVudC5nbHVlKHRoaXMuYmFzZUVsZW1lbnQxMik7XG4gICAgLy8gICAgIHRoaXMuYmFzZUVsZW1lbnQuZ2x1ZSh0aGlzLmJhc2VFbGVtZW50MTMpO1xuICAgIC8vICAgICB0aGlzLmJhc2VFbGVtZW50LmdsdWUodGhpcy5iYXNlRWxlbWVudDE0KTtcbiAgICAvLyAgICAgdGhpcy5iYXNlRWxlbWVudC5nbHVlKHRoaXMuYmFzZUVsZW1lbnQxNSk7XG4gICAgLy8gICAgIHRoaXMuYmFzZUVsZW1lbnQuZ2x1ZSh0aGlzLmJhc2VFbGVtZW50MTYpO1xuICAgICAgICAvL3RoaXMuZGl2MS5nbHVlKHRoaXMuYmFzZUVsZW1lbnQxKTtcbiAgICAgICAgLy8gdGhpcy5iYXNlRWxlbWVudC5nbHVlKHRoaXMuYmFzZUVsZW1lbnQxKTtcbiAgICAgICAgLy8gdGhpcy5iYXNlRWxlbWVudC5nbHVlKHRoaXMuYmFzZUVsZW1lbnQyKTtcbiAgICAgICAgLy8gdGhpcy5iYXNlRWxlbWVudC5nbHVlKHRoaXMuYmFzZUVsZW1lbnQxKTtcbiAgICAgICAgLy8gdGhpcy5iYXNlRWxlbWVudC5nbHVlKHRoaXMuYmFzZUVsZW1lbnQyKTtcbiAgICAgICAgLy8gdGhpcy5iYXNlRWxlbWVudC5nbHVlKHRoaXMuYmFzZUVsZW1lbnQxKTtcbiAgICAgICAgLy8gdGhpcy5iYXNlRWxlbWVudC5nbHVlKHRoaXMuYmFzZUVsZW1lbnQyKTtcbiAgICAgICAgLy8gdGhpcy5iYXNlRWxlbWVudC5nbHVlKHRoaXMuYmFzZUVsZW1lbnQyKTtcbiAgICAgICAgLy8gdGhpcy5iYXNlRWxlbWVudC5nbHVlKHRoaXMuZGl2MSk7XG4gICAgICAgIHRoaXMubm9kZTEuZ2x1ZSh0aGlzLmJ1dHRvbik7XG4gICAgICAgIHRoaXMuYmFzZUVsZW1lbnQuZ2x1ZSh0aGlzLm5vZGUxKTtcbiAgICAgICAgdGhpcy5iYXNlRWxlbWVudC5nbHVlKHRoaXMubm9kZTIpO1xuICAgICAgICB0aGlzLmJhc2VFbGVtZW50LmdsdWUodGhpcy5ub2RlMyk7XG4gICAgICAgIHRoaXMuYmFzZUVsZW1lbnQuZ2x1ZSh0aGlzLm5vZGU0KTtcbiAgICAgICAgdGhpcy5iYXNlRWxlbWVudC5nbHVlKHRoaXMubm9kZTUpO1xuICAgICAgICB0aGlzLmJhc2VFbGVtZW50LmdsdWUodGhpcy5ub2RlNik7XG4gICAgICAgIHRoaXMuYmFzZUVsZW1lbnQuZ2x1ZSh0aGlzLm5vZGU3KTtcbiAgICAgICAgdGhpcy5iYXNlRWxlbWVudC5nbHVlKHRoaXMubm9kZTgpO1xuICAgICAgICB0aGlzLmJhc2VFbGVtZW50LmdsdWUodGhpcy5ub2RlOSk7XG4gICAgICAgIFJlbmRlcih0aGlzLmJhc2VFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBvbkNsaWNrQXJyb3dNZXRob2QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwieW91IGluIGFyZSBpbiBmYXQgYXJyb3cgZnVuY3Rpb25cIik7XG4gICAgICAgIG5ldyByb3V0ZSgnL3NlY29uZCcpO1xuICAgICAgICAvLyBsZXQgbG9jOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1cmw6XCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgLy8gZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGxvYyArXCIvdFwiO1xuICAgICAgICAvLyBsZXQgZGl2OiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAvLyAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgLy8gICAgICdjbGFzcyc6ICdmaXJzdE5vZGUnLFxuICAgICAgICAvLyAgICAgJ2lubmVySFRNTCc6IHRoaXMueCxcbiAgICAgICAgLy8gICAgICd0YWcnOiAnbXl0YWcnXG4gICAgICAgIC8vIH0sIHRoaXMpO1xuICAgICAgICAvLyB0aGlzLnggPSArK3RoaXMueDtcbiAgICAgICAgLy8gdGhpcy5iYXNlRWxlbWVudDIuZ2x1ZShkaXYpO1xuICAgICAgICAvLyBSZW5kZXIoZGl2LCB0aGlzLmJhc2VFbGVtZW50Mik7XG4gICAgICAgIC8vd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cblxuICAgXG59XG5cblxuXG4gICAgXG5cblxuXG5cbiIsImltcG9ydCB7RWxlbWVudH0gZnJvbSAnLi4vLi4vc3JjL2xpYl9tb2R1bGVzL191cmFuaXVtdmlldy9lbGVtZW50JztcbmltcG9ydCB7UmVuZGVyfSBmcm9tICcuLi8uLi9zcmMvbGliX21vZHVsZXMvX3JlbmRlci9yZW5kZXInO1xuaW1wb3J0IHtyb3V0ZX0gZnJvbSAnLi4vLi4vc3JjL2xpYl9tb2R1bGVzL191anNfY29yZS9fcm91dGVzT3BlcmF0aW9uL3JvdXRlc2NvcmUnO1xuaW1wb3J0IHtSZWFjdG9yfSBmcm9tICcuLi8uLi9zcmMvbGliX21vZHVsZXMvX3JlYWN0b3IvcmVhY3Rvcic7XG5pbXBvcnQge0hhc2hSb3V0ZXN9IGZyb20gJy4uLy4uL3NyYy9saWJfbW9kdWxlcy9fdWpzX2NvcmUvX3JvdXRlcnMvaGFzaFJvdXRlcyc7XG5pbXBvcnQge19VSlNzdHlsZXNoZWV0TGliLCBpc1N0eWxlTG9hZCxjc3NTdHlsZUNsYXNzSnNvbn0gZnJvbSAnLi4vLi4vc3JjL2xpYl9tb2R1bGVzL191anNzdHlsZXNoZWV0L3Vqc3N0eWxlc2hlZXQnO1xuXG5leHBvcnQgY2xhc3MgU2Vjb25kUGFnZSB7XG5cbiAgICBwdWJsaWMgeDogbnVtYmVyID0wO1xuXG4gICAgcHVibGljIGJhc2VFbGVtZW50OiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnXG4gICAgfSx0aGlzKTtcblxuXG4gICAgcHVibGljIGJhc2VFbGVtZW50MTogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgJ2NsYXNzJzogJ2NoaWxkLWZpcnN0JyxcbiAgICAgICAgJ3RhZyc6ICdiYXNlRWxlbWVudDEnXG4gICAgfSx0aGlzKTtcblxuICAgIHB1YmxpYyBiYXNlRWxlbWVudDExOiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAnY2hpbGQtZmlyc3QnLFxuICAgICAgICAnaW5uZXJIVE1MJzogJzExJ1xuICAgIH0sdGhpcyk7XG4gICAgcHVibGljIGJhc2VFbGVtZW50MTI6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCh7XG4gICAgICAgICdlbGVtZW50JzogJ2RpdicsXG4gICAgICAgICdjbGFzcyc6ICdjaGlsZC1maXJzdCcsXG4gICAgICAgICdpbm5lckhUTUwnOiAnMTInXG4gICAgfSx0aGlzKTtcbiAgICBwdWJsaWMgYmFzZUVsZW1lbnQxMzogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgJ2NsYXNzJzogJ2NoaWxkLWZpcnN0JyxcbiAgICAgICAgJ2lubmVySFRNTCc6ICcxMydcbiAgICB9LHRoaXMpO1xuXG4gICAgcHVibGljIGJhc2VFbGVtZW50MTQ6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCh7XG4gICAgICAgICdlbGVtZW50JzogJ2RpdicsXG4gICAgICAgICdjbGFzcyc6ICdjaGlsZC1maXJzdCcsXG4gICAgICAgICdpbm5lckhUTUwnOiAnMTQnXG4gICAgfSx0aGlzKTtcbiAgICBwdWJsaWMgYmFzZUVsZW1lbnQxNTogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgJ2NsYXNzJzogJ2NoaWxkLWZpcnN0JyxcbiAgICAgICAgJ2lubmVySFRNTCc6ICcxNSdcbiAgICB9LHRoaXMpO1xuICAgIHB1YmxpYyBiYXNlRWxlbWVudDE2OiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAnY2hpbGQtZmlyc3QnLFxuICAgICAgICAnaW5uZXJIVE1MJzogJzE2J1xuICAgIH0sdGhpcyk7XG5cbiAgICBwdWJsaWMgYmFzZUVsZW1lbnQyOiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAnY2hpbGQtc2Vjb25kJ1xuICAgIH0sdGhpcyk7XG5cblxuXG4gICAgcHVibGljIGhlYWRlckVsZW1lbnQ6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCh7XG4gICAgICAgICdlbGVtZW50JzogJ2RpdicsXG4gICAgICAgICdjbGFzcyc6ICdoZWFkZXInLFxuICAgICAgICAndGFnJzogJ2hlYWRlcidcbiAgICB9LHRoaXMpO1xuXG4gICAgcHVibGljIHRlbXBFbGVtZW50OiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAndGVtcGNsYXNzJ1xuICAgIH0sdGhpcyk7XG5cbiAgICBwdWJsaWMgYnV0dG9uOiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdidXR0b24nLFxuICAgICAgICAnY2xhc3MnOiAnYnV0dG9uJyxcbiAgICAgICAgJ29uY2xpY2snOiAnb25DbGlja0Fycm93TWV0aG9kJyxcbiAgICAgICAgJ3RhZyc6ICdidXR0b24nXG4gICAgfSx0aGlzKTtcblxuICAgIHB1YmxpYyBkaXYxOiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAnZmlyc3ROb2RlJ1xuICAgIH0sIHRoaXMpO1xuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBwdWJsaWMgbm9kZTE6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCh7XG4gICAgICAgICdlbGVtZW50JzogJ2RpdicsXG4gICAgICAgICdjbGFzcyc6ICdjaGlsZC1zZWNvbmQnXG4gICAgfSx0aGlzKTtcblxuICAgIHB1YmxpYyBub2RlMjogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgJ2NsYXNzJzogJ2NoaWxkLXNlY29uZCdcbiAgICB9LHRoaXMpO1xuXG4gICAgcHVibGljIG5vZGUzOiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAnY2hpbGQtc2Vjb25kJ1xuICAgIH0sdGhpcyk7XG5cbiAgICBwdWJsaWMgbm9kZTQ6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCh7XG4gICAgICAgICdlbGVtZW50JzogJ2RpdicsXG4gICAgICAgICdjbGFzcyc6ICdjaGlsZC1zZWNvbmQnXG4gICAgfSx0aGlzKTtcblxuICAgIHB1YmxpYyBub2RlNTogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgJ2NsYXNzJzogJ2NoaWxkLXNlY29uZCdcbiAgICB9LHRoaXMpO1xuXG4gICAgcHVibGljIG5vZGU2OiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAnY2hpbGQtc2Vjb25kJ1xuICAgIH0sdGhpcyk7XG5cbiAgICBwdWJsaWMgbm9kZTc6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCh7XG4gICAgICAgICdlbGVtZW50JzogJ2RpdicsXG4gICAgICAgICdjbGFzcyc6ICdjaGlsZC1zZWNvbmQnXG4gICAgfSx0aGlzKTtcblxuICAgIHB1YmxpYyBub2RlODogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgJ2NsYXNzJzogJ2NoaWxkLXNlY29uZCdcbiAgICB9LHRoaXMpO1xuXG4gICAgcHVibGljIG5vZGU5OiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAnY2hpbGQtc2Vjb25kJ1xuICAgIH0sdGhpcyk7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAvLyB0aGlzLmRlY29yYXRlSGVhZGVyKCk7XG4gICAgfVxuXG4gICAgZGVjb3JhdGVIZWFkZXIoKSB7XG4gICAgICAgIHRoaXMubm9kZTEuZ2x1ZSh0aGlzLmJ1dHRvbik7XG4gICAgICAgIHRoaXMuYmFzZUVsZW1lbnQuZ2x1ZSh0aGlzLm5vZGUxKTtcbiAgICAgICAgdGhpcy5iYXNlRWxlbWVudC5nbHVlKHRoaXMubm9kZTIpO1xuICAgICAgIC8vIHRoaXMubm9kZTEuZ2x1ZSh0aGlzLm5vZGUyKTtcbiAgICAgICAvLyB0aGlzLm5vZGUzLmdsdWUodGhpcy5ub2RlMSk7XG4gICAgICAgLy8gdGhpcy5ub2RlMy5nbHVlKHRoaXMubm9kZTIpO1xuICAgICAgICB0aGlzLmJhc2VFbGVtZW50LmdsdWUodGhpcy5ub2RlMyk7XG4gICAgICAgIHRoaXMuYmFzZUVsZW1lbnQuZ2x1ZSh0aGlzLm5vZGU0KTtcbiAgICAgICAgdGhpcy5iYXNlRWxlbWVudC5nbHVlKHRoaXMubm9kZTUpO1xuICAgICAgICB0aGlzLmJhc2VFbGVtZW50LmdsdWUodGhpcy5ub2RlNik7XG4gICAgICAgIHRoaXMuYmFzZUVsZW1lbnQuZ2x1ZSh0aGlzLm5vZGU3KTtcbiAgICAgICAgdGhpcy5iYXNlRWxlbWVudC5nbHVlKHRoaXMubm9kZTgpO1xuICAgICAgICB0aGlzLmJhc2VFbGVtZW50LmdsdWUodGhpcy5ub2RlOSk7XG4gICAgICAgIFJlbmRlcih0aGlzLmJhc2VFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBvbkNsaWNrQXJyb3dNZXRob2QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwieW91IGFyZSBpbiBmYXQgYXJyb3cgZnVuY3Rpb25cIik7XG4gICAgICAgLy8gbmV3IHJvdXRlKCcvJyk7XG4gICAgICAgIC8vIGxldCBsb2M6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVybDpcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAvLyBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gbG9jICtcIi90XCI7XG4gICAgICAgIC8vIGxldCBkaXY6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCh7XG4gICAgICAgIC8vICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAvLyAgICAgJ2NsYXNzJzogJ2ZpcnN0Tm9kZScsXG4gICAgICAgIC8vICAgICAnaW5uZXJIVE1MJzogdGhpcy54LFxuICAgICAgICAvLyAgICAgJ3RhZyc6ICdteXRhZydcbiAgICAgICAgLy8gfSwgdGhpcyk7XG4gICAgICAgIC8vIHRoaXMueCA9ICsrdGhpcy54O1xuICAgICAgICAvLyB0aGlzLmJhc2VFbGVtZW50Mi5nbHVlKGRpdik7XG4gICAgICAgIC8vIFJlbmRlcihkaXYsIHRoaXMuYmFzZUVsZW1lbnQyKTtcbiAgICAgICAgLy93aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuXG4gICBcbn1cblxuXG5cblxuICAgIFxuXG5cblxuXG4iLCJpbXBvcnQge1JvdXRlcnN9IGZyb20gJy4uLy4uL3NyYy9saWJfbW9kdWxlcy9fdWpzX2NvcmUvX3JvdXRlcnMvUm91dGVycyc7XG5pbXBvcnQge0hvbWVQYWdlVmlld30gZnJvbSAnLi4vcGFnZXMvSG9tZVBhZ2VWaWV3JztcbmltcG9ydCB7U2Vjb25kUGFnZX0gZnJvbSAnLi4vcGFnZXMvc2Vjb25kUGFnZSc7XG5leHBvcnQgY2xhc3Mgcm91dGVzIGV4dGVuZHMgUm91dGVycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgICcvJzogSG9tZVBhZ2VWaWV3LFxuICAgICAgICAgICAgJy9zZWNvbmQnOiBTZWNvbmRQYWdlXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJleHBvcnQgbGV0IGV2ZW50TmFtZXNDb2xsZWN0aW9uT2JqZWN0OiBhbnkgPSB7XG4gICAgLyoqXG4gICAgICogRm9jdXMgZXZlbnRzICBcbiAgICAgKiAqL1xuICAgICdvbmZvY3VzJzogJ2ZvY3VzJyxcbiAgICAnb25ibHVyJzogJ2JsdXInLFxuXG4gICAgLyoqXG4gICAgICogV2ViU29ja2V0IGV2ZW50c1xuICAgICAqL1xuICAgICdvbm9wZW4nOiAnb3BlbicsXG4gICAgJ29ubWVzc2FnZSc6ICdtZXNzYWdlJyxcbiAgICAnb25lcnJvcic6ICdlcnJvcicsXG4gICAgJ29uY2xvc2UnOiAnY2xvc2UnLFxuXG4gICAgLyoqXG4gICAgICogU2Vzc2lvbiBIaXN0b3J5IGV2ZW50c1xuICAgICAqL1xuICAgICdvbnBhZ2VoaWRlJzogJ3BhZ2VoaWRlJyxcbiAgICAnb25wYWdlc2hvdyc6ICdwYWdlc2hvdycsXG4gICAgJ29ucG9wc3RhdGUnOiAncG9wc3RhdGUnLFxuXG4gICAgLyoqXG4gICAgICogQ1NTIEFuaW1hdGlvbiBldmVudHNcbiAgICAgKi9cbiAgICAnb25hbmltYXRpb25zdGFydCc6ICdhbmltYXRpb25zdGFydCcsXG4gICAgJ29uYW5pbWF0aW9uZW5kJzogJ2FuaW1hdGlvbmVuZCcsXG4gICAgJ2FuaW1hdGlvbml0ZXJhdGlvbic6ICdhbmltYXRpb25pdGVyYXRpb24nLFxuXG4gICAgLyoqXG4gICAgICogQ1NTIFRyYW5zaXRpb24gZXZlbnRzXG4gICAgICovXG4gICAgJ29udHJhbnNpdGlvbnN0YXJ0JzogJ3RyYW5zaXRpb25zdGFydCcsXG4gICAgJ29udHJhbnNpdGlvbmNhbmNlbCc6ICd0cmFuc2l0aW9uY2FuY2VsJyxcbiAgICAnb250cmFuc2l0aW9uZW5kJzogJ3RyYW5zaXRpb25lbmQnLFxuICAgICdvbnRyYW5zaXRpb25ydW4nOiAndHJhbnNpdGlvbnJ1bicsXG5cbiAgICAvKipcbiAgICAgKiBGb3JtIGV2ZW50c1xuICAgICAqL1xuICAgICdvbnJlc2V0JzogJ3Jlc2V0JyxcbiAgICAnb25zdWJtaXQnOiAnc3VibWl0JyxcblxuICAgIC8qKlxuICAgICAqIFByaW50aW5nIGV2ZW50c1xuICAgICAqL1xuICAgICdvbmJlZm9yZXByaW50JzogJ2JlZm9yZXByaW50JyxcbiAgICAnb25hZnRlcnByaW50JzogJ2FmdGVycHJpbnQnLFxuXG4gICAgLyoqXG4gICAgICogVGV4dCBDb21wb3NpdGlvbiBldmVudHNcbiAgICAgKi9cbiAgICAnb25jb21wb3NpdGlvbnN0YXJ0JzogJ2NvbXBvc2l0aW9uc3RhcnQnLFxuICAgICdvbmNvbXBvc2l0aW9udXBkYXRlJzogJ2NvbXBvc2l0aW9udXBkYXRlJyxcbiAgICAnb25jb21wb3NpdGlvbmVuZCc6ICdjb21wb3NpdGlvbmVuZCcsXG5cbiAgICAvKipcbiAgICAgKiBWaWV3IGV2ZW50c1xuICAgICAqL1xuICAgICdvbmZ1bGxzY3JlZW5jaGFuZ2UnOiAnZnVsbHNjcmVlbmNoYW5nZScsXG4gICAgJ29uZnVsbHNjcmVlbmVycm9yJzogJ2Z1bGxzY3JlZW5lcnJvcicsXG4gICAgJ29ucmVzaXplJzogJ3Jlc2l6ZScsXG4gICAgJ29uc2Nyb2xsJzogJ3Njcm9sbCcsXG5cbiAgICAvKipcbiAgICAgKiBDbGlwYm9hcmQgZXZlbnRzXG4gICAgICovXG4gICAgJ29uY3V0JzogJ2N1dCcsXG4gICAgJ29uY29weSc6ICdjb3B5JyxcbiAgICAnb25wYXN0ZSc6ICdwYXN0ZScsXG5cbiAgICAvKipcbiAgICAgKiBLZXlib2FyZCBldmVudHNcbiAgICAgKi9cbiAgICAnb25rZXlkb3duJzogJ2tleWRvd24nLFxuICAgICdvbmtleXByZXNzJzogJ2tleXByZXNzJyxcbiAgICAnb25rZXl1cCc6ICdrZXl1cCcsXG5cbiAgICAvKipcbiAgICAgKiBNb3VzZSBldmVudHNcbiAgICAgKi9cbiAgICAnb25hdXhjbGljayc6ICdhdXhjbGljaycsXG4gICAgJ29uY2xpY2snOiAnY2xpY2snLFxuICAgICdvbmNvbnRleHRtZW51JzogJ2NvbnRleHRtZW51JyxcbiAgICAnb25kYmxjbGljayc6ICdkYmxjbGljaycsXG4gICAgJ29ubW91c2Vkb3duJzogJ21vdXNlZG93bicsXG4gICAgJ29ubW91c2VlbnRlcic6ICdtb3VzZWVudGVyJyxcbiAgICAnb25tb3VzZWxlYXZlJzogJ21vdXNlbGVhdmUnLFxuICAgICdvbm1vdXNlbW92ZSc6ICdtb3VzZW1vdmUnLFxuICAgICdvbm1vdXNlb3Zlcic6ICdtb3VzZW92ZXInLFxuICAgICdvbm1vdXNlb3V0JzogJ21vdXNlb3V0JyxcbiAgICAnb25tb3VzZXVwJzogJ21vdXNldXAnLFxuICAgICdvbnBvaW50ZXJsb2NrY2hhbmdlJzogJ3BvaW50ZXJsb2NrY2hhbmdlJyxcbiAgICAnb25wb2ludGVybG9ja2Vycm9yJzogJ3BvaW50ZXJsb2NrZXJyb3InLFxuICAgICdvbnNlbGVjdCc6ICdzZWxlY3QnLFxuICAgICdvbndoZWVsJzogJ3doZWVsJyxcblxuICAgIC8qKlxuICAgICAqIERyYWcgJiBEcm9wIGV2ZW50c1xuICAgICAqL1xuICAgICdvbmRyYWcnOiAnZHJhZycsXG4gICAgJ29uZHJhZ2VuZCc6ICdkcmFnZW5kJyxcbiAgICAnb25kcmFnZW50ZXInOiAnZHJhZ2VudGVyJyxcbiAgICAnb25kcmFnc3RhcnQnOiAnZHJhZ3N0YXJ0JyxcbiAgICAnb25kcmFnbGVhdmUnOiAnZHJhZ2xlYXZlJyxcbiAgICAnb25kcmFnb3Zlcic6ICdkcmFnb3ZlcicsXG4gICAgJ29uZHJvcCc6ICdkcm9wJyxcblxuICAgIC8qKlxuICAgICAqIE1lZGlhIGV2ZW50c1xuICAgICAqL1xuICAgICdvbmF1ZGlvcHJvY2Vzcyc6ICdhdWRpb3Byb2Nlc3MnLFxuICAgICdvbmNhbnBsYXknOiAnY2FucGxheScsXG4gICAgJ29uY2FucGxheXRocm91Z2gnOiAnY2FucGxheXRocm91Z2gnLFxuICAgICdvbmNvbXBsZXRlJzogJ2NvbXBsZXRlJyxcbiAgICAnb25kdXJhdGlvbmNoYW5nZSc6ICdkdXJhdGlvbmNoYW5nZScsXG4gICAgJ29uZW1wdGllZCc6ICdlbXB0aWVkJyxcbiAgICAnb25lbmRlZCc6ICdlbmRlZCcsXG4gICAgJ29ubG9hZGVkZGF0YSc6ICdsb2FkZWRkYXRhJyxcbiAgICAnb25sb2FkZWRtZXRhZGF0YSc6ICdsb2FkZWRtZXRhZGF0YScsXG4gICAgJ29ucGF1c2UnOiAncGF1c2UnLFxuICAgICdvbnBsYXknOiAncGxheScsXG4gICAgJ29ucGxheWluZyc6ICdwbGF5aW5nJyxcbiAgICAnb25yYXRlY2hhbmdlJzogJ3JhdGVjaGFuZ2UnLFxuICAgICdvbnNlZWtlZCc6ICdzZWVrZWQnLFxuICAgICdvbnNlZWtpbmcnOiAnc2Vla2luZycsXG4gICAgJ29uc3RhbGxlZCc6ICdzdGFsbGVkJyxcbiAgICAnb25zdXNwZW5kJzogJ3N1c3BlbmQnLFxuICAgICdvbnRpbWV1cGRhdGUnOiAndGltZXVwZGF0ZScsXG4gICAgJ29udm9sdW1lY2hhbmdlJzogJ3ZvbHVtZWNoYW5nZScsXG4gICAgJ29ud2FpdGluZyc6ICd3YWl0aW5nJyxcblxuICAgIC8qKlxuICAgICAqIFByb2dyZXNzIGV2ZW50c1xuICAgICAqL1xuICAgICdvbmFib3J0JzogJ2Fib3J0JyxcbiAgICAnb25sb2FkJzogJ2xvYWQnLFxuICAgICdvbmxvYWRlbmQnOiAnbG9hZGVuZCcsXG4gICAgJ29ubG9hZHN0YXJ0JzogJ2xvYWRzdGFydCcsXG4gICAgJ29ucHJvZ3Jlc3MnOiAncHJvZ3Jlc3MnLFxuICAgICdvbnRpbWVvdXQnOiAndGltZW91dCcsXG5cbiAgICAvKipcbiAgICAgKiBTdG9yYWdlIGV2ZW50c1xuICAgICAqL1xuICAgICdvbmNoYW5nZSc6ICdjaGFuZ2UnLFxuICAgICdvbnN0b3JhZ2UnOiAnc3RvcmFnZScsXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgZXZlbnRzXG4gICAgICovXG4gICAgJ29uY2hlY2tpbmcnOiAnY2hlY2tpbmcnLFxuICAgICdvbmRvd25sb2FkaW5nJzogJ2Rvd25sb2FkaW5nJyxcbiAgICAnb25ub3VwZGF0ZSc6ICdub3VwZGF0ZScsXG4gICAgJ29ub2Jzb2xldGUnOiAnb2Jzb2xldGUnLFxuICAgICdvbnVwZGF0ZXJlYWR5JzogJ3VwZGF0ZXJlYWR5JyxcblxuICAgIC8qKlxuICAgICAqIFZhbHVlIGNoYW5nZSBldmVudHNcbiAgICAgKi9cbiAgICAnb25icm9hZGNhc3QnOiAnYnJvYWRjYXN0JyxcbiAgICAnb25DaGVja2JveFN0YXRlQ2hhbmdlJzogJ0NoZWNrYm94U3RhdGVDaGFuZ2UnLFxuICAgICdvbmhhc2hjaGFuZ2UnOiAnaGFzaGNoYW5nZScsXG4gICAgJ29uaW5wdXQnOiAnaW5wdXQnLFxuICAgICdvblJhZGlvU3RhdGVDaGFuZ2UnOiAnUmFkaW9TdGF0ZUNoYW5nZScsXG4gICAgJ29ucmVhZHlzdGF0ZWNoYW5nZSc6ICdyZWFkeXN0YXRlY2hhbmdlJyxcbiAgICAnb25WYWx1ZUNoYW5nZSc6ICdWYWx1ZUNoYW5nZScsXG5cbiAgICAvKipcbiAgICAgKiBVbmNhdGVnb3JpemVkIGV2ZW50c1xuICAgICAqL1xuICAgICdvbmludmFsaWQnOiAnaW52YWxpZCcsXG4gICAgJ29ubG9jYWxpemVkJzogJ2xvY2FsaXplZCcsXG4gICAgJ29uc2hvdyc6ICdzaG93J1xufTtcbiIsImV4cG9ydCBjb25zdCBJTklUX1RSSUdHRVJfSEVJR0hUID0gNzY4O1xuZXhwb3J0IGNvbnN0IEZMQUdfUE9JTlRfVkFMVUUgPSAwOyIsImltcG9ydCB7RkxBR19QT0lOVF9WQUxVRSwgSU5JVF9UUklHR0VSX0hFSUdIVH0gZnJvbSAnLi4vX2dsb2JhbC9nbG9iYWxjb25zdGFudCc7XG5pbXBvcnQge0VsZW1lbnR9IGZyb20gJy4uL191cmFuaXVtdmlldy9lbGVtZW50JztcblxuZXhwb3J0IGxldCByZW5kZXJCdWNrZXQgPSBuZXcgTWFwKCk7XG5leHBvcnQgbGV0IGluaXRUcmlnZ2VySGVpZ2h0OiBudW1iZXIgPSBJTklUX1RSSUdHRVJfSEVJR0hUO1xuZXhwb3J0IGxldCBmbGFnUG9pbnQ6IG51bWJlciA9IEZMQUdfUE9JTlRfVkFMVUU7XG5leHBvcnQgbGV0IHJvdXRlcnM6IGFueSA9IHt9O1xuZXhwb3J0IGxldCBlbGVtZW50Q29sbGVjdG9ucyA9IG5ldyBTZXQoKTtcbmV4cG9ydCBsZXQgZ3JhbmRQYXJlbnQ6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcbmV4cG9ydCBsZXQgZmxhZ0luZGV4R3JhbmRQYXJlbnQ6IEVsZW1lbnQ7XG5leHBvcnQgbGV0IGN1cnJlbnRIYXNoVmFsdWU6IGFueTtcbmV4cG9ydCBsZXQgZXZlbnRMaXN0bmVyTWFwID0gbmV3IE1hcCgpO1xuZXhwb3J0IGxldCBldmVudExpc3RuZXJBcnJheTogYW55ID0gW107XG5cbi8qKlxuICogc2V0dGVyIGZvciBldmVudExpc3RlbmVyTWFwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRFdmVudExpc3RuZXJNYXAoa2V5OiBhbnksIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBldmVudExpc3RuZXJNYXAuc2V0KGtleSwgdmFsdWUpO1xufVxuXG4vKipcbiAqIGdldHRlciBmb3IgZXZlbnRMaXN0bmVyTWFwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFdmVudExpc3RuZXJNYXAoa2V5OiBhbnkpIHtcbiAgICByZXR1cm4gZXZlbnRMaXN0bmVyTWFwLmdldChrZXkpO1xufVxuXG4vKipcbiAqIHNldCBjdXJyZW50SGFzaFZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50SGFzaFZhbHVlKGhhc2hWYWx1ZTogYW55KTogdm9pZCB7XG4gICAgY3VycmVudEhhc2hWYWx1ZSA9IGhhc2hWYWx1ZTtcbn1cblxuLyoqXG4gKiBnZXQgY3VycmVudEhhc2hWYWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudEhhc2hWYWx1ZSgpOiBTdHJpbmcge1xuIGxldCBoYXNoVmFsdWUgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiBpZiAoaGFzaFZhbHVlID09IFwiXCIpIHtcbiAgICBoYXNoVmFsdWUgPSBcIiMvXCI7XG4gfSBcbiByZXR1cm4gaGFzaFZhbHVlO1xufVxuXG4vKipcbiAqIHNldCByZW5kZXIgYnVja2V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRSZW5kZXJCdWNrZXQoa2V5OiBhbnksIHZsYXVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoIWlzUmVuZGVyQnVja2V0SGFzS2V5KGtleSwgdmxhdWUpKSByZW5kZXJCdWNrZXQuc2V0KGtleSwgdmxhdWUpOyAgXG59XG5cbmZ1bmN0aW9uIGlzUmVuZGVyQnVja2V0SGFzS2V5KG5ld0tleTogYW55LCBjdXJyZW50VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIGxldCBrZXlIYXMgPSBmYWxzZTtcbiAgICByZW5kZXJCdWNrZXQuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgIGlmIChrZXkuZWxlbWVudElEID09IG5ld0tleS5lbGVtZW50SUQgJiYgdmFsdWUgPT0gY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgIGtleUhhcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ga2V5SGFzO1xufVxuXG4vKipcbiAqIGZpbmQgdGhlIHBhcmVudCB1bmlxdWUgZmxhZyBpbmRleCBhbmQgaW5jcmVtZW50IGl0IGJ5IDFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsYWdJbmRleEluY3JlbWVudGVyKHVzZXJEZWZpbmVkRWxlbWVudDogRWxlbWVudCwgZ3JhbmRQYXJlbnQ6IEVsZW1lbnQpIHtcbiAgICBpZiAodXNlckRlZmluZWRFbGVtZW50ID09IG51bGwgfHwgdXNlckRlZmluZWRFbGVtZW50ID09IHVuZGVmaW5lZCkgY29uc29sZS5sb2coXCJFUlJPUjogdXNlcmRlaW5lZCBlbGVtZW50IGlzIG5vdCB2YWxpZFwiKTtcbiAgICBpZiAoZ3JhbmRQYXJlbnQgPT0gbnVsbCB8fCBncmFuZFBhcmVudCA9PSB1bmRlZmluZWQpIGNvbnNvbGUubG9nKFwiRVJST1I6IGdyYW5kUGFyZW50IGlzIG5vdCB2YWxpZFwiKTsgXG59XG5cbi8qKlxuICogc2V0IGZsYWdJbmRleEdyYW5kUGFyZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGbGFnSW5kZXhHcmFuZFBhcmVudChmbGFnSW5kZXhHcmFuZFBhcmVudFZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmZsYWdJbmRleEdyYW5kUGFyZW50ID0gZmxhZ0luZGV4R3JhbmRQYXJlbnRWYWx1ZTtcbn1cblxuLyoqXG4gKiBnZXQgZmxhZ0luZGV4R3JhbmRQYXJlbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZsYWdJbmRleEdyYW5kUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLmZsYWdJbmRleEdyYW5kUGFyZW50XG59XG5cbi8qKlxuICogZ2V0IGVsZW1lbnQgT2JqZWN0IGZyb20gY29sbGVjdGlvbnNcbiAqIEBwYXJhbSB1anNJZCBpZCBvZiB0aGUgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2dldEVsZW1lbnRDb2xsZWN0b25zKHVqc0lkOiBzdHJpbmcpOiBhbnkge1xuICAgIGZvcihsZXQgZWxlbWVudCBvZiBlbGVtZW50Q29sbGVjdG9ucykge1xuICAgICAgICBpZiAoZWxlbWVudC51anNfaWQgPT0gdWpzSWQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIHNldHRlciBlbGVtZW50IGZvciBlbGVtZW50Q29sbGVjdG9ucyB2YXJpYWJsZVxuICogQHBhcmFtIHVzZXJEZWZpbmVkRWxlbWVudCB1c2VyIGNyZWF0ZWQgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gX3NldEVsZW1lbnRDb2xsZWN0b25zKHVzZXJEZWZpbmVkRWxlbWVudDogYW55KSB7XG4gICAgZWxlbWVudENvbGxlY3RvbnMuYWRkKHVzZXJEZWZpbmVkRWxlbWVudCk7XG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0gbmV3SW5pdFRyaWdnZXJIZWlnaHQgbmV3IHZhbHVlIG9mIGluaXRUcmlnZ2VySGVpZ2h0IHZhcmliYWxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfc2V0SW5pdFRyaWdnZXJIZWlnaHQobmV3SW5pdFRyaWdnZXJIZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaW5pdFRyaWdnZXJIZWlnaHQgPSBuZXdJbml0VHJpZ2dlckhlaWdodDtcbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSBuZXdGbGFnUG9pbnQgbmV3IHZhbHVlIG9mIGZsYWdQb2ludCB2YXJpYmFsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX3NldEZsYWdQb2ludChuZXdGbGFnUG9pbnQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZmxhZ1BvaW50ID0gbmV3RmxhZ1BvaW50O1xufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHVzZXJEZWZpbmVkUm91dGVycyB1c2VyIGRlZmluZWQgcm91dGVyIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gX3NldFJvdXRlcnModXNlckRlZmluZWRSb3V0ZXJzOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlcnMgPSB1c2VyRGVmaW5lZFJvdXRlcnM7XG59XG5cbi8qKlxuICogXG4gKiBnZXR0ZXIgZm9yIHJvdXRlcnMgdmFyaWFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9nZXRSb3V0ZXJzKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVycztcbn1cbiIsIi8vaW1wb3J0IHtyb3V0ZXN9IGZyb20gJy4uLy4uLy4uL3Rlc3QvaG9tZXBhZ2Uvcm91dGVzJztcbmltcG9ydCB7cm91dGVzfSBmcm9tICcuLi8uLi8uLi9jb250cm9sbGVycy9yb3V0ZXMvcm91dGVzJztcbm5ldyByb3V0ZXMoKTtcbi8vaWduaXRlICIsImltcG9ydCB7RWxlbWVudH0gZnJvbSAnLi4vX3VyYW5pdW12aWV3L2VsZW1lbnQnO1xuaW1wb3J0IHtfc2V0RmxhZ1BvaW50LCByZW5kZXJCdWNrZXQsIHNldFJlbmRlckJ1Y2tldCwgZ2V0Q3VycmVudEhhc2hWYWx1ZSwgZXZlbnRMaXN0bmVyQXJyYXl9IGZyb20gJy4uL19nbG9iYWwvZ2xvYmFsdmFyaWFibGUnO1xuaW1wb3J0IHtpbml0VHJpZ2dlckhlaWdodCwgc2V0RmxhZ0luZGV4R3JhbmRQYXJlbnQsZ2V0RmxhZ0luZGV4R3JhbmRQYXJlbnR9IGZyb20gJy4uL19nbG9iYWwvZ2xvYmFsdmFyaWFibGUnO1xuaW1wb3J0IHtzdHlsZUF0dHJpYnV0ZXN9IGZyb20gJy4uL19nbG9iYWwvc3R5bGVBdHRyaWJ1dHMnO1xuLyoqXG4gKiBcbiAqIEBwYXJhbSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQgSFRNTCBlbGVtZW50IHRoYXQgbmVlZCB0byBjb252ZXJ0IHN0cmluZyB0eXBlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3JlY3J1c2l2ZSh1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQ6IEVsZW1lbnQsIGZsYWdJbmRleD86IGFueSwgcGFyZW50UmVuZGVyRWxlbWVudD86IEVsZW1lbnQpOiBzdHJpbmcge1xuICAgIGlmKHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQudWpzX3JfaGVpZ2h0ID4gaW5pdFRyaWdnZXJIZWlnaHQpIHtcbiAgICAgICAgaWYoKGZsYWdJbmRleCAhPSB1bmRlZmluZWQgfHwgZmxhZ0luZGV4ICE9IG51bGwpICYmIChmbGFnSW5kZXggIT0gdHJ1ZSB8fCBmbGFnSW5kZXggIT0gZmFsc2UpKXtcbiAgICAgICAgICAgIHBhcmVudFJlbmRlckVsZW1lbnQuZmxhZ0luZGV4ID0gZmxhZ0luZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChmbGFnSW5kZXggIT0gdW5kZWZpbmVkICYmIChmbGFnSW5kZXggIT0gdHJ1ZSB8fCBmbGFnSW5kZXggIT0gZmFsc2UpKSB7XG4gICAgICAgICAgICAvL3JlbmRlckJ1Y2tldC5zZXQocGFyZW50UmVuZGVyRWxlbWVudCwgZmxhZ0luZGV4KTtcbiAgICAgICAgICAgIHNldFJlbmRlckJ1Y2tldChwYXJlbnRSZW5kZXJFbGVtZW50LCBnZXRDdXJyZW50SGFzaFZhbHVlKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9yZW5kZXJCdWNrZXQuc2V0KHBhcmVudFJlbmRlckVsZW1lbnQsIDApO1xuICAgICAgICAgICAgc2V0UmVuZGVyQnVja2V0KHBhcmVudFJlbmRlckVsZW1lbnQsIGdldEN1cnJlbnRIYXNoVmFsdWUoKSk7XG4gICAgICAgIH1cbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH07XG4gICAgbGV0IHRlbXBvcnlJbm5lckh0bWw6IHN0cmluZztcbiAgICBpZih1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQuZ2x1ZU9iamVjdEFycmF5Lmxlbmd0aCA9PSAwICkge1xuICAgICAgICBpZih1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmlubmVySFRNTCAhPSBudWxsIHx8IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaW5uZXJIVE1MICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0ZW1wb3J5SW5uZXJIdG1sID0gU3RyaW5nKHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaW5uZXJIVE1MKTtcbiAgICAgICAgfVxuICAgICAgIHBhcmVudFJlbmRlckVsZW1lbnQuZmxhZ0luZGV4ID0gKCtwYXJlbnRSZW5kZXJFbGVtZW50LmZsYWdJbmRleCkgKzE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yKGxldCBpID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LmZsYWdJbmRleDsgaSA8IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC5nbHVlT2JqZWN0QXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IHJlY3J1c2l2ZV9yZXN1bHQgPSBfX3JlY3J1c2l2ZSh1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQuZ2x1ZU9iamVjdEFycmF5W2ldLGksdXNlckRlZmluZWRSZW5kZXJFbGVtZW50KVxuICAgICAgICAgICAgaWYodGVtcG9yeUlubmVySHRtbCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0ZW1wb3J5SW5uZXJIdG1sID0gcmVjcnVzaXZlX3Jlc3VsdDtcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICB0ZW1wb3J5SW5uZXJIdG1sID0gdGVtcG9yeUlubmVySHRtbCArIHJlY3J1c2l2ZV9yZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVjcnVzaXZlX3Jlc3VsdCA9PSBcIlwiKSBicmVhazsgXG4gICAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRMaXN0bmVyQXJyYXkucHVzaCh1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQpO1xuICAgIHJldHVybiBkb21FbGVtZW50Q3JlYXRlcih0ZW1wb3J5SW5uZXJIdG1sLHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudCxmbGFnSW5kZXgpO1xufVxuLyoqXG4gKiBcbiAqIEBwYXJhbSB0ZW1wb3J5SW5uZXJIdG1sIGhvbGQgdGhlIHByZXZpb3VzIGh0bWwgZWxlbWVudHNcbiAqIEBwYXJhbSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQgdXNlciBkZWZpbmVkIGh0bWwgZWxlbWVudCBcbiAqIEBwYXJhbSBmbGFnSW5kZXggcG9pbnQgdGhhdCBwcmV2aW91cyByZW5kZXIgc3RvcHBlZFxuICovXG5mdW5jdGlvbiBkb21FbGVtZW50Q3JlYXRlcih0ZW1wb3J5SW5uZXJIdG1sOiBzdHJpbmcsIHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudDogRWxlbWVudCwgZmxhZ0luZGV4PzogYW55KTogc3RyaW5nIHtcbiAgICBsZXQgRE9NRWxlbWVudDogc3RyaW5nO1xuICAgIGxldCBhY2NlcHRWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5hY2NlcHQgPyAoXCIgYWNjZXB0PSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmFjY2VwdCtcIidcIikgOiAnJztcbiAgICBsZXQgYWNjZXB0Y2hhcnNldFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmFjY2VwdF9jaGFyc2V0ID8gKFwiIGFjY2VwdC1jaGFyc2V0PSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmFjY2VwdF9jaGFyc2V0K1wiJ1wiKSA6ICcnO1xuICAgIGxldCBhY2Nlc3NrZXlWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5hY2Nlc3NrZXkgPyAoXCIgYWNjZXNza2V5PSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmFjY2Vzc2tleStcIidcIikgOiAnJztcbiAgICBsZXQgYWN0aW9uVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuYWN0aW9uID8gKFwiIGFjdGlvbj0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5hY3Rpb24rXCInXCIpIDogJyc7XG4gICAgbGV0IGFsaWduVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuYWxpZ24gPyAoXCIgYWxpZ249J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuYWxpZ24rXCInXCIpIDogJyc7XG4gICAgbGV0IGFsbG93VmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuYWxsb3cgPyAoXCIgYWxsb3c9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuYWxsb3crXCInXCIpIDogJyc7XG4gICAgbGV0IGFsdFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmFsdCA/IChcIiBhbHQ9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuYWx0K1wiJ1wiKSA6ICcnO1xuICAgIGxldCBhc3luY1ZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmFzeW5jID8gKFwiIGFzeW5jPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmFzeW5jK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBhdXRvY2FwaXRhbGl6ZVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmF1dG9jYXBpdGFsaXplID8gKFwiIGF1dG9jYXBpdGFsaXplPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmF1dG9jYXBpdGFsaXplK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBhdXRvY29tcGxldGVWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5hdXRvY29tcGxldGUgPyAoXCIgYXV0b2NvbXBsZXRlPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmF1dG9jb21wbGV0ZStcIidcIikgOiAnJztcbiAgICBsZXQgYXV0b2ZvY3VzVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuYXV0b2ZvY3VzID8gKFwiIGF1dG9mb2N1cz0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5hdXRvZm9jdXMrXCInXCIpIDogJyc7XG4gICAgbGV0IGF1dG9wbGF5VmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuYXV0b3BsYXkgPyAoXCIgYXV0b3BsYXk9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuYXV0b3BsYXkrXCInXCIpIDogJyc7XG4gICAgbGV0IGJnY29sb3JWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5iZ2NvbG9yID8gKFwiIGJnY29sb3I9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuYmdjb2xvcitcIidcIikgOiAnJztcbiAgICBsZXQgYm9yZGVyVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuYm9yZGVyID8gKFwiIGJvcmRlcj0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5ib3JkZXIrXCInXCIpIDogJyc7XG4gICAgbGV0IGJ1ZmZlcmVkVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuYnVmZmVyZWQgPyAoXCIgYnVmZmVyZWQ9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuYnVmZmVyZWQrXCInXCIpIDogJyc7XG4gICAgbGV0IGNoYWxsZW5nZVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNoYWxsZW5nZSA/IChcIiBjaGFsbGVuZ2U9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuY2hhbGxlbmdlK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBjaGFyc2V0VmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuY2hhcnNldCA/IChcIiBjaGFyc2V0PSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNoYXJzZXQrXCInXCIpIDogJyc7XG4gICAgbGV0IGNoZWNrZWRWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jaGVja2VkID8gKFwiIGNoZWNrZWQ9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuY2hlY2tlZCtcIidcIikgOiAnJztcbiAgICBsZXQgY2l0ZVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNpdGUgPyAoXCIgY2l0ZT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jaXRlK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBjbGFzc1ZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNsYXNzID8gKFwiIGNsYXNzPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNsYXNzK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBjb2RlVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuY29kZSA/IChcIiBjb2RlPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNvZGUrXCInXCIpIDogJyc7XG4gICAgbGV0IGNvZGViYXNlVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuY29kZWJhc2UgPyAoXCIgY29kZWJhc2U9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuY29kZWJhc2UrXCInXCIpIDogJyc7XG4gICAgbGV0IGNvbG9yVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuY29sb3IgPyAoXCIgY29sb3I9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuY29sb3IrXCInXCIpIDogJyc7XG4gICAgbGV0IGNvbHNWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jb2xzID8gKFwiIGNvbHM9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuY29scytcIidcIikgOiAnJztcbiAgICBsZXQgY29sc3BhblZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNvbHNwYW4gPyAoXCIgY29sc3Bhbj0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jb2xzcGFuK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBjb250ZW50VmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuY29udGVudCA/IChcIiBjb250ZW50PSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNvbnRlbnQrXCInXCIpIDogJyc7XG4gICAgbGV0IGNvbnRlbnRlZGl0YWJsZVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNvbnRlbnRlZGl0YWJsZSA/IChcIiBjb250ZW50ZWRpdGFibGU9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuY29udGVudGVkaXRhYmxlK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBjb250ZXh0bWVudVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNvbnRleHRtZW51ID8gKFwiIGNvbnRleHRtZW51PSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNvbnRleHRtZW51K1wiJ1wiKSA6ICcnO1xuICAgIGxldCBjb250cm9sc1ZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNvbnRyb2xzID8gKFwiIGNvbnRyb2xzPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNvbnRyb2xzK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBjb29yZHNWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jb29yZHMgPyAoXCIgY29vcmRzPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNvb3JkcytcIidcIikgOiAnJztcbiAgICBsZXQgY3Jvc3NvcmlnaW5WYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jcm9zc29yaWdpbiA/IChcIiBjcm9zc29yaWdpbj0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jcm9zc29yaWdpbitcIidcIikgOiAnJztcbiAgICBsZXQgY3NwVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuY3NwID8gKFwiIGNzcD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jc3ArXCInXCIpIDogJyc7XG4gICAgbGV0IGRhdGFWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5kYXRhID8gKFwiIGRhdGE9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZGF0YStcIidcIikgOiAnJztcbiAgICBsZXQgZGF0YV9TdGFyVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZGF0YV9zdGFyID8gKFwiIGRhdGEtKj0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5kYXRhX3N0YXIrXCInXCIpIDogJyc7XG4gICAgbGV0IGRhdGV0aW1lVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZGF0ZXRpbWUgPyAoXCIgZGF0ZXRpbWU9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZGF0ZXRpbWUrXCInXCIpIDogJyc7XG4gICAgbGV0IGRlY29kaW5nVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZGVjb2RpbmcgPyAoXCIgZGVjb2Rpbmc9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZGVjb2RpbmcrXCInXCIpIDogJyc7XG4gICAgbGV0IGRlZmF1bHRWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5kZWZhdWx0ID8gKFwiIGRlZmF1bHQ9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZGVmYXVsdCtcIidcIikgOiAnJztcbiAgICBsZXQgZGVmZXJWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5kZWZlciA/IChcIiBkZWZlcj0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5kZWZlcitcIidcIikgOiAnJztcbiAgICBsZXQgZGlyVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZGlyID8gKFwiIGRpcj0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5kaXIrXCInXCIpIDogJyc7XG4gICAgbGV0IGRpcm5hbWVWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5kaXJuYW1lID8gKFwiIGRpcm5hbWU9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZGlybmFtZStcIidcIikgOiAnJztcbiAgICBsZXQgZGlzYWJsZWRWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5kaXNhYmxlZCA/IChcIiBkaXNhYmxlZD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5kaXNhYmxlZCtcIidcIikgOiAnJztcbiAgICBsZXQgZG93bmxvYWRWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5kb3dubG9hZCA/IChcIiBkb3dubG9hZD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5kb3dubG9hZCtcIidcIikgOiAnJztcbiAgICBsZXQgZHJhZ2dhYmxlVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZHJhZ2dhYmxlID8gKFwiIGRyYWdnYWJsZT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5kcmFnZ2FibGUrXCInXCIpIDogJyc7XG4gICAgbGV0IGRyb3B6b25lVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZHJvcHpvbmUgPyAoXCIgZHJvcHpvbmU9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZHJvcHpvbmUrXCInXCIpIDogJyc7XG4gICAgbGV0IGVuY3R5cGVWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5lbmN0eXBlID8gKFwiIGVuY3R5cGU9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZW5jdHlwZStcIidcIikgOiAnJztcbiAgICBsZXQgZm9yVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZm9yID8gKFwiIGZvcj0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5mb3IrXCInXCIpIDogJyc7XG4gICAgbGV0IGZvcm1WYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5mb3JtID8gKFwiIGZvcm09J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZm9ybStcIidcIikgOiAnJztcbiAgICBsZXQgZm9ybWFjdGlvblZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmZvcm1hY3Rpb24gPyAoXCIgZm9ybWFjdGlvbj0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5mb3JtYWN0aW9uK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBoZWFkZXJzVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaGVhZGVycyA/IChcIiBoZWFkZXJzPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmhlYWRlcnMrXCInXCIpIDogJyc7XG4gICAgbGV0IGhpZGRlblZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmhpZGRlbiA/IChcIiBoaWRkZW49J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaGlkZGVuK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBoaWdoVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaGlnaCA/IChcIiBoaWdoPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmhpZ2grXCInXCIpIDogJyc7XG4gICAgbGV0IGhyZWZWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5ocmVmID8gKFwiIGhyZWY9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaHJlZitcIidcIikgOiAnJztcbiAgICBsZXQgaHJlZmxhbmdWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5ocmVmbGFuZyA/IChcIiBocmVmbGFuZz0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5ocmVmbGFuZytcIidcIikgOiAnJztcbiAgICBsZXQgaHR0cF9lcXVpdlZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lmh0dHBfZXF1aXYgPyAoXCIgaHR0cC1lcXVpdj0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5odHRwX2VxdWl2K1wiJ1wiKSA6ICcnO1xuICAgIGxldCBpY29uVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaWNvbiA/IChcIiBpY29uPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lmljb24rXCInXCIpIDogJyc7XG4gICAgbGV0IGlkVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQudWpzX2lkID8gKFwiIGlkPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnVqc19pZCtcIidcIikgOiAnJztcbiAgICBsZXQgaW1wb3J0YW5jZVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmltcG9ydGFuY2UgPyAoXCIgaW1wb3J0YW5jZT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5pbXBvcnRhbmNlK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBpbnRlZ3JpdHlWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5pbnRlZ3JpdHkgPyAoXCIgaW50ZWdyaXR5PSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmludGVncml0eStcIidcIikgOiAnJztcbiAgICBsZXQgaXNtYXBWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5pc21hcCA/IChcIiBpc21hcD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5pc21hcCtcIidcIikgOiAnJztcbiAgICBsZXQgaXRlbXByb3BWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5pdGVtcHJvcCA/IChcIiBpdGVtcHJvcD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5pdGVtcHJvcCtcIidcIikgOiAnJztcbiAgICBsZXQga2V5dHlwZVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lml0ZW1wcm9wID8gKFwiIGtleXR5cGU9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQua2V5dHlwZStcIidcIikgOiAnJztcbiAgICBsZXQga2luZFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmtpbmQgPyAoXCIga2luZD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5raW5kK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBsYWJlbFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmxhYmVsID8gKFwiIGxhYmVsPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmxhYmVsK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBsYW5nVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubGFuZyA/IChcIiBsYW5nPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmxhbmcrXCInXCIpIDogJyc7XG4gICAgbGV0IGxhbmd1YWdlVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubGFuZ3VhZ2UgPyAoXCIgbGFuZ3VhZ2U9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubGFuZ3VhZ2UrXCInXCIpIDogJyc7XG4gICAgbGV0IGxhenlsb2FkVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubGF6eWxvYWQgPyAoXCIgbGF6eWxvYWQ9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubGF6eWxvYWQrXCInXCIpIDogJyc7XG4gICAgbGV0IGxpc3RWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5saXN0ID8gKFwiIGxpc3Q9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubGlzdCtcIidcIikgOiAnJztcbiAgICBsZXQgbG9vcFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lmxvb3AgPyAoXCIgbG9vcD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5sb29wK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBsb3dWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5sb3cgPyAoXCIgbG93PSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmxvdytcIidcIikgOiAnJztcbiAgICBsZXQgbWFuaWZlc3RWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5tYW5pZmVzdCA/IChcIiBtYW5pZmVzdD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5tYW5pZmVzdCtcIidcIikgOiAnJztcbiAgICBsZXQgbWF4VmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubWF4ID8gKFwiIG1heD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5tYXgrXCInXCIpIDogJyc7XG4gICAgbGV0IG1heGxlbmd0aFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lm1heGxlbmd0aCA/IChcIiBtYXhsZW5ndGg9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubWF4bGVuZ3RoK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBtaW5sZW5ndGhWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5taW5sZW5ndGggPyAoXCIgbWlubGVuZ3RoPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lm1pbmxlbmd0aCtcIidcIikgOiAnJztcbiAgICBsZXQgbWVkaWFWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5tZWRpYSA/IChcIiBtZWRpYT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5tZWRpYStcIidcIikgOiAnJztcbiAgICBsZXQgbWV0aG9kVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubWV0aG9kID8gKFwiIG1ldGhvZD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5tZXRob2QrXCInXCIpIDogJyc7XG4gICAgbGV0IG1pblZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lm1pbiA/IChcIiBtaW49J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubWluK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBtdWx0aXBsZVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lm11bHRpcGxlID8gKFwiIG11bHRpcGxlPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lm11bHRpcGxlK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBtdXRlZFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lm11dGVkID8gKFwiIG11dGVkPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lm11dGVkK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBuYW1lVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubmFtZSA/IChcIiBuYW1lPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lm5hbWUrXCInXCIpIDogJyc7XG4gICAgbGV0IG5vdmFsaWRhdGVWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5ub3ZhbGlkYXRlID8gKFwiIG5vdmFsaWRhdGU9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubm92YWxpZGF0ZStcIidcIikgOiAnJztcbiAgICBsZXQgb3BlblZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lm9wZW4gPyAoXCIgb3Blbj0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5vcGVuK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBvcHRpbXVtVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQub3B0aW11bSA/IChcIiBvcHRpbXVtPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lm9wdGltdW0rXCInXCIpIDogJyc7XG4gICAgbGV0IHBhdHRlcm5WYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5wYXR0ZXJuID8gKFwiIHBhdHRlcm49J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQucGF0dGVybitcIidcIikgOiAnJztcbiAgICBsZXQgcGluZ1ZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnBpbmcgPyAoXCIgcGluZz0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5waW5nK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBwbGFjZWhvbGRlclZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnBsYWNlaG9sZGVyID8gKFwiIHBsYWNlaG9sZGVyPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnBsYWNlaG9sZGVyK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBwb3N0ZXJWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5wb3N0ZXIgPyAoXCIgcG9zdGVyPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnBvc3RlcitcIidcIikgOiAnJztcbiAgICBsZXQgcHJlbG9hZFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnByZWxvYWQgPyAoXCIgcHJlbG9hZD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5wcmVsb2FkK1wiJ1wiKSA6ICcnO1xuICAgIGxldCByYWRpb2dyb3VwVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQucmFkaW9ncm91cCA/IChcIiByYWRpb2dyb3VwPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnJhZGlvZ3JvdXArXCInXCIpIDogJyc7XG4gICAgbGV0IHJlYWRvbmx5VmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQucmVhZG9ubHkgPyAoXCIgcmVhZG9ubHk9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQucmVhZG9ubHkrXCInXCIpIDogJyc7XG4gICAgbGV0IHJlbFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnJlbCA/IChcIiByZWw9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQucmVsK1wiJ1wiKSA6ICcnO1xuICAgIGxldCByZXF1aXJlZFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnJlcXVpcmVkID8gKFwiIHJlcXVpcmVkPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnJlcXVpcmVkK1wiJ1wiKSA6ICcnO1xuICAgIGxldCByZXZlcnNlZFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnJldmVyc2VkID8gKFwiIHJldmVyc2VkPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnJldmVyc2VkK1wiJ1wiKSA6ICcnO1xuICAgIGxldCByb3dzVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQucm93cyA/IChcIiByb3dzPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnJvd3MrXCInXCIpIDogJyc7XG4gICAgbGV0IHJvd3NwYW5WYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5yb3dzcGFuID8gKFwiIHJvd3NwYW49J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQucm93c3BhbitcIidcIikgOiAnJztcbiAgICBsZXQgc2FuZGJveFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnNhbmRib3ggPyAoXCIgc2FuZGJveD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zYW5kYm94K1wiJ1wiKSA6ICcnO1xuICAgIGxldCBzY29wZVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnNjb3BlID8gKFwiIHNjb3BlPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnNjb3BlK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBzY29wZWRWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zY29wZWQgPyAoXCIgc2NvcGVkPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnNjb3BlZCtcIidcIikgOiAnJztcbiAgICBsZXQgc2VsZWN0ZWRWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zZWxlY3RlZCA/IChcIiBzZWxlY3RlZD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zZWxlY3RlZCtcIidcIikgOiAnJztcbiAgICBsZXQgc2hhcGVWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zaGFwZSA/IChcIiBzaGFwZT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zaGFwZStcIidcIikgOiAnJztcbiAgICBsZXQgc2l6ZVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnNpemUgPyAoXCIgc2l6ZT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zaXplK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBzaXplc1ZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnNpemVzID8gKFwiIHNpemVzPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnNpemVzK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBzbG90VmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc2xvdCA/IChcIiBzbG90PSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnNsb3QrXCInXCIpIDogJyc7XG4gICAgbGV0IHNwYW5WYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zcGFuID8gKFwiIHNwYW49J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc3BhbitcIidcIikgOiAnJztcbiAgICBsZXQgc3BlbGxjaGVja1ZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnNwZWxsY2hlY2sgPyAoXCIgc3BlbGxjaGVjaz0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zcGVsbGNoZWNrK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBzcmNWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zcmMgPyAoXCIgc3JjPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnNyYytcIidcIikgOiAnJztcbiAgICBsZXQgc3JjZG9jVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc3JjZG9jID8gKFwiIHNyY2RvYz0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zcmNkb2MrXCInXCIpIDogJyc7XG4gICAgbGV0IHNyY2xhbmdWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zcmNsYW5nID8gKFwiIHNyY2xhbmc9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc3JjbGFuZytcIidcIikgOiAnJztcbiAgICBsZXQgc3Jjc2V0VmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc3Jjc2V0ID8gKFwiIHNyY3NldD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zcmNzZXQrXCInXCIpIDogJyc7XG4gICAgbGV0IHN0YXJ0VmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc3RhcnQgPyAoXCIgc3RhcnQ9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc3RhcnQrXCInXCIpIDogJyc7XG4gICAgbGV0IHN0ZXBWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zdGVwID8gKFwiIHN0ZXA9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc3RlcCtcIidcIikgOiAnJztcbiAgICBsZXQgc3R5bGVWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zdHlsZSA/IChcIiBzdHlsZT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zdHlsZStcIidcIikgOiAnJztcbiAgICBsZXQgc3VtbWFyeVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnN1bW1hcnkgPyAoXCIgc3VtbWFyeT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zdW1tYXJ5K1wiJ1wiKSA6ICcnO1xuICAgIGxldCB0YWJpbmRleFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnRhYmluZGV4ID8gKFwiIHRhYmluZGV4PSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnRhYmluZGV4K1wiJ1wiKSA6ICcnO1xuICAgIGxldCB0aXRsZVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnRpdGxlID8gKFwiIHRpdGxlPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnRpdGxlK1wiJ1wiKSA6ICcnO1xuICAgIGxldCB0cmFuc2xhdGVWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC50cmFuc2xhdGUgPyAoXCIgdHJhbnNsYXRlPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnRyYW5zbGF0ZStcIidcIikgOiAnJztcbiAgICBsZXQgdHlwZVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnR5cGUgPyAoXCIgdHlwZT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC50eXBlK1wiJ1wiKSA6ICcnO1xuICAgIGxldCB1c2VtYXBWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC51c2VtYXAgPyAoXCIgdXNlbWFwcGU9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQudXNlbWFwK1wiJ1wiKSA6ICcnO1xuICAgIGxldCB2YWx1ZVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnZhbHVlID8gKFwiIHZhbHVlPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnZhbHVlK1wiJ1wiKSA6ICcnO1xuICAgIGxldCB3aWR0aFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LndpZHRoID8gKFwiIHdpZHRoPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LndpZHRoK1wiJ1wiKSA6ICcnO1xuICAgIGxldCB3cmFwVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQud3JhcCA/IChcIiB3cmFwPSdcIsKgwqDCoCt1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LndyYXArXCInXCIpIDogJyc7XG4gICBcbiAgICAvKipcbiAgICAgKiBzaG93IHRoZSB3YXJubmluZyBpZiBhdHRpYnV0ZXMgYXJlIG5vdCB2YWxpZCBcbiAgICAgKi9cbiAgICB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmFkZGNsYXNzID8gKGNvbnNvbGUubG9nKCdbVUpTIFdBUlJOSU5HXTo6IGFkZCBjbGFzc2VzIGlzIG5vdCB2YWxpZCBoZXJlLCB1c2UgUmVhY3RvciB0byBhZGQgY2xhc3NlcyB2YWx1ZXMnKSk6ICcnO1xuICAgIHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaWQgPyAoY29uc29sZS5sb2coJ1tVSlMgV0FSUk5JTkddOjogc2V0dGluZyBpZCB2YWx1ZSBpcyBub3QgdmFsaWQnKSk6ICcnO1xuXG4gICAgaWYoKHRlbXBvcnlJbm5lckh0bWwgPT0gdW5kZWZpbmVkIHx8IHRlbXBvcnlJbm5lckh0bWwgPT0gbnVsbCB8fCB0ZW1wb3J5SW5uZXJIdG1sID09IFwiXCIpICYmIGZsYWdJbmRleCAhPT0gdHJ1ZSl7XG4gICAgICAgIERPTUVsZW1lbnQgPSBcIjxcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmVsZW1lbnQrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0Y2hhcnNldFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc2tleVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luY1ZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXplVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyZWRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFsbGVuZ2VWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyc2V0VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdGVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc1ZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlYmFzZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sc1ZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHNwYW5WYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudGVkaXRhYmxlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dG1lbnVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sc1ZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3Jkc1ZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3Nzb3JpZ2luVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NwVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFfU3RhclZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGV0aW1lVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RpbmdWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJuYW1lVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3B6b25lVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5jdHlwZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvclZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1WYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYWN0aW9uVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1ZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlblZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZmxhbmdWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodHRwX2VxdWl2VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW5jZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVncml0eVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzbWFwVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXByb3BWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl0eXBlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ1ZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF6eWxvYWRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9vcFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvd1ZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmlmZXN0VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlubGVuZ3RoVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWFWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2RWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5WYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGVkVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdmFsaWRhdGVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW11bVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5WYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaW5nVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0ZXJWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVsb2FkVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaW9ncm91cFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZlcnNlZFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3NWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzcGFuVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FuZGJveFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFwZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplc1ZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlbGxjaGVja1ZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1ZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY2RvY1ZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY2xhbmdWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bW1hcnlWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJpbmRleFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZW1hcFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGhWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICBcIj5cIitcbiAgICAgICAgICAgICAgICAgICAgIFwiPC9cIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmVsZW1lbnQrXCI+XCI7XG4gICAgfWVsc2UgaWYoZmxhZ0luZGV4ID09PSB0cnVlKXtcbiAgICAgICAgRE9NRWxlbWVudCA9IHRlbXBvcnlJbm5lckh0bWw7XG4gICAgfSBlbHNle1xuICAgICAgICBET01FbGVtZW50ID0gXCI8XCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5lbGVtZW50K1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdGNoYXJzZXRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NrZXlWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25WYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnblZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmNWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6ZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1c1ZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvclZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcmVkVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbGxlbmdlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnNldFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXRlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZWJhc2VWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvclZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHNWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzcGFuVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRlZGl0YWJsZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRtZW51VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbHNWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZHNWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9zc29yaWdpblZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhX1N0YXJWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRldGltZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kaW5nVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVyVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlybmFtZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wem9uZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuY3R5cGVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWFjdGlvblZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnNWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW5WYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZlZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWZsYW5nVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHR0cF9lcXVpdlZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25WYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFuY2VWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlZ3JpdHlWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc21hcFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1wcm9wVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5dHlwZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmdWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhenlsb2FkVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3dWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5pZmVzdFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmxlbmd0aFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRlZFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3ZhbGlkYXRlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGltdW1WYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGluZ1ZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGVyVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlbG9hZFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGlvZ3JvdXBWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZWRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c3BhblZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbmRib3hWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZXNWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhblZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWxsY2hlY2tWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNkb2NWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNsYW5nVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXhWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VtYXBWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICBcIj5cIitcbiAgICAgICAgICAgICAgICAgICAgIHRlbXBvcnlJbm5lckh0bWwrXG4gICAgICAgICAgICAgICAgICAgIFwiPC9cIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmVsZW1lbnQrXCI+XCI7XG4gICAgfVxuICAgIHJldHVybiBET01FbGVtZW50O1xufVxuIiwiaW1wb3J0IHtFbGVtZW50fSBmcm9tICcuLi9fdXJhbml1bXZpZXcvZWxlbWVudCc7XG5pbXBvcnQge19zZXRGbGFnUG9pbnQsIF9nZXRFbGVtZW50Q29sbGVjdG9ucywgZXZlbnRMaXN0bmVyQXJyYXl9IGZyb20gJy4uL19nbG9iYWwvZ2xvYmFsdmFyaWFibGUnO1xuaW1wb3J0IHtpbml0VHJpZ2dlckhlaWdodCwgZmxhZ1BvaW50fSBmcm9tICcuLi9fZ2xvYmFsL2dsb2JhbHZhcmlhYmxlJztcbmltcG9ydCB7c3R5bGVBdHRyaWJ1dGVzfSBmcm9tICcuLi9fZ2xvYmFsL3N0eWxlQXR0cmlidXRzJztcbmltcG9ydCB7X19yZWNydXNpdmV9IGZyb20gJy4uL19yZWNydXNpdmUvcmVjcnVzaXZlJztcblxudmFyIGdyYW5kUGFyZW50OiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG4vKipcbiAqIFxuICogQHBhcmFtIHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudCBIVE1MIGVsZW1lbnQgdGhhdCBuZWVkIHRvIGNvbnZlcnQgc3RyaW5nIHR5cGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fcmVjcnVzaXZlSW5qZWN0b3IodXNlckRlZmluZWRSZW5kZXJFbGVtZW50OiBFbGVtZW50LCBmbGFnSW5kZXg/OiBhbnksIHBhcmVudFJlbmRlckVsZW1lbnQ/OiBFbGVtZW50KTogdm9pZCB7XG4gICAgbGV0IHBhcmVudE5vZGU6IGFueSA9IGdldFBhcmVudEZyb21ET00ocGFyZW50UmVuZGVyRWxlbWVudCk7XG4gICAgaWYgKHBhcmVudE5vZGUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCBub2RlQ29sbGVjdGlvblN0cmluZyA9IF9fcmVjcnVzaXZlKHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudCwgZmxhZ0luZGV4LCBwYXJlbnRSZW5kZXJFbGVtZW50KTtcbiAgICAgICAgZ3JhbmRQYXJlbnQuaW5uZXJIVE1MID0gZ3JhbmRQYXJlbnQuaW5uZXJIVE1MKyBub2RlQ29sbGVjdGlvblN0cmluZztcbiAgICAgICAgYWRkRXZlbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZG9tUGFyZW50Tm9kZUFsbENoaWxkczphbnkgPSBBcnJheS5mcm9tKGdldEFsbEJyYW5jaGVzSW5Ob2RlKHBhcmVudE5vZGUpKTtcbiAgICAgICAgbGV0IGRvbVBhcmVudENoaWxkTGVuZ3RoOiBhbnkgPSAgZG9tUGFyZW50Tm9kZUFsbENoaWxkcy5sZW5ndGg7XG4gICAgICAgIC8vbGV0IGRvbVBhcmVudENoaWxkSW5kZXhDbG9uZSA9IGRvbVBhcmVudE5vZGVBbGxDaGlsZHMuXG4gICAgICAgIGlmIChkb21QYXJlbnROb2RlQWxsQ2hpbGRzLmxlbmd0aCA9PSAwKSB7IFxuICAgICAgICAgICAgbGV0IG5vZGVDb2xsZWN0aW9uU3RyaW5nID0gX19yZWNydXNpdmUodXNlckRlZmluZWRSZW5kZXJFbGVtZW50LCBmbGFnSW5kZXgsIHBhcmVudFJlbmRlckVsZW1lbnQpO1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5pbm5lckhUTUwgPSBub2RlQ29sbGVjdGlvblN0cmluZztcbiAgICAgICAgICAgIGFkZEV2ZW50KCk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAvLyBwYXJlbnROb2RlLmlubmVySFRNTCA9ICBfX3JlY3J1c2l2ZSh1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQsIGZsYWdJbmRleCwgcGFyZW50UmVuZGVyRWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmxhZ0luZGV4ID09IHRydWUpIHtcbiAgICAgICAgICAgIGxldCBuZXdOb2RlQXJyYXk6IGFueSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGRJbmRleCA9ICh1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQuZmxhZ0luZGV4KzEpOyBjaGlsZEluZGV4IDwgdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LmdsdWVPYmplY3RBcnJheS5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xuICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NoaWxkSW5kZXgnLGNoaWxkSW5kZXgpO1xuICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQ6XCIsIHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZUNvbGxlY3Rpb25TdHJpbmcgPSBfX3JlY3J1c2l2ZSh1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQuZ2x1ZU9iamVjdEFycmF5W2NoaWxkSW5kZXhdLCB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQuZmxhZ0luZGV4LCB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChub2RlQ29sbGVjdGlvblN0cmluZyA9PSAnJykgYnJlYWs7IFxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhub2RlQ29sbGVjdGlvblN0cmluZywndGV4dC9odG1sJyk7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGVDbG9uZSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgbm9kZUNsb25lID0gbm9kZTtcbiAgICAgICAgICAgICAgICBuZXdOb2RlQXJyYXkucHVzaChub2RlQ2xvbmUuYm9keS5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgYWRkRXZlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyBwYXJlbnROb2RlLmFwcGVuZENoaWxkKG5vZGVDbG9uZS5ib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzJdKTtcbiAgICAgICAgICAgICAgICAvLyBwYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLmJvZHkuY2hpbGRyZW5bMF0uY2hpbGROb2Rlc1tjaGlsZEluZGV4XSwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBub2RlIG9mIG5ld05vZGVBcnJheSkge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICAgICAgYWRkRXZlbnQoKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBncmFuZFBhcmVudCA9IHBhcmVudE5vZGU7XG4gICAgICAgICAgICBsZXQgY2hpbGRyZW5fc2l6ZSA9IGRvbVBhcmVudE5vZGVBbGxDaGlsZHMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgZG9tUGFyZW50Q2hpbGRJbmRleCA9IDA7IGRvbVBhcmVudENoaWxkSW5kZXggPCBjaGlsZHJlbl9zaXplOyBkb21QYXJlbnRDaGlsZEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgIG5ld0VsZW1lbnQgPSBwYXJlbnRSZW5kZXJFbGVtZW50LmdsdWVPYmplY3RBcnJheVtkb21QYXJlbnRDaGlsZEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKHNhbWVOb2RlU3RhdHVzKGRvbVBhcmVudE5vZGVBbGxDaGlsZHNbZG9tUGFyZW50Q2hpbGRJbmRleF0sIG5ld0VsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZUNvbGxlY3Rpb25TdHJpbmcgPSBfX3JlY3J1c2l2ZSh1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQsIHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC5mbGFnSW5kZXgsIHBhcmVudFJlbmRlckVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhub2RlQ29sbGVjdGlvblN0cmluZywndGV4dC9odG1sJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobm9kZS5ib2R5LmZpcnN0Q2hpbGQsZG9tUGFyZW50Tm9kZUFsbENoaWxkc1tkb21QYXJlbnRDaGlsZEluZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkRXZlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdFbGVtZW50LmdsdWVPYmplY3RBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fcmVjcnVzaXZlSW5qZWN0b3IobmV3RWxlbWVudC5nbHVlT2JqZWN0QXJyYXlbMF0sbmV3RWxlbWVudC5mbGFnSW5kZXgsbmV3RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9yZW1vdmUgb2xkIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgLy9wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvbVBhcmVudE5vZGVBbGxDaGlsZHNbZG9tUGFyZW50Q2hpbGRJbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC51anNfaWQpLnJlbW92ZUNoaWxkKGRvbVBhcmVudE5vZGVBbGxDaGlsZHNbZG9tUGFyZW50Q2hpbGRJbmRleF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZG9tUGFyZW50Q2hpbGRJbmRleCA9PSAoZG9tUGFyZW50Q2hpbGRMZW5ndGgtMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudFJlbmRlckVsZW1lbnQuZ2x1ZU9iamVjdEFycmF5Lmxlbmd0aCA+IGRvbVBhcmVudE5vZGVBbGxDaGlsZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGVDb2xsZWN0aW9uU3RyaW5nID0gX19yZWNydXNpdmUocGFyZW50UmVuZGVyRWxlbWVudCwgZmxhZ0luZGV4LCBwYXJlbnRSZW5kZXJFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhub2RlQ29sbGVjdGlvblN0cmluZywndGV4dC9odG1sJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZUNsb25lID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlblNpemUgOiBudW1iZXIgPSBub2RlLmJvZHkuY2hpbGRyZW5bMF0uY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Tm9kZUFycmF5OiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkSW5kZXggPSAoZG9tUGFyZW50Q2hpbGRJbmRleCsxKTsgY2hpbGRJbmRleCA8IGNoaWxkcmVuU2l6ZTsgY2hpbGRJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUNsb25lID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdOb2RlQXJyYXkucHVzaChub2RlQ2xvbmUuYm9keS5jaGlsZHJlblswXS5jaGlsZHJlbltjaGlsZEluZGV4XSkgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChub2RlQ2xvbmUuYm9keS5jaGlsZHJlblswXS5jaGlsZHJlblsyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLmJvZHkuY2hpbGRyZW5bMF0uY2hpbGROb2Rlc1tjaGlsZEluZGV4XSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBub2RlIG9mIG5ld05vZGVBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkRXZlbnQoKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gXG59XG5cbi8qKlxuICogQHRvZG8gZXJyb3Igd2hlbiB1c2VyIHByZXNzIGJhY2sgYnV0dG9uICBhbmQgY2xpY2sgZWxlbWVudCBidXR0b24gZnVuY3Rpb24gY2FsbCBcbiAqIG5vdCB3b3JraW5nLlxuICogaGludDogYWZ0ZXIgYmFjayBidXR0b24gY2xpY2sgdHdpY2UgYW5kIGNsaWNrIGZvcndhcmQgYnV0dG9uIGFuZCBlbGVtZW50IGJ1dHRvbiBjbGljayBcbiAqIGZ1bmN0aW9uIGNhbGwgY29ycmVjdGx5XG4gKi9cbmZ1bmN0aW9uIGFkZEV2ZW50KCkge1xuICAgIGZvciAobGV0IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudCBvZiBldmVudExpc3RuZXJBcnJheSkge1xuICAgICAgICBldmVudENhbGxlcih1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQpO1xuICAgICAgICBldmVudExpc3RuZXJBcnJheS5zaGlmdCgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBnZXQgYWxsIGV2ZW50IGFuZCBwYXNzIGludG8gYWRkRXZlbnRMaXN0bmVyXG4gKi9cbmZ1bmN0aW9uIGV2ZW50Q2FsbGVyKHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudDogRWxlbWVudCkge1xuICAgIHRyeSB7XG4gICAgICAgIGZvciAobGV0IGRhdGFPYmplY3Qgb2YgdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LmV2ZW50RGF0YU9iamVjdENvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgIGxldCBhY3Rpb25OYW1lOiBhbnkgPSBkYXRhT2JqZWN0LmFjdGlvbk5hbWU7XG4gICAgICAgICAgICBsZXQgZnVuY3Rpb25OYW1lOiBhbnkgPSBkYXRhT2JqZWN0LmZ1bmN0aW9uTmFtZTtcbiAgICAgICAgICAgIGxldCB0aGlzU2NvcGUgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudGhpc1Njb3BlO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRJRCA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC5lbGVtZW50SUQ7XG4gICAgICAgICAgICBpZiAoYWN0aW9uTmFtZSAhPSB1bmRlZmluZWQgJiYgZnVuY3Rpb25OYW1lICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGFkZEV2ZW50TGlzdG5lcihhY3Rpb25OYW1lLGZ1bmN0aW9uTmFtZSx0aGlzU2NvcGUsZWxlbWVudElEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICB9XG59XG5cbi8qKlxuICogYWRkICBldmVudCBsaXN0bmVyIGludG8gZG9tIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gYWRkRXZlbnRMaXN0bmVyKGFjdGlvbk5hbWU6IGFueSwgZnVuY3Rpb25OYW1lOiBhbnksdGhpc1Njb3BlOiBhbnksZWxlbWVudElkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgZ2V0RWxlbWVudEZyb21ET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xuICAgICAgICBsZXQgZnVuY3Rpb25Cb2R5SW5zdGFuY2VzID0gdGhpc1Njb3BlW2Z1bmN0aW9uTmFtZV07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBwcmV2aW91cyBsb2dpYyB1c2UgZm9yIGFkZCBldmVudCBhY3Rpb24gdG8gZG9tXG4gICAgICAgICAqIEJBRDotIGlmIHR3byB0aW1lIG1ldGhvZCBjYWxsIGl0IGFkZCB0d28gZGlmZmVyZW50IGV2ZW50IHRvIGRvbVxuICAgICAgICAgKiBzdGlsbCBjb21tZW50IGZvciBmdXR1cmUgcHVycG9zZVxuICAgICAgICAgKiBcbiAgICAgICAgICogZ2V0RWxlbWVudEZyb21ET00uYWRkRXZlbnRMaXN0ZW5lcihhY3Rpb25OYW1lLCAoZTogRXZlbnQpID0+IGZ1bmN0aW9uQm9keUluc3RhbmNlcygpKTtcbiAgICAgICAgICogXG4gICAgICAgICAqL1xuICAgICAgICBnZXRFbGVtZW50RnJvbURPTS5vbmNsaWNrID0gZnVuY3Rpb25Cb2R5SW5zdGFuY2VzO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgIH1cbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSBpZCBpZCBvZiB0aGUgZWxlbWVudFxuICovXG5mdW5jdGlvbiBmaW5kSFRNTEluRWxlbWVudENvbGxlY3Rpb24oaWQ6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIF9nZXRFbGVtZW50Q29sbGVjdG9ucyhpZCk7XG59XG5cbi8qKlxuICogY2hlY2tlIGdyYW5kIGNoaWxkIGVsZW1lbnQgaXMgc2FtZSBhcyBuZXcgY2hpbGRcbiAqL1xuZnVuY3Rpb24gc2FtZU5vZGVTdGF0dXMob2xkTm9kZTogYW55LCBuZXdOb2RlOiBhbnkpOiBudW1iZXIge1xuXG4gICAgICAgIGxldCBub2RlT2JqZWN0ID0gZmluZEhUTUxJbkVsZW1lbnRDb2xsZWN0aW9uKG9sZE5vZGUuaWQpO1xuICAgICAgICBpZiAobm9kZU9iamVjdCAhPSBudWxsICYmICBub2RlT2JqZWN0LnVqc19kbmEgPT0gbmV3Tm9kZS51c2VyRGVmaW5lZEVsZW1lbnQudWpzX2RuYSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSBwYXJlbnRIVE1MRWxlbWVudCBodG1sIGRvY3VtZW50ZWQgb2JqZWN0XG4gKiBnZXQgYWxsIGNoaWxkIGFuZCBncmFuZCBjaGlsZHMgZnJvbSBub2RlXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEJyYW5jaGVzSW5Ob2RlKHBhcmVudEhUTUxFbGVtZW50OiBhbnkpIHtcbiAgICBsZXQgYnJhbmNoTm9kZUNvbGxlY3Rpb25zID0gW107XG4gICAgaWYgKHBhcmVudEhUTUxFbGVtZW50ID09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBicmFuY2hOb2RlQ29sbGVjdGlvbnMgPSBwYXJlbnRIVE1MRWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpO1xuICAgICAgIGJyYW5jaE5vZGVDb2xsZWN0aW9ucyA9IHBhcmVudEhUTUxFbGVtZW50LmNoaWxkcmVuO1xuICAgIH1cbiAgICByZXR1cm4gYnJhbmNoTm9kZUNvbGxlY3Rpb25zXG59XG5cbi8qKlxuICogQHBhcmFtIHBhcmVudE9iamVjdCBwYXJlbnQgb2JqZWN0XG4gKiBnZXQgdGhlIGRvY3VtZW50IG9iamVjdCBmcm9tIGh0bWwgZG9jdW1lbnQgYnkgaXRzIGlkXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmVudEZyb21ET00ocGFyZW50T2JqZWN0OiBFbGVtZW50KTogYW55IHtcbiAgICBsZXQgcGFyZW50Tm9kZSA9IHVuZGVmaW5lZDsgICAgXG4gICAgdHJ5IHtcbiAgICAgICAgcGFyZW50Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudE9iamVjdC51c2VyRGVmaW5lZEVsZW1lbnQudWpzX2lkKTtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW1VKUyBFUlJPUl06OiBjYW4gbm90IGZpbmQgbm9kZSBpbiBkb2N1bWVudFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmVudE5vZGU7XG59XG5cblxuIiwiaW1wb3J0IHtFbGVtZW50fSBmcm9tICcuLi9fdXJhbml1bXZpZXcvZWxlbWVudCc7XG5pbXBvcnQge3JlYXJyYW5nZUhlaWdodEFuZFdpZHRoLHN0cmluZ1ZhbHVlTWFuaXB1bGF0ZXJXaXRoUGl4ZWwsIHN0cmluZ1ZhbHVlTWFuaXB1bGF0ZXJXaXRoUHJlY2VudGFnZSwgaXNFcXVhbFRvQXV0b30gZnJvbSAnLi4vX3N0cmluZ01hbmlwdWxhdGVyL3N0cmluZ21hbmlwdWxhdGVyY29udHJvbGxlcnMnO1xuLyoqXG4gKiBcbiAqIEBwYXJhbSB1c2VyRWxlbWVudE9iamVjdCBIVE1MIGVsZW1lbnQgdGhhdCB1c2VyIGNyZWF0ZWRcbiAqIEBwYXJhbSBwYXJlbnRSZW5kZXJFbGVtZW50SWQgdmFsdWUgb2YgdGhlIGlkIGF0dHJpYnV0ZSBpbiB1c2VyRWxlbWVudE9iamVjdCBwYXJlbnQgZWxlbWVudFxuICogQHBhcmFtIHBhcmVudFJlbmRlckVsZW1lbnQgZWxlbWVudCB0aGF0IHVzZXJFbGVtZW50T2JqZWN0IGJpbmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fZWxlbWVudFJlbGF0aXZlSGVpZ2h0Q2FsY3VsYXRvcih1c2VyRWxlbWVudE9iamVjdDogRWxlbWVudCxwYXJlbnRSZW5kZXJFbGVtZW50SWQ6IHN0cmluZyxwYXJlbnRSZW5kZXJFbGVtZW50PzogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmKHBhcmVudFJlbmRlckVsZW1lbnRJZCA9PSAncm9vdCcpIHtcbiAgICAgICAgdXNlckVsZW1lbnRPYmplY3QudXNlckRlZmluZWRFbGVtZW50Wyd1anNfcl9oZWlnaHQnXSA9IDA7XG4gICAgfSBlbHNlIGlmKHBhcmVudFJlbmRlckVsZW1lbnQgIT0gdW5kZWZpbmVkICYmIHBhcmVudFJlbmRlckVsZW1lbnQgIT0gbnVsbCl7XG4gICAgICAgIGlmKHBhcmVudFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnVqc19yX2hlaWdodCAhPSB1bmRlZmluZWQgJiYgcGFyZW50UmVuZGVyRWxlbWVudC5nbHVlT2JqZWN0QXJyYXkubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgbGV0IHByZXZpb3VzTm9kZUVsZW1lbnQ6IEVsZW1lbnQgPSBwYXJlbnRSZW5kZXJFbGVtZW50LmdsdWVPYmplY3RBcnJheVtwYXJlbnRSZW5kZXJFbGVtZW50LmdsdWVPYmplY3RBcnJheS5sZW5ndGggLSAyXTtcbiAgICAgICAgICAgIGlmKHByZXZpb3VzTm9kZUVsZW1lbnQgIT0gdW5kZWZpbmVkICYmIHByZXZpb3VzTm9kZUVsZW1lbnQgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgaWYocHJldmlvdXNOb2RlRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaGVpZ2h0ICE9IHVuZGVmaW5lZCAmJiBwcmV2aW91c05vZGVFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5oZWlnaHQgIT0gXCJcIil7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJFbGVtZW50T2JqZWN0LnVzZXJEZWZpbmVkRWxlbWVudFsndWpzX3JfaGVpZ2h0J10gPSByZWFycmFuZ2VIZWlnaHRBbmRXaWR0aChwcmV2aW91c05vZGVFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5oZWlnaHQpICsgKCtwcmV2aW91c05vZGVFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC51anNfcl9oZWlnaHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihwcmV2aW91c05vZGVFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5oZWlnaHQgPT0gdW5kZWZpbmVkICYmIHByZXZpb3VzTm9kZUVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnVqc19oZWlnaHQgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgdXNlckVsZW1lbnRPYmplY3QudXNlckRlZmluZWRFbGVtZW50Wyd1anNfcl9oZWlnaHQnXSA9IHByZXZpb3VzTm9kZUVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnVqc19oZWlnaHQgKyBwcmV2aW91c05vZGVFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC51anNfcl9oZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltVSlMgRU5HSU5FIEVSUk9SXTo6IHNvbWV0aGluZyB3ZW50IHdyb25nIGJ1ZGR5ISBpIGFtIGdvaW5nIGRvd24uXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltVSlMgRU5HSU5FIEVSUk9SXTo6IHNvbWV0aGluZyB3ZW50IHdyb25nIGJ1ZGR5ISBpIGFtIGdvaW5nIGRvd24uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBhcmVudFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnVqc19yX2hlaWdodCAhPSB1bmRlZmluZWQgJiYgcGFyZW50UmVuZGVyRWxlbWVudC5nbHVlT2JqZWN0QXJyYXkubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogaWYgcGFyZW50IGVsZW1lbnQgaGFzIG9ubHkgb25lIGVsZW1lbnRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYocGFyZW50UmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQudWpzX2hlaWdodCAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIHVzZXJFbGVtZW50T2JqZWN0LnVzZXJEZWZpbmVkRWxlbWVudFsndWpzX3JfaGVpZ2h0J10gPSBwYXJlbnRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC51anNfcl9oZWlnaHQ7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbVUpTIEVOR0lORSBFUlJPUl06OiBzb21ldGhpbmcgd2VudCB3cm9uZyBidWRkeSEgaSBhbSBnb2luZyBkb3duLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbVUpTIEVOR0lORSBFUlJPUl06OiBzb21ldGhpbmcgd2VudCB3cm9uZyBidWRkeSEgaSBhbSBnb2luZyBkb3duLlwiKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coXCJbVUpTIEVOR0lORSBFUlJPUl06OiBzb21ldGhpbmcgd2VudCB3cm9uZyBidWRkeSEgaSBhbSBnb2luZyBkb3duLlwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJbVUpTIFRJUFNdOjogdGhpcyBlcnJvciBjYW4gYmUgaGFwcGVuIGlmIHlvdSBjaGFuZ2VkIHRoZSB0b3Agcm9vdCBkaXYgaWQgYXR0cmlidXRlIHZhbHVlIGluIGluZGV4Lmh0bWwgcGFnZVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCIgICAgICAgICAgOjogdGhlIGRlZmF1bHQgdmFsdWUgaXMgJ3Jvb3QnXCIpO1xuICAgIH1cbiAgICBfX3JlbGF0aXZlSGVpZ2h0UmVjcnVzaXZlKHVzZXJFbGVtZW50T2JqZWN0KTtcbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB1c2VyRWxlbWVudE9iamVjdCBIVE1MIGVsZW1lbnQgdGhhdCB1c2VyIGNyZWF0ZVxuICovXG5mdW5jdGlvbiBfX3JlbGF0aXZlSGVpZ2h0UmVjcnVzaXZlKHVzZXJFbGVtZW50T2JqZWN0OiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHVzZXJFbGVtZW50T2JqZWN0LmdsdWVPYmplY3RBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvcihsZXQgY2hpbGRFbGVtZW50SW5kZXggPSAwOyBjaGlsZEVsZW1lbnRJbmRleCA8IHVzZXJFbGVtZW50T2JqZWN0LmdsdWVPYmplY3RBcnJheS5sZW5ndGg7IGNoaWxkRWxlbWVudEluZGV4KyspIHtcbiAgICAgICAgICAgIGlmKGNoaWxkRWxlbWVudEluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICB1c2VyRWxlbWVudE9iamVjdC5nbHVlT2JqZWN0QXJyYXlbY2hpbGRFbGVtZW50SW5kZXhdLnVzZXJEZWZpbmVkRWxlbWVudFsndWpzX3JfaGVpZ2h0J10gPSAodXNlckVsZW1lbnRPYmplY3QudXNlckRlZmluZWRFbGVtZW50LnVqc19yX2hlaWdodCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKHVzZXJFbGVtZW50T2JqZWN0LmdsdWVPYmplY3RBcnJheVtjaGlsZEVsZW1lbnRJbmRleCAtIDFdLnVzZXJEZWZpbmVkRWxlbWVudC5oZWlnaHQgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgdXNlckVsZW1lbnRPYmplY3QuZ2x1ZU9iamVjdEFycmF5W2NoaWxkRWxlbWVudEluZGV4XS51c2VyRGVmaW5lZEVsZW1lbnRbJ3Vqc19yX2hlaWdodCddID0gdXNlckVsZW1lbnRPYmplY3QuZ2x1ZU9iamVjdEFycmF5W2NoaWxkRWxlbWVudEluZGV4IC0gMV0udXNlckRlZmluZWRFbGVtZW50LnVqc19yX2hlaWdodCArIHJlYXJyYW5nZUhlaWdodEFuZFdpZHRoKHVzZXJFbGVtZW50T2JqZWN0LmdsdWVPYmplY3RBcnJheVtjaGlsZEVsZW1lbnRJbmRleCAtIDFdLnVzZXJEZWZpbmVkRWxlbWVudC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih1c2VyRWxlbWVudE9iamVjdC5nbHVlT2JqZWN0QXJyYXlbY2hpbGRFbGVtZW50SW5kZXggLSAxXS51c2VyRGVmaW5lZEVsZW1lbnQuaGVpZ2h0ID09IHVuZGVmaW5lZCAmJiB1c2VyRWxlbWVudE9iamVjdC5nbHVlT2JqZWN0QXJyYXlbY2hpbGRFbGVtZW50SW5kZXggLSAxXS51c2VyRGVmaW5lZEVsZW1lbnQudWpzX2hlaWdodCAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICB1c2VyRWxlbWVudE9iamVjdC5nbHVlT2JqZWN0QXJyYXlbY2hpbGRFbGVtZW50SW5kZXhdLnVzZXJEZWZpbmVkRWxlbWVudFsndWpzX3JfaGVpZ2h0J10gPSB1c2VyRWxlbWVudE9iamVjdC5nbHVlT2JqZWN0QXJyYXlbY2hpbGRFbGVtZW50SW5kZXggLSAxXS51c2VyRGVmaW5lZEVsZW1lbnQudWpzX3JfaGVpZ2h0ICsgdXNlckVsZW1lbnRPYmplY3QuZ2x1ZU9iamVjdEFycmF5W2NoaWxkRWxlbWVudEluZGV4IC0gMV0udXNlckRlZmluZWRFbGVtZW50LnVqc19oZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHVzZXJFbGVtZW50T2JqZWN0LmdsdWVPYmplY3RBcnJheVtjaGlsZEVsZW1lbnRJbmRleF0uZ2x1ZU9iamVjdEFycmF5Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIF9fcmVsYXRpdmVIZWlnaHRSZWNydXNpdmUodXNlckVsZW1lbnRPYmplY3QuZ2x1ZU9iamVjdEFycmF5W2NoaWxkRWxlbWVudEluZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YTpcIixKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHVzZXJFbGVtZW50T2JqZWN0KSkpO1xuICAgIH1cbiAgICBcbn0iLCJpbXBvcnQge0VsZW1lbnR9IGZyb20gJy4uL191cmFuaXVtdmlldy9lbGVtZW50JztcbmltcG9ydCB7cm9vdEVsZW1lbnR9IGZyb20gJy4uL19zdXBlckJhc2VFbGVtZW50L3N1cGVyQmFzZUVsZW1lbnQnO1xuaW1wb3J0IHtfX3ZpZXdQb3J0UmVuZGVyfSBmcm9tICcuLi9fdmlld3BvcnRyZW5kZXIvdmlld3BvcnRyZW5kZXInO1xuaW1wb3J0IHtfX3JlY3J1c2l2ZX0gZnJvbSAnLi4vX3JlY3J1c2l2ZS9yZWNydXNpdmUnO1xuaW1wb3J0IHtfX3JlY3J1c2l2ZUluamVjdG9yfSBmcm9tICcuLi9fcmVjcnVzaXZlL3JlY3J1c2l2ZUluamVjdG9yJztcbmltcG9ydCB7cmVuZGVyQnVja2V0fSBmcm9tICcuLi9fZ2xvYmFsL2dsb2JhbHZhcmlhYmxlJztcbmltcG9ydCB7X19lbGVtZW50UmVsYXRpdmVIZWlnaHRDYWxjdWxhdG9yfSBmcm9tICcuLi9fcmVsYXRpdmVoZWlnaHRjYWxjdWxhdG9yL3JlbGF0aXZlaGVpZ2h0Y2FsY3VsYXRvcic7XG5pbXBvcnQge2luaXRUcmlnZ2VySGVpZ2h0LCBfc2V0SW5pdFRyaWdnZXJIZWlnaHQsIHNldEN1cnJlbnRIYXNoVmFsdWUsIGdldEN1cnJlbnRIYXNoVmFsdWUsZ2V0RXZlbnRMaXN0bmVyTWFwfSBmcm9tICcuLi9fZ2xvYmFsL2dsb2JhbHZhcmlhYmxlJztcbmltcG9ydCB7SU5JVF9UUklHR0VSX0hFSUdIVH0gZnJvbSAnLi4vX2dsb2JhbC9nbG9iYWxjb25zdGFudCc7XG5pbXBvcnQge0hhc2hSb3V0ZXN9IGZyb20gJy4uL191anNfY29yZS9fcm91dGVycy9oYXNoUm91dGVzJztcbmltcG9ydCB7ZXZlbnROYW1lc0NvbGxlY3Rpb25PYmplY3R9IGZyb20gJy4uL19nbG9iYWwvZXZlbnROYW1lQ29sbGVjdGlvbic7XG4vKipcbiAqIFxuICogQHBhcmFtIHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudCBlbGVtZW50IHRoYXQgdXNlciBkZWZpbmVkIGFuZCBwYXNzIHRvIHJlbmRlclxuICogQHBhcmFtIHBhcmVudFJlbmRlckVsZW1lbnQgb3B0aW9uYWwgcGFyYW0sIGRlc2NyaWJlIHdoYXQgaXMgdGhlIGVsZW1lbnQgdGhhdCByZW5kZXJcbiAqIGVsZW1lbnQgc2hvdWxkIGJpbmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFJlbmRlcih1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQ6IEVsZW1lbnQsIHBhcmVudFJlbmRlckVsZW1lbnQ/OiBFbGVtZW50LCBpc05lZWRDbGVhclBhcmVudD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgLyoqXG4gICAqIFRPRE8gZ2V0IGRlZmF1bHQgcGFyZW50UmVuZGVyRWxlbWVudElkIGZyb20gY29tbW9uIGNvbmZpZyBmaWxlIG9yIENETihpZiBwb3NzaWFibGUpXG4gICAqL1xuICBsZXQgcGFyZW50UmVuZGVyRWxlbWVudElkOiBzdHJpbmcgPSAncm9vdCc7XG4gIGxldCBwYXJlbnRFbGVtZW50OiBFbGVtZW50ID0gbnVsbDtcbiAgaWYocGFyZW50UmVuZGVyRWxlbWVudCAhPSBudWxsICYmIHBhcmVudFJlbmRlckVsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XG4gICAgaWYocGFyZW50UmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQgIT0gbnVsbCAmJiBcbiAgICAgICAgcGFyZW50UmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQgIT0gdW5kZWZpbmVkICYmIFxuICAgICAgICAgIHBhcmVudFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnVqc19pZCAhPSBudWxsICYmIFxuICAgICAgICAgICAgcGFyZW50UmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQudWpzX2lkICE9IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgIHBhcmVudFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnVqc19pZCAhPT0gXCJcIil7XG4gICAgICBwYXJlbnRSZW5kZXJFbGVtZW50SWQgPSBwYXJlbnRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC51anNfaWQ7XG4gICAgfSBlbHNle1xuICAgICAgY29uc29sZS5sb2coXCJbVUpTIEVSUk9SXTo6IHBhcmVudCBlbGVtZW50IGhhcyBub3QgcHJvcGVyIHVqc19pZCBtYWtlIHN1cmUgdG8gcGFzcyB2YWxpZCBlbGVtZW50XCIpO1xuICAgIH1cbiAgICBwYXJlbnRFbGVtZW50ID0gcGFyZW50UmVuZGVyRWxlbWVudDtcbiAgfSBlbHNlIGlmICgocGFyZW50UmVuZGVyRWxlbWVudCA9PSBudWxsIHx8IHBhcmVudFJlbmRlckVsZW1lbnQgPT0gdW5kZWZpbmVkKSAmJiAoaXNOZWVkQ2xlYXJQYXJlbnQgIT0gdW5kZWZpbmVkICYmIGlzTmVlZENsZWFyUGFyZW50ID09IGZhbHNlKSkge1xuICAgIHJvb3RFbGVtZW50LmdsdWUodXNlckRlZmluZWRSZW5kZXJFbGVtZW50KTtcbiAgICBwYXJlbnRFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XG4gIH0gZWxzZSB7XG4gICAgcm9vdEVsZW1lbnQuZ2x1ZU9iamVjdEFycmF5ID0gW107XG4gICAgcm9vdEVsZW1lbnQuZ2x1ZSh1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQpO1xuICAgIHBhcmVudEVsZW1lbnQgPSByb290RWxlbWVudDtcbiAgfVxuICBsZXQgcGFyZW50RE9NTm9kZUVsZW1lbnQ6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudFJlbmRlckVsZW1lbnRJZCk7XG4gIF9fdmlld1BvcnRSZW5kZXIodXNlckRlZmluZWRSZW5kZXJFbGVtZW50LHBhcmVudERPTU5vZGVFbGVtZW50LHBhcmVudFJlbmRlckVsZW1lbnQpO1xuICBfX2VsZW1lbnRSZWxhdGl2ZUhlaWdodENhbGN1bGF0b3IodXNlckRlZmluZWRSZW5kZXJFbGVtZW50LHBhcmVudFJlbmRlckVsZW1lbnRJZCxwYXJlbnRSZW5kZXJFbGVtZW50KTtcbiAgaWYgKGlzTmVlZENsZWFyUGFyZW50ICE9IG51bGwgJiYgIXVuZGVmaW5lZCAmJiBpc05lZWRDbGVhclBhcmVudCkge1xuICAgIGlmIChwYXJlbnRSZW5kZXJFbGVtZW50ICE9IG51bGwgJiYgcGFyZW50UmVuZGVyRWxlbWVudCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmVudFJlbmRlckVsZW1lbnQuZ2x1ZU9iamVjdEFycmF5ID0gW107XG4gICAgfVxuICAgLy8gX19yZWNydXNpdmVJbmplY3Rvcih1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQscGFyZW50RWxlbWVudC5mbGFnSW5kZXgscGFyZW50RWxlbWVudCk7XG4gICAgLy9wYXJlbnRET01Ob2RlRWxlbWVudC5pbm5lckhUTUwgPSBfX3JlY3J1c2l2ZSh1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQscGFyZW50RWxlbWVudC5mbGFnSW5kZXgscGFyZW50RWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgX19yZWNydXNpdmVJbmplY3Rvcih1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQscGFyZW50RWxlbWVudC5mbGFnSW5kZXgscGFyZW50RWxlbWVudCk7XG4gICAgLy9wYXJlbnRET01Ob2RlRWxlbWVudC5pbm5lckhUTUwgPSBwYXJlbnRET01Ob2RlRWxlbWVudC5pbm5lckhUTUwrX19yZWNydXNpdmUodXNlckRlZmluZWRSZW5kZXJFbGVtZW50LHBhcmVudEVsZW1lbnQuZmxhZ0luZGV4LHBhcmVudEVsZW1lbnQpO1xuICB9XG59XG5cblxuXG4vKipcbiAqIFxuICovXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoZXZlbnQpIHsgIFxuICBsZXQgc3VwcG9ydFBhZ2VPZmZzZXQ6IGFueSA9IHdpbmRvdy5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkO1xuICBsZXQgaXNDU1MxQ29tcGF0OiBib29sZWFuID0gKChkb2N1bWVudC5jb21wYXRNb2RlIHx8IFwiXCIpID09PSBcIkNTUzFDb21wYXRcIik7XG4gIGxldCB4OiBudW1iZXIgPSBzdXBwb3J0UGFnZU9mZnNldCA/IHdpbmRvdy5wYWdlWE9mZnNldCA6IGlzQ1NTMUNvbXBhdCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IDogZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0OyBcbiAgdmFyIHk6IG51bWJlciA9IHN1cHBvcnRQYWdlT2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICBpZigoeStzY3JlZW4uaGVpZ2h0KSA+IGluaXRUcmlnZ2VySGVpZ2h0KSB7XG4gICAgX3NldEluaXRUcmlnZ2VySGVpZ2h0KGluaXRUcmlnZ2VySGVpZ2h0ICsgSU5JVF9UUklHR0VSX0hFSUdIVCk7XG4gICAgcmVuZGVyQnVja2V0LmZvckVhY2goKHZhbHVlICwga2V5KSA9PiB7XG4gICAgICAgIGxldCBidWNrZXRFbGVtZW50ID0ga2V5O1xuICAgICAgICBpZigoYnVja2V0RWxlbWVudC5nbHVlT2JqZWN0QXJyYXkubGVuZ3RoID4gYnVja2V0RWxlbWVudC5mbGFnSW5kZXgpICYmIChnZXRDdXJyZW50SGFzaFZhbHVlKCkgPT0gdmFsdWUpKSB7XG4gICAgICAgICAvLyBsZXQgcGFyZW50X2RpdjogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnVja2V0RWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQudWpzX2lkKTtcbiAgICAgICAgIC8vIGxldCBpbm5lckhUTUw6IGFueSA9IHBhcmVudF9kaXYuaW5uZXJIVE1MO1xuICAgICAgICAgLy8gcGFyZW50X2Rpdi5pbm5lckhUTUwgPWlubmVySFRNTCArIF9fcmVjcnVzaXZlKGJ1Y2tldEVsZW1lbnQsdHJ1ZSxidWNrZXRFbGVtZW50KTtcbiAgICAgICAgIF9fcmVjcnVzaXZlSW5qZWN0b3IoYnVja2V0RWxlbWVudCx0cnVlLGJ1Y2tldEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuXG5cbndpbmRvdy5vbmhhc2hjaGFuZ2UgPSAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGxldCBoYXNoVmFsdWUgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgaWYgKGhhc2hWYWx1ZSA9PSBcIlwiKSB7XG4gICAgSGFzaFJvdXRlcygnLycpO1xuICB9IGVsc2Uge1xuICAgIGxldCByZWcgPSBuZXcgUmVnRXhwKCcjJyk7XG4gICAgaGFzaFZhbHVlID0gaGFzaFZhbHVlLnJlcGxhY2UocmVnLCcnKTtcbiAgICBIYXNoUm91dGVzKGhhc2hWYWx1ZSk7XG4gIH1cbn07XG5cbndpbmRvdy5vbnBvcHN0YXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChoaXN0b3J5LnN0YXRlICYmIGhpc3Rvcnkuc3RhdGUuaWQgPT09ICdob21lcGFnZScpIHtcbiAgICAgIC8vIFJlbmRlciBuZXcgY29udGVudCBmb3IgdGhlIGhvbXBhZ2VcbiAgfVxufTtcblxuLyoqXG4gKiB0aGlzIGZ1bmN0aW9uIGlzIGNhbGwgd2hlbiB1c2VyIG9yIHN5c3RlbSByZWxvYWQgdGhlIHBhZ2VcbiAqIGlmIHVybCBpcyBzaGFyZSBvciBwYXN0ZSBpbiBuZXcgcGxhY2UsIGNvbXBvbmVudCB3aWxsIHJlbmRlclxuICogYWNjb3JkaW5nIHRvIHRoZSByb3V0ZSB0aGF0IHVzZXIgZGVmaW5lZFxuICovXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGxldCBoYXNoVmFsdWUgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgaWYgKGhhc2hWYWx1ZSA9PSBcIlwiKSB7XG4gICAgSGFzaFJvdXRlcygnLycpO1xuICB9IGVsc2Uge1xuICAgIGxldCByZWcgPSBuZXcgUmVnRXhwKCcjJyk7XG4gICAgaGFzaFZhbHVlID0gaGFzaFZhbHVlLnJlcGxhY2UocmVnLCcnKTtcbiAgICBIYXNoUm91dGVzKGhhc2hWYWx1ZSk7XG4gIH1cbn07XG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYTF7XG4gICAgaGFzaChtc2c6c3RyaW5nLCB1dGY4ZW5jb2RlOmJvb2xlYW4pOiBzdHJpbmcge1xuICAgICAgICB1dGY4ZW5jb2RlID0gICh0eXBlb2YgdXRmOGVuY29kZSA9PSAndW5kZWZpbmVkJykgPyB0cnVlIDogdXRmOGVuY29kZTtcbiAgXG4gICAgICAgIC8vIGNvbnZlcnQgc3RyaW5nIHRvIFVURi04LCBhcyBTSEEgb25seSBkZWFscyB3aXRoIGJ5dGUtc3RyZWFtc1xuICAgICAgICBpZiAodXRmOGVuY29kZSkgbXNnID0gdGhpcy5lbmNvZGUobXNnKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnN0YW50cyBbwqc0LjIuMV1cbiAgICAgICAgbGV0IEsgPSBbMHg1YTgyNzk5OSwgMHg2ZWQ5ZWJhMSwgMHg4ZjFiYmNkYywgMHhjYTYyYzFkNl07XG4gICAgICAgIFxuICAgICAgICAvLyBQUkVQUk9DRVNTSU5HIFxuICAgICAgICBcbiAgICAgICAgbXNnICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHg4MCk7ICAvLyBhZGQgdHJhaWxpbmcgJzEnIGJpdCAoKyAwJ3MgcGFkZGluZykgdG8gc3RyaW5nIFvCpzUuMS4xXVxuICAgICAgICBcbiAgICAgICAgLy8gY29udmVydCBzdHJpbmcgbXNnIGludG8gNTEyLWJpdC8xNi1pbnRlZ2VyIGJsb2NrcyBhcnJheXMgb2YgaW50cyBbwqc1LjIuMV1cbiAgICAgICAgbGV0IGwgPSBtc2cubGVuZ3RoLzQgKyAyOyAgLy8gbGVuZ3RoIChpbiAzMi1iaXQgaW50ZWdlcnMpIG9mIG1zZyArIOKAmDHigJkgKyBhcHBlbmRlZCBsZW5ndGhcbiAgICAgICAgbGV0IE4gPSBNYXRoLmNlaWwobC8xNik7ICAgLy8gbnVtYmVyIG9mIDE2LWludGVnZXItYmxvY2tzIHJlcXVpcmVkIHRvIGhvbGQgJ2wnIGludHNcbiAgICAgICAgbGV0IE0gPSBuZXcgQXJyYXkoTik7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8TjsgaSsrKSB7XG4gICAgICAgICAgTVtpXSA9IG5ldyBBcnJheSgxNik7XG4gICAgICAgICAgZm9yIChsZXQgaj0wOyBqPDE2OyBqKyspIHsgIC8vIGVuY29kZSA0IGNoYXJzIHBlciBpbnRlZ2VyLCBiaWctZW5kaWFuIGVuY29kaW5nXG4gICAgICAgICAgICBNW2ldW2pdID0gKG1zZy5jaGFyQ29kZUF0KGkqNjQraio0KTw8MjQpIHwgKG1zZy5jaGFyQ29kZUF0KGkqNjQraio0KzEpPDwxNikgfCBcbiAgICAgICAgICAgICAgKG1zZy5jaGFyQ29kZUF0KGkqNjQraio0KzIpPDw4KSB8IChtc2cuY2hhckNvZGVBdChpKjY0K2oqNCszKSk7XG4gICAgICAgICAgfSAvLyBub3RlIHJ1bm5pbmcgb2ZmIHRoZSBlbmQgb2YgbXNnIGlzIG9rICdjb3MgYml0d2lzZSBvcHMgb24gTmFOIHJldHVybiAwXG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRkIGxlbmd0aCAoaW4gYml0cykgaW50byBmaW5hbCBwYWlyIG9mIDMyLWJpdCBpbnRlZ2VycyAoYmlnLWVuZGlhbikgW8KnNS4xLjFdXG4gICAgICAgIC8vIG5vdGU6IG1vc3Qgc2lnbmlmaWNhbnQgd29yZCB3b3VsZCBiZSAobGVuLTEpKjggPj4+IDMyLCBidXQgc2luY2UgSlMgY29udmVydHNcbiAgICAgICAgLy8gYml0d2lzZS1vcCBhcmdzIHRvIDMyIGJpdHMsIHdlIG5lZWQgdG8gc2ltdWxhdGUgdGhpcyBieSBhcml0aG1ldGljIG9wZXJhdG9yc1xuICAgICAgICBNW04tMV1bMTRdID0gKChtc2cubGVuZ3RoLTEpKjgpIC8gTWF0aC5wb3coMiwgMzIpOyBNW04tMV1bMTRdID0gTWF0aC5mbG9vcihNW04tMV1bMTRdKVxuICAgICAgICBNW04tMV1bMTVdID0gKChtc2cubGVuZ3RoLTEpKjgpICYgMHhmZmZmZmZmZjtcbiAgICAgICAgXG4gICAgICAgIC8vIHNldCBpbml0aWFsIGhhc2ggdmFsdWUgW8KnNS4zLjFdXG4gICAgICAgIGxldCBIMCA9IDB4Njc0NTIzMDE7XG4gICAgICAgIGxldCBIMSA9IDB4ZWZjZGFiODk7XG4gICAgICAgIGxldCBIMiA9IDB4OThiYWRjZmU7XG4gICAgICAgIGxldCBIMyA9IDB4MTAzMjU0NzY7XG4gICAgICAgIGxldCBINCA9IDB4YzNkMmUxZjA7XG4gICAgICAgIFxuICAgICAgICAvLyBIQVNIIENPTVBVVEFUSU9OIFvCpzYuMS4yXVxuICAgICAgICBcbiAgICAgICAgbGV0IFcgPSBuZXcgQXJyYXkoODApOyBsZXQgYSwgYiwgYywgZCwgZTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPE47IGkrKykge1xuICAgICAgICBcbiAgICAgICAgICAvLyAxIC0gcHJlcGFyZSBtZXNzYWdlIHNjaGVkdWxlICdXJ1xuICAgICAgICAgIGZvciAobGV0IHQ9MDsgIHQ8MTY7IHQrKykgV1t0XSA9IE1baV1bdF07XG4gICAgICAgICAgZm9yIChsZXQgdD0xNjsgdDw4MDsgdCsrKSBXW3RdID0gdGhpcy5ST1RMKFdbdC0zXSBeIFdbdC04XSBeIFdbdC0xNF0gXiBXW3QtMTZdLCAxKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyAyIC0gaW5pdGlhbGlzZSBmaXZlIHdvcmtpbmcgdmFyaWFibGVzIGEsIGIsIGMsIGQsIGUgd2l0aCBwcmV2aW91cyBoYXNoIHZhbHVlXG4gICAgICAgICAgYSA9IEgwOyBiID0gSDE7IGMgPSBIMjsgZCA9IEgzOyBlID0gSDQ7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gMyAtIG1haW4gbG9vcFxuICAgICAgICAgIGZvciAobGV0IHQ9MDsgdDw4MDsgdCsrKSB7XG4gICAgICAgICAgICBsZXQgcyA9IE1hdGguZmxvb3IodC8yMCk7IC8vIHNlcSBmb3IgYmxvY2tzIG9mICdmJyBmdW5jdGlvbnMgYW5kICdLJyBjb25zdGFudHNcbiAgICAgICAgICAgIGxldCBUOmFueSA9ICh0aGlzLlJPVEwoYSw1KSArIHRoaXMuZihzLGIsYyxkKSArIGUgKyBLW3NdICsgV1t0XSkgJiAweGZmZmZmZmZmO1xuICAgICAgICAgICAgZSA9IGQ7XG4gICAgICAgICAgICBkID0gYztcbiAgICAgICAgICAgIGMgPSB0aGlzLlJPVEwoYiwgMzApO1xuICAgICAgICAgICAgYiA9IGE7XG4gICAgICAgICAgICBhID0gVDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gNCAtIGNvbXB1dGUgdGhlIG5ldyBpbnRlcm1lZGlhdGUgaGFzaCB2YWx1ZVxuICAgICAgICAgIEgwID0gKEgwK2EpICYgMHhmZmZmZmZmZjsgIC8vIG5vdGUgJ2FkZGl0aW9uIG1vZHVsbyAyXjMyJ1xuICAgICAgICAgIEgxID0gKEgxK2IpICYgMHhmZmZmZmZmZjsgXG4gICAgICAgICAgSDIgPSAoSDIrYykgJiAweGZmZmZmZmZmOyBcbiAgICAgICAgICBIMyA9IChIMytkKSAmIDB4ZmZmZmZmZmY7IFxuICAgICAgICAgIEg0ID0gKEg0K2UpICYgMHhmZmZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLnRvSGV4U3RyKEgwKSArIHRoaXMudG9IZXhTdHIoSDEpICsgXG4gICAgICAgICAgdGhpcy50b0hleFN0cihIMikgKyB0aGlzLnRvSGV4U3RyKEgzKSArIHRoaXMudG9IZXhTdHIoSDQpO1xuICAgIH1cblxuICAgIFJPVEwoeDphbnksIG46YW55KTogYW55IHtcbiAgICAgICAgcmV0dXJuICh4PDxuKSB8ICh4Pj4+KDMyLW4pKTtcbiAgICB9XG5cbiAgICBmKHM6YW55LCB4OmFueSwgeTphbnksIHo6YW55KTogYW55IHtcbiAgICAgICAgc3dpdGNoIChzKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiAoeCAmIHkpIF4gKH54ICYgeik7ICAgICAgICAgICAvLyBDaCgpXG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiB4IF4geSBeIHo7ICAgICAgICAgICAgICAgICAgICAvLyBQYXJpdHkoKVxuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gKHggJiB5KSBeICh4ICYgeikgXiAoeSAmIHopOyAgLy8gTWFqKClcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHggXiB5IF4gejsgICAgICAgICAgICAgICAgICAgIC8vIFBhcml0eSgpXG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9IZXhTdHIobjphbnkpOiBhbnkge1xuICAgICAgICBsZXQgcz1cIlwiLCB2O1xuICAgICAgICBmb3IgKGxldCBpPTc7IGk+PTA7IGktLSkgeyB2ID0gKG4+Pj4oaSo0KSkgJiAweGY7IHMgKz0gdi50b1N0cmluZygxNik7IH1cbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuXG4gICAgZW5jb2RlKHN0clVuaTpzdHJpbmcpOnN0cmluZyB7XG4gICAgICAgIC8vIHVzZSByZWd1bGFyIGV4cHJlc3Npb25zICYgU3RyaW5nLnJlcGxhY2UgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIGJldHRlciBlZmZpY2llbmN5IFxuICAgICAgICAvLyB0aGFuIHByb2NlZHVyYWwgYXBwcm9hY2hlc1xuICAgICAgICBsZXQgc3RyVXRmID0gc3RyVW5pLnRvU3RyaW5nKCkucmVwbGFjZShcbiAgICAgICAgICAgIC9bXFx1MDA4MC1cXHUwN2ZmXS9nLCAgLy8gVSswMDgwIC0gVSswN0ZGID0+IDIgYnl0ZXMgMTEweXl5eXksIDEwenp6enp6XG4gICAgICAgICAgICBmdW5jdGlvbihjOmFueSkgeyBcbiAgICAgICAgICAgIGxldCBjYyA9IGMuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4YzAgfCBjYz4+NiwgMHg4MCB8IGNjJjB4M2YpOyB9XG4gICAgICAgICk7XG4gICAgICAgIHN0clV0ZiA9IHN0clV0Zi50b1N0cmluZygpLnJlcGxhY2UoXG4gICAgICAgICAgICAvW1xcdTA4MDAtXFx1ZmZmZl0vZywgIC8vIFUrMDgwMCAtIFUrRkZGRiA9PiAzIGJ5dGVzIDExMTB4eHh4LCAxMHl5eXl5eSwgMTB6enp6enpcbiAgICAgICAgICAgIGZ1bmN0aW9uKGM6YW55KSB7IFxuICAgICAgICAgICAgbGV0IGNjID0gYy5jaGFyQ29kZUF0KDApOyBcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZTAgfCBjYz4+MTIsIDB4ODAgfCBjYz4+NiYweDNGLCAweDgwIHwgY2MmMHgzZik7IH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHN0clV0ZjtcbiAgICB9XG5cbiAgICBkZWNvZGUoc3RyVXRmOnN0cmluZyk6c3RyaW5nIHtcbiAgICAgICAgIC8vIG5vdGU6IGRlY29kZSAzLWJ5dGUgY2hhcnMgZmlyc3QgYXMgZGVjb2RlZCAyLWJ5dGUgc3RyaW5ncyBjb3VsZCBhcHBlYXIgdG8gYmUgMy1ieXRlIGNoYXIhXG4gICAgICAgIGxldCBzdHJVbmkgPSBzdHJVdGYudG9TdHJpbmcoKS5yZXBsYWNlKFxuICAgICAgICAgICAgL1tcXHUwMGUwLVxcdTAwZWZdW1xcdTAwODAtXFx1MDBiZl1bXFx1MDA4MC1cXHUwMGJmXS9nLCAgLy8gMy1ieXRlIGNoYXJzXG4gICAgICAgICAgICBmdW5jdGlvbihjOmFueSkgeyAgLy8gKG5vdGUgcGFyZW50aGVzZXMgZm9yIHByZWNlbmNlKVxuICAgICAgICAgICAgbGV0IGNjID0gKChjLmNoYXJDb2RlQXQoMCkmMHgwZik8PDEyKSB8ICgoYy5jaGFyQ29kZUF0KDEpJjB4M2YpPDw2KSB8ICggYy5jaGFyQ29kZUF0KDIpJjB4M2YpOyBcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNjKTsgfVxuICAgICAgICApO1xuICAgICAgICBzdHJVbmkgPSBzdHJVbmkudG9TdHJpbmcoKS5yZXBsYWNlKFxuICAgICAgICAgICAgL1tcXHUwMGMwLVxcdTAwZGZdW1xcdTAwODAtXFx1MDBiZl0vZywgICAgICAgICAgICAgICAgIC8vIDItYnl0ZSBjaGFyc1xuICAgICAgICAgICAgZnVuY3Rpb24oYzphbnkpIHsgIC8vIChub3RlIHBhcmVudGhlc2VzIGZvciBwcmVjZW5jZSlcbiAgICAgICAgICAgIGxldCBjYyA9IChjLmNoYXJDb2RlQXQoMCkmMHgxZik8PDYgfCBjLmNoYXJDb2RlQXQoMSkmMHgzZjtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNjKTsgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gc3RyVW5pO1xuICAgIH1cbn0gXG4iLCIvKipcbiAqIFxuICogQHBhcmFtIGF0dHJpYnV0ZVZhbHVlIFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhcnJhbmdlSGVpZ2h0QW5kV2lkdGgoYXR0cmlidXRlVmFsdWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgbGV0IG1hbmlwdWxhdGVXaXRoUGl4ZWxWYWx1ZTogc3RyaW5nID0gc3RyaW5nVmFsdWVNYW5pcHVsYXRlcldpdGhQaXhlbChhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgaWYobWFuaXB1bGF0ZVdpdGhQaXhlbFZhbHVlICE9IG51bGwpIHJldHVybiArbWFuaXB1bGF0ZVdpdGhQaXhlbFZhbHVlO1xuICAgIGxldCBtYW5pcHVsYXRlV2l0aFByZWNlbnRhZ2VWYWx1ZTogc3RyaW5nID0gc3RyaW5nVmFsdWVNYW5pcHVsYXRlcldpdGhQcmVjZW50YWdlKGF0dHJpYnV0ZVZhbHVlKTtcbiAgICBpZihtYW5pcHVsYXRlV2l0aFByZWNlbnRhZ2VWYWx1ZSAhPSBudWxsKSByZXR1cm4gK21hbmlwdWxhdGVXaXRoUHJlY2VudGFnZVZhbHVlO1xufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIGF0dHJpYnV0ZVZhbHVlIFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVmFsdWVNYW5pcHVsYXRlcldpdGhQaXhlbChhdHRyaWJ1dGVWYWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWUuc3BsaXQoXCJweFwiKVswXTtcbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSBhdHRyaWJ1dGVWYWx1ZSBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1ZhbHVlTWFuaXB1bGF0ZXJXaXRoUHJlY2VudGFnZShhdHRyaWJ1dGVWYWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWUuc3BsaXQoXCIlXCIpWzBdO1xufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIGF0dHJpYnV0ZVZhbHVlIFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFcXVhbFRvQXV0byhhdHRyaWJ1dGVWYWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYoYXR0cmlidXRlVmFsdWUgPT0gXCJhdXRvXCIpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbn0iLCJpbXBvcnQge0VsZW1lbnR9IGZyb20gJy4uL191cmFuaXVtdmlldy9lbGVtZW50JztcblxuZXhwb3J0IGxldCByb290RWxlbWVudDogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAnZWxlbWVudCc6ICdkaXYnXG59LCB0aGlzLCB0cnVlKTsiLCJleHBvcnQgY2xhc3MgSW5zdGFuY2VMb2FkZXIge1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZTxUPihjbGFzc0luc3RhbmNlOiBhbnksLi4uYXJnczogYW55W10pIDogVCB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IE9iamVjdC5jcmVhdGUoY2xhc3NJbnN0YW5jZSkucHJvdG90eXBlLmNvbnN0cnVjdG9yO1xuICAgICAgICBpbnN0YW5jZS5jb25zdHJ1Y3Rvci5hcHBseShjbGFzc0luc3RhbmNlLCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIDxUPiBpbnN0YW5jZTtcbiAgICB9XG59IiwiaW1wb3J0IHtfc2V0Um91dGVyc30gZnJvbSAnLi4vLi4vX2dsb2JhbC9nbG9iYWx2YXJpYWJsZSc7XG5pbXBvcnQge0hhc2hSb3V0ZXN9IGZyb20gJy4uL19yb3V0ZXJzL2hhc2hSb3V0ZXMnO1xuZXhwb3J0IGNsYXNzIFJvdXRlcnMge1xuICAgIGNvbnN0cnVjdG9yKHVzZXJEZWZpbmVSb3V0ZXJzOiBhbnkpIHtcbiAgICAgICAgaWYgKHVzZXJEZWZpbmVSb3V0ZXJzID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbVUpTIEVSUk9SXTo6IE5vIFJvdXRlcyBkZWZpbmVkXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHVzZXJEZWZpbmVSb3V0ZXJzID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1VKUyBFUlJPUl06OiBObyBSb3V0ZXMgZGVmaW5lZFwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyRGVmaW5lUm91dGVycyA9PSAnJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbVUpTIEVSUk9SXTo6IE5vIFJvdXRlcyBkZWZpbmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIF9zZXRSb3V0ZXJzKHVzZXJEZWZpbmVSb3V0ZXJzKTsgICBcbiAgICB9XG59XG5cbiIsImltcG9ydCB7X2dldFJvdXRlcnN9IGZyb20gJy4uLy4uL19nbG9iYWwvZ2xvYmFsdmFyaWFibGUnO1xuZXhwb3J0IGZ1bmN0aW9uIEhhc2hSb3V0ZXMoaGFzaDogYW55KSB7XG4gICAgICAgIGlmIChoYXNoID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbVUpTIEVSUk9SXTo6IE5vIFJvdXRlcyBkZWZpbmVkXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhc2ggPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbVUpTIEVSUk9SXTo6IE5vIFJvdXRlcyBkZWZpbmVkXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhc2ggPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1VKUyBFUlJPUl06OiBObyBSb3V0ZXMgZGVmaW5lZFwiKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHIgPSBPYmplY3QuY3JlYXRlKF9nZXRSb3V0ZXJzKClbaGFzaF0pLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIG5ldyByKCkuZGVjb3JhdGVIZWFkZXIoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgfSAgIFxufSIsImltcG9ydCB7cm91dGVycywgX3NldEluaXRUcmlnZ2VySGVpZ2h0fSBmcm9tICcuLi8uLi9fZ2xvYmFsL2dsb2JhbHZhcmlhYmxlJztcbmltcG9ydCB7SW5zdGFuY2VMb2FkZXJ9IGZyb20gJy4uL0luc3RhbmNlTG9hZGVyJztcbmltcG9ydCB7TmFtZWRUaGluZ30gZnJvbSAnLi4vTmFtZWRUaGluZyc7XG5leHBvcnQgY2xhc3Mgcm91dGUge1xuXG4gICAgcHJpdmF0ZSBwYWdlQ2xhc3NOYW1lOiBhbnkgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3Iocm91dGVQYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZGF0ZShyb3V0ZVBhdGgpICYmIHRoaXMuaXNSb3V0ZUV4aXN0KHJvdXRlUGF0aCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlVVJMKHJvdXRlUGF0aCk7XG4gICAgICAgICAgICB0aGlzLnJ1bkNsYXNzSW5zdGFjZSh0aGlzLnBhZ2VDbGFzc05hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbVUpTIEVSUk9SXTo6IHJvdXRlIHBhdGggaXMgbm90IHZhbGlkXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1ZhbGlkYXRlKHJvdXRlUGF0aDogc3RyaW5nKTogYm9vbGVhbntcbiAgICAgICAgaWYgKHJvdXRlUGF0aCA9PSB1bmRlZmluZWQgfHwgcm91dGVQYXRoID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHJvdXRlUGF0aCA9PSAnJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzUm91dGVFeGlzdChyb3V0ZVBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQga2V5VmFsdWU6IGFueSA9IHJvdXRlcnNbcm91dGVQYXRoXTtcbiAgICAgICAgaWYgKGtleVZhbHVlID09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoa2V5VmFsdWUgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLnBhZ2VDbGFzc05hbWUgPSBrZXlWYWx1ZTsgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRPRE8gZ2l2ZSB1c2VyIGZvciBjaGFuZ2UgdXJsIGFzIHVzZXIgbmVlZFxuICAgICAqIGFzIGEgaGFzaCB1cmwgb3IgZnVsbCB1cmwgY2hhbmdlXG4gICAgICovXG5cbiAgICBwcml2YXRlIGNoYW5nZVVSTChyb3V0ZVBhdGg6IHN0cmluZywgZGF0YU9iamVjdD86IGFueSk6IHZvaWQge1xuICAgICAgICByb3V0ZVBhdGggPSAgdGhpcy5hZGRIYXNoVG9QYXRoKHJvdXRlUGF0aCk7XG4gICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgcm91dGVQYXRoKTtcbiAgICAgICAgX3NldEluaXRUcmlnZ2VySGVpZ2h0KDc2OCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRIYXNoVG9QYXRoKHJvdXRlUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICBsZXQgaGFzaFVybCA9IHVybCArIFwiI1wiK3JvdXRlUGF0aDtcbiAgICAgICAgcmV0dXJuIGhhc2hVcmw7IFxuICAgIH1cblxuICAgIHByaXZhdGUgcnVuQ2xhc3NJbnN0YWNlKGNsYXNzSW5zdGFuY2U6IGFueSkge1xuICAgICAgICAgbGV0IGNsYXNzT2JqZWN0OiBhbnkgPSBJbnN0YW5jZUxvYWRlci5nZXRJbnN0YW5jZTxOYW1lZFRoaW5nPihjbGFzc0luc3RhbmNlKTtcbiAgICAgICAgIG5ldyBjbGFzc09iamVjdCgpLmRlY29yYXRlSGVhZGVyKCk7ICAgICAvL1RPRE8gY2hhbmdlIGNvbnN0cnVjdGVyIGNhbGwgZnVuY3Rpb24gaW50byBuZXcgZnVuY3Rpb24gICBcbiAgICB9XG4gICAgXG59XG5cbiIsIi8qKlxuICogdGhpcyB2YXJpYWJsZSB1c2UgZm9yIGdldCBzdHlsZXMgYXJlIGxvYWRlZCBwcmV2aW9zbHkgb3Igbm90XG4gKi9cbmV4cG9ydCBsZXQgaXNTdHlsZUxvYWQ6IGJvb2xlYW4gPSBmYWxzZTtcbi8qKlxuICogY3NzU3R5bGVDbGFzc0pzb24gdmFyaWFibGUgaG9sZCBhbGwgdGhlIGNzcyBydWxlcyBhcyBqc29uIG9iamVjdFxuICogaWYgaXRzIGVtcHR5IGl0IG1lYW4gaW5kZXggcGFnZSBpcyBub3QgbG9hZCBjc3MgXG4gKi9cbmV4cG9ydCBsZXQgY3NzU3R5bGVDbGFzc0pzb246IGFueSA9IHt9O1xuLyoqXG4gKiBnZXQgdGhlIGFsbCBjc3Mgc3R5bGUgdGhhdCB1c2VyIGxhb2QgZnJvbSBIVE1MIGluZGV4IHBhZ2VcbiAqIHRoaXMgbWV0aG9kcyBvbmx5IGNhbGwgb25lIHRpbWUsIGxvYWRpbmcgYWxsIGNzcyBpbnRvIGphdmFzY2lpcHQgdmFyaWFibGUgaXMgZWZmZWNpZW50XG4gKiBtb3JlIHRoYW4gaXQgbG9hZCBmcm9tIGRvY3VtZW50IG9iamVjdCBpbiBuZWVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfVUpTc3R5bGVzaGVldExpYigpOiB2b2lkIHtcbiAgICBpc1N0eWxlTG9hZCA9IHRydWU7XG4gICAgbGV0IGNzc3N0eWxlc2hlZXQ6IFN0eWxlU2hlZXRMaXN0ID0gIGRvY3VtZW50LnN0eWxlU2hlZXRzO1xuICAgIGZvcihsZXQgY3NzU3R5bGVTaGVldEluZGV4ID0gMDsgY3NzU3R5bGVTaGVldEluZGV4IDwgY3Nzc3R5bGVzaGVldC5sZW5ndGg7IGNzc1N0eWxlU2hlZXRJbmRleCsrKSB7XG4gICAgICAgIGdldFN0eWxlU2hlZXRSdWxlcygoY3Nzc3R5bGVzaGVldFtjc3NTdHlsZVNoZWV0SW5kZXhdIGFzIENTU1N0eWxlU2hlZXQpLnJ1bGVzKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuLyoqXG4gKiBcbiAqIEBwYXJhbSBzdHlsZVNoZWV0cnVsZXMgYWxsIHN0eWxlc2hlZXRzIHRoYXQgdXNlciBsb2FkIGZyb20gaW5kZXguaHRtbCBmaWxlXG4gKi9cbmZ1bmN0aW9uIGdldFN0eWxlU2hlZXRSdWxlcyhzdHlsZVNoZWV0cnVsZXM6IGFueSk6IHZvaWQge1xuICAgIGZvcihsZXQgc3R5bGVTaGVldFJ1bGVzSW5kZXggPSAwOyBzdHlsZVNoZWV0UnVsZXNJbmRleCA8IHN0eWxlU2hlZXRydWxlcy5sZW5ndGg7IHN0eWxlU2hlZXRSdWxlc0luZGV4KyspIHtcbiAgICAgICAgYXBwZW5kU3R5bGVJbnRvY3NzU3R5bGVDbGFzc0pzb24oc3R5bGVTaGVldHJ1bGVzW3N0eWxlU2hlZXRSdWxlc0luZGV4XSBhcyBDU1NTdHlsZVJ1bGUpO1xuICAgIH1cbiAgICByZXR1cm47XG59XG4vKipcbiAqIFxuICogQHBhcmFtIHN0eWxlU2hlZXRSdWxlIGFsbCBydWxlcyBpbiBvbmUgc2luZ2xlIHN0eWxlc2hlZXQgcGFnZVxuICovXG5mdW5jdGlvbiBhcHBlbmRTdHlsZUludG9jc3NTdHlsZUNsYXNzSnNvbihzdHlsZVNoZWV0UnVsZTogQ1NTU3R5bGVSdWxlKTogdm9pZCB7IFxuICAgIGNzc1N0eWxlQ2xhc3NKc29uW3N0eWxlU2hlZXRSdWxlLnNlbGVjdG9yVGV4dC5yZXBsYWNlKCcuJywnJyldID0gc3R5bGVTaGVldFJ1bGUuc3R5bGU7XG4gICAgcmV0dXJuO1xufSIsImltcG9ydCBTaGExIGZyb20gJy4uL19zaGExL3NoYTEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdXBlckVsZW1lbnQge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGVsZW1lbnRPYmplY3Qgb2JqZWN0IG5lZWQgdG8gY2FsY3VsYXRlIHNoYTEgaGFzaFxuICAgICAqL1xuICAgIHVqc1NoYTEoZWxlbWVudE9iamVjdDogYW55KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWpzSWRjcmVhdGVyKGVsZW1lbnRPYmplY3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNyZWF0ZSBhbiBvbmUgc3RyaW5nIGJpbmQgYWxsIGF0dHJpYnV0ZSBpbnRvIG9uZSBzdHJpbmdcbiAgICAgKiBwYXNzIHRoZSBzdHJpbmcgaW50byBzaGExIGNsYXNzIGZvciBjYWxjdWxhdGUgdW5pcXVlIHNoYTEgaGFzaFxuICAgICAqIEBwYXJhbSBlbGVtZW50T2JqZWN0IG9iamVjdCBuZWVkIHRvIGNhbGN1bGF0ZSBzaGExIGhhc2hcbiAgICAgKi9cbiAgICB1anNJZGNyZWF0ZXIoZWxlbWVudE9iamVjdDogYW55KSB7XG4gICAgICAgIHZhciBrZXlzX2FycmF5cyA9ICg8YW55Pk9iamVjdCkuZW50cmllcyhlbGVtZW50T2JqZWN0KTtcbiAgICAgICAgdmFyIGdsdWVfc3RyaW5nO1xuICAgICAgICBmb3IodmFyIGVfaW5kZXggPSAwO2VfaW5kZXggPCBrZXlzX2FycmF5cy5sZW5ndGg7ZV9pbmRleCsrKXtcbiAgICAgICAgICAgaWYoa2V5c19hcnJheXNbZV9pbmRleF1bMV0gPT0gdW5kZWZpbmVkIHx8IGtleXNfYXJyYXlzW2VfaW5kZXhdWzFdID09IG51bGwpIGNvbnRpbnVlOyAvL2F2b2lkIHVubmVjY2VzZXJ5IGF0dHJpYnV0ZXMgZnJvbSBpZFxuICAgICAgICAgICBpZihrZXlzX2FycmF5c1tlX2luZGV4XVswXSA9PSBcImlkXCIpICAgY29udGludWU7XG4gICAgICAgICAgIGlmKGtleXNfYXJyYXlzW2VfaW5kZXhdWzBdID09IFwiYmluZFwiKSBjb250aW51ZTtcbiAgICAgICAgICAgaWYoZ2x1ZV9zdHJpbmcgPT0gbnVsbCB8fCBnbHVlX3N0cmluZyA9PSB1bmRlZmluZWQpIHsgZ2x1ZV9zdHJpbmcgPSBrZXlzX2FycmF5c1tlX2luZGV4XVsxXTsgY29udGludWU7fVxuICAgICAgICAgICAgICAgZ2x1ZV9zdHJpbmcgPSBnbHVlX3N0cmluZytrZXlzX2FycmF5c1tlX2luZGV4XVsxXTsgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXcgU2hhMSgpLmhhc2goZ2x1ZV9zdHJpbmcsdHJ1ZSk7XG4gICAgfVxuXG59IiwiaW1wb3J0IFN1cGVyRWxlbWVudCBmcm9tICcuLi9fdXJhbml1bXZpZXcvU3VwZXJFbGVtZW50JztcbmltcG9ydCB7ZXZlbnROYW1lc0NvbGxlY3Rpb25PYmplY3R9IGZyb20gJy4uL19nbG9iYWwvZXZlbnROYW1lQ29sbGVjdGlvbic7XG5pbXBvcnQgRWxlbWVudEludGVyZmFjZSBmcm9tICcuLi9fdXJhbml1bXZpZXcvRWxlbWVudEludGVyZmFjZSc7XG5pbXBvcnQge19VSlNzdHlsZXNoZWV0TGliLCBpc1N0eWxlTG9hZCxjc3NTdHlsZUNsYXNzSnNvbn0gZnJvbSAnLi4vX3Vqc3N0eWxlc2hlZXQvdWpzc3R5bGVzaGVldCc7XG5pbXBvcnQge19zZXRFbGVtZW50Q29sbGVjdG9ucywgc2V0RXZlbnRMaXN0bmVyTWFwfSBmcm9tICcuLi9fZ2xvYmFsL2dsb2JhbHZhcmlhYmxlJztcblxuZXhwb3J0IGNsYXNzIEVsZW1lbnQgZXh0ZW5kcyBTdXBlckVsZW1lbnQgaW1wbGVtZW50cyBFbGVtZW50SW50ZXJmYWNlPHN0cmluZz4gIHtcblxuICAgIHB1YmxpYyBlbGVtZW50SUQ6IHN0cmluZztcbiAgICBwdWJsaWMgdGhpc1Njb3BlOiBhbnk7XG4gICAgXG4gICAgcHVibGljIHVzZXJEZWZpbmVkRWxlbWVudDogYW55O1xuICAgIHB1YmxpYyBnbHVlT2JqZWN0QXJyYXk6IGFueSA9IFtdO1xuICAgIHB1YmxpYyBmbGFnSW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGZsYWdJbmRleE1hcEFycmF5OiBhbnkgPSBbXTtcbiAgICBwdWJsaWMgZXZlbnREYXRhT2JqZWN0Q29sbGVjdGlvbjogYW55ID0gW107XG5cblxuICAgIC8qKlxuICAgICAqIGdldCB1c2VyIGRlZmluZWQgSFRNTCBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIHVzZXJEZWZpbmVkRWxlbWVudCB1c2VyIGRlZmluZWQgSFRNTCBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodXNlckRlZmluZWRFbGVtZW50OmFueSwgdGhpc1Njb3BlOiBhbnksIGlzU3VwZXJCYXNlPzogYm9vbGVhbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRoaXNTY29wZSA9IHRoaXNTY29wZTtcbiAgICAgICAgdGhpcy5nZXRDc3NDbGFzc0RlZmluZUhlaWdodCh1c2VyRGVmaW5lZEVsZW1lbnQpO1xuICAgICAgICB0aGlzLnNldEROQSh1c2VyRGVmaW5lZEVsZW1lbnQpO1xuICAgICAgICBpZiAoaXNTdXBlckJhc2UgIT0gdW5kZWZpbmVkICYmIGlzU3VwZXJCYXNlKSB7XG4gICAgICAgICAgICB1c2VyRGVmaW5lZEVsZW1lbnRbJ3Vqc19pZCddID0gJ3Jvb3QnO1xuICAgICAgICAgICAgdXNlckRlZmluZWRFbGVtZW50WydpZCddID0gJ3Jvb3QnOyBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2hhMUFzSWQodXNlckRlZmluZWRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJpbmRFdmVudExpc3RlbmVyKHVzZXJEZWZpbmVkRWxlbWVudCwgdGhpc1Njb3BlKTtcbiAgICAgICAgdGhpcy5pbml0QXR0cmlidXRlKHVzZXJEZWZpbmVkRWxlbWVudCk7XG4gICAgICAgIHRoaXMucGFzc0VsZW1lbnRUb0NvbGxlY3Rpb24odXNlckRlZmluZWRFbGVtZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwYXNzIHVzZXIgZGVmaW5lZCBlbGVtZW50IGF0dHJpYnV0ZSBpbnRvIG9iamVjdFxuICAgICAqIEBwYXJhbSB1c2VyRGVmaW5lZEVsZW1lbnQgdXNlciBkZWZpbmVkIEhUTUwgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGluaXRBdHRyaWJ1dGUodXNlckRlZmluZWRFbGVtZW50OmFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnVzZXJEZWZpbmVkRWxlbWVudCA9IHVzZXJEZWZpbmVkRWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdXNlckRlZmluZWRFbGVtZW50IHVzZXIgZGVmaW5lZCBIVE1MIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBzZXRETkEodXNlckRlZmluZWRFbGVtZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdXNlckRlZmluZWRFbGVtZW50Wyd1anNfZG5hJ10gPSB0aGlzLnVqc1NoYTEodXNlckRlZmluZWRFbGVtZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzZXQgc2hhMSBpZCB0byBlbGVtZW50IGlkXG4gICAgICogQHBhcmFtIHVzZXJEZWZpbmVkRWxlbWVudCB1c2VyIGRlZmluZWQgSFRNTCBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgc2V0U2hhMUFzSWQodXNlckRlZmluZWRFbGVtZW50OmFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnRJRCA9IHRoaXMudWpzU2hhMSh1c2VyRGVmaW5lZEVsZW1lbnQpO1xuICAgICAgICB1c2VyRGVmaW5lZEVsZW1lbnRbJ3Vqc19pZCddID0gdGhpcy5lbGVtZW50SUQ7XG4gICAgICAgIHJldHVybiB1c2VyRGVmaW5lZEVsZW1lbnQ7XG4gICAgfVxuICAgIFxuICAgIGJpbmRFdmVudExpc3RlbmVyKHVzZXJEZWZpbmVkRWxlbWVudDogYW55LCB0aGlzU2NvcGU6IGFueSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogY3JlYXRlIG5ldyBvYmplY3Qgd2hlbiB1c2VyIGdsdWUgdXNlci1kZWZpbmVkLWVsZW1lbnQgdG8gcGFyZW50XG4gICAgICAgICAqICBUT0RPIG5ldyBsb2dpYyBhZGQgZm9yIHNldCBldmVudCBhY3Rpb24gdG8gZG9tXG4gICAgICAgICAqIHNvIG5vIG5lZWQgdG8gZ2V0IGV2ZW50IGFjdGlvbiBzdGFyZGVkIG5hbWUgZnJvbSBhcnJheVxuICAgICAgICAgKiByZW1vdmUgYXJyYXkgc2VhcmNoIGFuZCBhZGQgdXNlciBkZWZpbmVkIGV2ZW50IG5hbWVcbiAgICAgICAgICovXG4gICAgICAgIGxldCBldmVudE5hbWVzS2V5Q29sbGVjdGlvbiA9IE9iamVjdC5rZXlzKGV2ZW50TmFtZXNDb2xsZWN0aW9uT2JqZWN0KTtcbiAgICAgICAgZm9yKGxldCBuYW1lS2V5IG9mIGV2ZW50TmFtZXNLZXlDb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICBsZXQgZXZlbnROYW1lID0gdXNlckRlZmluZWRFbGVtZW50W25hbWVLZXldO1xuICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PSB1bmRlZmluZWQgfHwgZXZlbnROYW1lID09IG51bGwgfHwgZXZlbnROYW1lID09ICcnKSBjb250aW51ZTtcbiAgICAgICAgICAgIGxldCBkYXRhT2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTpldmVudE5hbWUsXG4gICAgICAgICAgICAgICAgYWN0aW9uTmFtZTpldmVudE5hbWVzQ29sbGVjdGlvbk9iamVjdFtuYW1lS2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ldmVudERhdGFPYmplY3RDb2xsZWN0aW9uLnB1c2goT2JqZWN0LmNyZWF0ZShkYXRhT2JqZWN0KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnbHVlIG1ldGhvZCBmb3IgYmluZCB0aGUgY2hpbGQgZWxlbWVudCBpbnRvIHRoaXMgb2JqZWN0XG4gICAgICogQHBhcmFtIGNoaWxkVXNlckRlZmluZWRFbGVtZW50IHVzZXIgZGVmaW5lZCBIVE1MIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBnbHVlKGNoaWxkVXNlckRlZmluZWRFbGVtZW50VGVtcDpFbGVtZW50KTogdm9pZHtcbiAgICAgICBsZXQgY2hpbGRVc2VyRGVmaW5lZEVsZW1lbnQgPSBPYmplY3QuY3JlYXRlKGNoaWxkVXNlckRlZmluZWRFbGVtZW50VGVtcCk7XG4gICAgICAgaWYoY2hpbGRVc2VyRGVmaW5lZEVsZW1lbnQgPT0gbnVsbCB8fCBjaGlsZFVzZXJEZWZpbmVkRWxlbWVudCA9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAvKipcbiAgICAgICAgICAgICogY2hpbGQgb2JqZWN0IGlzIG51bGwgb3IgdW5kZWZpbmVkIHNob3cgdGhlIGNvbnNvbGUgZXJyb3JcbiAgICAgICAgICAgICovXG4gICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1VKUyBFUlJPUl06OiBjaGlsZCBlbGVtZW50IHRoYXQgcGFzcyBpbiBnbHVlIG1ldGhvZCBpcyBOVUxMIG9yIFVOREVGSU5FRFwiKTtcbiAgICAgICAgICAgcmV0dXJuO1xuICAgICAgIH1cbiAgICAgICBjaGlsZFVzZXJEZWZpbmVkRWxlbWVudC5mbGFnSW5kZXhNYXBBcnJheS5wdXNoKHtlbGVtZW50SUQ6MH0pO1xuICAgICAgIHRoaXMuZ2x1ZU9iamVjdEFycmF5LnB1c2goY2hpbGRVc2VyRGVmaW5lZEVsZW1lbnQuX19wcm90b19fKTsgLy9UT0RPIHJlcGxhY2UgX19wcm90b19fIChkZXByZWNhdGVkKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB1c2VyRGVmaW5lZEVsZW1lbnQgXG4gICAgICovXG4gICAgZ2V0Q3NzQ2xhc3NEZWZpbmVIZWlnaHQodXNlckRlZmluZWRFbGVtZW50OmFueSk6IHZvaWQge1xuICAgICAgICBpZih1c2VyRGVmaW5lZEVsZW1lbnQuY2xhc3MgPT0gdW5kZWZpbmVkIHx8IHVzZXJEZWZpbmVkRWxlbWVudC5jbGFzcyA9PSAnJyB8fCB1c2VyRGVmaW5lZEVsZW1lbnQuY2xhc3MgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpZih1c2VyRGVmaW5lZEVsZW1lbnQuaGVpZ2h0ID09IHVuZGVmaW5lZCB8fCB1c2VyRGVmaW5lZEVsZW1lbnQuaGVpZ2h0ID09ICcnIHx8IHVzZXJEZWZpbmVkRWxlbWVudC5oZWlnaHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYoIWlzU3R5bGVMb2FkKSAgX1VKU3N0eWxlc2hlZXRMaWIoKTtcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlVmFsaWRIZWlnaHRGcm9tQ1NTUnVsZXModXNlckRlZmluZWRFbGVtZW50KTtcbiAgICAgICAgfSBcbiAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUT0RPIHdoYXQgaWYgdXNlciBjaGFuZ2UgY2xhc3MgbmFtZSBhZnRlciBzZXJ0YWluIHRpbWUgYW5kIGNoYW5nZSBoaWdodCBmcm9tIHJlY3RvciBtZXRob2QgXG4gICAgICovXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHVzZXJEZWZpbmVkRWxlbWVudCBcbiAgICAgKi9cbiAgICBjaG9vc2VWYWxpZEhlaWdodEZyb21DU1NSdWxlcyh1c2VyRGVmaW5lZEVsZW1lbnQ6YW55KTogdm9pZCB7XG4gICAgICAgIGxldCBpc1J1bGVQcmlvcnR5U2V0OiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIGxldCBlbGVtZW50TmFtZTogc3RyaW5nID0gdXNlckRlZmluZWRFbGVtZW50LmVsZW1lbnQ7XG4gICAgICAgIGlmKGVsZW1lbnROYW1lID09IHVuZGVmaW5lZCB8fCBlbGVtZW50TmFtZSA9PSAnJyB8fCBlbGVtZW50TmFtZSA9PSBudWxsKSByZXR1cm47IFxuICAgICAgICBsZXQgdXNlckRlZmluZWRDbGFzc05hbWVzOiBzdHJpbmcgPSB1c2VyRGVmaW5lZEVsZW1lbnQuY2xhc3M7XG4gICAgICAgIGxldCB1c2VyRGVmaW5lZENsYXNzTmFtZXNBcnJheTphbnkgPSB1c2VyRGVmaW5lZENsYXNzTmFtZXMuc3BsaXQoXCIgXCIpO1xuICAgICAgICBmb3IobGV0IGNsYXNzTmFtZSBvZiB1c2VyRGVmaW5lZENsYXNzTmFtZXNBcnJheSkge1xuICAgICAgICAgICAgaWYoY2xhc3NOYW1lID09IFwiXCIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgbGV0IGNzc1J1bGU6IGFueSA9IGNzc1N0eWxlQ2xhc3NKc29uW2NsYXNzTmFtZV07XG4gICAgICAgICAgICBpZihjc3NSdWxlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxldCBjc3NIZWlnaHQ6IHN0cmluZyA9IGNzc1J1bGUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGlmKGNzc0hlaWdodCAhPSBcIlwiICYmIGNzc0hlaWdodCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlckRlZmluZWRFbGVtZW50WydoZWlnaHQnXSA9IGNzc0hlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdXNlckRlZmluZWRFbGVtZW50Wyd1anNfaGVpZ2h0J10gPSBjc3NIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGlzUnVsZVByaW9ydHlTZXQgPSB0cnVlOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgaWYoIWlzUnVsZVByaW9ydHlTZXQpIHtcbiAgICAgICAgICAgICAgICBjc3NSdWxlID0gY3NzU3R5bGVDbGFzc0pzb25bXCIuXCIrY2xhc3NOYW1lXTtcbiAgICAgICAgICAgICAgICBpZihjc3NSdWxlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgIGxldCBjc3NIZWlnaHQ6IHN0cmluZyA9IGNzc1J1bGUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgIGlmKGNzc0hlaWdodCAhPSBcIlwiICYmIGNzc0hlaWdodCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlckRlZmluZWRFbGVtZW50WydoZWlnaHQnXSA9IGNzc0hlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdXNlckRlZmluZWRFbGVtZW50Wyd1anNfaGVpZ2h0J10gPSBjc3NIZWlnaHQ7IFxuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICB9XG4gICAgfSBcblxuICAgIC8qKlxuICAgICAqIHBhc3MgdXNlciBkZWZpbmVkIG1vZGlmaWVkIG9iamVjdCBpbnRvIGNvbGxlY3Rpb25cbiAgICAgKiBAcGFyYW0gdXNlckRlZmluZWRFbGVtZW50IHVzZXIgZGVmaW5lZCBlbGVtZW50c1xuICAgICAqL1xuICAgIHByaXZhdGUgcGFzc0VsZW1lbnRUb0NvbGxlY3Rpb24odXNlckRlZmluZWRFbGVtZW50OiBhbnkpIHtcbiAgICAgICAgX3NldEVsZW1lbnRDb2xsZWN0b25zKHVzZXJEZWZpbmVkRWxlbWVudCk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQge0VsZW1lbnR9IGZyb20gJy4uL191cmFuaXVtdmlldy9lbGVtZW50JztcbmltcG9ydCB7Y3NzU3R5bGVDbGFzc0pzb259IGZyb20gJy4uL191anNzdHlsZXNoZWV0L3Vqc3N0eWxlc2hlZXQnO1xuaW1wb3J0IHtyZWFycmFuZ2VIZWlnaHRBbmRXaWR0aCwgc3RyaW5nVmFsdWVNYW5pcHVsYXRlcldpdGhQaXhlbCwgc3RyaW5nVmFsdWVNYW5pcHVsYXRlcldpdGhQcmVjZW50YWdlLCBpc0VxdWFsVG9BdXRvfSBmcm9tICcuLi9fc3RyaW5nTWFuaXB1bGF0ZXIvc3RyaW5nbWFuaXB1bGF0ZXJjb250cm9sbGVycyc7XG4vKipcbiAqIFxuICogQHBhcmFtIHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudCBlbGVtZW50IHRoYXQgdXNlciBkZWZpbmVkIGFuZCBwYXNzIHRvIHJlbmRlclxuICogQHBhcmFtIHBhcmVudFJlbmRlckVsZW1lbnREb2N1bWVudE9iamVjdCAgcGFyZW50IGVsZW1lbnQgb2JqZWN0IGluIEhUTUwgZG9jdW1lbnRcbiAqICB0aGF0IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudCBnbHVlZFxuICogQHBhcmFtIHBhcmVudFJlbmRlckVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fdmlld1BvcnRSZW5kZXIodXNlckRlZmluZWRSZW5kZXJFbGVtZW50OiBFbGVtZW50LHBhcmVudFJlbmRlckVsZW1lbnREb2N1bWVudE9iamVjdDogYW55LHBhcmVudFJlbmRlckVsZW1lbnQ/OiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYodXNlckRlZmluZWRSZW5kZXJFbGVtZW50ICE9IG51bGwgJiYgdXNlckRlZmluZWRSZW5kZXJFbGVtZW50ICE9IHVuZGVmaW5lZCl7XG4gICAgICAgIGlmKHBhcmVudFJlbmRlckVsZW1lbnREb2N1bWVudE9iamVjdCAhPSBudWxsICYmIHBhcmVudFJlbmRlckVsZW1lbnREb2N1bWVudE9iamVjdCAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgbGV0IHVqc0hlaWdodFZhbHVlID0gX19lbGVtZW50SGVpZ2h0Q2FsY3VsYXRvcih1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQpO1xuICAgICAgICAgICAgdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudFsndWpzX2hlaWdodCddID0gdWpzSGVpZ2h0VmFsdWU7XG4gICAgICAgICAgICBpZihwYXJlbnRSZW5kZXJFbGVtZW50RG9jdW1lbnRPYmplY3QuaWQgIT0gJ3Jvb3QnKXtcbiAgICAgICAgICAgICAgICBwYXJlbnRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudFsndWpzX2hlaWdodCddID0gdWpzSGVpZ2h0VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1VKUyBFUlJPUl06OiBwYXJlbnQgaHRtbCBlbGVtZW50IGlzIG5vdCBkb2N1bWVudCBvYmplY3RcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltVSlMgVElQU106OiAgY2hlY2sgeW91ciBwYXJlbnQgaHRtbCBlbGVtZW50IGlzIHJlbmRlcmVkIGJlZm9yZSBjaGlsZCBlbGVtZW50IHJlbmRlclwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1VKUyBUSVBTXTo6ICBjaGVjayB5b3VyIHBhcmVudCBodG1sIGVsZW1lbnQncyBwYXJlbnQgZWxlbWVudHMgYXJlIHJlbmRlcmVkIFwiKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coXCJbVUpTIEVSUk9SXTo6IHVzZXIgZGVmaW5lZCBodG1sIGVsZW1lbnQgaXMgbnVsbCBvciB1bmRlZmluZWQsXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIiAgICAgICAgICAgICAgbWFrZSBzdXJlIHRvIHJlbmRlciB2YWxpZCBodG1sIGVsZW1lbnQuXCIpO1xuICAgIH1cbn1cbi8qKlxuICogXG4gKiBAcGFyYW0gdXNlckVsZW1lbnRPYmplY3QgZWxlbWVudCB0aGF0IHVzZXIgZGVmaW5lZCBhbmQgcGFzcyBieSB0aGUgX192aWV3UG9ydFJlbmRlciBtZXRob2RcbiAqL1xuZnVuY3Rpb24gX19lbGVtZW50SGVpZ2h0Q2FsY3VsYXRvcih1c2VyRWxlbWVudE9iamVjdDogRWxlbWVudCk6IG51bWJlciB7XG4gICAgbGV0IGVsZW1lbnRIZWlnaHQ6IG51bWJlciA9IDA7XG4gICAgZm9yKGxldCBjaGlsZEVsZW1lbnQgb2YgdXNlckVsZW1lbnRPYmplY3QuZ2x1ZU9iamVjdEFycmF5KSB7XG4gICAgICAgIGlmKGNoaWxkRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQudWpzX2hlaWdodCA9PSB1bmRlZmluZWQgJiYgY2hpbGRFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5oZWlnaHQgPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50SGVpZ2h0ICsgKCtjc3NTdHlsZUNsYXNzSnNvbltjaGlsZEVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNsYXNzXSkgKyBfX2VsZW1lbnRIZWlnaHRDYWxjdWxhdG9yKGNoaWxkRWxlbWVudCk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIGlmKGNoaWxkRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaGVpZ2h0ICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBsZXQgcmVhcnJhbmdlVmFsdWUgPSByZWFycmFuZ2VIZWlnaHRBbmRXaWR0aChjaGlsZEVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmhlaWdodCk7XG4gICAgICAgICAgICBlbGVtZW50SGVpZ2h0ID0gZWxlbWVudEhlaWdodCArIHJlYXJyYW5nZVZhbHVlO1xuICAgICAgICAgICAgY2hpbGRFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudFsndWpzX2hlaWdodCddID0gcmVhcnJhbmdlVmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIGlmKGNoaWxkRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQudWpzX2hlaWdodCAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGludGVnZXIgcGFyc2UgaWYgdWpzX3JfaGVpZ2h0IGFsd2F5cyBpbnRlZ2VyIFxuICAgICAgICAgICAgZWxlbWVudEhlaWdodCA9IGVsZW1lbnRIZWlnaHQgKyAoK2NoaWxkRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQudWpzX2hlaWdodCk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbVUpTIEVOR0lORSBFUlJPUl06OiBzb21ldGhpbmcgd2VudCB3cm9uZyBidWRkeSEgaSBhbSBnb2luZyBkb3duLi4uLlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVzZXJFbGVtZW50T2JqZWN0LnVzZXJEZWZpbmVkRWxlbWVudFsndWpzX2hlaWdodCddID0gZWxlbWVudEhlaWdodDtcbiAgICByZXR1cm4gZWxlbWVudEhlaWdodDtcbn1cblxuXG4iXX0=
