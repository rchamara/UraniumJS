(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = require("../../src/lib_modules/_uraniumview/element");
const render_1 = require("../../src/lib_modules/_render/render");
const routescore_1 = require("../../src/lib_modules/_ujs_core/_routesOperation/routescore");
class HomePage {
    constructor() {
        /**
         * Top Header button start here
         */
        this.homeButtonDiv = new element_1.Element({
            'element': 'div',
            'innerHTML': 'Home'
        }, this);
        this.documentButtonDiv = new element_1.Element({
            'element': 'div',
            'innerHTML': 'Document'
        }, this);
        this.githubButtonDiv = new element_1.Element({
            'element': 'div',
            'innerHTML': 'gitHub'
        }, this);
        /**
         * Top Header button end here
         */
        /**
         * top buttons container element
         */
        this.topButtonContainer = new element_1.Element({
            'element': 'div',
            'class': 'text-right'
        }, this);
        /**
         * header container
         */
        this.headerContainer = new element_1.Element({
            'element': 'div'
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
    }
    /**
     * add button to container
     */
    addButtonsToContainer() {
        this.topButtonContainer.glue(this.homeButtonDiv);
        this.topButtonContainer.glue(this.documentButtonDiv);
        this.topButtonContainer.glue(this.githubButtonDiv);
    }
    addButtonContainerToHeader() {
        this.headerContainer.glue(this.topButtonContainer);
    }
    decorateHeader() {
        this.addButtonsToContainer();
        this.addButtonContainerToHeader();
        render_1.Render(this.headerContainer);
    }
}
exports.HomePage = HomePage;

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
const HomePage_1 = require("../pages/HomePage");
const secondPage_1 = require("../pages/secondPage");
class routes extends Routers_1.Routers {
    constructor() {
        super({
            '/': HomePage_1.HomePage,
            '/second': secondPage_1.SecondPage
        });
    }
}
exports.routes = routes;

},{"../../src/lib_modules/_ujs_core/_routers/Routers":16,"../pages/HomePage":1,"../pages/secondPage":2}],4:[function(require,module,exports){
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
    if (styleSheetRule.style != undefined)
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
         * so no need to get event action start name from array
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
     * TODO what if user change class name after certain time and change hight from rector method
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjb250cm9sbGVycy9wYWdlcy9Ib21lUGFnZS50cyIsImNvbnRyb2xsZXJzL3BhZ2VzL3NlY29uZFBhZ2UudHMiLCJjb250cm9sbGVycy9yb3V0ZXMvcm91dGVzLnRzIiwic3JjL2xpYl9tb2R1bGVzL19nbG9iYWwvZXZlbnROYW1lQ29sbGVjdGlvbi50cyIsInNyYy9saWJfbW9kdWxlcy9fZ2xvYmFsL2dsb2JhbGNvbnN0YW50LnRzIiwic3JjL2xpYl9tb2R1bGVzL19nbG9iYWwvZ2xvYmFsdmFyaWFibGUudHMiLCJzcmMvbGliX21vZHVsZXMvX2lnbml0ZS9pZ25pdGUudHMiLCJzcmMvbGliX21vZHVsZXMvX3JlY3J1c2l2ZS9yZWNydXNpdmUudHMiLCJzcmMvbGliX21vZHVsZXMvX3JlY3J1c2l2ZS9yZWNydXNpdmVJbmplY3Rvci50cyIsInNyYy9saWJfbW9kdWxlcy9fcmVsYXRpdmVoZWlnaHRjYWxjdWxhdG9yL3JlbGF0aXZlaGVpZ2h0Y2FsY3VsYXRvci50cyIsInNyYy9saWJfbW9kdWxlcy9fcmVuZGVyL3JlbmRlci50cyIsInNyYy9saWJfbW9kdWxlcy9fc2hhMS9zaGExLnRzIiwic3JjL2xpYl9tb2R1bGVzL19zdHJpbmdNYW5pcHVsYXRlci9zdHJpbmdtYW5pcHVsYXRlcmNvbnRyb2xsZXJzLnRzIiwic3JjL2xpYl9tb2R1bGVzL19zdXBlckJhc2VFbGVtZW50L3N1cGVyQmFzZUVsZW1lbnQudHMiLCJzcmMvbGliX21vZHVsZXMvX3Vqc19jb3JlL0luc3RhbmNlTG9hZGVyLnRzIiwic3JjL2xpYl9tb2R1bGVzL191anNfY29yZS9fcm91dGVycy9Sb3V0ZXJzLnRzIiwic3JjL2xpYl9tb2R1bGVzL191anNfY29yZS9fcm91dGVycy9oYXNoUm91dGVzLnRzIiwic3JjL2xpYl9tb2R1bGVzL191anNfY29yZS9fcm91dGVzT3BlcmF0aW9uL3JvdXRlc2NvcmUudHMiLCJzcmMvbGliX21vZHVsZXMvX3Vqc3N0eWxlc2hlZXQvdWpzc3R5bGVzaGVldC50cyIsInNyYy9saWJfbW9kdWxlcy9fdXJhbml1bXZpZXcvU3VwZXJFbGVtZW50LnRzIiwic3JjL2xpYl9tb2R1bGVzL191cmFuaXVtdmlldy9lbGVtZW50LnRzIiwic3JjL2xpYl9tb2R1bGVzL192aWV3cG9ydHJlbmRlci92aWV3cG9ydHJlbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsd0VBQW1FO0FBQ25FLGlFQUE0RDtBQUM1RCw0RkFBa0Y7QUFLbEYsTUFBYSxRQUFRO0lBQXJCO1FBRUk7O1dBRUc7UUFDSSxrQkFBYSxHQUFHLElBQUksaUJBQU8sQ0FBQztZQUMvQixTQUFTLEVBQUMsS0FBSztZQUNmLFdBQVcsRUFBQyxNQUFNO1NBQ3JCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFFRCxzQkFBaUIsR0FBRyxJQUFJLGlCQUFPLENBQUM7WUFDbkMsU0FBUyxFQUFDLEtBQUs7WUFDZixXQUFXLEVBQUMsVUFBVTtTQUN6QixFQUFDLElBQUksQ0FBQyxDQUFDO1FBRUQsb0JBQWUsR0FBRyxJQUFJLGlCQUFPLENBQUM7WUFDakMsU0FBUyxFQUFDLEtBQUs7WUFDZixXQUFXLEVBQUMsUUFBUTtTQUN2QixFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1I7O1dBRUc7UUFFSDs7V0FFRztRQUNJLHVCQUFrQixHQUFHLElBQUksaUJBQU8sQ0FBQztZQUNwQyxTQUFTLEVBQUMsS0FBSztZQUNmLE9BQU8sRUFBRSxZQUFZO1NBQ3hCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFXUjs7V0FFRztRQUNJLG9CQUFlLEdBQUcsSUFBSSxpQkFBTyxDQUFDO1lBQ2pDLFNBQVMsRUFBQyxLQUFLO1NBQ2xCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFlUix1QkFBa0IsR0FBRyxHQUFHLEVBQUU7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2hELElBQUksa0JBQUssQ0FBQyxTQUFTLENBQUMs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Q0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO1lBQ3BGLE1BQU07U0FDVDtLQUNKO0lBQ0QsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLEdBQUcsYUFBYSxDQUFDO0lBQ25FLE9BQU8sYUFBYSxDQUFDO0FBQ3pCLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQge0VsZW1lbnR9IGZyb20gJy4uLy4uL3NyYy9saWJfbW9kdWxlcy9fdXJhbml1bXZpZXcvZWxlbWVudCc7XG5pbXBvcnQge1JlbmRlcn0gZnJvbSAnLi4vLi4vc3JjL2xpYl9tb2R1bGVzL19yZW5kZXIvcmVuZGVyJztcbmltcG9ydCB7cm91dGV9IGZyb20gJy4uLy4uL3NyYy9saWJfbW9kdWxlcy9fdWpzX2NvcmUvX3JvdXRlc09wZXJhdGlvbi9yb3V0ZXNjb3JlJztcbmltcG9ydCB7UmVhY3Rvcn0gZnJvbSAnLi4vLi4vc3JjL2xpYl9tb2R1bGVzL19yZWFjdG9yL3JlYWN0b3InO1xuXG5pbXBvcnQge19VSlNzdHlsZXNoZWV0TGliLCBpc1N0eWxlTG9hZCxjc3NTdHlsZUNsYXNzSnNvbn0gZnJvbSAnLi4vLi4vc3JjL2xpYl9tb2R1bGVzL191anNzdHlsZXNoZWV0L3Vqc3N0eWxlc2hlZXQnO1xuXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2Uge1xuXG4gICAgLyoqXG4gICAgICogVG9wIEhlYWRlciBidXR0b24gc3RhcnQgaGVyZVxuICAgICAqL1xuICAgIHB1YmxpYyBob21lQnV0dG9uRGl2ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6J2RpdicsXG4gICAgICAgICdpbm5lckhUTUwnOidIb21lJ1xuICAgIH0sdGhpcyk7XG5cbiAgICBwdWJsaWMgZG9jdW1lbnRCdXR0b25EaXYgPSBuZXcgRWxlbWVudCh7XG4gICAgICAgICdlbGVtZW50JzonZGl2JyxcbiAgICAgICAgJ2lubmVySFRNTCc6J0RvY3VtZW50J1xuICAgIH0sdGhpcyk7XG5cbiAgICBwdWJsaWMgZ2l0aHViQnV0dG9uRGl2ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6J2RpdicsXG4gICAgICAgICdpbm5lckhUTUwnOidnaXRIdWInXG4gICAgfSx0aGlzKTtcbiAgICAvKipcbiAgICAgKiBUb3AgSGVhZGVyIGJ1dHRvbiBlbmQgaGVyZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogdG9wIGJ1dHRvbnMgY29udGFpbmVyIGVsZW1lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9wQnV0dG9uQ29udGFpbmVyID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6J2RpdicsXG4gICAgICAgICdjbGFzcyc6ICd0ZXh0LXJpZ2h0J1xuICAgIH0sdGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBhZGQgYnV0dG9uIHRvIGNvbnRhaW5lclxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkQnV0dG9uc1RvQ29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLnRvcEJ1dHRvbkNvbnRhaW5lci5nbHVlKHRoaXMuaG9tZUJ1dHRvbkRpdik7XG4gICAgICAgIHRoaXMudG9wQnV0dG9uQ29udGFpbmVyLmdsdWUodGhpcy5kb2N1bWVudEJ1dHRvbkRpdik7XG4gICAgICAgIHRoaXMudG9wQnV0dG9uQ29udGFpbmVyLmdsdWUodGhpcy5naXRodWJCdXR0b25EaXYpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGhlYWRlciBjb250YWluZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgaGVhZGVyQ29udGFpbmVyID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6J2RpdidcbiAgICB9LHRoaXMpO1xuXG4gICAgcHJpdmF0ZSBhZGRCdXR0b25Db250YWluZXJUb0hlYWRlcigpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJDb250YWluZXIuZ2x1ZSh0aGlzLnRvcEJ1dHRvbkNvbnRhaW5lcik7XG4gICAgfVxuXG4gICBcbiAgICBcblxuICAgIGRlY29yYXRlSGVhZGVyKCkge1xuICAgICAgICAgIHRoaXMuYWRkQnV0dG9uc1RvQ29udGFpbmVyKCk7XG4gICAgICAgICAgdGhpcy5hZGRCdXR0b25Db250YWluZXJUb0hlYWRlcigpO1xuICAgICAgICAgIFJlbmRlcih0aGlzLmhlYWRlckNvbnRhaW5lcik7ICAgICAgICAgXG4gICAgfVxuXG4gICAgb25DbGlja0Fycm93TWV0aG9kID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInlvdSBpbiBhcmUgaW4gZmF0IGFycm93IGZ1bmN0aW9uXCIpO1xuICAgICAgICBuZXcgcm91dGUoJy9zZWNvbmQnKTtcbiAgICAgICAgLy8gbGV0IGxvYzogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXJsOlwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIC8vIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBsb2MgK1wiL3RcIjtcbiAgICAgICAgLy8gbGV0IGRpdjogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgLy8gICAgICdlbGVtZW50JzogJ2RpdicsXG4gICAgICAgIC8vICAgICAnY2xhc3MnOiAnZmlyc3ROb2RlJyxcbiAgICAgICAgLy8gICAgICdpbm5lckhUTUwnOiB0aGlzLngsXG4gICAgICAgIC8vICAgICAndGFnJzogJ215dGFnJ1xuICAgICAgICAvLyB9LCB0aGlzKTtcbiAgICAgICAgLy8gdGhpcy54ID0gKyt0aGlzLng7XG4gICAgICAgIC8vIHRoaXMuYmFzZUVsZW1lbnQyLmdsdWUoZGl2KTtcbiAgICAgICAgLy8gUmVuZGVyKGRpdiwgdGhpcy5iYXNlRWxlbWVudDIpO1xuICAgICAgICAvL3dpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG5cbiAgIFxufVxuXG5cblxuICAgIFxuXG5cblxuXG4iLCJpbXBvcnQge0VsZW1lbnR9IGZyb20gJy4uLy4uL3NyYy9saWJfbW9kdWxlcy9fdXJhbml1bXZpZXcvZWxlbWVudCc7XG5pbXBvcnQge1JlbmRlcn0gZnJvbSAnLi4vLi4vc3JjL2xpYl9tb2R1bGVzL19yZW5kZXIvcmVuZGVyJztcbmltcG9ydCB7cm91dGV9IGZyb20gJy4uLy4uL3NyYy9saWJfbW9kdWxlcy9fdWpzX2NvcmUvX3JvdXRlc09wZXJhdGlvbi9yb3V0ZXNjb3JlJztcbmltcG9ydCB7UmVhY3Rvcn0gZnJvbSAnLi4vLi4vc3JjL2xpYl9tb2R1bGVzL19yZWFjdG9yL3JlYWN0b3InO1xuaW1wb3J0IHtIYXNoUm91dGVzfSBmcm9tICcuLi8uLi9zcmMvbGliX21vZHVsZXMvX3Vqc19jb3JlL19yb3V0ZXJzL2hhc2hSb3V0ZXMnO1xuaW1wb3J0IHtfVUpTc3R5bGVzaGVldExpYiwgaXNTdHlsZUxvYWQsY3NzU3R5bGVDbGFzc0pzb259IGZyb20gJy4uLy4uL3NyYy9saWJfbW9kdWxlcy9fdWpzc3R5bGVzaGVldC91anNzdHlsZXNoZWV0JztcblxuZXhwb3J0IGNsYXNzIFNlY29uZFBhZ2Uge1xuXG4gICAgcHVibGljIHg6IG51bWJlciA9MDtcblxuICAgIHB1YmxpYyBiYXNlRWxlbWVudDogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnZGl2J1xuICAgIH0sdGhpcyk7XG5cblxuICAgIHB1YmxpYyBiYXNlRWxlbWVudDE6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCh7XG4gICAgICAgICdlbGVtZW50JzogJ2RpdicsXG4gICAgICAgICdjbGFzcyc6ICdjaGlsZC1maXJzdCcsXG4gICAgICAgICd0YWcnOiAnYmFzZUVsZW1lbnQxJ1xuICAgIH0sdGhpcyk7XG5cbiAgICBwdWJsaWMgYmFzZUVsZW1lbnQxMTogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgJ2NsYXNzJzogJ2NoaWxkLWZpcnN0JyxcbiAgICAgICAgJ2lubmVySFRNTCc6ICcxMSdcbiAgICB9LHRoaXMpO1xuICAgIHB1YmxpYyBiYXNlRWxlbWVudDEyOiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAnY2hpbGQtZmlyc3QnLFxuICAgICAgICAnaW5uZXJIVE1MJzogJzEyJ1xuICAgIH0sdGhpcyk7XG4gICAgcHVibGljIGJhc2VFbGVtZW50MTM6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCh7XG4gICAgICAgICdlbGVtZW50JzogJ2RpdicsXG4gICAgICAgICdjbGFzcyc6ICdjaGlsZC1maXJzdCcsXG4gICAgICAgICdpbm5lckhUTUwnOiAnMTMnXG4gICAgfSx0aGlzKTtcblxuICAgIHB1YmxpYyBiYXNlRWxlbWVudDE0OiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAnY2hpbGQtZmlyc3QnLFxuICAgICAgICAnaW5uZXJIVE1MJzogJzE0J1xuICAgIH0sdGhpcyk7XG4gICAgcHVibGljIGJhc2VFbGVtZW50MTU6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCh7XG4gICAgICAgICdlbGVtZW50JzogJ2RpdicsXG4gICAgICAgICdjbGFzcyc6ICdjaGlsZC1maXJzdCcsXG4gICAgICAgICdpbm5lckhUTUwnOiAnMTUnXG4gICAgfSx0aGlzKTtcbiAgICBwdWJsaWMgYmFzZUVsZW1lbnQxNjogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgJ2NsYXNzJzogJ2NoaWxkLWZpcnN0JyxcbiAgICAgICAgJ2lubmVySFRNTCc6ICcxNidcbiAgICB9LHRoaXMpO1xuXG4gICAgcHVibGljIGJhc2VFbGVtZW50MjogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgJ2NsYXNzJzogJ2NoaWxkLXNlY29uZCdcbiAgICB9LHRoaXMpO1xuXG5cblxuICAgIHB1YmxpYyBoZWFkZXJFbGVtZW50OiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAnaGVhZGVyJyxcbiAgICAgICAgJ3RhZyc6ICdoZWFkZXInXG4gICAgfSx0aGlzKTtcblxuICAgIHB1YmxpYyB0ZW1wRWxlbWVudDogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgJ2NsYXNzJzogJ3RlbXBjbGFzcydcbiAgICB9LHRoaXMpO1xuXG4gICAgcHVibGljIGJ1dHRvbjogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnYnV0dG9uJyxcbiAgICAgICAgJ2NsYXNzJzogJ2J1dHRvbicsXG4gICAgICAgICdvbmNsaWNrJzogJ29uQ2xpY2tBcnJvd01ldGhvZCcsXG4gICAgICAgICd0YWcnOiAnYnV0dG9uJ1xuICAgIH0sdGhpcyk7XG5cbiAgICBwdWJsaWMgZGl2MTogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgJ2NsYXNzJzogJ2ZpcnN0Tm9kZSdcbiAgICB9LCB0aGlzKTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgcHVibGljIG5vZGUxOiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAnY2hpbGQtc2Vjb25kJ1xuICAgIH0sdGhpcyk7XG5cbiAgICBwdWJsaWMgbm9kZTI6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCh7XG4gICAgICAgICdlbGVtZW50JzogJ2RpdicsXG4gICAgICAgICdjbGFzcyc6ICdjaGlsZC1zZWNvbmQnXG4gICAgfSx0aGlzKTtcblxuICAgIHB1YmxpYyBub2RlMzogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgJ2NsYXNzJzogJ2NoaWxkLXNlY29uZCdcbiAgICB9LHRoaXMpO1xuXG4gICAgcHVibGljIG5vZGU0OiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAnY2hpbGQtc2Vjb25kJ1xuICAgIH0sdGhpcyk7XG5cbiAgICBwdWJsaWMgbm9kZTU6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCh7XG4gICAgICAgICdlbGVtZW50JzogJ2RpdicsXG4gICAgICAgICdjbGFzcyc6ICdjaGlsZC1zZWNvbmQnXG4gICAgfSx0aGlzKTtcblxuICAgIHB1YmxpYyBub2RlNjogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgJ2NsYXNzJzogJ2NoaWxkLXNlY29uZCdcbiAgICB9LHRoaXMpO1xuXG4gICAgcHVibGljIG5vZGU3OiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAnZWxlbWVudCc6ICdkaXYnLFxuICAgICAgICAnY2xhc3MnOiAnY2hpbGQtc2Vjb25kJ1xuICAgIH0sdGhpcyk7XG5cbiAgICBwdWJsaWMgbm9kZTg6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCh7XG4gICAgICAgICdlbGVtZW50JzogJ2RpdicsXG4gICAgICAgICdjbGFzcyc6ICdjaGlsZC1zZWNvbmQnXG4gICAgfSx0aGlzKTtcblxuICAgIHB1YmxpYyBub2RlOTogRWxlbWVudCA9IG5ldyBFbGVtZW50KHtcbiAgICAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgJ2NsYXNzJzogJ2NoaWxkLXNlY29uZCdcbiAgICB9LHRoaXMpO1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgLy8gdGhpcy5kZWNvcmF0ZUhlYWRlcigpO1xuICAgIH1cblxuICAgIGRlY29yYXRlSGVhZGVyKCkge1xuICAgICAgICB0aGlzLm5vZGUxLmdsdWUodGhpcy5idXR0b24pO1xuICAgICAgICB0aGlzLmJhc2VFbGVtZW50LmdsdWUodGhpcy5ub2RlMSk7XG4gICAgICAgIHRoaXMuYmFzZUVsZW1lbnQuZ2x1ZSh0aGlzLm5vZGUyKTtcbiAgICAgICAvLyB0aGlzLm5vZGUxLmdsdWUodGhpcy5ub2RlMik7XG4gICAgICAgLy8gdGhpcy5ub2RlMy5nbHVlKHRoaXMubm9kZTEpO1xuICAgICAgIC8vIHRoaXMubm9kZTMuZ2x1ZSh0aGlzLm5vZGUyKTtcbiAgICAgICAgdGhpcy5iYXNlRWxlbWVudC5nbHVlKHRoaXMubm9kZTMpO1xuICAgICAgICB0aGlzLmJhc2VFbGVtZW50LmdsdWUodGhpcy5ub2RlNCk7XG4gICAgICAgIHRoaXMuYmFzZUVsZW1lbnQuZ2x1ZSh0aGlzLm5vZGU1KTtcbiAgICAgICAgdGhpcy5iYXNlRWxlbWVudC5nbHVlKHRoaXMubm9kZTYpO1xuICAgICAgICB0aGlzLmJhc2VFbGVtZW50LmdsdWUodGhpcy5ub2RlNyk7XG4gICAgICAgIHRoaXMuYmFzZUVsZW1lbnQuZ2x1ZSh0aGlzLm5vZGU4KTtcbiAgICAgICAgdGhpcy5iYXNlRWxlbWVudC5nbHVlKHRoaXMubm9kZTkpO1xuICAgICAgICBSZW5kZXIodGhpcy5iYXNlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgb25DbGlja0Fycm93TWV0aG9kID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInlvdSBhcmUgaW4gZmF0IGFycm93IGZ1bmN0aW9uXCIpO1xuICAgICAgIC8vIG5ldyByb3V0ZSgnLycpO1xuICAgICAgICAvLyBsZXQgbG9jOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1cmw6XCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgLy8gZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGxvYyArXCIvdFwiO1xuICAgICAgICAvLyBsZXQgZGl2OiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoe1xuICAgICAgICAvLyAgICAgJ2VsZW1lbnQnOiAnZGl2JyxcbiAgICAgICAgLy8gICAgICdjbGFzcyc6ICdmaXJzdE5vZGUnLFxuICAgICAgICAvLyAgICAgJ2lubmVySFRNTCc6IHRoaXMueCxcbiAgICAgICAgLy8gICAgICd0YWcnOiAnbXl0YWcnXG4gICAgICAgIC8vIH0sIHRoaXMpO1xuICAgICAgICAvLyB0aGlzLnggPSArK3RoaXMueDtcbiAgICAgICAgLy8gdGhpcy5iYXNlRWxlbWVudDIuZ2x1ZShkaXYpO1xuICAgICAgICAvLyBSZW5kZXIoZGl2LCB0aGlzLmJhc2VFbGVtZW50Mik7XG4gICAgICAgIC8vd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cblxuICAgXG59XG5cblxuXG5cbiAgICBcblxuXG5cblxuIiwiaW1wb3J0IHtSb3V0ZXJzfSBmcm9tICcuLi8uLi9zcmMvbGliX21vZHVsZXMvX3Vqc19jb3JlL19yb3V0ZXJzL1JvdXRlcnMnO1xuaW1wb3J0IHtIb21lUGFnZX0gZnJvbSAnLi4vcGFnZXMvSG9tZVBhZ2UnO1xuaW1wb3J0IHtTZWNvbmRQYWdlfSBmcm9tICcuLi9wYWdlcy9zZWNvbmRQYWdlJztcbmV4cG9ydCBjbGFzcyByb3V0ZXMgZXh0ZW5kcyBSb3V0ZXJzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgJy8nOiBIb21lUGFnZSxcbiAgICAgICAgICAgICcvc2Vjb25kJzogU2Vjb25kUGFnZVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiZXhwb3J0IGxldCBldmVudE5hbWVzQ29sbGVjdGlvbk9iamVjdDogYW55ID0ge1xuICAgIC8qKlxuICAgICAqIEZvY3VzIGV2ZW50cyAgXG4gICAgICogKi9cbiAgICAnb25mb2N1cyc6ICdmb2N1cycsXG4gICAgJ29uYmx1cic6ICdibHVyJyxcblxuICAgIC8qKlxuICAgICAqIFdlYlNvY2tldCBldmVudHNcbiAgICAgKi9cbiAgICAnb25vcGVuJzogJ29wZW4nLFxuICAgICdvbm1lc3NhZ2UnOiAnbWVzc2FnZScsXG4gICAgJ29uZXJyb3InOiAnZXJyb3InLFxuICAgICdvbmNsb3NlJzogJ2Nsb3NlJyxcblxuICAgIC8qKlxuICAgICAqIFNlc3Npb24gSGlzdG9yeSBldmVudHNcbiAgICAgKi9cbiAgICAnb25wYWdlaGlkZSc6ICdwYWdlaGlkZScsXG4gICAgJ29ucGFnZXNob3cnOiAncGFnZXNob3cnLFxuICAgICdvbnBvcHN0YXRlJzogJ3BvcHN0YXRlJyxcblxuICAgIC8qKlxuICAgICAqIENTUyBBbmltYXRpb24gZXZlbnRzXG4gICAgICovXG4gICAgJ29uYW5pbWF0aW9uc3RhcnQnOiAnYW5pbWF0aW9uc3RhcnQnLFxuICAgICdvbmFuaW1hdGlvbmVuZCc6ICdhbmltYXRpb25lbmQnLFxuICAgICdhbmltYXRpb25pdGVyYXRpb24nOiAnYW5pbWF0aW9uaXRlcmF0aW9uJyxcblxuICAgIC8qKlxuICAgICAqIENTUyBUcmFuc2l0aW9uIGV2ZW50c1xuICAgICAqL1xuICAgICdvbnRyYW5zaXRpb25zdGFydCc6ICd0cmFuc2l0aW9uc3RhcnQnLFxuICAgICdvbnRyYW5zaXRpb25jYW5jZWwnOiAndHJhbnNpdGlvbmNhbmNlbCcsXG4gICAgJ29udHJhbnNpdGlvbmVuZCc6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnb250cmFuc2l0aW9ucnVuJzogJ3RyYW5zaXRpb25ydW4nLFxuXG4gICAgLyoqXG4gICAgICogRm9ybSBldmVudHNcbiAgICAgKi9cbiAgICAnb25yZXNldCc6ICdyZXNldCcsXG4gICAgJ29uc3VibWl0JzogJ3N1Ym1pdCcsXG5cbiAgICAvKipcbiAgICAgKiBQcmludGluZyBldmVudHNcbiAgICAgKi9cbiAgICAnb25iZWZvcmVwcmludCc6ICdiZWZvcmVwcmludCcsXG4gICAgJ29uYWZ0ZXJwcmludCc6ICdhZnRlcnByaW50JyxcblxuICAgIC8qKlxuICAgICAqIFRleHQgQ29tcG9zaXRpb24gZXZlbnRzXG4gICAgICovXG4gICAgJ29uY29tcG9zaXRpb25zdGFydCc6ICdjb21wb3NpdGlvbnN0YXJ0JyxcbiAgICAnb25jb21wb3NpdGlvbnVwZGF0ZSc6ICdjb21wb3NpdGlvbnVwZGF0ZScsXG4gICAgJ29uY29tcG9zaXRpb25lbmQnOiAnY29tcG9zaXRpb25lbmQnLFxuXG4gICAgLyoqXG4gICAgICogVmlldyBldmVudHNcbiAgICAgKi9cbiAgICAnb25mdWxsc2NyZWVuY2hhbmdlJzogJ2Z1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICdvbmZ1bGxzY3JlZW5lcnJvcic6ICdmdWxsc2NyZWVuZXJyb3InLFxuICAgICdvbnJlc2l6ZSc6ICdyZXNpemUnLFxuICAgICdvbnNjcm9sbCc6ICdzY3JvbGwnLFxuXG4gICAgLyoqXG4gICAgICogQ2xpcGJvYXJkIGV2ZW50c1xuICAgICAqL1xuICAgICdvbmN1dCc6ICdjdXQnLFxuICAgICdvbmNvcHknOiAnY29weScsXG4gICAgJ29ucGFzdGUnOiAncGFzdGUnLFxuXG4gICAgLyoqXG4gICAgICogS2V5Ym9hcmQgZXZlbnRzXG4gICAgICovXG4gICAgJ29ua2V5ZG93bic6ICdrZXlkb3duJyxcbiAgICAnb25rZXlwcmVzcyc6ICdrZXlwcmVzcycsXG4gICAgJ29ua2V5dXAnOiAna2V5dXAnLFxuXG4gICAgLyoqXG4gICAgICogTW91c2UgZXZlbnRzXG4gICAgICovXG4gICAgJ29uYXV4Y2xpY2snOiAnYXV4Y2xpY2snLFxuICAgICdvbmNsaWNrJzogJ2NsaWNrJyxcbiAgICAnb25jb250ZXh0bWVudSc6ICdjb250ZXh0bWVudScsXG4gICAgJ29uZGJsY2xpY2snOiAnZGJsY2xpY2snLFxuICAgICdvbm1vdXNlZG93bic6ICdtb3VzZWRvd24nLFxuICAgICdvbm1vdXNlZW50ZXInOiAnbW91c2VlbnRlcicsXG4gICAgJ29ubW91c2VsZWF2ZSc6ICdtb3VzZWxlYXZlJyxcbiAgICAnb25tb3VzZW1vdmUnOiAnbW91c2Vtb3ZlJyxcbiAgICAnb25tb3VzZW92ZXInOiAnbW91c2VvdmVyJyxcbiAgICAnb25tb3VzZW91dCc6ICdtb3VzZW91dCcsXG4gICAgJ29ubW91c2V1cCc6ICdtb3VzZXVwJyxcbiAgICAnb25wb2ludGVybG9ja2NoYW5nZSc6ICdwb2ludGVybG9ja2NoYW5nZScsXG4gICAgJ29ucG9pbnRlcmxvY2tlcnJvcic6ICdwb2ludGVybG9ja2Vycm9yJyxcbiAgICAnb25zZWxlY3QnOiAnc2VsZWN0JyxcbiAgICAnb253aGVlbCc6ICd3aGVlbCcsXG5cbiAgICAvKipcbiAgICAgKiBEcmFnICYgRHJvcCBldmVudHNcbiAgICAgKi9cbiAgICAnb25kcmFnJzogJ2RyYWcnLFxuICAgICdvbmRyYWdlbmQnOiAnZHJhZ2VuZCcsXG4gICAgJ29uZHJhZ2VudGVyJzogJ2RyYWdlbnRlcicsXG4gICAgJ29uZHJhZ3N0YXJ0JzogJ2RyYWdzdGFydCcsXG4gICAgJ29uZHJhZ2xlYXZlJzogJ2RyYWdsZWF2ZScsXG4gICAgJ29uZHJhZ292ZXInOiAnZHJhZ292ZXInLFxuICAgICdvbmRyb3AnOiAnZHJvcCcsXG5cbiAgICAvKipcbiAgICAgKiBNZWRpYSBldmVudHNcbiAgICAgKi9cbiAgICAnb25hdWRpb3Byb2Nlc3MnOiAnYXVkaW9wcm9jZXNzJyxcbiAgICAnb25jYW5wbGF5JzogJ2NhbnBsYXknLFxuICAgICdvbmNhbnBsYXl0aHJvdWdoJzogJ2NhbnBsYXl0aHJvdWdoJyxcbiAgICAnb25jb21wbGV0ZSc6ICdjb21wbGV0ZScsXG4gICAgJ29uZHVyYXRpb25jaGFuZ2UnOiAnZHVyYXRpb25jaGFuZ2UnLFxuICAgICdvbmVtcHRpZWQnOiAnZW1wdGllZCcsXG4gICAgJ29uZW5kZWQnOiAnZW5kZWQnLFxuICAgICdvbmxvYWRlZGRhdGEnOiAnbG9hZGVkZGF0YScsXG4gICAgJ29ubG9hZGVkbWV0YWRhdGEnOiAnbG9hZGVkbWV0YWRhdGEnLFxuICAgICdvbnBhdXNlJzogJ3BhdXNlJyxcbiAgICAnb25wbGF5JzogJ3BsYXknLFxuICAgICdvbnBsYXlpbmcnOiAncGxheWluZycsXG4gICAgJ29ucmF0ZWNoYW5nZSc6ICdyYXRlY2hhbmdlJyxcbiAgICAnb25zZWVrZWQnOiAnc2Vla2VkJyxcbiAgICAnb25zZWVraW5nJzogJ3NlZWtpbmcnLFxuICAgICdvbnN0YWxsZWQnOiAnc3RhbGxlZCcsXG4gICAgJ29uc3VzcGVuZCc6ICdzdXNwZW5kJyxcbiAgICAnb250aW1ldXBkYXRlJzogJ3RpbWV1cGRhdGUnLFxuICAgICdvbnZvbHVtZWNoYW5nZSc6ICd2b2x1bWVjaGFuZ2UnLFxuICAgICdvbndhaXRpbmcnOiAnd2FpdGluZycsXG5cbiAgICAvKipcbiAgICAgKiBQcm9ncmVzcyBldmVudHNcbiAgICAgKi9cbiAgICAnb25hYm9ydCc6ICdhYm9ydCcsXG4gICAgJ29ubG9hZCc6ICdsb2FkJyxcbiAgICAnb25sb2FkZW5kJzogJ2xvYWRlbmQnLFxuICAgICdvbmxvYWRzdGFydCc6ICdsb2Fkc3RhcnQnLFxuICAgICdvbnByb2dyZXNzJzogJ3Byb2dyZXNzJyxcbiAgICAnb250aW1lb3V0JzogJ3RpbWVvdXQnLFxuXG4gICAgLyoqXG4gICAgICogU3RvcmFnZSBldmVudHNcbiAgICAgKi9cbiAgICAnb25jaGFuZ2UnOiAnY2hhbmdlJyxcbiAgICAnb25zdG9yYWdlJzogJ3N0b3JhZ2UnLFxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGV2ZW50c1xuICAgICAqL1xuICAgICdvbmNoZWNraW5nJzogJ2NoZWNraW5nJyxcbiAgICAnb25kb3dubG9hZGluZyc6ICdkb3dubG9hZGluZycsXG4gICAgJ29ubm91cGRhdGUnOiAnbm91cGRhdGUnLFxuICAgICdvbm9ic29sZXRlJzogJ29ic29sZXRlJyxcbiAgICAnb251cGRhdGVyZWFkeSc6ICd1cGRhdGVyZWFkeScsXG5cbiAgICAvKipcbiAgICAgKiBWYWx1ZSBjaGFuZ2UgZXZlbnRzXG4gICAgICovXG4gICAgJ29uYnJvYWRjYXN0JzogJ2Jyb2FkY2FzdCcsXG4gICAgJ29uQ2hlY2tib3hTdGF0ZUNoYW5nZSc6ICdDaGVja2JveFN0YXRlQ2hhbmdlJyxcbiAgICAnb25oYXNoY2hhbmdlJzogJ2hhc2hjaGFuZ2UnLFxuICAgICdvbmlucHV0JzogJ2lucHV0JyxcbiAgICAnb25SYWRpb1N0YXRlQ2hhbmdlJzogJ1JhZGlvU3RhdGVDaGFuZ2UnLFxuICAgICdvbnJlYWR5c3RhdGVjaGFuZ2UnOiAncmVhZHlzdGF0ZWNoYW5nZScsXG4gICAgJ29uVmFsdWVDaGFuZ2UnOiAnVmFsdWVDaGFuZ2UnLFxuXG4gICAgLyoqXG4gICAgICogVW5jYXRlZ29yaXplZCBldmVudHNcbiAgICAgKi9cbiAgICAnb25pbnZhbGlkJzogJ2ludmFsaWQnLFxuICAgICdvbmxvY2FsaXplZCc6ICdsb2NhbGl6ZWQnLFxuICAgICdvbnNob3cnOiAnc2hvdydcbn07XG4iLCJleHBvcnQgY29uc3QgSU5JVF9UUklHR0VSX0hFSUdIVCA9IDc2ODtcbmV4cG9ydCBjb25zdCBGTEFHX1BPSU5UX1ZBTFVFID0gMDsiLCJpbXBvcnQge0ZMQUdfUE9JTlRfVkFMVUUsIElOSVRfVFJJR0dFUl9IRUlHSFR9IGZyb20gJy4uL19nbG9iYWwvZ2xvYmFsY29uc3RhbnQnO1xuaW1wb3J0IHtFbGVtZW50fSBmcm9tICcuLi9fdXJhbml1bXZpZXcvZWxlbWVudCc7XG5cbmV4cG9ydCBsZXQgcmVuZGVyQnVja2V0ID0gbmV3IE1hcCgpO1xuZXhwb3J0IGxldCBpbml0VHJpZ2dlckhlaWdodDogbnVtYmVyID0gSU5JVF9UUklHR0VSX0hFSUdIVDtcbmV4cG9ydCBsZXQgZmxhZ1BvaW50OiBudW1iZXIgPSBGTEFHX1BPSU5UX1ZBTFVFO1xuZXhwb3J0IGxldCByb3V0ZXJzOiBhbnkgPSB7fTtcbmV4cG9ydCBsZXQgZWxlbWVudENvbGxlY3RvbnMgPSBuZXcgU2V0KCk7XG5leHBvcnQgbGV0IGdyYW5kUGFyZW50OiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5leHBvcnQgbGV0IGZsYWdJbmRleEdyYW5kUGFyZW50OiBFbGVtZW50O1xuZXhwb3J0IGxldCBjdXJyZW50SGFzaFZhbHVlOiBhbnk7XG5leHBvcnQgbGV0IGV2ZW50TGlzdG5lck1hcCA9IG5ldyBNYXAoKTtcbmV4cG9ydCBsZXQgZXZlbnRMaXN0bmVyQXJyYXk6IGFueSA9IFtdO1xuXG4vKipcbiAqIHNldHRlciBmb3IgZXZlbnRMaXN0ZW5lck1hcFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RXZlbnRMaXN0bmVyTWFwKGtleTogYW55LCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgZXZlbnRMaXN0bmVyTWFwLnNldChrZXksIHZhbHVlKTtcbn1cblxuLyoqXG4gKiBnZXR0ZXIgZm9yIGV2ZW50TGlzdG5lck1hcFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXZlbnRMaXN0bmVyTWFwKGtleTogYW55KSB7XG4gICAgcmV0dXJuIGV2ZW50TGlzdG5lck1hcC5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBzZXQgY3VycmVudEhhc2hWYWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudEhhc2hWYWx1ZShoYXNoVmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGN1cnJlbnRIYXNoVmFsdWUgPSBoYXNoVmFsdWU7XG59XG5cbi8qKlxuICogZ2V0IGN1cnJlbnRIYXNoVmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRIYXNoVmFsdWUoKTogU3RyaW5nIHtcbiBsZXQgaGFzaFZhbHVlID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gaWYgKGhhc2hWYWx1ZSA9PSBcIlwiKSB7XG4gICAgaGFzaFZhbHVlID0gXCIjL1wiO1xuIH0gXG4gcmV0dXJuIGhhc2hWYWx1ZTtcbn1cblxuLyoqXG4gKiBzZXQgcmVuZGVyIGJ1Y2tldFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVuZGVyQnVja2V0KGtleTogYW55LCB2bGF1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKCFpc1JlbmRlckJ1Y2tldEhhc0tleShrZXksIHZsYXVlKSkgcmVuZGVyQnVja2V0LnNldChrZXksIHZsYXVlKTsgIFxufVxuXG5mdW5jdGlvbiBpc1JlbmRlckJ1Y2tldEhhc0tleShuZXdLZXk6IGFueSwgY3VycmVudFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQga2V5SGFzID0gZmFsc2U7XG4gICAgcmVuZGVyQnVja2V0LmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICBpZiAoa2V5LmVsZW1lbnRJRCA9PSBuZXdLZXkuZWxlbWVudElEICYmIHZhbHVlID09IGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICBrZXlIYXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGtleUhhcztcbn1cblxuLyoqXG4gKiBmaW5kIHRoZSBwYXJlbnQgdW5pcXVlIGZsYWcgaW5kZXggYW5kIGluY3JlbWVudCBpdCBieSAxXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbGFnSW5kZXhJbmNyZW1lbnRlcih1c2VyRGVmaW5lZEVsZW1lbnQ6IEVsZW1lbnQsIGdyYW5kUGFyZW50OiBFbGVtZW50KSB7XG4gICAgaWYgKHVzZXJEZWZpbmVkRWxlbWVudCA9PSBudWxsIHx8IHVzZXJEZWZpbmVkRWxlbWVudCA9PSB1bmRlZmluZWQpIGNvbnNvbGUubG9nKFwiRVJST1I6IHVzZXJkZWluZWQgZWxlbWVudCBpcyBub3QgdmFsaWRcIik7XG4gICAgaWYgKGdyYW5kUGFyZW50ID09IG51bGwgfHwgZ3JhbmRQYXJlbnQgPT0gdW5kZWZpbmVkKSBjb25zb2xlLmxvZyhcIkVSUk9SOiBncmFuZFBhcmVudCBpcyBub3QgdmFsaWRcIik7IFxufVxuXG4vKipcbiAqIHNldCBmbGFnSW5kZXhHcmFuZFBhcmVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RmxhZ0luZGV4R3JhbmRQYXJlbnQoZmxhZ0luZGV4R3JhbmRQYXJlbnRWYWx1ZTogYW55KSB7XG4gICAgdGhpcy5mbGFnSW5kZXhHcmFuZFBhcmVudCA9IGZsYWdJbmRleEdyYW5kUGFyZW50VmFsdWU7XG59XG5cbi8qKlxuICogZ2V0IGZsYWdJbmRleEdyYW5kUGFyZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGbGFnSW5kZXhHcmFuZFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5mbGFnSW5kZXhHcmFuZFBhcmVudFxufVxuXG4vKipcbiAqIGdldCBlbGVtZW50IE9iamVjdCBmcm9tIGNvbGxlY3Rpb25zXG4gKiBAcGFyYW0gdWpzSWQgaWQgb2YgdGhlIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9nZXRFbGVtZW50Q29sbGVjdG9ucyh1anNJZDogc3RyaW5nKTogYW55IHtcbiAgICBmb3IobGV0IGVsZW1lbnQgb2YgZWxlbWVudENvbGxlY3RvbnMpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQudWpzX2lkID09IHVqc0lkKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBzZXR0ZXIgZWxlbWVudCBmb3IgZWxlbWVudENvbGxlY3RvbnMgdmFyaWFibGVcbiAqIEBwYXJhbSB1c2VyRGVmaW5lZEVsZW1lbnQgdXNlciBjcmVhdGVkIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9zZXRFbGVtZW50Q29sbGVjdG9ucyh1c2VyRGVmaW5lZEVsZW1lbnQ6IGFueSkge1xuICAgIGVsZW1lbnRDb2xsZWN0b25zLmFkZCh1c2VyRGVmaW5lZEVsZW1lbnQpO1xufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIG5ld0luaXRUcmlnZ2VySGVpZ2h0IG5ldyB2YWx1ZSBvZiBpbml0VHJpZ2dlckhlaWdodCB2YXJpYmFsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX3NldEluaXRUcmlnZ2VySGVpZ2h0KG5ld0luaXRUcmlnZ2VySGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRUcmlnZ2VySGVpZ2h0ID0gbmV3SW5pdFRyaWdnZXJIZWlnaHQ7XG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0gbmV3RmxhZ1BvaW50IG5ldyB2YWx1ZSBvZiBmbGFnUG9pbnQgdmFyaWJhbGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9zZXRGbGFnUG9pbnQobmV3RmxhZ1BvaW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmZsYWdQb2ludCA9IG5ld0ZsYWdQb2ludDtcbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB1c2VyRGVmaW5lZFJvdXRlcnMgdXNlciBkZWZpbmVkIHJvdXRlciBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9zZXRSb3V0ZXJzKHVzZXJEZWZpbmVkUm91dGVyczogYW55KTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXJzID0gdXNlckRlZmluZWRSb3V0ZXJzO1xufVxuXG4vKipcbiAqIFxuICogZ2V0dGVyIGZvciByb3V0ZXJzIHZhcmlhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0Um91dGVycygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnJvdXRlcnM7XG59XG4iLCIvL2ltcG9ydCB7cm91dGVzfSBmcm9tICcuLi8uLi8uLi90ZXN0L2hvbWVwYWdlL3JvdXRlcyc7XG5pbXBvcnQge3JvdXRlc30gZnJvbSAnLi4vLi4vLi4vY29udHJvbGxlcnMvcm91dGVzL3JvdXRlcyc7XG5uZXcgcm91dGVzKCk7XG4vL2lnbml0ZSAiLCJpbXBvcnQge0VsZW1lbnR9IGZyb20gJy4uL191cmFuaXVtdmlldy9lbGVtZW50JztcbmltcG9ydCB7X3NldEZsYWdQb2ludCwgcmVuZGVyQnVja2V0LCBzZXRSZW5kZXJCdWNrZXQsIGdldEN1cnJlbnRIYXNoVmFsdWUsIGV2ZW50TGlzdG5lckFycmF5fSBmcm9tICcuLi9fZ2xvYmFsL2dsb2JhbHZhcmlhYmxlJztcbmltcG9ydCB7aW5pdFRyaWdnZXJIZWlnaHQsIHNldEZsYWdJbmRleEdyYW5kUGFyZW50LGdldEZsYWdJbmRleEdyYW5kUGFyZW50fSBmcm9tICcuLi9fZ2xvYmFsL2dsb2JhbHZhcmlhYmxlJztcbmltcG9ydCB7c3R5bGVBdHRyaWJ1dGVzfSBmcm9tICcuLi9fZ2xvYmFsL3N0eWxlQXR0cmlidXRzJztcbi8qKlxuICogXG4gKiBAcGFyYW0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50IEhUTUwgZWxlbWVudCB0aGF0IG5lZWQgdG8gY29udmVydCBzdHJpbmcgdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX19yZWNydXNpdmUodXNlckRlZmluZWRSZW5kZXJFbGVtZW50OiBFbGVtZW50LCBmbGFnSW5kZXg/OiBhbnksIHBhcmVudFJlbmRlckVsZW1lbnQ/OiBFbGVtZW50KTogc3RyaW5nIHtcbiAgICBpZih1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnVqc19yX2hlaWdodCA+IGluaXRUcmlnZ2VySGVpZ2h0KSB7XG4gICAgICAgIGlmKChmbGFnSW5kZXggIT0gdW5kZWZpbmVkIHx8IGZsYWdJbmRleCAhPSBudWxsKSAmJiAoZmxhZ0luZGV4ICE9IHRydWUgfHwgZmxhZ0luZGV4ICE9IGZhbHNlKSl7XG4gICAgICAgICAgICBwYXJlbnRSZW5kZXJFbGVtZW50LmZsYWdJbmRleCA9IGZsYWdJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmxhZ0luZGV4ICE9IHVuZGVmaW5lZCAmJiAoZmxhZ0luZGV4ICE9IHRydWUgfHwgZmxhZ0luZGV4ICE9IGZhbHNlKSkge1xuICAgICAgICAgICAgLy9yZW5kZXJCdWNrZXQuc2V0KHBhcmVudFJlbmRlckVsZW1lbnQsIGZsYWdJbmRleCk7XG4gICAgICAgICAgICBzZXRSZW5kZXJCdWNrZXQocGFyZW50UmVuZGVyRWxlbWVudCwgZ2V0Q3VycmVudEhhc2hWYWx1ZSgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vcmVuZGVyQnVja2V0LnNldChwYXJlbnRSZW5kZXJFbGVtZW50LCAwKTtcbiAgICAgICAgICAgIHNldFJlbmRlckJ1Y2tldChwYXJlbnRSZW5kZXJFbGVtZW50LCBnZXRDdXJyZW50SGFzaFZhbHVlKCkpO1xuICAgICAgICB9XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9O1xuICAgIGxldCB0ZW1wb3J5SW5uZXJIdG1sOiBzdHJpbmc7XG4gICAgaWYodXNlckRlZmluZWRSZW5kZXJFbGVtZW50LmdsdWVPYmplY3RBcnJheS5sZW5ndGggPT0gMCApIHtcbiAgICAgICAgaWYodXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5pbm5lckhUTUwgIT0gbnVsbCB8fCB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmlubmVySFRNTCAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGVtcG9yeUlubmVySHRtbCA9IFN0cmluZyh1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmlubmVySFRNTCk7XG4gICAgICAgIH1cbiAgICAgICBwYXJlbnRSZW5kZXJFbGVtZW50LmZsYWdJbmRleCA9ICgrcGFyZW50UmVuZGVyRWxlbWVudC5mbGFnSW5kZXgpICsxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcihsZXQgaSA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC5mbGFnSW5kZXg7IGkgPCB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQuZ2x1ZU9iamVjdEFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGxldCByZWNydXNpdmVfcmVzdWx0ID0gX19yZWNydXNpdmUodXNlckRlZmluZWRSZW5kZXJFbGVtZW50LmdsdWVPYmplY3RBcnJheVtpXSxpLHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudClcbiAgICAgICAgICAgIGlmKHRlbXBvcnlJbm5lckh0bWwgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGVtcG9yeUlubmVySHRtbCA9IHJlY3J1c2l2ZV9yZXN1bHQ7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgdGVtcG9yeUlubmVySHRtbCA9IHRlbXBvcnlJbm5lckh0bWwgKyByZWNydXNpdmVfcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlY3J1c2l2ZV9yZXN1bHQgPT0gXCJcIikgYnJlYWs7IFxuICAgICAgICB9XG4gICAgfVxuICAgIGV2ZW50TGlzdG5lckFycmF5LnB1c2godXNlckRlZmluZWRSZW5kZXJFbGVtZW50KTtcbiAgICByZXR1cm4gZG9tRWxlbWVudENyZWF0ZXIodGVtcG9yeUlubmVySHRtbCx1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQsZmxhZ0luZGV4KTtcbn1cbi8qKlxuICogXG4gKiBAcGFyYW0gdGVtcG9yeUlubmVySHRtbCBob2xkIHRoZSBwcmV2aW91cyBodG1sIGVsZW1lbnRzXG4gKiBAcGFyYW0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50IHVzZXIgZGVmaW5lZCBodG1sIGVsZW1lbnQgXG4gKiBAcGFyYW0gZmxhZ0luZGV4IHBvaW50IHRoYXQgcHJldmlvdXMgcmVuZGVyIHN0b3BwZWRcbiAqL1xuZnVuY3Rpb24gZG9tRWxlbWVudENyZWF0ZXIodGVtcG9yeUlubmVySHRtbDogc3RyaW5nLCB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQ6IEVsZW1lbnQsIGZsYWdJbmRleD86IGFueSk6IHN0cmluZyB7XG4gICAgbGV0IERPTUVsZW1lbnQ6IHN0cmluZztcbiAgICBsZXQgYWNjZXB0VmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuYWNjZXB0ID8gKFwiIGFjY2VwdD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5hY2NlcHQrXCInXCIpIDogJyc7XG4gICAgbGV0IGFjY2VwdGNoYXJzZXRWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5hY2NlcHRfY2hhcnNldCA/IChcIiBhY2NlcHQtY2hhcnNldD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5hY2NlcHRfY2hhcnNldCtcIidcIikgOiAnJztcbiAgICBsZXQgYWNjZXNza2V5VmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuYWNjZXNza2V5ID8gKFwiIGFjY2Vzc2tleT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5hY2Nlc3NrZXkrXCInXCIpIDogJyc7XG4gICAgbGV0IGFjdGlvblZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmFjdGlvbiA/IChcIiBhY3Rpb249J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuYWN0aW9uK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBhbGlnblZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmFsaWduID8gKFwiIGFsaWduPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmFsaWduK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBhbGxvd1ZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmFsbG93ID8gKFwiIGFsbG93PSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmFsbG93K1wiJ1wiKSA6ICcnO1xuICAgIGxldCBhbHRWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5hbHQgPyAoXCIgYWx0PSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmFsdCtcIidcIikgOiAnJztcbiAgICBsZXQgYXN5bmNWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5hc3luYyA/IChcIiBhc3luYz0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5hc3luYytcIidcIikgOiAnJztcbiAgICBsZXQgYXV0b2NhcGl0YWxpemVWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5hdXRvY2FwaXRhbGl6ZSA/IChcIiBhdXRvY2FwaXRhbGl6ZT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5hdXRvY2FwaXRhbGl6ZStcIidcIikgOiAnJztcbiAgICBsZXQgYXV0b2NvbXBsZXRlVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuYXV0b2NvbXBsZXRlID8gKFwiIGF1dG9jb21wbGV0ZT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5hdXRvY29tcGxldGUrXCInXCIpIDogJyc7XG4gICAgbGV0IGF1dG9mb2N1c1ZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmF1dG9mb2N1cyA/IChcIiBhdXRvZm9jdXM9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuYXV0b2ZvY3VzK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBhdXRvcGxheVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmF1dG9wbGF5ID8gKFwiIGF1dG9wbGF5PSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmF1dG9wbGF5K1wiJ1wiKSA6ICcnO1xuICAgIGxldCBiZ2NvbG9yVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuYmdjb2xvciA/IChcIiBiZ2NvbG9yPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmJnY29sb3IrXCInXCIpIDogJyc7XG4gICAgbGV0IGJvcmRlclZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmJvcmRlciA/IChcIiBib3JkZXI9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuYm9yZGVyK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBidWZmZXJlZFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmJ1ZmZlcmVkID8gKFwiIGJ1ZmZlcmVkPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmJ1ZmZlcmVkK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBjaGFsbGVuZ2VWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jaGFsbGVuZ2UgPyAoXCIgY2hhbGxlbmdlPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNoYWxsZW5nZStcIidcIikgOiAnJztcbiAgICBsZXQgY2hhcnNldFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNoYXJzZXQgPyAoXCIgY2hhcnNldD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jaGFyc2V0K1wiJ1wiKSA6ICcnO1xuICAgIGxldCBjaGVja2VkVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuY2hlY2tlZCA/IChcIiBjaGVja2VkPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNoZWNrZWQrXCInXCIpIDogJyc7XG4gICAgbGV0IGNpdGVWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jaXRlID8gKFwiIGNpdGU9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuY2l0ZStcIidcIikgOiAnJztcbiAgICBsZXQgY2xhc3NWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jbGFzcyA/IChcIiBjbGFzcz0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jbGFzcytcIidcIikgOiAnJztcbiAgICBsZXQgY29kZVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNvZGUgPyAoXCIgY29kZT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jb2RlK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBjb2RlYmFzZVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNvZGViYXNlID8gKFwiIGNvZGViYXNlPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNvZGViYXNlK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBjb2xvclZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNvbG9yID8gKFwiIGNvbG9yPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNvbG9yK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBjb2xzVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuY29scyA/IChcIiBjb2xzPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNvbHMrXCInXCIpIDogJyc7XG4gICAgbGV0IGNvbHNwYW5WYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jb2xzcGFuID8gKFwiIGNvbHNwYW49J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuY29sc3BhbitcIidcIikgOiAnJztcbiAgICBsZXQgY29udGVudFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNvbnRlbnQgPyAoXCIgY29udGVudD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jb250ZW50K1wiJ1wiKSA6ICcnO1xuICAgIGxldCBjb250ZW50ZWRpdGFibGVWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jb250ZW50ZWRpdGFibGUgPyAoXCIgY29udGVudGVkaXRhYmxlPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNvbnRlbnRlZGl0YWJsZStcIidcIikgOiAnJztcbiAgICBsZXQgY29udGV4dG1lbnVWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jb250ZXh0bWVudSA/IChcIiBjb250ZXh0bWVudT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jb250ZXh0bWVudStcIidcIikgOiAnJztcbiAgICBsZXQgY29udHJvbHNWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jb250cm9scyA/IChcIiBjb250cm9scz0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jb250cm9scytcIidcIikgOiAnJztcbiAgICBsZXQgY29vcmRzVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuY29vcmRzID8gKFwiIGNvb3Jkcz0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jb29yZHMrXCInXCIpIDogJyc7XG4gICAgbGV0IGNyb3Nzb3JpZ2luVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuY3Jvc3NvcmlnaW4gPyAoXCIgY3Jvc3NvcmlnaW49J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuY3Jvc3NvcmlnaW4rXCInXCIpIDogJyc7XG4gICAgbGV0IGNzcFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmNzcCA/IChcIiBjc3A9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuY3NwK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBkYXRhVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZGF0YSA/IChcIiBkYXRhPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmRhdGErXCInXCIpIDogJyc7XG4gICAgbGV0IGRhdGFfU3RhclZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmRhdGFfc3RhciA/IChcIiBkYXRhLSo9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZGF0YV9zdGFyK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBkYXRldGltZVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmRhdGV0aW1lID8gKFwiIGRhdGV0aW1lPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmRhdGV0aW1lK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBkZWNvZGluZ1ZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmRlY29kaW5nID8gKFwiIGRlY29kaW5nPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmRlY29kaW5nK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBkZWZhdWx0VmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZGVmYXVsdCA/IChcIiBkZWZhdWx0PSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmRlZmF1bHQrXCInXCIpIDogJyc7XG4gICAgbGV0IGRlZmVyVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZGVmZXIgPyAoXCIgZGVmZXI9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZGVmZXIrXCInXCIpIDogJyc7XG4gICAgbGV0IGRpclZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmRpciA/IChcIiBkaXI9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZGlyK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBkaXJuYW1lVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZGlybmFtZSA/IChcIiBkaXJuYW1lPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmRpcm5hbWUrXCInXCIpIDogJyc7XG4gICAgbGV0IGRpc2FibGVkVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZGlzYWJsZWQgPyAoXCIgZGlzYWJsZWQ9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZGlzYWJsZWQrXCInXCIpIDogJyc7XG4gICAgbGV0IGRvd25sb2FkVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZG93bmxvYWQgPyAoXCIgZG93bmxvYWQ9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZG93bmxvYWQrXCInXCIpIDogJyc7XG4gICAgbGV0IGRyYWdnYWJsZVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmRyYWdnYWJsZSA/IChcIiBkcmFnZ2FibGU9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZHJhZ2dhYmxlK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBkcm9wem9uZVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmRyb3B6b25lID8gKFwiIGRyb3B6b25lPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmRyb3B6b25lK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBlbmN0eXBlVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZW5jdHlwZSA/IChcIiBlbmN0eXBlPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmVuY3R5cGUrXCInXCIpIDogJyc7XG4gICAgbGV0IGZvclZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmZvciA/IChcIiBmb3I9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZm9yK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBmb3JtVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZm9ybSA/IChcIiBmb3JtPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmZvcm0rXCInXCIpIDogJyc7XG4gICAgbGV0IGZvcm1hY3Rpb25WYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5mb3JtYWN0aW9uID8gKFwiIGZvcm1hY3Rpb249J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZm9ybWFjdGlvbitcIidcIikgOiAnJztcbiAgICBsZXQgaGVhZGVyc1ZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmhlYWRlcnMgPyAoXCIgaGVhZGVycz0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5oZWFkZXJzK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBoaWRkZW5WYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5oaWRkZW4gPyAoXCIgaGlkZGVuPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmhpZGRlbitcIidcIikgOiAnJztcbiAgICBsZXQgaGlnaFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmhpZ2ggPyAoXCIgaGlnaD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5oaWdoK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBocmVmVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaHJlZiA/IChcIiBocmVmPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmhyZWYrXCInXCIpIDogJyc7XG4gICAgbGV0IGhyZWZsYW5nVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaHJlZmxhbmcgPyAoXCIgaHJlZmxhbmc9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaHJlZmxhbmcrXCInXCIpIDogJyc7XG4gICAgbGV0IGh0dHBfZXF1aXZWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5odHRwX2VxdWl2ID8gKFwiIGh0dHAtZXF1aXY9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaHR0cF9lcXVpditcIidcIikgOiAnJztcbiAgICBsZXQgaWNvblZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lmljb24gPyAoXCIgaWNvbj0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5pY29uK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBpZFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnVqc19pZCA/IChcIiBpZD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC51anNfaWQrXCInXCIpIDogJyc7XG4gICAgbGV0IGltcG9ydGFuY2VWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5pbXBvcnRhbmNlID8gKFwiIGltcG9ydGFuY2U9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaW1wb3J0YW5jZStcIidcIikgOiAnJztcbiAgICBsZXQgaW50ZWdyaXR5VmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaW50ZWdyaXR5ID8gKFwiIGludGVncml0eT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5pbnRlZ3JpdHkrXCInXCIpIDogJyc7XG4gICAgbGV0IGlzbWFwVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaXNtYXAgPyAoXCIgaXNtYXA9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaXNtYXArXCInXCIpIDogJyc7XG4gICAgbGV0IGl0ZW1wcm9wVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaXRlbXByb3AgPyAoXCIgaXRlbXByb3A9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaXRlbXByb3ArXCInXCIpIDogJyc7XG4gICAgbGV0IGtleXR5cGVWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5pdGVtcHJvcCA/IChcIiBrZXl0eXBlPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmtleXR5cGUrXCInXCIpIDogJyc7XG4gICAgbGV0IGtpbmRWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5raW5kID8gKFwiIGtpbmQ9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQua2luZCtcIidcIikgOiAnJztcbiAgICBsZXQgbGFiZWxWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5sYWJlbCA/IChcIiBsYWJlbD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5sYWJlbCtcIidcIikgOiAnJztcbiAgICBsZXQgbGFuZ1ZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmxhbmcgPyAoXCIgbGFuZz0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5sYW5nK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBsYW5ndWFnZVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lmxhbmd1YWdlID8gKFwiIGxhbmd1YWdlPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lmxhbmd1YWdlK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBsYXp5bG9hZFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lmxhenlsb2FkID8gKFwiIGxhenlsb2FkPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lmxhenlsb2FkK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBsaXN0VmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubGlzdCA/IChcIiBsaXN0PSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lmxpc3QrXCInXCIpIDogJyc7XG4gICAgbGV0IGxvb3BWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5sb29wID8gKFwiIGxvb3A9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubG9vcCtcIidcIikgOiAnJztcbiAgICBsZXQgbG93VmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubG93ID8gKFwiIGxvdz0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5sb3crXCInXCIpIDogJyc7XG4gICAgbGV0IG1hbmlmZXN0VmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubWFuaWZlc3QgPyAoXCIgbWFuaWZlc3Q9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubWFuaWZlc3QrXCInXCIpIDogJyc7XG4gICAgbGV0IG1heFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lm1heCA/IChcIiBtYXg9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubWF4K1wiJ1wiKSA6ICcnO1xuICAgIGxldCBtYXhsZW5ndGhWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5tYXhsZW5ndGggPyAoXCIgbWF4bGVuZ3RoPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lm1heGxlbmd0aCtcIidcIikgOiAnJztcbiAgICBsZXQgbWlubGVuZ3RoVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubWlubGVuZ3RoID8gKFwiIG1pbmxlbmd0aD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5taW5sZW5ndGgrXCInXCIpIDogJyc7XG4gICAgbGV0IG1lZGlhVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubWVkaWEgPyAoXCIgbWVkaWE9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubWVkaWErXCInXCIpIDogJyc7XG4gICAgbGV0IG1ldGhvZFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lm1ldGhvZCA/IChcIiBtZXRob2Q9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubWV0aG9kK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBtaW5WYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5taW4gPyAoXCIgbWluPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lm1pbitcIidcIikgOiAnJztcbiAgICBsZXQgbXVsdGlwbGVWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5tdWx0aXBsZSA/IChcIiBtdWx0aXBsZT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5tdWx0aXBsZStcIidcIikgOiAnJztcbiAgICBsZXQgbXV0ZWRWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5tdXRlZCA/IChcIiBtdXRlZD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5tdXRlZCtcIidcIikgOiAnJztcbiAgICBsZXQgbmFtZVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lm5hbWUgPyAoXCIgbmFtZT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5uYW1lK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBub3ZhbGlkYXRlVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQubm92YWxpZGF0ZSA/IChcIiBub3ZhbGlkYXRlPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lm5vdmFsaWRhdGUrXCInXCIpIDogJyc7XG4gICAgbGV0IG9wZW5WYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5vcGVuID8gKFwiIG9wZW49J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQub3BlbitcIidcIikgOiAnJztcbiAgICBsZXQgb3B0aW11bVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50Lm9wdGltdW0gPyAoXCIgb3B0aW11bT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5vcHRpbXVtK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBwYXR0ZXJuVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQucGF0dGVybiA/IChcIiBwYXR0ZXJuPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnBhdHRlcm4rXCInXCIpIDogJyc7XG4gICAgbGV0IHBpbmdWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5waW5nID8gKFwiIHBpbmc9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQucGluZytcIidcIikgOiAnJztcbiAgICBsZXQgcGxhY2Vob2xkZXJWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5wbGFjZWhvbGRlciA/IChcIiBwbGFjZWhvbGRlcj0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5wbGFjZWhvbGRlcitcIidcIikgOiAnJztcbiAgICBsZXQgcG9zdGVyVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQucG9zdGVyID8gKFwiIHBvc3Rlcj0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5wb3N0ZXIrXCInXCIpIDogJyc7XG4gICAgbGV0IHByZWxvYWRWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5wcmVsb2FkID8gKFwiIHByZWxvYWQ9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQucHJlbG9hZCtcIidcIikgOiAnJztcbiAgICBsZXQgcmFkaW9ncm91cFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnJhZGlvZ3JvdXAgPyAoXCIgcmFkaW9ncm91cD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5yYWRpb2dyb3VwK1wiJ1wiKSA6ICcnO1xuICAgIGxldCByZWFkb25seVZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnJlYWRvbmx5ID8gKFwiIHJlYWRvbmx5PSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnJlYWRvbmx5K1wiJ1wiKSA6ICcnO1xuICAgIGxldCByZWxWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5yZWwgPyAoXCIgcmVsPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnJlbCtcIidcIikgOiAnJztcbiAgICBsZXQgcmVxdWlyZWRWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5yZXF1aXJlZCA/IChcIiByZXF1aXJlZD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5yZXF1aXJlZCtcIidcIikgOiAnJztcbiAgICBsZXQgcmV2ZXJzZWRWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5yZXZlcnNlZCA/IChcIiByZXZlcnNlZD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5yZXZlcnNlZCtcIidcIikgOiAnJztcbiAgICBsZXQgcm93c1ZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnJvd3MgPyAoXCIgcm93cz0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5yb3dzK1wiJ1wiKSA6ICcnO1xuICAgIGxldCByb3dzcGFuVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQucm93c3BhbiA/IChcIiByb3dzcGFuPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnJvd3NwYW4rXCInXCIpIDogJyc7XG4gICAgbGV0IHNhbmRib3hWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zYW5kYm94ID8gKFwiIHNhbmRib3g9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc2FuZGJveCtcIidcIikgOiAnJztcbiAgICBsZXQgc2NvcGVWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zY29wZSA/IChcIiBzY29wZT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zY29wZStcIidcIikgOiAnJztcbiAgICBsZXQgc2NvcGVkVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc2NvcGVkID8gKFwiIHNjb3BlZD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zY29wZWQrXCInXCIpIDogJyc7XG4gICAgbGV0IHNlbGVjdGVkVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc2VsZWN0ZWQgPyAoXCIgc2VsZWN0ZWQ9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc2VsZWN0ZWQrXCInXCIpIDogJyc7XG4gICAgbGV0IHNoYXBlVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc2hhcGUgPyAoXCIgc2hhcGU9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc2hhcGUrXCInXCIpIDogJyc7XG4gICAgbGV0IHNpemVWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zaXplID8gKFwiIHNpemU9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc2l6ZStcIidcIikgOiAnJztcbiAgICBsZXQgc2l6ZXNWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zaXplcyA/IChcIiBzaXplcz0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zaXplcytcIidcIikgOiAnJztcbiAgICBsZXQgc2xvdFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnNsb3QgPyAoXCIgc2xvdD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zbG90K1wiJ1wiKSA6ICcnO1xuICAgIGxldCBzcGFuVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc3BhbiA/IChcIiBzcGFuPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnNwYW4rXCInXCIpIDogJyc7XG4gICAgbGV0IHNwZWxsY2hlY2tWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zcGVsbGNoZWNrID8gKFwiIHNwZWxsY2hlY2s9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc3BlbGxjaGVjaytcIidcIikgOiAnJztcbiAgICBsZXQgc3JjVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc3JjID8gKFwiIHNyYz0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zcmMrXCInXCIpIDogJyc7XG4gICAgbGV0IHNyY2RvY1ZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnNyY2RvYyA/IChcIiBzcmNkb2M9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc3JjZG9jK1wiJ1wiKSA6ICcnO1xuICAgIGxldCBzcmNsYW5nVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc3JjbGFuZyA/IChcIiBzcmNsYW5nPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnNyY2xhbmcrXCInXCIpIDogJyc7XG4gICAgbGV0IHNyY3NldFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnNyY3NldCA/IChcIiBzcmNzZXQ9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc3Jjc2V0K1wiJ1wiKSA6ICcnO1xuICAgIGxldCBzdGFydFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnN0YXJ0ID8gKFwiIHN0YXJ0PSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnN0YXJ0K1wiJ1wiKSA6ICcnO1xuICAgIGxldCBzdGVwVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc3RlcCA/IChcIiBzdGVwPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnN0ZXArXCInXCIpIDogJyc7XG4gICAgbGV0IHN0eWxlVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc3R5bGUgPyAoXCIgc3R5bGU9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc3R5bGUrXCInXCIpIDogJyc7XG4gICAgbGV0IHN1bW1hcnlWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5zdW1tYXJ5ID8gKFwiIHN1bW1hcnk9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuc3VtbWFyeStcIidcIikgOiAnJztcbiAgICBsZXQgdGFiaW5kZXhWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC50YWJpbmRleCA/IChcIiB0YWJpbmRleD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC50YWJpbmRleCtcIidcIikgOiAnJztcbiAgICBsZXQgdGl0bGVWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC50aXRsZSA/IChcIiB0aXRsZT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC50aXRsZStcIidcIikgOiAnJztcbiAgICBsZXQgdHJhbnNsYXRlVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQudHJhbnNsYXRlID8gKFwiIHRyYW5zbGF0ZT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC50cmFuc2xhdGUrXCInXCIpIDogJyc7XG4gICAgbGV0IHR5cGVWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC50eXBlID8gKFwiIHR5cGU9J1wiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQudHlwZStcIidcIikgOiAnJztcbiAgICBsZXQgdXNlbWFwVmFsdWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQudXNlbWFwID8gKFwiIHVzZW1hcHBlPSdcIit1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnVzZW1hcCtcIidcIikgOiAnJztcbiAgICBsZXQgdmFsdWVWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC52YWx1ZSA/IChcIiB2YWx1ZT0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC52YWx1ZStcIidcIikgOiAnJztcbiAgICBsZXQgd2lkdGhWYWx1ZTogc3RyaW5nID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC53aWR0aCA/IChcIiB3aWR0aD0nXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC53aWR0aCtcIidcIikgOiAnJztcbiAgICBsZXQgd3JhcFZhbHVlOiBzdHJpbmcgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LndyYXAgPyAoXCIgd3JhcD0nXCLCoMKgwqArdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC53cmFwK1wiJ1wiKSA6ICcnO1xuICAgXG4gICAgLyoqXG4gICAgICogc2hvdyB0aGUgd2Fybm5pbmcgaWYgYXR0aWJ1dGVzIGFyZSBub3QgdmFsaWQgXG4gICAgICovXG4gICAgdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5hZGRjbGFzcyA/IChjb25zb2xlLmxvZygnW1VKUyBXQVJSTklOR106OiBhZGQgY2xhc3NlcyBpcyBub3QgdmFsaWQgaGVyZSwgdXNlIFJlYWN0b3IgdG8gYWRkIGNsYXNzZXMgdmFsdWVzJykpOiAnJztcbiAgICB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmlkID8gKGNvbnNvbGUubG9nKCdbVUpTIFdBUlJOSU5HXTo6IHNldHRpbmcgaWQgdmFsdWUgaXMgbm90IHZhbGlkJykpOiAnJztcblxuICAgIGlmKCh0ZW1wb3J5SW5uZXJIdG1sID09IHVuZGVmaW5lZCB8fCB0ZW1wb3J5SW5uZXJIdG1sID09IG51bGwgfHwgdGVtcG9yeUlubmVySHRtbCA9PSBcIlwiKSAmJiBmbGFnSW5kZXggIT09IHRydWUpe1xuICAgICAgICBET01FbGVtZW50ID0gXCI8XCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5lbGVtZW50K1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdGNoYXJzZXRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NrZXlWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25WYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnblZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmNWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6ZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1c1ZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvclZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcmVkVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbGxlbmdlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnNldFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXRlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZWJhc2VWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvclZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHNWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzcGFuVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRlZGl0YWJsZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRtZW51VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbHNWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZHNWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9zc29yaWdpblZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhX1N0YXJWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRldGltZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kaW5nVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVyVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlybmFtZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wem9uZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuY3R5cGVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWFjdGlvblZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnNWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW5WYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZlZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWZsYW5nVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHR0cF9lcXVpdlZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25WYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFuY2VWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlZ3JpdHlWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc21hcFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1wcm9wVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5dHlwZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmdWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhenlsb2FkVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3dWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5pZmVzdFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmxlbmd0aFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRlZFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3ZhbGlkYXRlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGltdW1WYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGluZ1ZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGVyVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlbG9hZFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGlvZ3JvdXBWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZWRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c3BhblZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbmRib3hWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZXNWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhblZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWxsY2hlY2tWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNkb2NWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNsYW5nVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXhWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VtYXBWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgXCI+XCIrXG4gICAgICAgICAgICAgICAgICAgICBcIjwvXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5lbGVtZW50K1wiPlwiO1xuICAgIH1lbHNlIGlmKGZsYWdJbmRleCA9PT0gdHJ1ZSl7XG4gICAgICAgIERPTUVsZW1lbnQgPSB0ZW1wb3J5SW5uZXJIdG1sO1xuICAgIH0gZWxzZXtcbiAgICAgICAgRE9NRWxlbWVudCA9IFwiPFwiK3VzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuZWxlbWVudCtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHRjaGFyc2V0VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNza2V5VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25WYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd1ZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvZm9jdXNWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvcGxheVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3JWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJlZFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWxsZW5nZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJzZXRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2l0ZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGViYXNlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sc3BhblZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ZWRpdGFibGVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0bWVudVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRzVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NvcmlnaW5WYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3BWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YV9TdGFyVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZXRpbWVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGluZ1ZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlclZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpclZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcm5hbWVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcHpvbmVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmN0eXBlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hY3Rpb25WYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWZWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmbGFuZ1ZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBfZXF1aXZWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbmNlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZWdyaXR5VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNtYXBWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcHJvcFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXR5cGVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXp5bG9hZFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29wVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG93VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuaWZlc3RWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGhWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5sZW5ndGhWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0ZWRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm92YWxpZGF0ZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5WYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpbXVtVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVyblZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpbmdWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RlclZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWxvYWRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpb2dyb3VwVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmVyc2VkVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c1ZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3NwYW5WYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5kYm94VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVzVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW5WYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVsbGNoZWNrVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjZG9jVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjbGFuZ1ZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY3NldFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtbWFyeVZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4VmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlbWFwVmFsdWUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aFZhbHVlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBWYWx1ZStcbiAgICAgICAgICAgICAgICAgICAgXCI+XCIrXG4gICAgICAgICAgICAgICAgICAgICB0ZW1wb3J5SW5uZXJIdG1sK1xuICAgICAgICAgICAgICAgICAgICBcIjwvXCIrdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5lbGVtZW50K1wiPlwiO1xuICAgIH1cbiAgICByZXR1cm4gRE9NRWxlbWVudDtcbn1cbiIsImltcG9ydCB7RWxlbWVudH0gZnJvbSAnLi4vX3VyYW5pdW12aWV3L2VsZW1lbnQnO1xuaW1wb3J0IHtfc2V0RmxhZ1BvaW50LCBfZ2V0RWxlbWVudENvbGxlY3RvbnMsIGV2ZW50TGlzdG5lckFycmF5fSBmcm9tICcuLi9fZ2xvYmFsL2dsb2JhbHZhcmlhYmxlJztcbmltcG9ydCB7aW5pdFRyaWdnZXJIZWlnaHQsIGZsYWdQb2ludH0gZnJvbSAnLi4vX2dsb2JhbC9nbG9iYWx2YXJpYWJsZSc7XG5pbXBvcnQge3N0eWxlQXR0cmlidXRlc30gZnJvbSAnLi4vX2dsb2JhbC9zdHlsZUF0dHJpYnV0cyc7XG5pbXBvcnQge19fcmVjcnVzaXZlfSBmcm9tICcuLi9fcmVjcnVzaXZlL3JlY3J1c2l2ZSc7XG5cbnZhciBncmFuZFBhcmVudDogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuLyoqXG4gKiBcbiAqIEBwYXJhbSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQgSFRNTCBlbGVtZW50IHRoYXQgbmVlZCB0byBjb252ZXJ0IHN0cmluZyB0eXBlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3JlY3J1c2l2ZUluamVjdG9yKHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudDogRWxlbWVudCwgZmxhZ0luZGV4PzogYW55LCBwYXJlbnRSZW5kZXJFbGVtZW50PzogRWxlbWVudCk6IHZvaWQge1xuICAgIGxldCBwYXJlbnROb2RlOiBhbnkgPSBnZXRQYXJlbnRGcm9tRE9NKHBhcmVudFJlbmRlckVsZW1lbnQpO1xuICAgIGlmIChwYXJlbnROb2RlID09IHVuZGVmaW5lZCkge1xuICAgICAgICBsZXQgbm9kZUNvbGxlY3Rpb25TdHJpbmcgPSBfX3JlY3J1c2l2ZSh1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQsIGZsYWdJbmRleCwgcGFyZW50UmVuZGVyRWxlbWVudCk7XG4gICAgICAgIGdyYW5kUGFyZW50LmlubmVySFRNTCA9IGdyYW5kUGFyZW50LmlubmVySFRNTCsgbm9kZUNvbGxlY3Rpb25TdHJpbmc7XG4gICAgICAgIGFkZEV2ZW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRvbVBhcmVudE5vZGVBbGxDaGlsZHM6YW55ID0gQXJyYXkuZnJvbShnZXRBbGxCcmFuY2hlc0luTm9kZShwYXJlbnROb2RlKSk7XG4gICAgICAgIGxldCBkb21QYXJlbnRDaGlsZExlbmd0aDogYW55ID0gIGRvbVBhcmVudE5vZGVBbGxDaGlsZHMubGVuZ3RoO1xuICAgICAgICAvL2xldCBkb21QYXJlbnRDaGlsZEluZGV4Q2xvbmUgPSBkb21QYXJlbnROb2RlQWxsQ2hpbGRzLlxuICAgICAgICBpZiAoZG9tUGFyZW50Tm9kZUFsbENoaWxkcy5sZW5ndGggPT0gMCkgeyBcbiAgICAgICAgICAgIGxldCBub2RlQ29sbGVjdGlvblN0cmluZyA9IF9fcmVjcnVzaXZlKHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudCwgZmxhZ0luZGV4LCBwYXJlbnRSZW5kZXJFbGVtZW50KTtcbiAgICAgICAgICAgIHBhcmVudE5vZGUuaW5uZXJIVE1MID0gbm9kZUNvbGxlY3Rpb25TdHJpbmc7XG4gICAgICAgICAgICBhZGRFdmVudCgpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgLy8gcGFyZW50Tm9kZS5pbm5lckhUTUwgPSAgX19yZWNydXNpdmUodXNlckRlZmluZWRSZW5kZXJFbGVtZW50LCBmbGFnSW5kZXgsIHBhcmVudFJlbmRlckVsZW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGZsYWdJbmRleCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBsZXQgbmV3Tm9kZUFycmF5OiBhbnkgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkSW5kZXggPSAodXNlckRlZmluZWRSZW5kZXJFbGVtZW50LmZsYWdJbmRleCsxKTsgY2hpbGRJbmRleCA8IHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC5nbHVlT2JqZWN0QXJyYXkubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcbiAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGlsZEluZGV4JyxjaGlsZEluZGV4KTtcbiAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXNlckRlZmluZWRSZW5kZXJFbGVtZW50OlwiLCB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGVDb2xsZWN0aW9uU3RyaW5nID0gX19yZWNydXNpdmUodXNlckRlZmluZWRSZW5kZXJFbGVtZW50LmdsdWVPYmplY3RBcnJheVtjaGlsZEluZGV4XSwgdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LmZsYWdJbmRleCwgdXNlckRlZmluZWRSZW5kZXJFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZUNvbGxlY3Rpb25TdHJpbmcgPT0gJycpIGJyZWFrOyBcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcobm9kZUNvbGxlY3Rpb25TdHJpbmcsJ3RleHQvaHRtbCcpO1xuICAgICAgICAgICAgICAgIGxldCBub2RlQ2xvbmUgPSBub2RlO1xuICAgICAgICAgICAgICAgIG5vZGVDbG9uZSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZUFycmF5LnB1c2gobm9kZUNsb25lLmJvZHkuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgICAgIGFkZEV2ZW50KCk7XG4gICAgICAgICAgICAgICAgLy8gcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChub2RlQ2xvbmUuYm9keS5jaGlsZHJlblswXS5jaGlsZHJlblsyXSk7XG4gICAgICAgICAgICAgICAgLy8gcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZS5ib2R5LmNoaWxkcmVuWzBdLmNoaWxkTm9kZXNbY2hpbGRJbmRleF0sIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBuZXdOb2RlQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgICAgIGFkZEV2ZW50KCk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ3JhbmRQYXJlbnQgPSBwYXJlbnROb2RlO1xuICAgICAgICAgICAgbGV0IGNoaWxkcmVuX3NpemUgPSBkb21QYXJlbnROb2RlQWxsQ2hpbGRzLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAobGV0IGRvbVBhcmVudENoaWxkSW5kZXggPSAwOyBkb21QYXJlbnRDaGlsZEluZGV4IDwgY2hpbGRyZW5fc2l6ZTsgZG9tUGFyZW50Q2hpbGRJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0ICBuZXdFbGVtZW50ID0gcGFyZW50UmVuZGVyRWxlbWVudC5nbHVlT2JqZWN0QXJyYXlbZG9tUGFyZW50Q2hpbGRJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChzYW1lTm9kZVN0YXR1cyhkb21QYXJlbnROb2RlQWxsQ2hpbGRzW2RvbVBhcmVudENoaWxkSW5kZXhdLCBuZXdFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGVDb2xsZWN0aW9uU3RyaW5nID0gX19yZWNydXNpdmUodXNlckRlZmluZWRSZW5kZXJFbGVtZW50LCB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQuZmxhZ0luZGV4LCBwYXJlbnRSZW5kZXJFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcobm9kZUNvbGxlY3Rpb25TdHJpbmcsJ3RleHQvaHRtbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5vZGUuYm9keS5maXJzdENoaWxkLGRvbVBhcmVudE5vZGVBbGxDaGlsZHNbZG9tUGFyZW50Q2hpbGRJbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZEV2ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3RWxlbWVudC5nbHVlT2JqZWN0QXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3JlY3J1c2l2ZUluamVjdG9yKG5ld0VsZW1lbnQuZ2x1ZU9iamVjdEFycmF5WzBdLG5ld0VsZW1lbnQuZmxhZ0luZGV4LG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vcmVtb3ZlIG9sZCBub2RlXG4gICAgICAgICAgICAgICAgICAgIC8vcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb21QYXJlbnROb2RlQWxsQ2hpbGRzW2RvbVBhcmVudENoaWxkSW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50UmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQudWpzX2lkKS5yZW1vdmVDaGlsZChkb21QYXJlbnROb2RlQWxsQ2hpbGRzW2RvbVBhcmVudENoaWxkSW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRvbVBhcmVudENoaWxkSW5kZXggPT0gKGRvbVBhcmVudENoaWxkTGVuZ3RoLTEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRSZW5kZXJFbGVtZW50LmdsdWVPYmplY3RBcnJheS5sZW5ndGggPiBkb21QYXJlbnROb2RlQWxsQ2hpbGRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlQ29sbGVjdGlvblN0cmluZyA9IF9fcmVjcnVzaXZlKHBhcmVudFJlbmRlckVsZW1lbnQsIGZsYWdJbmRleCwgcGFyZW50UmVuZGVyRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcobm9kZUNvbGxlY3Rpb25TdHJpbmcsJ3RleHQvaHRtbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGVDbG9uZSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW5TaXplIDogbnVtYmVyID0gbm9kZS5ib2R5LmNoaWxkcmVuWzBdLmNoaWxkTm9kZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld05vZGVBcnJheTogYW55ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZEluZGV4ID0gKGRvbVBhcmVudENoaWxkSW5kZXgrMSk7IGNoaWxkSW5kZXggPCBjaGlsZHJlblNpemU7IGNoaWxkSW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVDbG9uZSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Tm9kZUFycmF5LnB1c2gobm9kZUNsb25lLmJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bY2hpbGRJbmRleF0pIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobm9kZUNsb25lLmJvZHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZS5ib2R5LmNoaWxkcmVuWzBdLmNoaWxkTm9kZXNbY2hpbGRJbmRleF0sIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBuZXdOb2RlQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZEV2ZW50KCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IFxufVxuXG4vKipcbiAqIEB0b2RvIGVycm9yIHdoZW4gdXNlciBwcmVzcyBiYWNrIGJ1dHRvbiAgYW5kIGNsaWNrIGVsZW1lbnQgYnV0dG9uIGZ1bmN0aW9uIGNhbGwgXG4gKiBub3Qgd29ya2luZy5cbiAqIGhpbnQ6IGFmdGVyIGJhY2sgYnV0dG9uIGNsaWNrIHR3aWNlIGFuZCBjbGljayBmb3J3YXJkIGJ1dHRvbiBhbmQgZWxlbWVudCBidXR0b24gY2xpY2sgXG4gKiBmdW5jdGlvbiBjYWxsIGNvcnJlY3RseVxuICovXG5mdW5jdGlvbiBhZGRFdmVudCgpIHtcbiAgICBmb3IgKGxldCB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQgb2YgZXZlbnRMaXN0bmVyQXJyYXkpIHtcbiAgICAgICAgZXZlbnRDYWxsZXIodXNlckRlZmluZWRSZW5kZXJFbGVtZW50KTtcbiAgICAgICAgZXZlbnRMaXN0bmVyQXJyYXkuc2hpZnQoKTtcbiAgICB9XG59XG5cbi8qKlxuICogZ2V0IGFsbCBldmVudCBhbmQgcGFzcyBpbnRvIGFkZEV2ZW50TGlzdG5lclxuICovXG5mdW5jdGlvbiBldmVudENhbGxlcih1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0cnkge1xuICAgICAgICBmb3IgKGxldCBkYXRhT2JqZWN0IG9mIHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC5ldmVudERhdGFPYmplY3RDb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICBsZXQgYWN0aW9uTmFtZTogYW55ID0gZGF0YU9iamVjdC5hY3Rpb25OYW1lO1xuICAgICAgICAgICAgbGV0IGZ1bmN0aW9uTmFtZTogYW55ID0gZGF0YU9iamVjdC5mdW5jdGlvbk5hbWU7XG4gICAgICAgICAgICBsZXQgdGhpc1Njb3BlID0gdXNlckRlZmluZWRSZW5kZXJFbGVtZW50LnRoaXNTY29wZTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50SUQgPSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQuZWxlbWVudElEO1xuICAgICAgICAgICAgaWYgKGFjdGlvbk5hbWUgIT0gdW5kZWZpbmVkICYmIGZ1bmN0aW9uTmFtZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBhZGRFdmVudExpc3RuZXIoYWN0aW9uTmFtZSxmdW5jdGlvbk5hbWUsdGhpc1Njb3BlLGVsZW1lbnRJRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgfVxufVxuXG4vKipcbiAqIGFkZCAgZXZlbnQgbGlzdG5lciBpbnRvIGRvbSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdG5lcihhY3Rpb25OYW1lOiBhbnksIGZ1bmN0aW9uTmFtZTogYW55LHRoaXNTY29wZTogYW55LGVsZW1lbnRJZDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGdldEVsZW1lbnRGcm9tRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcbiAgICAgICAgbGV0IGZ1bmN0aW9uQm9keUluc3RhbmNlcyA9IHRoaXNTY29wZVtmdW5jdGlvbk5hbWVdO1xuICAgICAgICAvKipcbiAgICAgICAgICogcHJldmlvdXMgbG9naWMgdXNlIGZvciBhZGQgZXZlbnQgYWN0aW9uIHRvIGRvbVxuICAgICAgICAgKiBCQUQ6LSBpZiB0d28gdGltZSBtZXRob2QgY2FsbCBpdCBhZGQgdHdvIGRpZmZlcmVudCBldmVudCB0byBkb21cbiAgICAgICAgICogc3RpbGwgY29tbWVudCBmb3IgZnV0dXJlIHB1cnBvc2VcbiAgICAgICAgICogXG4gICAgICAgICAqIGdldEVsZW1lbnRGcm9tRE9NLmFkZEV2ZW50TGlzdGVuZXIoYWN0aW9uTmFtZSwgKGU6IEV2ZW50KSA9PiBmdW5jdGlvbkJvZHlJbnN0YW5jZXMoKSk7XG4gICAgICAgICAqIFxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0RWxlbWVudEZyb21ET00ub25jbGljayA9IGZ1bmN0aW9uQm9keUluc3RhbmNlcztcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICB9XG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0gaWQgaWQgb2YgdGhlIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gZmluZEhUTUxJbkVsZW1lbnRDb2xsZWN0aW9uKGlkOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiBfZ2V0RWxlbWVudENvbGxlY3RvbnMoaWQpO1xufVxuXG4vKipcbiAqIGNoZWNrZSBncmFuZCBjaGlsZCBlbGVtZW50IGlzIHNhbWUgYXMgbmV3IGNoaWxkXG4gKi9cbmZ1bmN0aW9uIHNhbWVOb2RlU3RhdHVzKG9sZE5vZGU6IGFueSwgbmV3Tm9kZTogYW55KTogbnVtYmVyIHtcblxuICAgICAgICBsZXQgbm9kZU9iamVjdCA9IGZpbmRIVE1MSW5FbGVtZW50Q29sbGVjdGlvbihvbGROb2RlLmlkKTtcbiAgICAgICAgaWYgKG5vZGVPYmplY3QgIT0gbnVsbCAmJiAgbm9kZU9iamVjdC51anNfZG5hID09IG5ld05vZGUudXNlckRlZmluZWRFbGVtZW50LnVqc19kbmEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gcGFyZW50SFRNTEVsZW1lbnQgaHRtbCBkb2N1bWVudGVkIG9iamVjdFxuICogZ2V0IGFsbCBjaGlsZCBhbmQgZ3JhbmQgY2hpbGRzIGZyb20gbm9kZVxuICovXG5mdW5jdGlvbiBnZXRBbGxCcmFuY2hlc0luTm9kZShwYXJlbnRIVE1MRWxlbWVudDogYW55KSB7XG4gICAgbGV0IGJyYW5jaE5vZGVDb2xsZWN0aW9ucyA9IFtdO1xuICAgIGlmIChwYXJlbnRIVE1MRWxlbWVudCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYnJhbmNoTm9kZUNvbGxlY3Rpb25zID0gcGFyZW50SFRNTEVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKTtcbiAgICAgICBicmFuY2hOb2RlQ29sbGVjdGlvbnMgPSBwYXJlbnRIVE1MRWxlbWVudC5jaGlsZHJlbjtcbiAgICB9XG4gICAgcmV0dXJuIGJyYW5jaE5vZGVDb2xsZWN0aW9uc1xufVxuXG4vKipcbiAqIEBwYXJhbSBwYXJlbnRPYmplY3QgcGFyZW50IG9iamVjdFxuICogZ2V0IHRoZSBkb2N1bWVudCBvYmplY3QgZnJvbSBodG1sIGRvY3VtZW50IGJ5IGl0cyBpZFxuICovXG5mdW5jdGlvbiBnZXRQYXJlbnRGcm9tRE9NKHBhcmVudE9iamVjdDogRWxlbWVudCk6IGFueSB7XG4gICAgbGV0IHBhcmVudE5vZGUgPSB1bmRlZmluZWQ7ICAgIFxuICAgIHRyeSB7XG4gICAgICAgIHBhcmVudE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRPYmplY3QudXNlckRlZmluZWRFbGVtZW50LnVqc19pZCk7XG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltVSlMgRVJST1JdOjogY2FuIG5vdCBmaW5kIG5vZGUgaW4gZG9jdW1lbnRcIik7XG4gICAgfVxuICAgIHJldHVybiBwYXJlbnROb2RlO1xufVxuXG5cbiIsImltcG9ydCB7RWxlbWVudH0gZnJvbSAnLi4vX3VyYW5pdW12aWV3L2VsZW1lbnQnO1xuaW1wb3J0IHtyZWFycmFuZ2VIZWlnaHRBbmRXaWR0aCxzdHJpbmdWYWx1ZU1hbmlwdWxhdGVyV2l0aFBpeGVsLCBzdHJpbmdWYWx1ZU1hbmlwdWxhdGVyV2l0aFByZWNlbnRhZ2UsIGlzRXF1YWxUb0F1dG99IGZyb20gJy4uL19zdHJpbmdNYW5pcHVsYXRlci9zdHJpbmdtYW5pcHVsYXRlcmNvbnRyb2xsZXJzJztcbi8qKlxuICogXG4gKiBAcGFyYW0gdXNlckVsZW1lbnRPYmplY3QgSFRNTCBlbGVtZW50IHRoYXQgdXNlciBjcmVhdGVkXG4gKiBAcGFyYW0gcGFyZW50UmVuZGVyRWxlbWVudElkIHZhbHVlIG9mIHRoZSBpZCBhdHRyaWJ1dGUgaW4gdXNlckVsZW1lbnRPYmplY3QgcGFyZW50IGVsZW1lbnRcbiAqIEBwYXJhbSBwYXJlbnRSZW5kZXJFbGVtZW50IGVsZW1lbnQgdGhhdCB1c2VyRWxlbWVudE9iamVjdCBiaW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfX2VsZW1lbnRSZWxhdGl2ZUhlaWdodENhbGN1bGF0b3IodXNlckVsZW1lbnRPYmplY3Q6IEVsZW1lbnQscGFyZW50UmVuZGVyRWxlbWVudElkOiBzdHJpbmcscGFyZW50UmVuZGVyRWxlbWVudD86IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZihwYXJlbnRSZW5kZXJFbGVtZW50SWQgPT0gJ3Jvb3QnKSB7XG4gICAgICAgIHVzZXJFbGVtZW50T2JqZWN0LnVzZXJEZWZpbmVkRWxlbWVudFsndWpzX3JfaGVpZ2h0J10gPSAwO1xuICAgIH0gZWxzZSBpZihwYXJlbnRSZW5kZXJFbGVtZW50ICE9IHVuZGVmaW5lZCAmJiBwYXJlbnRSZW5kZXJFbGVtZW50ICE9IG51bGwpe1xuICAgICAgICBpZihwYXJlbnRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC51anNfcl9oZWlnaHQgIT0gdW5kZWZpbmVkICYmIHBhcmVudFJlbmRlckVsZW1lbnQuZ2x1ZU9iamVjdEFycmF5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGxldCBwcmV2aW91c05vZGVFbGVtZW50OiBFbGVtZW50ID0gcGFyZW50UmVuZGVyRWxlbWVudC5nbHVlT2JqZWN0QXJyYXlbcGFyZW50UmVuZGVyRWxlbWVudC5nbHVlT2JqZWN0QXJyYXkubGVuZ3RoIC0gMl07XG4gICAgICAgICAgICBpZihwcmV2aW91c05vZGVFbGVtZW50ICE9IHVuZGVmaW5lZCAmJiBwcmV2aW91c05vZGVFbGVtZW50ICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGlmKHByZXZpb3VzTm9kZUVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmhlaWdodCAhPSB1bmRlZmluZWQgJiYgcHJldmlvdXNOb2RlRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaGVpZ2h0ICE9IFwiXCIpe1xuICAgICAgICAgICAgICAgICAgICB1c2VyRWxlbWVudE9iamVjdC51c2VyRGVmaW5lZEVsZW1lbnRbJ3Vqc19yX2hlaWdodCddID0gcmVhcnJhbmdlSGVpZ2h0QW5kV2lkdGgocHJldmlvdXNOb2RlRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaGVpZ2h0KSArICgrcHJldmlvdXNOb2RlRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQudWpzX3JfaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYocHJldmlvdXNOb2RlRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaGVpZ2h0ID09IHVuZGVmaW5lZCAmJiBwcmV2aW91c05vZGVFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC51anNfaGVpZ2h0ICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJFbGVtZW50T2JqZWN0LnVzZXJEZWZpbmVkRWxlbWVudFsndWpzX3JfaGVpZ2h0J10gPSBwcmV2aW91c05vZGVFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC51anNfaGVpZ2h0ICsgcHJldmlvdXNOb2RlRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQudWpzX3JfaGVpZ2h0O1xuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbVUpTIEVOR0lORSBFUlJPUl06OiBzb21ldGhpbmcgd2VudCB3cm9uZyBidWRkeSEgaSBhbSBnb2luZyBkb3duLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbVUpTIEVOR0lORSBFUlJPUl06OiBzb21ldGhpbmcgd2VudCB3cm9uZyBidWRkeSEgaSBhbSBnb2luZyBkb3duLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwYXJlbnRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC51anNfcl9oZWlnaHQgIT0gdW5kZWZpbmVkICYmIHBhcmVudFJlbmRlckVsZW1lbnQuZ2x1ZU9iamVjdEFycmF5Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGlmIHBhcmVudCBlbGVtZW50IGhhcyBvbmx5IG9uZSBlbGVtZW50XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmKHBhcmVudFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnVqc19oZWlnaHQgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICB1c2VyRWxlbWVudE9iamVjdC51c2VyRGVmaW5lZEVsZW1lbnRbJ3Vqc19yX2hlaWdodCddID0gcGFyZW50UmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQudWpzX3JfaGVpZ2h0O1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1VKUyBFTkdJTkUgRVJST1JdOjogc29tZXRoaW5nIHdlbnQgd3JvbmcgYnVkZHkhIGkgYW0gZ29pbmcgZG93bi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1VKUyBFTkdJTkUgRVJST1JdOjogc29tZXRoaW5nIHdlbnQgd3JvbmcgYnVkZHkhIGkgYW0gZ29pbmcgZG93bi5cIik7XG4gICAgICAgIH1cbiAgICB9IGVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW1VKUyBFTkdJTkUgRVJST1JdOjogc29tZXRoaW5nIHdlbnQgd3JvbmcgYnVkZHkhIGkgYW0gZ29pbmcgZG93bi5cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW1VKUyBUSVBTXTo6IHRoaXMgZXJyb3IgY2FuIGJlIGhhcHBlbiBpZiB5b3UgY2hhbmdlZCB0aGUgdG9wIHJvb3QgZGl2IGlkIGF0dHJpYnV0ZSB2YWx1ZSBpbiBpbmRleC5odG1sIHBhZ2VcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiICAgICAgICAgIDo6IHRoZSBkZWZhdWx0IHZhbHVlIGlzICdyb290J1wiKTtcbiAgICB9XG4gICAgX19yZWxhdGl2ZUhlaWdodFJlY3J1c2l2ZSh1c2VyRWxlbWVudE9iamVjdCk7XG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0gdXNlckVsZW1lbnRPYmplY3QgSFRNTCBlbGVtZW50IHRoYXQgdXNlciBjcmVhdGVcbiAqL1xuZnVuY3Rpb24gX19yZWxhdGl2ZUhlaWdodFJlY3J1c2l2ZSh1c2VyRWxlbWVudE9iamVjdDogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh1c2VyRWxlbWVudE9iamVjdC5nbHVlT2JqZWN0QXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IobGV0IGNoaWxkRWxlbWVudEluZGV4ID0gMDsgY2hpbGRFbGVtZW50SW5kZXggPCB1c2VyRWxlbWVudE9iamVjdC5nbHVlT2JqZWN0QXJyYXkubGVuZ3RoOyBjaGlsZEVsZW1lbnRJbmRleCsrKSB7XG4gICAgICAgICAgICBpZihjaGlsZEVsZW1lbnRJbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdXNlckVsZW1lbnRPYmplY3QuZ2x1ZU9iamVjdEFycmF5W2NoaWxkRWxlbWVudEluZGV4XS51c2VyRGVmaW5lZEVsZW1lbnRbJ3Vqc19yX2hlaWdodCddID0gKHVzZXJFbGVtZW50T2JqZWN0LnVzZXJEZWZpbmVkRWxlbWVudC51anNfcl9oZWlnaHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZih1c2VyRWxlbWVudE9iamVjdC5nbHVlT2JqZWN0QXJyYXlbY2hpbGRFbGVtZW50SW5kZXggLSAxXS51c2VyRGVmaW5lZEVsZW1lbnQuaGVpZ2h0ICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJFbGVtZW50T2JqZWN0LmdsdWVPYmplY3RBcnJheVtjaGlsZEVsZW1lbnRJbmRleF0udXNlckRlZmluZWRFbGVtZW50Wyd1anNfcl9oZWlnaHQnXSA9IHVzZXJFbGVtZW50T2JqZWN0LmdsdWVPYmplY3RBcnJheVtjaGlsZEVsZW1lbnRJbmRleCAtIDFdLnVzZXJEZWZpbmVkRWxlbWVudC51anNfcl9oZWlnaHQgKyByZWFycmFuZ2VIZWlnaHRBbmRXaWR0aCh1c2VyRWxlbWVudE9iamVjdC5nbHVlT2JqZWN0QXJyYXlbY2hpbGRFbGVtZW50SW5kZXggLSAxXS51c2VyRGVmaW5lZEVsZW1lbnQuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodXNlckVsZW1lbnRPYmplY3QuZ2x1ZU9iamVjdEFycmF5W2NoaWxkRWxlbWVudEluZGV4IC0gMV0udXNlckRlZmluZWRFbGVtZW50LmhlaWdodCA9PSB1bmRlZmluZWQgJiYgdXNlckVsZW1lbnRPYmplY3QuZ2x1ZU9iamVjdEFycmF5W2NoaWxkRWxlbWVudEluZGV4IC0gMV0udXNlckRlZmluZWRFbGVtZW50LnVqc19oZWlnaHQgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgdXNlckVsZW1lbnRPYmplY3QuZ2x1ZU9iamVjdEFycmF5W2NoaWxkRWxlbWVudEluZGV4XS51c2VyRGVmaW5lZEVsZW1lbnRbJ3Vqc19yX2hlaWdodCddID0gdXNlckVsZW1lbnRPYmplY3QuZ2x1ZU9iamVjdEFycmF5W2NoaWxkRWxlbWVudEluZGV4IC0gMV0udXNlckRlZmluZWRFbGVtZW50LnVqc19yX2hlaWdodCArIHVzZXJFbGVtZW50T2JqZWN0LmdsdWVPYmplY3RBcnJheVtjaGlsZEVsZW1lbnRJbmRleCAtIDFdLnVzZXJEZWZpbmVkRWxlbWVudC51anNfaGVpZ2h0O1xuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih1c2VyRWxlbWVudE9iamVjdC5nbHVlT2JqZWN0QXJyYXlbY2hpbGRFbGVtZW50SW5kZXhdLmdsdWVPYmplY3RBcnJheS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBfX3JlbGF0aXZlSGVpZ2h0UmVjcnVzaXZlKHVzZXJFbGVtZW50T2JqZWN0LmdsdWVPYmplY3RBcnJheVtjaGlsZEVsZW1lbnRJbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcImRhdGE6XCIsSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh1c2VyRWxlbWVudE9iamVjdCkpKTtcbiAgICB9XG4gICAgXG59IiwiaW1wb3J0IHtFbGVtZW50fSBmcm9tICcuLi9fdXJhbml1bXZpZXcvZWxlbWVudCc7XG5pbXBvcnQge3Jvb3RFbGVtZW50fSBmcm9tICcuLi9fc3VwZXJCYXNlRWxlbWVudC9zdXBlckJhc2VFbGVtZW50JztcbmltcG9ydCB7X192aWV3UG9ydFJlbmRlcn0gZnJvbSAnLi4vX3ZpZXdwb3J0cmVuZGVyL3ZpZXdwb3J0cmVuZGVyJztcbmltcG9ydCB7X19yZWNydXNpdmV9IGZyb20gJy4uL19yZWNydXNpdmUvcmVjcnVzaXZlJztcbmltcG9ydCB7X19yZWNydXNpdmVJbmplY3Rvcn0gZnJvbSAnLi4vX3JlY3J1c2l2ZS9yZWNydXNpdmVJbmplY3Rvcic7XG5pbXBvcnQge3JlbmRlckJ1Y2tldH0gZnJvbSAnLi4vX2dsb2JhbC9nbG9iYWx2YXJpYWJsZSc7XG5pbXBvcnQge19fZWxlbWVudFJlbGF0aXZlSGVpZ2h0Q2FsY3VsYXRvcn0gZnJvbSAnLi4vX3JlbGF0aXZlaGVpZ2h0Y2FsY3VsYXRvci9yZWxhdGl2ZWhlaWdodGNhbGN1bGF0b3InO1xuaW1wb3J0IHtpbml0VHJpZ2dlckhlaWdodCwgX3NldEluaXRUcmlnZ2VySGVpZ2h0LCBzZXRDdXJyZW50SGFzaFZhbHVlLCBnZXRDdXJyZW50SGFzaFZhbHVlLGdldEV2ZW50TGlzdG5lck1hcH0gZnJvbSAnLi4vX2dsb2JhbC9nbG9iYWx2YXJpYWJsZSc7XG5pbXBvcnQge0lOSVRfVFJJR0dFUl9IRUlHSFR9IGZyb20gJy4uL19nbG9iYWwvZ2xvYmFsY29uc3RhbnQnO1xuaW1wb3J0IHtIYXNoUm91dGVzfSBmcm9tICcuLi9fdWpzX2NvcmUvX3JvdXRlcnMvaGFzaFJvdXRlcyc7XG5pbXBvcnQge2V2ZW50TmFtZXNDb2xsZWN0aW9uT2JqZWN0fSBmcm9tICcuLi9fZ2xvYmFsL2V2ZW50TmFtZUNvbGxlY3Rpb24nO1xuLyoqXG4gKiBcbiAqIEBwYXJhbSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQgZWxlbWVudCB0aGF0IHVzZXIgZGVmaW5lZCBhbmQgcGFzcyB0byByZW5kZXJcbiAqIEBwYXJhbSBwYXJlbnRSZW5kZXJFbGVtZW50IG9wdGlvbmFsIHBhcmFtLCBkZXNjcmliZSB3aGF0IGlzIHRoZSBlbGVtZW50IHRoYXQgcmVuZGVyXG4gKiBlbGVtZW50IHNob3VsZCBiaW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBSZW5kZXIodXNlckRlZmluZWRSZW5kZXJFbGVtZW50OiBFbGVtZW50LCBwYXJlbnRSZW5kZXJFbGVtZW50PzogRWxlbWVudCwgaXNOZWVkQ2xlYXJQYXJlbnQ/OiBib29sZWFuKTogdm9pZCB7XG4gIC8qKlxuICAgKiBUT0RPIGdldCBkZWZhdWx0IHBhcmVudFJlbmRlckVsZW1lbnRJZCBmcm9tIGNvbW1vbiBjb25maWcgZmlsZSBvciBDRE4oaWYgcG9zc2lhYmxlKVxuICAgKi9cbiAgbGV0IHBhcmVudFJlbmRlckVsZW1lbnRJZDogc3RyaW5nID0gJ3Jvb3QnO1xuICBsZXQgcGFyZW50RWxlbWVudDogRWxlbWVudCA9IG51bGw7XG4gIGlmKHBhcmVudFJlbmRlckVsZW1lbnQgIT0gbnVsbCAmJiBwYXJlbnRSZW5kZXJFbGVtZW50ICE9IHVuZGVmaW5lZCkge1xuICAgIGlmKHBhcmVudFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50ICE9IG51bGwgJiYgXG4gICAgICAgIHBhcmVudFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50ICE9IHVuZGVmaW5lZCAmJiBcbiAgICAgICAgICBwYXJlbnRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC51anNfaWQgIT0gbnVsbCAmJiBcbiAgICAgICAgICAgIHBhcmVudFJlbmRlckVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnVqc19pZCAhPSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICBwYXJlbnRSZW5kZXJFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC51anNfaWQgIT09IFwiXCIpe1xuICAgICAgcGFyZW50UmVuZGVyRWxlbWVudElkID0gcGFyZW50UmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQudWpzX2lkO1xuICAgIH0gZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKFwiW1VKUyBFUlJPUl06OiBwYXJlbnQgZWxlbWVudCBoYXMgbm90IHByb3BlciB1anNfaWQgbWFrZSBzdXJlIHRvIHBhc3MgdmFsaWQgZWxlbWVudFwiKTtcbiAgICB9XG4gICAgcGFyZW50RWxlbWVudCA9IHBhcmVudFJlbmRlckVsZW1lbnQ7XG4gIH0gZWxzZSBpZiAoKHBhcmVudFJlbmRlckVsZW1lbnQgPT0gbnVsbCB8fCBwYXJlbnRSZW5kZXJFbGVtZW50ID09IHVuZGVmaW5lZCkgJiYgKGlzTmVlZENsZWFyUGFyZW50ICE9IHVuZGVmaW5lZCAmJiBpc05lZWRDbGVhclBhcmVudCA9PSBmYWxzZSkpIHtcbiAgICByb290RWxlbWVudC5nbHVlKHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudCk7XG4gICAgcGFyZW50RWxlbWVudCA9IHJvb3RFbGVtZW50O1xuICB9IGVsc2Uge1xuICAgIHJvb3RFbGVtZW50LmdsdWVPYmplY3RBcnJheSA9IFtdO1xuICAgIHJvb3RFbGVtZW50LmdsdWUodXNlckRlZmluZWRSZW5kZXJFbGVtZW50KTtcbiAgICBwYXJlbnRFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XG4gIH1cbiAgbGV0IHBhcmVudERPTU5vZGVFbGVtZW50OiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRSZW5kZXJFbGVtZW50SWQpO1xuICBfX3ZpZXdQb3J0UmVuZGVyKHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudCxwYXJlbnRET01Ob2RlRWxlbWVudCxwYXJlbnRSZW5kZXJFbGVtZW50KTtcbiAgX19lbGVtZW50UmVsYXRpdmVIZWlnaHRDYWxjdWxhdG9yKHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudCxwYXJlbnRSZW5kZXJFbGVtZW50SWQscGFyZW50UmVuZGVyRWxlbWVudCk7XG4gIGlmIChpc05lZWRDbGVhclBhcmVudCAhPSBudWxsICYmICF1bmRlZmluZWQgJiYgaXNOZWVkQ2xlYXJQYXJlbnQpIHtcbiAgICBpZiAocGFyZW50UmVuZGVyRWxlbWVudCAhPSBudWxsICYmIHBhcmVudFJlbmRlckVsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJlbnRSZW5kZXJFbGVtZW50LmdsdWVPYmplY3RBcnJheSA9IFtdO1xuICAgIH1cbiAgIC8vIF9fcmVjcnVzaXZlSW5qZWN0b3IodXNlckRlZmluZWRSZW5kZXJFbGVtZW50LHBhcmVudEVsZW1lbnQuZmxhZ0luZGV4LHBhcmVudEVsZW1lbnQpO1xuICAgIC8vcGFyZW50RE9NTm9kZUVsZW1lbnQuaW5uZXJIVE1MID0gX19yZWNydXNpdmUodXNlckRlZmluZWRSZW5kZXJFbGVtZW50LHBhcmVudEVsZW1lbnQuZmxhZ0luZGV4LHBhcmVudEVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIF9fcmVjcnVzaXZlSW5qZWN0b3IodXNlckRlZmluZWRSZW5kZXJFbGVtZW50LHBhcmVudEVsZW1lbnQuZmxhZ0luZGV4LHBhcmVudEVsZW1lbnQpO1xuICAgIC8vcGFyZW50RE9NTm9kZUVsZW1lbnQuaW5uZXJIVE1MID0gcGFyZW50RE9NTm9kZUVsZW1lbnQuaW5uZXJIVE1MK19fcmVjcnVzaXZlKHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudCxwYXJlbnRFbGVtZW50LmZsYWdJbmRleCxwYXJlbnRFbGVtZW50KTtcbiAgfVxufVxuXG5cblxuLyoqXG4gKiBcbiAqL1xud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKGV2ZW50KSB7ICBcbiAgbGV0IHN1cHBvcnRQYWdlT2Zmc2V0OiBhbnkgPSB3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZDtcbiAgbGV0IGlzQ1NTMUNvbXBhdDogYm9vbGVhbiA9ICgoZG9jdW1lbnQuY29tcGF0TW9kZSB8fCBcIlwiKSA9PT0gXCJDU1MxQ29tcGF0XCIpO1xuICBsZXQgeDogbnVtYmVyID0gc3VwcG9ydFBhZ2VPZmZzZXQgPyB3aW5kb3cucGFnZVhPZmZzZXQgOiBpc0NTUzFDb21wYXQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDsgXG4gIHZhciB5OiBudW1iZXIgPSBzdXBwb3J0UGFnZU9mZnNldCA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IGlzQ1NTMUNvbXBhdCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgOiBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgaWYoKHkrc2NyZWVuLmhlaWdodCkgPiBpbml0VHJpZ2dlckhlaWdodCkge1xuICAgIF9zZXRJbml0VHJpZ2dlckhlaWdodChpbml0VHJpZ2dlckhlaWdodCArIElOSVRfVFJJR0dFUl9IRUlHSFQpO1xuICAgIHJlbmRlckJ1Y2tldC5mb3JFYWNoKCh2YWx1ZSAsIGtleSkgPT4ge1xuICAgICAgICBsZXQgYnVja2V0RWxlbWVudCA9IGtleTtcbiAgICAgICAgaWYoKGJ1Y2tldEVsZW1lbnQuZ2x1ZU9iamVjdEFycmF5Lmxlbmd0aCA+IGJ1Y2tldEVsZW1lbnQuZmxhZ0luZGV4KSAmJiAoZ2V0Q3VycmVudEhhc2hWYWx1ZSgpID09IHZhbHVlKSkge1xuICAgICAgICAgLy8gbGV0IHBhcmVudF9kaXY6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ1Y2tldEVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnVqc19pZCk7XG4gICAgICAgICAvLyBsZXQgaW5uZXJIVE1MOiBhbnkgPSBwYXJlbnRfZGl2LmlubmVySFRNTDtcbiAgICAgICAgIC8vIHBhcmVudF9kaXYuaW5uZXJIVE1MID1pbm5lckhUTUwgKyBfX3JlY3J1c2l2ZShidWNrZXRFbGVtZW50LHRydWUsYnVja2V0RWxlbWVudCk7XG4gICAgICAgICBfX3JlY3J1c2l2ZUluamVjdG9yKGJ1Y2tldEVsZW1lbnQsdHJ1ZSxidWNrZXRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cblxuXG53aW5kb3cub25oYXNoY2hhbmdlID0gIGZ1bmN0aW9uIChldmVudCkge1xuICBsZXQgaGFzaFZhbHVlID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gIGlmIChoYXNoVmFsdWUgPT0gXCJcIikge1xuICAgIEhhc2hSb3V0ZXMoJy8nKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgcmVnID0gbmV3IFJlZ0V4cCgnIycpO1xuICAgIGhhc2hWYWx1ZSA9IGhhc2hWYWx1ZS5yZXBsYWNlKHJlZywnJyk7XG4gICAgSGFzaFJvdXRlcyhoYXNoVmFsdWUpO1xuICB9XG59O1xuXG53aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoaGlzdG9yeS5zdGF0ZSAmJiBoaXN0b3J5LnN0YXRlLmlkID09PSAnaG9tZXBhZ2UnKSB7XG4gICAgICAvLyBSZW5kZXIgbmV3IGNvbnRlbnQgZm9yIHRoZSBob21wYWdlXG4gIH1cbn07XG5cbi8qKlxuICogdGhpcyBmdW5jdGlvbiBpcyBjYWxsIHdoZW4gdXNlciBvciBzeXN0ZW0gcmVsb2FkIHRoZSBwYWdlXG4gKiBpZiB1cmwgaXMgc2hhcmUgb3IgcGFzdGUgaW4gbmV3IHBsYWNlLCBjb21wb25lbnQgd2lsbCByZW5kZXJcbiAqIGFjY29yZGluZyB0byB0aGUgcm91dGUgdGhhdCB1c2VyIGRlZmluZWRcbiAqL1xud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICBsZXQgaGFzaFZhbHVlID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gIGlmIChoYXNoVmFsdWUgPT0gXCJcIikge1xuICAgIEhhc2hSb3V0ZXMoJy8nKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgcmVnID0gbmV3IFJlZ0V4cCgnIycpO1xuICAgIGhhc2hWYWx1ZSA9IGhhc2hWYWx1ZS5yZXBsYWNlKHJlZywnJyk7XG4gICAgSGFzaFJvdXRlcyhoYXNoVmFsdWUpO1xuICB9XG59O1xuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGExe1xuICAgIGhhc2gobXNnOnN0cmluZywgdXRmOGVuY29kZTpib29sZWFuKTogc3RyaW5nIHtcbiAgICAgICAgdXRmOGVuY29kZSA9ICAodHlwZW9mIHV0ZjhlbmNvZGUgPT0gJ3VuZGVmaW5lZCcpID8gdHJ1ZSA6IHV0ZjhlbmNvZGU7XG4gIFxuICAgICAgICAvLyBjb252ZXJ0IHN0cmluZyB0byBVVEYtOCwgYXMgU0hBIG9ubHkgZGVhbHMgd2l0aCBieXRlLXN0cmVhbXNcbiAgICAgICAgaWYgKHV0ZjhlbmNvZGUpIG1zZyA9IHRoaXMuZW5jb2RlKG1zZyk7XG4gICAgICAgIFxuICAgICAgICAvLyBjb25zdGFudHMgW8KnNC4yLjFdXG4gICAgICAgIGxldCBLID0gWzB4NWE4Mjc5OTksIDB4NmVkOWViYTEsIDB4OGYxYmJjZGMsIDB4Y2E2MmMxZDZdO1xuICAgICAgICBcbiAgICAgICAgLy8gUFJFUFJPQ0VTU0lORyBcbiAgICAgICAgXG4gICAgICAgIG1zZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ODApOyAgLy8gYWRkIHRyYWlsaW5nICcxJyBiaXQgKCsgMCdzIHBhZGRpbmcpIHRvIHN0cmluZyBbwqc1LjEuMV1cbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnZlcnQgc3RyaW5nIG1zZyBpbnRvIDUxMi1iaXQvMTYtaW50ZWdlciBibG9ja3MgYXJyYXlzIG9mIGludHMgW8KnNS4yLjFdXG4gICAgICAgIGxldCBsID0gbXNnLmxlbmd0aC80ICsgMjsgIC8vIGxlbmd0aCAoaW4gMzItYml0IGludGVnZXJzKSBvZiBtc2cgKyDigJgx4oCZICsgYXBwZW5kZWQgbGVuZ3RoXG4gICAgICAgIGxldCBOID0gTWF0aC5jZWlsKGwvMTYpOyAgIC8vIG51bWJlciBvZiAxNi1pbnRlZ2VyLWJsb2NrcyByZXF1aXJlZCB0byBob2xkICdsJyBpbnRzXG4gICAgICAgIGxldCBNID0gbmV3IEFycmF5KE4pO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPE47IGkrKykge1xuICAgICAgICAgIE1baV0gPSBuZXcgQXJyYXkoMTYpO1xuICAgICAgICAgIGZvciAobGV0IGo9MDsgajwxNjsgaisrKSB7ICAvLyBlbmNvZGUgNCBjaGFycyBwZXIgaW50ZWdlciwgYmlnLWVuZGlhbiBlbmNvZGluZ1xuICAgICAgICAgICAgTVtpXVtqXSA9IChtc2cuY2hhckNvZGVBdChpKjY0K2oqNCk8PDI0KSB8IChtc2cuY2hhckNvZGVBdChpKjY0K2oqNCsxKTw8MTYpIHwgXG4gICAgICAgICAgICAgIChtc2cuY2hhckNvZGVBdChpKjY0K2oqNCsyKTw8OCkgfCAobXNnLmNoYXJDb2RlQXQoaSo2NCtqKjQrMykpO1xuICAgICAgICAgIH0gLy8gbm90ZSBydW5uaW5nIG9mZiB0aGUgZW5kIG9mIG1zZyBpcyBvayAnY29zIGJpdHdpc2Ugb3BzIG9uIE5hTiByZXR1cm4gMFxuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCBsZW5ndGggKGluIGJpdHMpIGludG8gZmluYWwgcGFpciBvZiAzMi1iaXQgaW50ZWdlcnMgKGJpZy1lbmRpYW4pIFvCpzUuMS4xXVxuICAgICAgICAvLyBub3RlOiBtb3N0IHNpZ25pZmljYW50IHdvcmQgd291bGQgYmUgKGxlbi0xKSo4ID4+PiAzMiwgYnV0IHNpbmNlIEpTIGNvbnZlcnRzXG4gICAgICAgIC8vIGJpdHdpc2Utb3AgYXJncyB0byAzMiBiaXRzLCB3ZSBuZWVkIHRvIHNpbXVsYXRlIHRoaXMgYnkgYXJpdGhtZXRpYyBvcGVyYXRvcnNcbiAgICAgICAgTVtOLTFdWzE0XSA9ICgobXNnLmxlbmd0aC0xKSo4KSAvIE1hdGgucG93KDIsIDMyKTsgTVtOLTFdWzE0XSA9IE1hdGguZmxvb3IoTVtOLTFdWzE0XSlcbiAgICAgICAgTVtOLTFdWzE1XSA9ICgobXNnLmxlbmd0aC0xKSo4KSAmIDB4ZmZmZmZmZmY7XG4gICAgICAgIFxuICAgICAgICAvLyBzZXQgaW5pdGlhbCBoYXNoIHZhbHVlIFvCpzUuMy4xXVxuICAgICAgICBsZXQgSDAgPSAweDY3NDUyMzAxO1xuICAgICAgICBsZXQgSDEgPSAweGVmY2RhYjg5O1xuICAgICAgICBsZXQgSDIgPSAweDk4YmFkY2ZlO1xuICAgICAgICBsZXQgSDMgPSAweDEwMzI1NDc2O1xuICAgICAgICBsZXQgSDQgPSAweGMzZDJlMWYwO1xuICAgICAgICBcbiAgICAgICAgLy8gSEFTSCBDT01QVVRBVElPTiBbwqc2LjEuMl1cbiAgICAgICAgXG4gICAgICAgIGxldCBXID0gbmV3IEFycmF5KDgwKTsgbGV0IGEsIGIsIGMsIGQsIGU7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxOOyBpKyspIHtcbiAgICAgICAgXG4gICAgICAgICAgLy8gMSAtIHByZXBhcmUgbWVzc2FnZSBzY2hlZHVsZSAnVydcbiAgICAgICAgICBmb3IgKGxldCB0PTA7ICB0PDE2OyB0KyspIFdbdF0gPSBNW2ldW3RdO1xuICAgICAgICAgIGZvciAobGV0IHQ9MTY7IHQ8ODA7IHQrKykgV1t0XSA9IHRoaXMuUk9UTChXW3QtM10gXiBXW3QtOF0gXiBXW3QtMTRdIF4gV1t0LTE2XSwgMSk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gMiAtIGluaXRpYWxpc2UgZml2ZSB3b3JraW5nIHZhcmlhYmxlcyBhLCBiLCBjLCBkLCBlIHdpdGggcHJldmlvdXMgaGFzaCB2YWx1ZVxuICAgICAgICAgIGEgPSBIMDsgYiA9IEgxOyBjID0gSDI7IGQgPSBIMzsgZSA9IEg0O1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIDMgLSBtYWluIGxvb3BcbiAgICAgICAgICBmb3IgKGxldCB0PTA7IHQ8ODA7IHQrKykge1xuICAgICAgICAgICAgbGV0IHMgPSBNYXRoLmZsb29yKHQvMjApOyAvLyBzZXEgZm9yIGJsb2NrcyBvZiAnZicgZnVuY3Rpb25zIGFuZCAnSycgY29uc3RhbnRzXG4gICAgICAgICAgICBsZXQgVDphbnkgPSAodGhpcy5ST1RMKGEsNSkgKyB0aGlzLmYocyxiLGMsZCkgKyBlICsgS1tzXSArIFdbdF0pICYgMHhmZmZmZmZmZjtcbiAgICAgICAgICAgIGUgPSBkO1xuICAgICAgICAgICAgZCA9IGM7XG4gICAgICAgICAgICBjID0gdGhpcy5ST1RMKGIsIDMwKTtcbiAgICAgICAgICAgIGIgPSBhO1xuICAgICAgICAgICAgYSA9IFQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC8vIDQgLSBjb21wdXRlIHRoZSBuZXcgaW50ZXJtZWRpYXRlIGhhc2ggdmFsdWVcbiAgICAgICAgICBIMCA9IChIMCthKSAmIDB4ZmZmZmZmZmY7ICAvLyBub3RlICdhZGRpdGlvbiBtb2R1bG8gMl4zMidcbiAgICAgICAgICBIMSA9IChIMStiKSAmIDB4ZmZmZmZmZmY7IFxuICAgICAgICAgIEgyID0gKEgyK2MpICYgMHhmZmZmZmZmZjsgXG4gICAgICAgICAgSDMgPSAoSDMrZCkgJiAweGZmZmZmZmZmOyBcbiAgICAgICAgICBINCA9IChINCtlKSAmIDB4ZmZmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy50b0hleFN0cihIMCkgKyB0aGlzLnRvSGV4U3RyKEgxKSArIFxuICAgICAgICAgIHRoaXMudG9IZXhTdHIoSDIpICsgdGhpcy50b0hleFN0cihIMykgKyB0aGlzLnRvSGV4U3RyKEg0KTtcbiAgICB9XG5cbiAgICBST1RMKHg6YW55LCBuOmFueSk6IGFueSB7XG4gICAgICAgIHJldHVybiAoeDw8bikgfCAoeD4+PigzMi1uKSk7XG4gICAgfVxuXG4gICAgZihzOmFueSwgeDphbnksIHk6YW55LCB6OmFueSk6IGFueSB7XG4gICAgICAgIHN3aXRjaCAocykge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gKHggJiB5KSBeICh+eCAmIHopOyAgICAgICAgICAgLy8gQ2goKVxuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4geCBeIHkgXiB6OyAgICAgICAgICAgICAgICAgICAgLy8gUGFyaXR5KClcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuICh4ICYgeSkgXiAoeCAmIHopIF4gKHkgJiB6KTsgIC8vIE1haigpXG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiB4IF4geSBeIHo7ICAgICAgICAgICAgICAgICAgICAvLyBQYXJpdHkoKVxuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHRvSGV4U3RyKG46YW55KTogYW55IHtcbiAgICAgICAgbGV0IHM9XCJcIiwgdjtcbiAgICAgICAgZm9yIChsZXQgaT03OyBpPj0wOyBpLS0pIHsgdiA9IChuPj4+KGkqNCkpICYgMHhmOyBzICs9IHYudG9TdHJpbmcoMTYpOyB9XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cblxuICAgIGVuY29kZShzdHJVbmk6c3RyaW5nKTpzdHJpbmcge1xuICAgICAgICAvLyB1c2UgcmVndWxhciBleHByZXNzaW9ucyAmIFN0cmluZy5yZXBsYWNlIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBiZXR0ZXIgZWZmaWNpZW5jeSBcbiAgICAgICAgLy8gdGhhbiBwcm9jZWR1cmFsIGFwcHJvYWNoZXNcbiAgICAgICAgbGV0IHN0clV0ZiA9IHN0clVuaS50b1N0cmluZygpLnJlcGxhY2UoXG4gICAgICAgICAgICAvW1xcdTAwODAtXFx1MDdmZl0vZywgIC8vIFUrMDA4MCAtIFUrMDdGRiA9PiAyIGJ5dGVzIDExMHl5eXl5LCAxMHp6enp6elxuICAgICAgICAgICAgZnVuY3Rpb24oYzphbnkpIHsgXG4gICAgICAgICAgICBsZXQgY2MgPSBjLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweGMwIHwgY2M+PjYsIDB4ODAgfCBjYyYweDNmKTsgfVxuICAgICAgICApO1xuICAgICAgICBzdHJVdGYgPSBzdHJVdGYudG9TdHJpbmcoKS5yZXBsYWNlKFxuICAgICAgICAgICAgL1tcXHUwODAwLVxcdWZmZmZdL2csICAvLyBVKzA4MDAgLSBVK0ZGRkYgPT4gMyBieXRlcyAxMTEweHh4eCwgMTB5eXl5eXksIDEwenp6enp6XG4gICAgICAgICAgICBmdW5jdGlvbihjOmFueSkgeyBcbiAgICAgICAgICAgIGxldCBjYyA9IGMuY2hhckNvZGVBdCgwKTsgXG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweGUwIHwgY2M+PjEyLCAweDgwIHwgY2M+PjYmMHgzRiwgMHg4MCB8IGNjJjB4M2YpOyB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBzdHJVdGY7XG4gICAgfVxuXG4gICAgZGVjb2RlKHN0clV0ZjpzdHJpbmcpOnN0cmluZyB7XG4gICAgICAgICAvLyBub3RlOiBkZWNvZGUgMy1ieXRlIGNoYXJzIGZpcnN0IGFzIGRlY29kZWQgMi1ieXRlIHN0cmluZ3MgY291bGQgYXBwZWFyIHRvIGJlIDMtYnl0ZSBjaGFyIVxuICAgICAgICBsZXQgc3RyVW5pID0gc3RyVXRmLnRvU3RyaW5nKCkucmVwbGFjZShcbiAgICAgICAgICAgIC9bXFx1MDBlMC1cXHUwMGVmXVtcXHUwMDgwLVxcdTAwYmZdW1xcdTAwODAtXFx1MDBiZl0vZywgIC8vIDMtYnl0ZSBjaGFyc1xuICAgICAgICAgICAgZnVuY3Rpb24oYzphbnkpIHsgIC8vIChub3RlIHBhcmVudGhlc2VzIGZvciBwcmVjZW5jZSlcbiAgICAgICAgICAgIGxldCBjYyA9ICgoYy5jaGFyQ29kZUF0KDApJjB4MGYpPDwxMikgfCAoKGMuY2hhckNvZGVBdCgxKSYweDNmKTw8NikgfCAoIGMuY2hhckNvZGVBdCgyKSYweDNmKTsgXG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjYyk7IH1cbiAgICAgICAgKTtcbiAgICAgICAgc3RyVW5pID0gc3RyVW5pLnRvU3RyaW5nKCkucmVwbGFjZShcbiAgICAgICAgICAgIC9bXFx1MDBjMC1cXHUwMGRmXVtcXHUwMDgwLVxcdTAwYmZdL2csICAgICAgICAgICAgICAgICAvLyAyLWJ5dGUgY2hhcnNcbiAgICAgICAgICAgIGZ1bmN0aW9uKGM6YW55KSB7ICAvLyAobm90ZSBwYXJlbnRoZXNlcyBmb3IgcHJlY2VuY2UpXG4gICAgICAgICAgICBsZXQgY2MgPSAoYy5jaGFyQ29kZUF0KDApJjB4MWYpPDw2IHwgYy5jaGFyQ29kZUF0KDEpJjB4M2Y7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjYyk7IH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHN0clVuaTtcbiAgICB9XG59IFxuIiwiLyoqXG4gKiBcbiAqIEBwYXJhbSBhdHRyaWJ1dGVWYWx1ZSBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYXJyYW5nZUhlaWdodEFuZFdpZHRoKGF0dHJpYnV0ZVZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGxldCBtYW5pcHVsYXRlV2l0aFBpeGVsVmFsdWU6IHN0cmluZyA9IHN0cmluZ1ZhbHVlTWFuaXB1bGF0ZXJXaXRoUGl4ZWwoYXR0cmlidXRlVmFsdWUpO1xuICAgIGlmKG1hbmlwdWxhdGVXaXRoUGl4ZWxWYWx1ZSAhPSBudWxsKSByZXR1cm4gK21hbmlwdWxhdGVXaXRoUGl4ZWxWYWx1ZTtcbiAgICBsZXQgbWFuaXB1bGF0ZVdpdGhQcmVjZW50YWdlVmFsdWU6IHN0cmluZyA9IHN0cmluZ1ZhbHVlTWFuaXB1bGF0ZXJXaXRoUHJlY2VudGFnZShhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgaWYobWFuaXB1bGF0ZVdpdGhQcmVjZW50YWdlVmFsdWUgIT0gbnVsbCkgcmV0dXJuICttYW5pcHVsYXRlV2l0aFByZWNlbnRhZ2VWYWx1ZTtcbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSBhdHRyaWJ1dGVWYWx1ZSBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1ZhbHVlTWFuaXB1bGF0ZXJXaXRoUGl4ZWwoYXR0cmlidXRlVmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlLnNwbGl0KFwicHhcIilbMF07XG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0gYXR0cmlidXRlVmFsdWUgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdWYWx1ZU1hbmlwdWxhdGVyV2l0aFByZWNlbnRhZ2UoYXR0cmlidXRlVmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlLnNwbGl0KFwiJVwiKVswXTtcbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSBhdHRyaWJ1dGVWYWx1ZSBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRXF1YWxUb0F1dG8oYXR0cmlidXRlVmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmKGF0dHJpYnV0ZVZhbHVlID09IFwiYXV0b1wiKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IHtFbGVtZW50fSBmcm9tICcuLi9fdXJhbml1bXZpZXcvZWxlbWVudCc7XG5cbmV4cG9ydCBsZXQgcm9vdEVsZW1lbnQ6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCh7XG4gICAgJ2VsZW1lbnQnOiAnZGl2J1xufSwgdGhpcywgdHJ1ZSk7IiwiZXhwb3J0IGNsYXNzIEluc3RhbmNlTG9hZGVyIHtcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2U8VD4oY2xhc3NJbnN0YW5jZTogYW55LC4uLmFyZ3M6IGFueVtdKSA6IFQge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBPYmplY3QuY3JlYXRlKGNsYXNzSW5zdGFuY2UpLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaW5zdGFuY2UuY29uc3RydWN0b3IuYXBwbHkoY2xhc3NJbnN0YW5jZSwgYXJncyk7XG4gICAgICAgIHJldHVybiA8VD4gaW5zdGFuY2U7XG4gICAgfVxufSIsImltcG9ydCB7X3NldFJvdXRlcnN9IGZyb20gJy4uLy4uL19nbG9iYWwvZ2xvYmFsdmFyaWFibGUnO1xuaW1wb3J0IHtIYXNoUm91dGVzfSBmcm9tICcuLi9fcm91dGVycy9oYXNoUm91dGVzJztcbmV4cG9ydCBjbGFzcyBSb3V0ZXJzIHtcbiAgICBjb25zdHJ1Y3Rvcih1c2VyRGVmaW5lUm91dGVyczogYW55KSB7XG4gICAgICAgIGlmICh1c2VyRGVmaW5lUm91dGVycyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1VKUyBFUlJPUl06OiBObyBSb3V0ZXMgZGVmaW5lZFwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyRGVmaW5lUm91dGVycyA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltVSlMgRVJST1JdOjogTm8gUm91dGVzIGRlZmluZWRcIik7XG4gICAgICAgIH0gZWxzZSBpZiAodXNlckRlZmluZVJvdXRlcnMgPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1VKUyBFUlJPUl06OiBObyBSb3V0ZXMgZGVmaW5lZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBfc2V0Um91dGVycyh1c2VyRGVmaW5lUm91dGVycyk7ICAgXG4gICAgfVxufVxuXG4iLCJpbXBvcnQge19nZXRSb3V0ZXJzfSBmcm9tICcuLi8uLi9fZ2xvYmFsL2dsb2JhbHZhcmlhYmxlJztcbmV4cG9ydCBmdW5jdGlvbiBIYXNoUm91dGVzKGhhc2g6IGFueSkge1xuICAgICAgICBpZiAoaGFzaCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1VKUyBFUlJPUl06OiBObyBSb3V0ZXMgZGVmaW5lZFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNoID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1VKUyBFUlJPUl06OiBObyBSb3V0ZXMgZGVmaW5lZFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNoID09ICcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltVSlMgRVJST1JdOjogTm8gUm91dGVzIGRlZmluZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCByID0gT2JqZWN0LmNyZWF0ZShfZ2V0Um91dGVycygpW2hhc2hdKS5wcm90b3R5cGUuY29uc3RydWN0b3I7XG4gICAgICAgICAgICBuZXcgcigpLmRlY29yYXRlSGVhZGVyKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIH0gICBcbn0iLCJpbXBvcnQge3JvdXRlcnMsIF9zZXRJbml0VHJpZ2dlckhlaWdodH0gZnJvbSAnLi4vLi4vX2dsb2JhbC9nbG9iYWx2YXJpYWJsZSc7XG5pbXBvcnQge0luc3RhbmNlTG9hZGVyfSBmcm9tICcuLi9JbnN0YW5jZUxvYWRlcic7XG5pbXBvcnQge05hbWVkVGhpbmd9IGZyb20gJy4uL05hbWVkVGhpbmcnO1xuZXhwb3J0IGNsYXNzIHJvdXRlIHtcblxuICAgIHByaXZhdGUgcGFnZUNsYXNzTmFtZTogYW55ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHJvdXRlUGF0aDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWRhdGUocm91dGVQYXRoKSAmJiB0aGlzLmlzUm91dGVFeGlzdChyb3V0ZVBhdGgpKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVVSTChyb3V0ZVBhdGgpO1xuICAgICAgICAgICAgdGhpcy5ydW5DbGFzc0luc3RhY2UodGhpcy5wYWdlQ2xhc3NOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1VKUyBFUlJPUl06OiByb3V0ZSBwYXRoIGlzIG5vdCB2YWxpZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNWYWxpZGF0ZShyb3V0ZVBhdGg6IHN0cmluZyk6IGJvb2xlYW57XG4gICAgICAgIGlmIChyb3V0ZVBhdGggPT0gdW5kZWZpbmVkIHx8IHJvdXRlUGF0aCA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChyb3V0ZVBhdGggPT0gJycpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1JvdXRlRXhpc3Qocm91dGVQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGtleVZhbHVlOiBhbnkgPSByb3V0ZXJzW3JvdXRlUGF0aF07XG4gICAgICAgIGlmIChrZXlWYWx1ZSA9PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGtleVZhbHVlID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy5wYWdlQ2xhc3NOYW1lID0ga2V5VmFsdWU7IFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUT0RPIGdpdmUgdXNlciBmb3IgY2hhbmdlIHVybCBhcyB1c2VyIG5lZWRcbiAgICAgKiBhcyBhIGhhc2ggdXJsIG9yIGZ1bGwgdXJsIGNoYW5nZVxuICAgICAqL1xuXG4gICAgcHJpdmF0ZSBjaGFuZ2VVUkwocm91dGVQYXRoOiBzdHJpbmcsIGRhdGFPYmplY3Q/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgcm91dGVQYXRoID0gIHRoaXMuYWRkSGFzaFRvUGF0aChyb3V0ZVBhdGgpO1xuICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHJvdXRlUGF0aCk7XG4gICAgICAgIF9zZXRJbml0VHJpZ2dlckhlaWdodCg3NjgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkSGFzaFRvUGF0aChyb3V0ZVBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgbGV0IGhhc2hVcmwgPSB1cmwgKyBcIiNcIityb3V0ZVBhdGg7XG4gICAgICAgIHJldHVybiBoYXNoVXJsOyBcbiAgICB9XG5cbiAgICBwcml2YXRlIHJ1bkNsYXNzSW5zdGFjZShjbGFzc0luc3RhbmNlOiBhbnkpIHtcbiAgICAgICAgIGxldCBjbGFzc09iamVjdDogYW55ID0gSW5zdGFuY2VMb2FkZXIuZ2V0SW5zdGFuY2U8TmFtZWRUaGluZz4oY2xhc3NJbnN0YW5jZSk7XG4gICAgICAgICBuZXcgY2xhc3NPYmplY3QoKS5kZWNvcmF0ZUhlYWRlcigpOyAgICAgLy9UT0RPIGNoYW5nZSBjb25zdHJ1Y3RlciBjYWxsIGZ1bmN0aW9uIGludG8gbmV3IGZ1bmN0aW9uICAgXG4gICAgfVxuICAgIFxufVxuXG4iLCIvKipcbiAqIHRoaXMgdmFyaWFibGUgdXNlIGZvciBnZXQgc3R5bGVzIGFyZSBsb2FkZWQgcHJldmlvc2x5IG9yIG5vdFxuICovXG5leHBvcnQgbGV0IGlzU3R5bGVMb2FkOiBib29sZWFuID0gZmFsc2U7XG4vKipcbiAqIGNzc1N0eWxlQ2xhc3NKc29uIHZhcmlhYmxlIGhvbGQgYWxsIHRoZSBjc3MgcnVsZXMgYXMganNvbiBvYmplY3RcbiAqIGlmIGl0cyBlbXB0eSBpdCBtZWFuIGluZGV4IHBhZ2UgaXMgbm90IGxvYWQgY3NzIFxuICovXG5leHBvcnQgbGV0IGNzc1N0eWxlQ2xhc3NKc29uOiBhbnkgPSB7fTtcbi8qKlxuICogZ2V0IHRoZSBhbGwgY3NzIHN0eWxlIHRoYXQgdXNlciBsYW9kIGZyb20gSFRNTCBpbmRleCBwYWdlXG4gKiB0aGlzIG1ldGhvZHMgb25seSBjYWxsIG9uZSB0aW1lLCBsb2FkaW5nIGFsbCBjc3MgaW50byBqYXZhc2NpaXB0IHZhcmlhYmxlIGlzIGVmZmVjaWVudFxuICogbW9yZSB0aGFuIGl0IGxvYWQgZnJvbSBkb2N1bWVudCBvYmplY3QgaW4gbmVlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gX1VKU3N0eWxlc2hlZXRMaWIoKTogdm9pZCB7XG4gICAgaXNTdHlsZUxvYWQgPSB0cnVlO1xuICAgIGxldCBjc3NzdHlsZXNoZWV0OiBTdHlsZVNoZWV0TGlzdCA9ICBkb2N1bWVudC5zdHlsZVNoZWV0cztcbiAgICBmb3IobGV0IGNzc1N0eWxlU2hlZXRJbmRleCA9IDA7IGNzc1N0eWxlU2hlZXRJbmRleCA8IGNzc3N0eWxlc2hlZXQubGVuZ3RoOyBjc3NTdHlsZVNoZWV0SW5kZXgrKykge1xuICAgICAgICBnZXRTdHlsZVNoZWV0UnVsZXMoKGNzc3N0eWxlc2hlZXRbY3NzU3R5bGVTaGVldEluZGV4XSBhcyBDU1NTdHlsZVNoZWV0KS5ydWxlcyk7XG4gICAgfVxuICAgIHJldHVybjtcbn1cbi8qKlxuICogXG4gKiBAcGFyYW0gc3R5bGVTaGVldHJ1bGVzIGFsbCBzdHlsZXNoZWV0cyB0aGF0IHVzZXIgbG9hZCBmcm9tIGluZGV4Lmh0bWwgZmlsZVxuICovXG5mdW5jdGlvbiBnZXRTdHlsZVNoZWV0UnVsZXMoc3R5bGVTaGVldHJ1bGVzOiBhbnkpOiB2b2lkIHtcbiAgICBmb3IobGV0IHN0eWxlU2hlZXRSdWxlc0luZGV4ID0gMDsgc3R5bGVTaGVldFJ1bGVzSW5kZXggPCBzdHlsZVNoZWV0cnVsZXMubGVuZ3RoOyBzdHlsZVNoZWV0UnVsZXNJbmRleCsrKSB7XG4gICAgICAgIGFwcGVuZFN0eWxlSW50b2Nzc1N0eWxlQ2xhc3NKc29uKHN0eWxlU2hlZXRydWxlc1tzdHlsZVNoZWV0UnVsZXNJbmRleF0gYXMgQ1NTU3R5bGVSdWxlKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuLyoqXG4gKiBcbiAqIEBwYXJhbSBzdHlsZVNoZWV0UnVsZSBhbGwgcnVsZXMgaW4gb25lIHNpbmdsZSBzdHlsZXNoZWV0IHBhZ2VcbiAqL1xuZnVuY3Rpb24gYXBwZW5kU3R5bGVJbnRvY3NzU3R5bGVDbGFzc0pzb24oc3R5bGVTaGVldFJ1bGU6IENTU1N0eWxlUnVsZSk6IHZvaWQgeyBcblxuICAgIGlmIChzdHlsZVNoZWV0UnVsZS5zdHlsZSAhPSB1bmRlZmluZWQpIGNzc1N0eWxlQ2xhc3NKc29uW3N0eWxlU2hlZXRSdWxlLnNlbGVjdG9yVGV4dC5yZXBsYWNlKCcuJywnJyldID0gc3R5bGVTaGVldFJ1bGUuc3R5bGU7XG4gICAgcmV0dXJuO1xufSIsImltcG9ydCBTaGExIGZyb20gJy4uL19zaGExL3NoYTEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdXBlckVsZW1lbnQge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGVsZW1lbnRPYmplY3Qgb2JqZWN0IG5lZWQgdG8gY2FsY3VsYXRlIHNoYTEgaGFzaFxuICAgICAqL1xuICAgIHVqc1NoYTEoZWxlbWVudE9iamVjdDogYW55KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWpzSWRjcmVhdGVyKGVsZW1lbnRPYmplY3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNyZWF0ZSBhbiBvbmUgc3RyaW5nIGJpbmQgYWxsIGF0dHJpYnV0ZSBpbnRvIG9uZSBzdHJpbmdcbiAgICAgKiBwYXNzIHRoZSBzdHJpbmcgaW50byBzaGExIGNsYXNzIGZvciBjYWxjdWxhdGUgdW5pcXVlIHNoYTEgaGFzaFxuICAgICAqIEBwYXJhbSBlbGVtZW50T2JqZWN0IG9iamVjdCBuZWVkIHRvIGNhbGN1bGF0ZSBzaGExIGhhc2hcbiAgICAgKi9cbiAgICB1anNJZGNyZWF0ZXIoZWxlbWVudE9iamVjdDogYW55KSB7XG4gICAgICAgIHZhciBrZXlzX2FycmF5cyA9ICg8YW55Pk9iamVjdCkuZW50cmllcyhlbGVtZW50T2JqZWN0KTtcbiAgICAgICAgdmFyIGdsdWVfc3RyaW5nO1xuICAgICAgICBmb3IodmFyIGVfaW5kZXggPSAwO2VfaW5kZXggPCBrZXlzX2FycmF5cy5sZW5ndGg7ZV9pbmRleCsrKXtcbiAgICAgICAgICAgaWYoa2V5c19hcnJheXNbZV9pbmRleF1bMV0gPT0gdW5kZWZpbmVkIHx8IGtleXNfYXJyYXlzW2VfaW5kZXhdWzFdID09IG51bGwpIGNvbnRpbnVlOyAvL2F2b2lkIHVubmVjY2VzZXJ5IGF0dHJpYnV0ZXMgZnJvbSBpZFxuICAgICAgICAgICBpZihrZXlzX2FycmF5c1tlX2luZGV4XVswXSA9PSBcImlkXCIpICAgY29udGludWU7XG4gICAgICAgICAgIGlmKGtleXNfYXJyYXlzW2VfaW5kZXhdWzBdID09IFwiYmluZFwiKSBjb250aW51ZTtcbiAgICAgICAgICAgaWYoZ2x1ZV9zdHJpbmcgPT0gbnVsbCB8fCBnbHVlX3N0cmluZyA9PSB1bmRlZmluZWQpIHsgZ2x1ZV9zdHJpbmcgPSBrZXlzX2FycmF5c1tlX2luZGV4XVsxXTsgY29udGludWU7fVxuICAgICAgICAgICAgICAgZ2x1ZV9zdHJpbmcgPSBnbHVlX3N0cmluZytrZXlzX2FycmF5c1tlX2luZGV4XVsxXTsgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXcgU2hhMSgpLmhhc2goZ2x1ZV9zdHJpbmcsdHJ1ZSk7XG4gICAgfVxuXG59IiwiaW1wb3J0IFN1cGVyRWxlbWVudCBmcm9tICcuLi9fdXJhbml1bXZpZXcvU3VwZXJFbGVtZW50JztcbmltcG9ydCB7ZXZlbnROYW1lc0NvbGxlY3Rpb25PYmplY3R9IGZyb20gJy4uL19nbG9iYWwvZXZlbnROYW1lQ29sbGVjdGlvbic7XG5pbXBvcnQgRWxlbWVudEludGVyZmFjZSBmcm9tICcuLi9fdXJhbml1bXZpZXcvRWxlbWVudEludGVyZmFjZSc7XG5pbXBvcnQge19VSlNzdHlsZXNoZWV0TGliLCBpc1N0eWxlTG9hZCxjc3NTdHlsZUNsYXNzSnNvbn0gZnJvbSAnLi4vX3Vqc3N0eWxlc2hlZXQvdWpzc3R5bGVzaGVldCc7XG5pbXBvcnQge19zZXRFbGVtZW50Q29sbGVjdG9ucywgc2V0RXZlbnRMaXN0bmVyTWFwfSBmcm9tICcuLi9fZ2xvYmFsL2dsb2JhbHZhcmlhYmxlJztcblxuZXhwb3J0IGNsYXNzIEVsZW1lbnQgZXh0ZW5kcyBTdXBlckVsZW1lbnQgaW1wbGVtZW50cyBFbGVtZW50SW50ZXJmYWNlPHN0cmluZz4gIHtcblxuICAgIHB1YmxpYyBlbGVtZW50SUQ6IHN0cmluZztcbiAgICBwdWJsaWMgdGhpc1Njb3BlOiBhbnk7XG4gICAgXG4gICAgcHVibGljIHVzZXJEZWZpbmVkRWxlbWVudDogYW55O1xuICAgIHB1YmxpYyBnbHVlT2JqZWN0QXJyYXk6IGFueSA9IFtdO1xuICAgIHB1YmxpYyBmbGFnSW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGZsYWdJbmRleE1hcEFycmF5OiBhbnkgPSBbXTtcbiAgICBwdWJsaWMgZXZlbnREYXRhT2JqZWN0Q29sbGVjdGlvbjogYW55ID0gW107XG5cblxuICAgIC8qKlxuICAgICAqIGdldCB1c2VyIGRlZmluZWQgSFRNTCBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIHVzZXJEZWZpbmVkRWxlbWVudCB1c2VyIGRlZmluZWQgSFRNTCBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodXNlckRlZmluZWRFbGVtZW50OmFueSwgdGhpc1Njb3BlOiBhbnksIGlzU3VwZXJCYXNlPzogYm9vbGVhbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRoaXNTY29wZSA9IHRoaXNTY29wZTtcbiAgICAgICAgdGhpcy5nZXRDc3NDbGFzc0RlZmluZUhlaWdodCh1c2VyRGVmaW5lZEVsZW1lbnQpO1xuICAgICAgICB0aGlzLnNldEROQSh1c2VyRGVmaW5lZEVsZW1lbnQpO1xuICAgICAgICBpZiAoaXNTdXBlckJhc2UgIT0gdW5kZWZpbmVkICYmIGlzU3VwZXJCYXNlKSB7XG4gICAgICAgICAgICB1c2VyRGVmaW5lZEVsZW1lbnRbJ3Vqc19pZCddID0gJ3Jvb3QnO1xuICAgICAgICAgICAgdXNlckRlZmluZWRFbGVtZW50WydpZCddID0gJ3Jvb3QnOyBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2hhMUFzSWQodXNlckRlZmluZWRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJpbmRFdmVudExpc3RlbmVyKHVzZXJEZWZpbmVkRWxlbWVudCwgdGhpc1Njb3BlKTtcbiAgICAgICAgdGhpcy5pbml0QXR0cmlidXRlKHVzZXJEZWZpbmVkRWxlbWVudCk7XG4gICAgICAgIHRoaXMucGFzc0VsZW1lbnRUb0NvbGxlY3Rpb24odXNlckRlZmluZWRFbGVtZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwYXNzIHVzZXIgZGVmaW5lZCBlbGVtZW50IGF0dHJpYnV0ZSBpbnRvIG9iamVjdFxuICAgICAqIEBwYXJhbSB1c2VyRGVmaW5lZEVsZW1lbnQgdXNlciBkZWZpbmVkIEhUTUwgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGluaXRBdHRyaWJ1dGUodXNlckRlZmluZWRFbGVtZW50OmFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnVzZXJEZWZpbmVkRWxlbWVudCA9IHVzZXJEZWZpbmVkRWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdXNlckRlZmluZWRFbGVtZW50IHVzZXIgZGVmaW5lZCBIVE1MIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBzZXRETkEodXNlckRlZmluZWRFbGVtZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdXNlckRlZmluZWRFbGVtZW50Wyd1anNfZG5hJ10gPSB0aGlzLnVqc1NoYTEodXNlckRlZmluZWRFbGVtZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzZXQgc2hhMSBpZCB0byBlbGVtZW50IGlkXG4gICAgICogQHBhcmFtIHVzZXJEZWZpbmVkRWxlbWVudCB1c2VyIGRlZmluZWQgSFRNTCBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgc2V0U2hhMUFzSWQodXNlckRlZmluZWRFbGVtZW50OmFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnRJRCA9IHRoaXMudWpzU2hhMSh1c2VyRGVmaW5lZEVsZW1lbnQpO1xuICAgICAgICB1c2VyRGVmaW5lZEVsZW1lbnRbJ3Vqc19pZCddID0gdGhpcy5lbGVtZW50SUQ7XG4gICAgICAgIHJldHVybiB1c2VyRGVmaW5lZEVsZW1lbnQ7XG4gICAgfVxuICAgIFxuICAgIGJpbmRFdmVudExpc3RlbmVyKHVzZXJEZWZpbmVkRWxlbWVudDogYW55LCB0aGlzU2NvcGU6IGFueSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogY3JlYXRlIG5ldyBvYmplY3Qgd2hlbiB1c2VyIGdsdWUgdXNlci1kZWZpbmVkLWVsZW1lbnQgdG8gcGFyZW50XG4gICAgICAgICAqICBUT0RPIG5ldyBsb2dpYyBhZGQgZm9yIHNldCBldmVudCBhY3Rpb24gdG8gZG9tXG4gICAgICAgICAqIHNvIG5vIG5lZWQgdG8gZ2V0IGV2ZW50IGFjdGlvbiBzdGFydCBuYW1lIGZyb20gYXJyYXlcbiAgICAgICAgICogcmVtb3ZlIGFycmF5IHNlYXJjaCBhbmQgYWRkIHVzZXIgZGVmaW5lZCBldmVudCBuYW1lXG4gICAgICAgICAqL1xuICAgICAgICBsZXQgZXZlbnROYW1lc0tleUNvbGxlY3Rpb24gPSBPYmplY3Qua2V5cyhldmVudE5hbWVzQ29sbGVjdGlvbk9iamVjdCk7XG4gICAgICAgIGZvcihsZXQgbmFtZUtleSBvZiBldmVudE5hbWVzS2V5Q29sbGVjdGlvbikge1xuICAgICAgICAgICAgbGV0IGV2ZW50TmFtZSA9IHVzZXJEZWZpbmVkRWxlbWVudFtuYW1lS2V5XTtcbiAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT0gdW5kZWZpbmVkIHx8IGV2ZW50TmFtZSA9PSBudWxsIHx8IGV2ZW50TmFtZSA9PSAnJykgY29udGludWU7XG4gICAgICAgICAgICBsZXQgZGF0YU9iamVjdCA9IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbk5hbWU6ZXZlbnROYW1lLFxuICAgICAgICAgICAgICAgIGFjdGlvbk5hbWU6ZXZlbnROYW1lc0NvbGxlY3Rpb25PYmplY3RbbmFtZUtleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZXZlbnREYXRhT2JqZWN0Q29sbGVjdGlvbi5wdXNoKE9iamVjdC5jcmVhdGUoZGF0YU9iamVjdCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2x1ZSBtZXRob2QgZm9yIGJpbmQgdGhlIGNoaWxkIGVsZW1lbnQgaW50byB0aGlzIG9iamVjdFxuICAgICAqIEBwYXJhbSBjaGlsZFVzZXJEZWZpbmVkRWxlbWVudCB1c2VyIGRlZmluZWQgSFRNTCBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgZ2x1ZShjaGlsZFVzZXJEZWZpbmVkRWxlbWVudFRlbXA6RWxlbWVudCk6IHZvaWR7XG4gICAgICAgbGV0IGNoaWxkVXNlckRlZmluZWRFbGVtZW50ID0gT2JqZWN0LmNyZWF0ZShjaGlsZFVzZXJEZWZpbmVkRWxlbWVudFRlbXApO1xuICAgICAgIGlmKGNoaWxkVXNlckRlZmluZWRFbGVtZW50ID09IG51bGwgfHwgY2hpbGRVc2VyRGVmaW5lZEVsZW1lbnQgPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAqIGNoaWxkIG9iamVjdCBpcyBudWxsIG9yIHVuZGVmaW5lZCBzaG93IHRoZSBjb25zb2xlIGVycm9yXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICBjb25zb2xlLmxvZyhcIltVSlMgRVJST1JdOjogY2hpbGQgZWxlbWVudCB0aGF0IHBhc3MgaW4gZ2x1ZSBtZXRob2QgaXMgTlVMTCBvciBVTkRFRklORURcIik7XG4gICAgICAgICAgIHJldHVybjtcbiAgICAgICB9XG4gICAgICAgY2hpbGRVc2VyRGVmaW5lZEVsZW1lbnQuZmxhZ0luZGV4TWFwQXJyYXkucHVzaCh7ZWxlbWVudElEOjB9KTtcbiAgICAgICB0aGlzLmdsdWVPYmplY3RBcnJheS5wdXNoKGNoaWxkVXNlckRlZmluZWRFbGVtZW50Ll9fcHJvdG9fXyk7IC8vVE9ETyByZXBsYWNlIF9fcHJvdG9fXyAoZGVwcmVjYXRlZClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gdXNlckRlZmluZWRFbGVtZW50IFxuICAgICAqL1xuICAgIGdldENzc0NsYXNzRGVmaW5lSGVpZ2h0KHVzZXJEZWZpbmVkRWxlbWVudDphbnkpOiB2b2lkIHtcbiAgICAgICAgaWYodXNlckRlZmluZWRFbGVtZW50LmNsYXNzID09IHVuZGVmaW5lZCB8fCB1c2VyRGVmaW5lZEVsZW1lbnQuY2xhc3MgPT0gJycgfHwgdXNlckRlZmluZWRFbGVtZW50LmNsYXNzID09IG51bGwpIHJldHVybjtcbiAgICAgICAgaWYodXNlckRlZmluZWRFbGVtZW50LmhlaWdodCA9PSB1bmRlZmluZWQgfHwgdXNlckRlZmluZWRFbGVtZW50LmhlaWdodCA9PSAnJyB8fCB1c2VyRGVmaW5lZEVsZW1lbnQuaGVpZ2h0ID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmKCFpc1N0eWxlTG9hZCkgIF9VSlNzdHlsZXNoZWV0TGliKCk7XG4gICAgICAgICAgICB0aGlzLmNob29zZVZhbGlkSGVpZ2h0RnJvbUNTU1J1bGVzKHVzZXJEZWZpbmVkRWxlbWVudCk7XG4gICAgICAgIH0gXG4gICAgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVE9ETyB3aGF0IGlmIHVzZXIgY2hhbmdlIGNsYXNzIG5hbWUgYWZ0ZXIgY2VydGFpbiB0aW1lIGFuZCBjaGFuZ2UgaGlnaHQgZnJvbSByZWN0b3IgbWV0aG9kIFxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB1c2VyRGVmaW5lZEVsZW1lbnQgXG4gICAgICovXG4gICAgY2hvb3NlVmFsaWRIZWlnaHRGcm9tQ1NTUnVsZXModXNlckRlZmluZWRFbGVtZW50OmFueSk6IHZvaWQge1xuICAgICAgICBsZXQgaXNSdWxlUHJpb3J0eVNldDogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBsZXQgZWxlbWVudE5hbWU6IHN0cmluZyA9IHVzZXJEZWZpbmVkRWxlbWVudC5lbGVtZW50O1xuICAgICAgICBpZihlbGVtZW50TmFtZSA9PSB1bmRlZmluZWQgfHwgZWxlbWVudE5hbWUgPT0gJycgfHwgZWxlbWVudE5hbWUgPT0gbnVsbCkgcmV0dXJuOyBcbiAgICAgICAgbGV0IHVzZXJEZWZpbmVkQ2xhc3NOYW1lczogc3RyaW5nID0gdXNlckRlZmluZWRFbGVtZW50LmNsYXNzO1xuICAgICAgICBsZXQgdXNlckRlZmluZWRDbGFzc05hbWVzQXJyYXk6YW55ID0gdXNlckRlZmluZWRDbGFzc05hbWVzLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgZm9yKGxldCBjbGFzc05hbWUgb2YgdXNlckRlZmluZWRDbGFzc05hbWVzQXJyYXkpIHtcbiAgICAgICAgICAgIGlmKGNsYXNzTmFtZSA9PSBcIlwiKSBjb250aW51ZTtcbiAgICAgICAgICAgIGxldCBjc3NSdWxlOiBhbnkgPSBjc3NTdHlsZUNsYXNzSnNvbltjbGFzc05hbWVdO1xuICAgICAgICAgICAgaWYoY3NzUnVsZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3NzSGVpZ2h0OiBzdHJpbmcgPSBjc3NSdWxlLmhlaWdodDtcbiAgICAgICAgICAgICAgICBpZihjc3NIZWlnaHQgIT0gXCJcIiAmJiBjc3NIZWlnaHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJEZWZpbmVkRWxlbWVudFsnaGVpZ2h0J10gPSBjc3NIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJEZWZpbmVkRWxlbWVudFsndWpzX2hlaWdodCddID0gY3NzSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBpc1J1bGVQcmlvcnR5U2V0ID0gdHJ1ZTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGlmKCFpc1J1bGVQcmlvcnR5U2V0KSB7XG4gICAgICAgICAgICAgICAgY3NzUnVsZSA9IGNzc1N0eWxlQ2xhc3NKc29uW1wiLlwiK2NsYXNzTmFtZV07XG4gICAgICAgICAgICAgICAgaWYoY3NzUnVsZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICBsZXQgY3NzSGVpZ2h0OiBzdHJpbmcgPSBjc3NSdWxlLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICBpZihjc3NIZWlnaHQgIT0gXCJcIiAmJiBjc3NIZWlnaHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJEZWZpbmVkRWxlbWVudFsnaGVpZ2h0J10gPSBjc3NIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJEZWZpbmVkRWxlbWVudFsndWpzX2hlaWdodCddID0gY3NzSGVpZ2h0OyBcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICAvKipcbiAgICAgKiBwYXNzIHVzZXIgZGVmaW5lZCBtb2RpZmllZCBvYmplY3QgaW50byBjb2xsZWN0aW9uXG4gICAgICogQHBhcmFtIHVzZXJEZWZpbmVkRWxlbWVudCB1c2VyIGRlZmluZWQgZWxlbWVudHNcbiAgICAgKi9cbiAgICBwcml2YXRlIHBhc3NFbGVtZW50VG9Db2xsZWN0aW9uKHVzZXJEZWZpbmVkRWxlbWVudDogYW55KSB7XG4gICAgICAgIF9zZXRFbGVtZW50Q29sbGVjdG9ucyh1c2VyRGVmaW5lZEVsZW1lbnQpO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHtFbGVtZW50fSBmcm9tICcuLi9fdXJhbml1bXZpZXcvZWxlbWVudCc7XG5pbXBvcnQge2Nzc1N0eWxlQ2xhc3NKc29ufSBmcm9tICcuLi9fdWpzc3R5bGVzaGVldC91anNzdHlsZXNoZWV0JztcbmltcG9ydCB7cmVhcnJhbmdlSGVpZ2h0QW5kV2lkdGgsIHN0cmluZ1ZhbHVlTWFuaXB1bGF0ZXJXaXRoUGl4ZWwsIHN0cmluZ1ZhbHVlTWFuaXB1bGF0ZXJXaXRoUHJlY2VudGFnZSwgaXNFcXVhbFRvQXV0b30gZnJvbSAnLi4vX3N0cmluZ01hbmlwdWxhdGVyL3N0cmluZ21hbmlwdWxhdGVyY29udHJvbGxlcnMnO1xuLyoqXG4gKiBcbiAqIEBwYXJhbSB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQgZWxlbWVudCB0aGF0IHVzZXIgZGVmaW5lZCBhbmQgcGFzcyB0byByZW5kZXJcbiAqIEBwYXJhbSBwYXJlbnRSZW5kZXJFbGVtZW50RG9jdW1lbnRPYmplY3QgIHBhcmVudCBlbGVtZW50IG9iamVjdCBpbiBIVE1MIGRvY3VtZW50XG4gKiAgdGhhdCB1c2VyRGVmaW5lZFJlbmRlckVsZW1lbnQgZ2x1ZWRcbiAqIEBwYXJhbSBwYXJlbnRSZW5kZXJFbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3ZpZXdQb3J0UmVuZGVyKHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudDogRWxlbWVudCxwYXJlbnRSZW5kZXJFbGVtZW50RG9jdW1lbnRPYmplY3Q6IGFueSxwYXJlbnRSZW5kZXJFbGVtZW50PzogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmKHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudCAhPSBudWxsICYmIHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudCAhPSB1bmRlZmluZWQpe1xuICAgICAgICBpZihwYXJlbnRSZW5kZXJFbGVtZW50RG9jdW1lbnRPYmplY3QgIT0gbnVsbCAmJiBwYXJlbnRSZW5kZXJFbGVtZW50RG9jdW1lbnRPYmplY3QgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGxldCB1anNIZWlnaHRWYWx1ZSA9IF9fZWxlbWVudEhlaWdodENhbGN1bGF0b3IodXNlckRlZmluZWRSZW5kZXJFbGVtZW50KTtcbiAgICAgICAgICAgIHVzZXJEZWZpbmVkUmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnRbJ3Vqc19oZWlnaHQnXSA9IHVqc0hlaWdodFZhbHVlO1xuICAgICAgICAgICAgaWYocGFyZW50UmVuZGVyRWxlbWVudERvY3VtZW50T2JqZWN0LmlkICE9ICdyb290Jyl7XG4gICAgICAgICAgICAgICAgcGFyZW50UmVuZGVyRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnRbJ3Vqc19oZWlnaHQnXSA9IHVqc0hlaWdodFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltVSlMgRVJST1JdOjogcGFyZW50IGh0bWwgZWxlbWVudCBpcyBub3QgZG9jdW1lbnQgb2JqZWN0XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbVUpTIFRJUFNdOjogIGNoZWNrIHlvdXIgcGFyZW50IGh0bWwgZWxlbWVudCBpcyByZW5kZXJlZCBiZWZvcmUgY2hpbGQgZWxlbWVudCByZW5kZXJcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltVSlMgVElQU106OiAgY2hlY2sgeW91ciBwYXJlbnQgaHRtbCBlbGVtZW50J3MgcGFyZW50IGVsZW1lbnRzIGFyZSByZW5kZXJlZCBcIik7XG4gICAgICAgIH1cbiAgICB9IGVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW1VKUyBFUlJPUl06OiB1c2VyIGRlZmluZWQgaHRtbCBlbGVtZW50IGlzIG51bGwgb3IgdW5kZWZpbmVkLFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCIgICAgICAgICAgICAgIG1ha2Ugc3VyZSB0byByZW5kZXIgdmFsaWQgaHRtbCBlbGVtZW50LlwiKTtcbiAgICB9XG59XG4vKipcbiAqIFxuICogQHBhcmFtIHVzZXJFbGVtZW50T2JqZWN0IGVsZW1lbnQgdGhhdCB1c2VyIGRlZmluZWQgYW5kIHBhc3MgYnkgdGhlIF9fdmlld1BvcnRSZW5kZXIgbWV0aG9kXG4gKi9cbmZ1bmN0aW9uIF9fZWxlbWVudEhlaWdodENhbGN1bGF0b3IodXNlckVsZW1lbnRPYmplY3Q6IEVsZW1lbnQpOiBudW1iZXIge1xuICAgIGxldCBlbGVtZW50SGVpZ2h0OiBudW1iZXIgPSAwO1xuICAgIGZvcihsZXQgY2hpbGRFbGVtZW50IG9mIHVzZXJFbGVtZW50T2JqZWN0LmdsdWVPYmplY3RBcnJheSkge1xuICAgICAgICBpZihjaGlsZEVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnVqc19oZWlnaHQgPT0gdW5kZWZpbmVkICYmIGNoaWxkRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnQuaGVpZ2h0ID09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBlbGVtZW50SGVpZ2h0ID0gZWxlbWVudEhlaWdodCArICgrY3NzU3R5bGVDbGFzc0pzb25bY2hpbGRFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5jbGFzc10pICsgX19lbGVtZW50SGVpZ2h0Q2FsY3VsYXRvcihjaGlsZEVsZW1lbnQpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSBpZihjaGlsZEVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LmhlaWdodCAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgbGV0IHJlYXJyYW5nZVZhbHVlID0gcmVhcnJhbmdlSGVpZ2h0QW5kV2lkdGgoY2hpbGRFbGVtZW50LnVzZXJEZWZpbmVkRWxlbWVudC5oZWlnaHQpO1xuICAgICAgICAgICAgZWxlbWVudEhlaWdodCA9IGVsZW1lbnRIZWlnaHQgKyByZWFycmFuZ2VWYWx1ZTtcbiAgICAgICAgICAgIGNoaWxkRWxlbWVudC51c2VyRGVmaW5lZEVsZW1lbnRbJ3Vqc19oZWlnaHQnXSA9IHJlYXJyYW5nZVZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSBpZihjaGlsZEVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnVqc19oZWlnaHQgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbnRlZ2VyIHBhcnNlIGlmIHVqc19yX2hlaWdodCBhbHdheXMgaW50ZWdlciBcbiAgICAgICAgICAgIGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50SGVpZ2h0ICsgKCtjaGlsZEVsZW1lbnQudXNlckRlZmluZWRFbGVtZW50LnVqc19oZWlnaHQpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1VKUyBFTkdJTkUgRVJST1JdOjogc29tZXRoaW5nIHdlbnQgd3JvbmcgYnVkZHkhIGkgYW0gZ29pbmcgZG93bi4uLi5cIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2VyRWxlbWVudE9iamVjdC51c2VyRGVmaW5lZEVsZW1lbnRbJ3Vqc19oZWlnaHQnXSA9IGVsZW1lbnRIZWlnaHQ7XG4gICAgcmV0dXJuIGVsZW1lbnRIZWlnaHQ7XG59XG5cblxuIl19
