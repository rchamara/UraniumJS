import {Element} from '../_uraniumview/element';
import {_setFlagPoint, renderBucket, setRenderBucket, getCurrentHashValue, eventListnerArray} from '../_global/globalvariable';
import {initTriggerHeight, setFlagIndexGrandParent,getFlagIndexGrandParent} from '../_global/globalvariable';
import {styleAttributes} from '../_global/styleAttributs';
/**
 * 
 * @param userDefinedRenderElement HTML element that need to convert string type
 */
export function __recrusive(userDefinedRenderElement: Element, flagIndex?: any, parentRenderElement?: Element): string {
    if(userDefinedRenderElement.userDefinedElement.ujs_r_height > initTriggerHeight) {
        if((flagIndex != undefined || flagIndex != null) && (flagIndex != true || flagIndex != false)){
            parentRenderElement.flagIndex = flagIndex;
        }
        if (flagIndex != undefined && (flagIndex != true || flagIndex != false)) {
            //renderBucket.set(parentRenderElement, flagIndex);
            setRenderBucket(parentRenderElement, getCurrentHashValue());
        } else {
            //renderBucket.set(parentRenderElement, 0);
            setRenderBucket(parentRenderElement, getCurrentHashValue());
        }
      return "";
    };
    let temporyInnerHtml: string;
    if(userDefinedRenderElement.glueObjectArray.length == 0 ) {
        if(userDefinedRenderElement.userDefinedElement.innerHTML != null || userDefinedRenderElement.userDefinedElement.innerHTML != undefined){
            temporyInnerHtml = String(userDefinedRenderElement.userDefinedElement.innerHTML);
        }
       parentRenderElement.flagIndex = (+parentRenderElement.flagIndex) +1;
    } else {
        for(let i = userDefinedRenderElement.flagIndex; i < userDefinedRenderElement.glueObjectArray.length; i++){
            let recrusive_result = __recrusive(userDefinedRenderElement.glueObjectArray[i],i,userDefinedRenderElement)
            if(temporyInnerHtml == undefined) {
                temporyInnerHtml = recrusive_result;
            } else{
                temporyInnerHtml = temporyInnerHtml + recrusive_result;
            }
            if (recrusive_result == "") break; 
        }
    }
    eventListnerArray.push(userDefinedRenderElement);
    return domElementCreater(temporyInnerHtml,userDefinedRenderElement,flagIndex);
}
/**
 * 
 * @param temporyInnerHtml hold the previous html elements
 * @param userDefinedRenderElement user defined html element 
 * @param flagIndex point that previous render stopped
 */
