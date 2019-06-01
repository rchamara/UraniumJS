/**
 * this variable use for get styles are loaded previosly or not
 */
export let isStyleLoad: boolean = false;
/**
 * cssStyleClassJson variable hold all the css rules as json object
 * if its empty it mean index page is not load css 
 */
export let cssStyleClassJson: any = {};
/**
 * get the all css style that user laod from HTML index page
 * this methods only call one time, loading all css into javasciipt variable is effecient
 * more than it load from document object in need
 */
export function _UJSstylesheetLib(): void {
    isStyleLoad = true;
    let cssstylesheet: StyleSheetList =  document.styleSheets;
    for(let cssStyleSheetIndex = 0; cssStyleSheetIndex < cssstylesheet.length; cssStyleSheetIndex++) {
        getStyleSheetRules((cssstylesheet[cssStyleSheetIndex] as CSSStyleSheet).rules);
    }
    return;
}
/**
 * 
 * @param styleSheetrules all stylesheets that user load from index.html file
 */
function getStyleSheetRules(styleSheetrules: any): void {
    for(let styleSheetRulesIndex = 0; styleSheetRulesIndex < styleSheetrules.length; styleSheetRulesIndex++) {
        appendStyleIntocssStyleClassJson(styleSheetrules[styleSheetRulesIndex] as CSSStyleRule);
    }
    return;
}
/**
 * 
 * @param styleSheetRule all rules in one single stylesheet page
 */
function appendStyleIntocssStyleClassJson(styleSheetRule: CSSStyleRule): void { 

    if (styleSheetRule.style != undefined && styleSheetRule.selectorText != undefined) cssStyleClassJson[styleSheetRule.selectorText.replace('.','')] = styleSheetRule.style;
    return;
}