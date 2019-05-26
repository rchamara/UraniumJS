import {FLAG_POINT_VALUE, INIT_TRIGGER_HEIGHT} from '../_global/globalconstant';
import {Element} from '../_uraniumview/element';

export let renderBucket = new Map();
export let initTriggerHeight: number = INIT_TRIGGER_HEIGHT;
export let flagPoint: number = FLAG_POINT_VALUE;
export let routers: any = {};
export let elementCollectons = new Set();
export let grandParent: any = document.getElementById("root");
export let flagIndexGrandParent: Element;
export let currentHashValue: any;
export let eventListnerMap = new Map();
export let eventListnerArray: any = [];

/**
 * setter for eventListenerMap
 */
export function setEventListnerMap(key: any, value: any): void {
    eventListnerMap.set(key, value);
}

/**
 * getter for eventListnerMap
 */
export function getEventListnerMap(key: any) {
    return eventListnerMap.get(key);
}

/**
 * set currentHashValue
 */
export function setCurrentHashValue(hashValue: any): void {
    currentHashValue = hashValue;
}

/**
 * get currentHashValue
 */
export function getCurrentHashValue(): String {
 let hashValue = window.location.hash;
 if (hashValue == "") {
    hashValue = "#/";
 } 
 return hashValue;
}

/**
 * set render bucket
 */
export function setRenderBucket(key: any, vlaue: any): void {
    if (!isRenderBucketHasKey(key, vlaue)) renderBucket.set(key, vlaue);  
}

function isRenderBucketHasKey(newKey: any, currentValue: any): boolean {
    let keyHas = false;
    renderBucket.forEach((value, key) => {
       if (key.elementID == newKey.elementID && value == currentValue) {
           keyHas = true;
        }
    });
    return keyHas;
}

/**
 * find the parent unique flag index and increment it by 1
 */
export function flagIndexIncrementer(userDefinedElement: Element, grandParent: Element) {
    if (userDefinedElement == null || userDefinedElement == undefined) console.log("ERROR: userdeined element is not valid");
    if (grandParent == null || grandParent == undefined) console.log("ERROR: grandParent is not valid"); 
}

/**
 * set flagIndexGrandParent
 */
export function setFlagIndexGrandParent(flagIndexGrandParentValue: any) {
    this.flagIndexGrandParent = flagIndexGrandParentValue;
}

/**
 * get flagIndexGrandParent
 */
export function getFlagIndexGrandParent() {
    return this.flagIndexGrandParent
}

/**
 * get element Object from collections
 * @param ujsId id of the element
 */
export function _getElementCollectons(ujsId: string): any {
    for(let element of elementCollectons) {
        if (element.ujs_id == ujsId) {
            return element;
        }
    }
    return null;
}

/**
 * setter element for elementCollectons variable
 * @param userDefinedElement user created element
 */
export function _setElementCollectons(userDefinedElement: any) {
    elementCollectons.add(userDefinedElement);
}

/**
 * 
 * @param newInitTriggerHeight new value of initTriggerHeight varibale
 */
export function _setInitTriggerHeight(newInitTriggerHeight: number): void {
    this.initTriggerHeight = newInitTriggerHeight;
}

/**
 * 
 * @param newFlagPoint new value of flagPoint varibale
 */
export function _setFlagPoint(newFlagPoint: number): void {
    this.flagPoint = newFlagPoint;
}

/**
 * 
 * @param userDefinedRouters user defined router object
 */
export function _setRouters(userDefinedRouters: any): void {
    this.routers = userDefinedRouters;
}

/**
 * 
 * getter for routers variable
 */
export function _getRouters(): any {
    return this.routers;
}