function domElementCreater(temporyInnerHtml: string, userDefinedRenderElement: Element, flagIndex?: any): string {
    let DOMElement: string;
    let acceptValue: string = userDefinedRenderElement.userDefinedElement.accept ? (" accept='"+userDefinedRenderElement.userDefinedElement.accept+"'") : '';
    let acceptcharsetValue: string = userDefinedRenderElement.userDefinedElement.accept_charset ? (" accept-charset='"+userDefinedRenderElement.userDefinedElement.accept_charset+"'") : '';
    let accesskeyValue: string = userDefinedRenderElement.userDefinedElement.accesskey ? (" accesskey='"+userDefinedRenderElement.userDefinedElement.accesskey+"'") : '';
    let actionValue: string = userDefinedRenderElement.userDefinedElement.action ? (" action='"+userDefinedRenderElement.userDefinedElement.action+"'") : '';
    let alignValue: string = userDefinedRenderElement.userDefinedElement.align ? (" align='"+userDefinedRenderElement.userDefinedElement.align+"'") : '';
    let allowValue: string = userDefinedRenderElement.userDefinedElement.allow ? (" allow='"+userDefinedRenderElement.userDefinedElement.allow+"'") : '';
    let altValue: string = userDefinedRenderElement.userDefinedElement.alt ? (" alt='"+userDefinedRenderElement.userDefinedElement.alt+"'") : '';
    let asyncValue: string = userDefinedRenderElement.userDefinedElement.async ? (" async='"+userDefinedRenderElement.userDefinedElement.async+"'") : '';
    let autocapitalizeValue: string = userDefinedRenderElement.userDefinedElement.autocapitalize ? (" autocapitalize='"+userDefinedRenderElement.userDefinedElement.autocapitalize+"'") : '';
    let autocompleteValue: string = userDefinedRenderElement.userDefinedElement.autocomplete ? (" autocomplete='"+userDefinedRenderElement.userDefinedElement.autocomplete+"'") : '';
    let autofocusValue: string = userDefinedRenderElement.userDefinedElement.autofocus ? (" autofocus='"+userDefinedRenderElement.userDefinedElement.autofocus+"'") : '';
    let autoplayValue: string = userDefinedRenderElement.userDefinedElement.autoplay ? (" autoplay='"+userDefinedRenderElement.userDefinedElement.autoplay+"'") : '';
    let bgcolorValue: string = userDefinedRenderElement.userDefinedElement.bgcolor ? (" bgcolor='"+userDefinedRenderElement.userDefinedElement.bgcolor+"'") : '';
    let borderValue: string = userDefinedRenderElement.userDefinedElement.border ? (" border='"+userDefinedRenderElement.userDefinedElement.border+"'") : '';
    let bufferedValue: string = userDefinedRenderElement.userDefinedElement.buffered ? (" buffered='"+userDefinedRenderElement.userDefinedElement.buffered+"'") : '';
    let challengeValue: string = userDefinedRenderElement.userDefinedElement.challenge ? (" challenge='"+userDefinedRenderElement.userDefinedElement.challenge+"'") : '';
    let charsetValue: string = userDefinedRenderElement.userDefinedElement.charset ? (" charset='"+userDefinedRenderElement.userDefinedElement.charset+"'") : '';
    let checkedValue: string = userDefinedRenderElement.userDefinedElement.checked ? (" checked='"+userDefinedRenderElement.userDefinedElement.checked+"'") : '';
    let citeValue: string = userDefinedRenderElement.userDefinedElement.cite ? (" cite='"+userDefinedRenderElement.userDefinedElement.cite+"'") : '';
    let classValue: string = userDefinedRenderElement.userDefinedElement.class ? (" class='"+userDefinedRenderElement.userDefinedElement.class+"'") : '';
    let codeValue: string = userDefinedRenderElement.userDefinedElement.code ? (" code='"+userDefinedRenderElement.userDefinedElement.code+"'") : '';
    let codebaseValue: string = userDefinedRenderElement.userDefinedElement.codebase ? (" codebase='"+userDefinedRenderElement.userDefinedElement.codebase+"'") : '';
    let colorValue: string = userDefinedRenderElement.userDefinedElement.color ? (" color='"+userDefinedRenderElement.userDefinedElement.color+"'") : '';
    let colsValue: string = userDefinedRenderElement.userDefinedElement.cols ? (" cols='"+userDefinedRenderElement.userDefinedElement.cols+"'") : '';
    let colspanValue: string = userDefinedRenderElement.userDefinedElement.colspan ? (" colspan='"+userDefinedRenderElement.userDefinedElement.colspan+"'") : '';
    let contentValue: string = userDefinedRenderElement.userDefinedElement.content ? (" content='"+userDefinedRenderElement.userDefinedElement.content+"'") : '';
    let contenteditableValue: string = userDefinedRenderElement.userDefinedElement.contenteditable ? (" contenteditable='"+userDefinedRenderElement.userDefinedElement.contenteditable+"'") : '';
    let contextmenuValue: string = userDefinedRenderElement.userDefinedElement.contextmenu ? (" contextmenu='"+userDefinedRenderElement.userDefinedElement.contextmenu+"'") : '';
    let controlsValue: string = userDefinedRenderElement.userDefinedElement.controls ? (" controls='"+userDefinedRenderElement.userDefinedElement.controls+"'") : '';
    let coordsValue: string = userDefinedRenderElement.userDefinedElement.coords ? (" coords='"+userDefinedRenderElement.userDefinedElement.coords+"'") : '';
    let crossoriginValue: string = userDefinedRenderElement.userDefinedElement.crossorigin ? (" crossorigin='"+userDefinedRenderElement.userDefinedElement.crossorigin+"'") : '';
    let cspValue: string = userDefinedRenderElement.userDefinedElement.csp ? (" csp='"+userDefinedRenderElement.userDefinedElement.csp+"'") : '';
    let dataValue: string = userDefinedRenderElement.userDefinedElement.data ? (" data='"+userDefinedRenderElement.userDefinedElement.data+"'") : '';
    let data_StarValue: string = userDefinedRenderElement.userDefinedElement.data_star ? (" data-*='"+userDefinedRenderElement.userDefinedElement.data_star+"'") : '';
    let datetimeValue: string = userDefinedRenderElement.userDefinedElement.datetime ? (" datetime='"+userDefinedRenderElement.userDefinedElement.datetime+"'") : '';
    let decodingValue: string = userDefinedRenderElement.userDefinedElement.decoding ? (" decoding='"+userDefinedRenderElement.userDefinedElement.decoding+"'") : '';
    let defaultValue: string = userDefinedRenderElement.userDefinedElement.default ? (" default='"+userDefinedRenderElement.userDefinedElement.default+"'") : '';
    let deferValue: string = userDefinedRenderElement.userDefinedElement.defer ? (" defer='"+userDefinedRenderElement.userDefinedElement.defer+"'") : '';
    let dirValue: string = userDefinedRenderElement.userDefinedElement.dir ? (" dir='"+userDefinedRenderElement.userDefinedElement.dir+"'") : '';
    let dirnameValue: string = userDefinedRenderElement.userDefinedElement.dirname ? (" dirname='"+userDefinedRenderElement.userDefinedElement.dirname+"'") : '';
    let disabledValue: string = userDefinedRenderElement.userDefinedElement.disabled ? (" disabled='"+userDefinedRenderElement.userDefinedElement.disabled+"'") : '';
    let downloadValue: string = userDefinedRenderElement.userDefinedElement.download ? (" download='"+userDefinedRenderElement.userDefinedElement.download+"'") : '';
    let draggableValue: string = userDefinedRenderElement.userDefinedElement.draggable ? (" draggable='"+userDefinedRenderElement.userDefinedElement.draggable+"'") : '';
    let dropzoneValue: string = userDefinedRenderElement.userDefinedElement.dropzone ? (" dropzone='"+userDefinedRenderElement.userDefinedElement.dropzone+"'") : '';
    let enctypeValue: string = userDefinedRenderElement.userDefinedElement.enctype ? (" enctype='"+userDefinedRenderElement.userDefinedElement.enctype+"'") : '';
    let forValue: string = userDefinedRenderElement.userDefinedElement.for ? (" for='"+userDefinedRenderElement.userDefinedElement.for+"'") : '';
    let formValue: string = userDefinedRenderElement.userDefinedElement.form ? (" form='"+userDefinedRenderElement.userDefinedElement.form+"'") : '';
    let formactionValue: string = userDefinedRenderElement.userDefinedElement.formaction ? (" formaction='"+userDefinedRenderElement.userDefinedElement.formaction+"'") : '';
    let headersValue: string = userDefinedRenderElement.userDefinedElement.headers ? (" headers='"+userDefinedRenderElement.userDefinedElement.headers+"'") : '';
    let hiddenValue: string = userDefinedRenderElement.userDefinedElement.hidden ? (" hidden='"+userDefinedRenderElement.userDefinedElement.hidden+"'") : '';
    let highValue: string = userDefinedRenderElement.userDefinedElement.high ? (" high='"+userDefinedRenderElement.userDefinedElement.high+"'") : '';
    let hrefValue: string = userDefinedRenderElement.userDefinedElement.href ? (" href='"+userDefinedRenderElement.userDefinedElement.href+"'") : '';
    let hreflangValue: string = userDefinedRenderElement.userDefinedElement.hreflang ? (" hreflang='"+userDefinedRenderElement.userDefinedElement.hreflang+"'") : '';
    let http_equivValue: string = userDefinedRenderElement.userDefinedElement.http_equiv ? (" http-equiv='"+userDefinedRenderElement.userDefinedElement.http_equiv+"'") : '';
    let iconValue: string = userDefinedRenderElement.userDefinedElement.icon ? (" icon='"+userDefinedRenderElement.userDefinedElement.icon+"'") : '';
    let idValue: string = userDefinedRenderElement.userDefinedElement.ujs_id ? (" id='"+userDefinedRenderElement.userDefinedElement.ujs_id+"'") : '';
    let importanceValue: string = userDefinedRenderElement.userDefinedElement.importance ? (" importance='"+userDefinedRenderElement.userDefinedElement.importance+"'") : '';
    let integrityValue: string = userDefinedRenderElement.userDefinedElement.integrity ? (" integrity='"+userDefinedRenderElement.userDefinedElement.integrity+"'") : '';
    let ismapValue: string = userDefinedRenderElement.userDefinedElement.ismap ? (" ismap='"+userDefinedRenderElement.userDefinedElement.ismap+"'") : '';
    let itempropValue: string = userDefinedRenderElement.userDefinedElement.itemprop ? (" itemprop='"+userDefinedRenderElement.userDefinedElement.itemprop+"'") : '';
    let keytypeValue: string = userDefinedRenderElement.userDefinedElement.itemprop ? (" keytype='"+userDefinedRenderElement.userDefinedElement.keytype+"'") : '';
    let kindValue: string = userDefinedRenderElement.userDefinedElement.kind ? (" kind='"+userDefinedRenderElement.userDefinedElement.kind+"'") : '';
    let labelValue: string = userDefinedRenderElement.userDefinedElement.label ? (" label='"+userDefinedRenderElement.userDefinedElement.label+"'") : '';
    let langValue: string = userDefinedRenderElement.userDefinedElement.lang ? (" lang='"+userDefinedRenderElement.userDefinedElement.lang+"'") : '';
    let languageValue: string = userDefinedRenderElement.userDefinedElement.language ? (" language='"+userDefinedRenderElement.userDefinedElement.language+"'") : '';
    let lazyloadValue: string = userDefinedRenderElement.userDefinedElement.lazyload ? (" lazyload='"+userDefinedRenderElement.userDefinedElement.lazyload+"'") : '';
    let listValue: string = userDefinedRenderElement.userDefinedElement.list ? (" list='"+userDefinedRenderElement.userDefinedElement.list+"'") : '';
    let loopValue: string = userDefinedRenderElement.userDefinedElement.loop ? (" loop='"+userDefinedRenderElement.userDefinedElement.loop+"'") : '';
    let lowValue: string = userDefinedRenderElement.userDefinedElement.low ? (" low='"+userDefinedRenderElement.userDefinedElement.low+"'") : '';
    let manifestValue: string = userDefinedRenderElement.userDefinedElement.manifest ? (" manifest='"+userDefinedRenderElement.userDefinedElement.manifest+"'") : '';
    let maxValue: string = userDefinedRenderElement.userDefinedElement.max ? (" max='"+userDefinedRenderElement.userDefinedElement.max+"'") : '';
    let maxlengthValue: string = userDefinedRenderElement.userDefinedElement.maxlength ? (" maxlength='"+userDefinedRenderElement.userDefinedElement.maxlength+"'") : '';
    let minlengthValue: string = userDefinedRenderElement.userDefinedElement.minlength ? (" minlength='"+userDefinedRenderElement.userDefinedElement.minlength+"'") : '';
    let mediaValue: string = userDefinedRenderElement.userDefinedElement.media ? (" media='"+userDefinedRenderElement.userDefinedElement.media+"'") : '';
    let methodValue: string = userDefinedRenderElement.userDefinedElement.method ? (" method='"+userDefinedRenderElement.userDefinedElement.method+"'") : '';
    let minValue: string = userDefinedRenderElement.userDefinedElement.min ? (" min='"+userDefinedRenderElement.userDefinedElement.min+"'") : '';
    let multipleValue: string = userDefinedRenderElement.userDefinedElement.multiple ? (" multiple='"+userDefinedRenderElement.userDefinedElement.multiple+"'") : '';
    let mutedValue: string = userDefinedRenderElement.userDefinedElement.muted ? (" muted='"+userDefinedRenderElement.userDefinedElement.muted+"'") : '';
    let nameValue: string = userDefinedRenderElement.userDefinedElement.name ? (" name='"+userDefinedRenderElement.userDefinedElement.name+"'") : '';
    let novalidateValue: string = userDefinedRenderElement.userDefinedElement.novalidate ? (" novalidate='"+userDefinedRenderElement.userDefinedElement.novalidate+"'") : '';
    let openValue: string = userDefinedRenderElement.userDefinedElement.open ? (" open='"+userDefinedRenderElement.userDefinedElement.open+"'") : '';
    let optimumValue: string = userDefinedRenderElement.userDefinedElement.optimum ? (" optimum='"+userDefinedRenderElement.userDefinedElement.optimum+"'") : '';
    let patternValue: string = userDefinedRenderElement.userDefinedElement.pattern ? (" pattern='"+userDefinedRenderElement.userDefinedElement.pattern+"'") : '';
    let pingValue: string = userDefinedRenderElement.userDefinedElement.ping ? (" ping='"+userDefinedRenderElement.userDefinedElement.ping+"'") : '';
    let placeholderValue: string = userDefinedRenderElement.userDefinedElement.placeholder ? (" placeholder='"+userDefinedRenderElement.userDefinedElement.placeholder+"'") : '';
    let posterValue: string = userDefinedRenderElement.userDefinedElement.poster ? (" poster='"+userDefinedRenderElement.userDefinedElement.poster+"'") : '';
    let preloadValue: string = userDefinedRenderElement.userDefinedElement.preload ? (" preload='"+userDefinedRenderElement.userDefinedElement.preload+"'") : '';
    let radiogroupValue: string = userDefinedRenderElement.userDefinedElement.radiogroup ? (" radiogroup='"+userDefinedRenderElement.userDefinedElement.radiogroup+"'") : '';
    let readonlyValue: string = userDefinedRenderElement.userDefinedElement.readonly ? (" readonly='"+userDefinedRenderElement.userDefinedElement.readonly+"'") : '';
    let relValue: string = userDefinedRenderElement.userDefinedElement.rel ? (" rel='"+userDefinedRenderElement.userDefinedElement.rel+"'") : '';
    let requiredValue: string = userDefinedRenderElement.userDefinedElement.required ? (" required='"+userDefinedRenderElement.userDefinedElement.required+"'") : '';
    let reversedValue: string = userDefinedRenderElement.userDefinedElement.reversed ? (" reversed='"+userDefinedRenderElement.userDefinedElement.reversed+"'") : '';
    let rowsValue: string = userDefinedRenderElement.userDefinedElement.rows ? (" rows='"+userDefinedRenderElement.userDefinedElement.rows+"'") : '';
    let rowspanValue: string = userDefinedRenderElement.userDefinedElement.rowspan ? (" rowspan='"+userDefinedRenderElement.userDefinedElement.rowspan+"'") : '';
    let sandboxValue: string = userDefinedRenderElement.userDefinedElement.sandbox ? (" sandbox='"+userDefinedRenderElement.userDefinedElement.sandbox+"'") : '';
    let scopeValue: string = userDefinedRenderElement.userDefinedElement.scope ? (" scope='"+userDefinedRenderElement.userDefinedElement.scope+"'") : '';
    let scopedValue: string = userDefinedRenderElement.userDefinedElement.scoped ? (" scoped='"+userDefinedRenderElement.userDefinedElement.scoped+"'") : '';
    let selectedValue: string = userDefinedRenderElement.userDefinedElement.selected ? (" selected='"+userDefinedRenderElement.userDefinedElement.selected+"'") : '';
    let shapeValue: string = userDefinedRenderElement.userDefinedElement.shape ? (" shape='"+userDefinedRenderElement.userDefinedElement.shape+"'") : '';
    let sizeValue: string = userDefinedRenderElement.userDefinedElement.size ? (" size='"+userDefinedRenderElement.userDefinedElement.size+"'") : '';
    let sizesValue: string = userDefinedRenderElement.userDefinedElement.sizes ? (" sizes='"+userDefinedRenderElement.userDefinedElement.sizes+"'") : '';
    let slotValue: string = userDefinedRenderElement.userDefinedElement.slot ? (" slot='"+userDefinedRenderElement.userDefinedElement.slot+"'") : '';
    let spanValue: string = userDefinedRenderElement.userDefinedElement.span ? (" span='"+userDefinedRenderElement.userDefinedElement.span+"'") : '';
    let spellcheckValue: string = userDefinedRenderElement.userDefinedElement.spellcheck ? (" spellcheck='"+userDefinedRenderElement.userDefinedElement.spellcheck+"'") : '';
    let srcValue: string = userDefinedRenderElement.userDefinedElement.src ? (" src='"+userDefinedRenderElement.userDefinedElement.src+"'") : '';
    let srcdocValue: string = userDefinedRenderElement.userDefinedElement.srcdoc ? (" srcdoc='"+userDefinedRenderElement.userDefinedElement.srcdoc+"'") : '';
    let srclangValue: string = userDefinedRenderElement.userDefinedElement.srclang ? (" srclang='"+userDefinedRenderElement.userDefinedElement.srclang+"'") : '';
    let srcsetValue: string = userDefinedRenderElement.userDefinedElement.srcset ? (" srcset='"+userDefinedRenderElement.userDefinedElement.srcset+"'") : '';
    let startValue: string = userDefinedRenderElement.userDefinedElement.start ? (" start='"+userDefinedRenderElement.userDefinedElement.start+"'") : '';
    let stepValue: string = userDefinedRenderElement.userDefinedElement.step ? (" step='"+userDefinedRenderElement.userDefinedElement.step+"'") : '';
    let styleValue: string = userDefinedRenderElement.userDefinedElement.style ? (" style='"+userDefinedRenderElement.userDefinedElement.style+"'") : '';
    let summaryValue: string = userDefinedRenderElement.userDefinedElement.summary ? (" summary='"+userDefinedRenderElement.userDefinedElement.summary+"'") : '';
    let tabindexValue: string = userDefinedRenderElement.userDefinedElement.tabindex ? (" tabindex='"+userDefinedRenderElement.userDefinedElement.tabindex+"'") : '';
    let titleValue: string = userDefinedRenderElement.userDefinedElement.title ? (" title='"+userDefinedRenderElement.userDefinedElement.title+"'") : '';
    let translateValue: string = userDefinedRenderElement.userDefinedElement.translate ? (" translate='"+userDefinedRenderElement.userDefinedElement.translate+"'") : '';
    let typeValue: string = userDefinedRenderElement.userDefinedElement.type ? (" type='"+userDefinedRenderElement.userDefinedElement.type+"'") : '';
    let usemapValue: string = userDefinedRenderElement.userDefinedElement.usemap ? (" usemappe='"+userDefinedRenderElement.userDefinedElement.usemap+"'") : '';
    let valueValue: string = userDefinedRenderElement.userDefinedElement.value ? (" value='"+userDefinedRenderElement.userDefinedElement.value+"'") : '';
    let widthValue: string = userDefinedRenderElement.userDefinedElement.width ? (" width='"+userDefinedRenderElement.userDefinedElement.width+"'") : '';
    let wrapValue: string = userDefinedRenderElement.userDefinedElement.wrap ? (" wrap='"   +userDefinedRenderElement.userDefinedElement.wrap+"'") : '';
   
    /**
     * show the warnning if attibutes are not valid 
     */
    userDefinedRenderElement.userDefinedElement.addclass ? (console.log('[UJS WARRNING]:: add classes is not valid here, use Reactor to add classes values')): '';
    userDefinedRenderElement.userDefinedElement.id ? (console.log('[UJS WARRNING]:: setting id value is not valid')): '';

    if((temporyInnerHtml == undefined || temporyInnerHtml == null || temporyInnerHtml == "") && flagIndex !== true){
        DOMElement = "<"+userDefinedRenderElement.userDefinedElement.element+
                            acceptValue+
                            acceptcharsetValue+
                            accesskeyValue+
                            actionValue+
                            alignValue+
                            allowValue+
                            altValue+
                            asyncValue+
                            autocapitalizeValue+
                            autocompleteValue+
                            autofocusValue+
                            autoplayValue+
                            bgcolorValue+
                            borderValue+
                            bufferedValue+
                            challengeValue+
                            charsetValue+
                            checkedValue+
                            citeValue+
                            classValue+
                            codeValue+
                            codebaseValue+
                            colorValue+
                            colsValue+
                            colspanValue+
                            contentValue+
                            contenteditableValue+
                            contextmenuValue+
                            controlsValue+
                            coordsValue+
                            crossoriginValue+
                            cspValue+
                            dataValue+
                            data_StarValue+
                            datetimeValue+
                            decodingValue+
                            defaultValue+
                            deferValue+
                            dirValue+
                            dirnameValue+
                            disabledValue+
                            downloadValue+
                            draggableValue+
                            dropzoneValue+
                            enctypeValue+
                            forValue+
                            formValue+
                            formactionValue+
                            headersValue+
                            hiddenValue+
                            highValue+
                            hrefValue+
                            hreflangValue+
                            http_equivValue+
                            iconValue+
                            idValue+
                            importanceValue+
                            integrityValue+
                            ismapValue+
                            itempropValue+
                            keytypeValue+
                            kindValue+
                            labelValue+
                            langValue+
                            languageValue+
                            lazyloadValue+
                            listValue+
                            loopValue+
                            lowValue+
                            manifestValue+
                            maxValue+
                            maxlengthValue+
                            minlengthValue+
                            mediaValue+
                            methodValue+
                            minValue+
                            multipleValue+
                            mutedValue+
                            nameValue+
                            novalidateValue+
                            openValue+
                            optimumValue+
                            patternValue+
                            pingValue+
                            placeholderValue+
                            posterValue+
                            preloadValue+
                            radiogroupValue+
                            readonlyValue+
                            relValue+
                            requiredValue+
                            reversedValue+
                            rowsValue+
                            rowspanValue+
                            sandboxValue+
                            scopeValue+
                            scopedValue+
                            selectedValue+
                            shapeValue+
                            sizeValue+
                            sizesValue+
                            slotValue+
                            spanValue+
                            spellcheckValue+
                            srcValue+
                            srcdocValue+
                            srclangValue+
                            srcsetValue+
                            startValue+
                            stepValue+
                            styleValue+
                            summaryValue+
                            tabindexValue+
                            titleValue+
                            translateValue+
                            typeValue+
                            usemapValue+
                            valueValue+
                            widthValue+
                            wrapValue+
                     ">"+
                     "</"+userDefinedRenderElement.userDefinedElement.element+">";
    }else if(flagIndex === true){
        DOMElement = temporyInnerHtml;
    } else{
        DOMElement = "<"+userDefinedRenderElement.userDefinedElement.element+
                            acceptValue+
                            acceptcharsetValue+
                            accesskeyValue+
                            actionValue+
                            alignValue+
                            allowValue+
                            altValue+
                            asyncValue+
                            autocapitalizeValue+
                            autocompleteValue+
                            autofocusValue+
                            autoplayValue+
                            bgcolorValue+
                            borderValue+
                            bufferedValue+
                            challengeValue+
                            charsetValue+
                            checkedValue+
                            citeValue+
                            classValue+
                            codeValue+
                            codebaseValue+
                            colorValue+
                            colsValue+
                            colspanValue+
                            contentValue+
                            contenteditableValue+
                            contextmenuValue+
                            controlsValue+
                            coordsValue+
                            crossoriginValue+
                            cspValue+
                            dataValue+
                            data_StarValue+
                            datetimeValue+
                            decodingValue+
                            defaultValue+
                            deferValue+
                            dirValue+
                            dirnameValue+
                            disabledValue+
                            downloadValue+
                            draggableValue+
                            dropzoneValue+
                            enctypeValue+
                            forValue+
                            formValue+
                            formactionValue+
                            headersValue+
                            hiddenValue+
                            highValue+
                            hrefValue+
                            hreflangValue+
                            http_equivValue+
                            iconValue+
                            idValue+
                            importanceValue+
                            integrityValue+
                            ismapValue+
                            itempropValue+
                            keytypeValue+
                            kindValue+
                            labelValue+
                            langValue+
                            languageValue+
                            lazyloadValue+
                            listValue+
                            loopValue+
                            lowValue+
                            manifestValue+
                            maxValue+
                            maxlengthValue+
                            minlengthValue+
                            mediaValue+
                            methodValue+
                            minValue+
                            multipleValue+
                            mutedValue+
                            nameValue+
                            novalidateValue+
                            openValue+
                            optimumValue+
                            patternValue+
                            pingValue+
                            placeholderValue+
                            posterValue+
                            preloadValue+
                            radiogroupValue+
                            readonlyValue+
                            relValue+
                            requiredValue+
                            reversedValue+
                            rowsValue+
                            rowspanValue+
                            sandboxValue+
                            scopeValue+
                            scopedValue+
                            selectedValue+
                            shapeValue+
                            sizeValue+
                            sizesValue+
                            slotValue+
                            spanValue+
                            spellcheckValue+
                            srcValue+
                            srcdocValue+
                            srclangValue+
                            srcsetValue+
                            startValue+
                            stepValue+
                            styleValue+
                            summaryValue+
                            tabindexValue+
                            titleValue+
                            translateValue+
                            typeValue+
                            usemapValue+
                            valueValue+
                            widthValue+
                            wrapValue+
                    ">"+
                     temporyInnerHtml+
                    "</"+userDefinedRenderElement.userDefinedElement.element+">";
    }
    return DOMElement;
}
