/**
 * **************************************************************************************************
 * @author Ruwan chamara   2018                                                                         
 * @description UraniumJS automation task by gulp js
 *              Most of the automation task bundling, cleaning all ts file done by this file
 *              user has warning for editing this
 * 
 * @copyright UraniumJS
 * **************************************************************************************************
 */


var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");
var fs = require('fs');

var paths = {
    pages: ['src/*.html']
};

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/lib_modules/_ignite/ignite.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

gulp.task("copy-html", gulp.series(function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
}));

function bundle() {
    return watchedBrowserify
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("dist"));    
}

/**
 * @description this method is not longer use
 */
function readBundleWhenChange () {
    var bundleContent = readBundleJS();
    var splitWithSemiColon = splitWithLineBreak(bundleContent);
    var jsonList = readSplitBundleContentList(splitWithSemiColon);
    var nameScopWithFunctionNameList = collectNameScop(jsonList);
    var newBundleData = addGlobalVariableToOnclickFunction(nameScopWithFunctionNameList, bundleContent);
    return writeToNewBundleJs(newBundleData);
}

/**
 * @deprecated
 * @param {*} bundleData 
 */
function writeToNewBundleJs(bundleData) {
    fs.writeFile('dist/bundle_t.js', bundleData, function(err, bundleData){
        if (err) console.log(err);
        console.log("[INFO:] Successfully by Written to File.");
    });
    return true;
}

/**
 * 
 * @deprecated
 * @param {*} nameScopWithFunctionNameList 
 * @param {*} bundleContent 
 */
function addGlobalVariableToOnclickFunction(nameScopWithFunctionNameList, bundleContent) {
    if (nameScopWithFunctionNameList.length == 0) return bundleContent;
    var splitToken = '.';
    for (functionName of nameScopWithFunctionNameList) {
        var nameScopeAndFunctionName = new Array();
        nameScopeAndFunctionName = functionName.split(splitToken);
        if (nameScopeAndFunctionName.length != 2) continue;
        var functionScope = nameScopeAndFunctionName[0];
        var functionName  = nameScopeAndFunctionName[1].replace("()","");
        var searchStringPattern = functionScope+'\\.prototype\\.'+functionName+" \\= function \\(\\) ([\\S\\s]*?)\\{([\\S\\s]*?)(.*?)\\}";
        var searchStringForFunctionName = functionScope+'\\.prototype\\.'+functionName;
        var replaceStringPattern = "window."+functionScope+"_"+functionName+" = "+functionScope+".prototype."+functionName;
        var regExpObjectForFunctionBody = new RegExp(searchStringPattern);
        var regExpObjectForFunctionName = new RegExp(searchStringForFunctionName);
            var match = bundleContent.match(regExpObjectForFunctionBody);
            if (match != null) {
                var newFunctionBody = match[0].replace('this.',functionScope+'.prototype.');
                bundleContent =  bundleContent.replace(regExpObjectForFunctionName,replaceStringPattern);
                bundleContent = bundleContent.replace(regExpObjectForFunctionBody,newFunctionBody);
            }
    }
    return bundleContent;
}

/**
 * @deprecated
 * @param {*} jsonList 
 */
function collectNameScop(jsonList) {
    var nameScopWithFunctionNameList = new Array();
    if (jsonList.length == 0) return nameScopWithFunctionNameList;
    for (json of jsonList) {
        if (json == null || undefined) continue;
        if (isOnClickHas(json)) {
            nameScopWithFunctionNameList.push(json.onclick);
        }
        if (isOnAbortHas(json)) {
            nameScopWithFunctionNameList.push(json.onabort);
        }
        if (isOnAuxClickHas(json)) {
            nameScopWithFunctionNameList.push(json.onauxclick);
        }
        if (isOnBeforeCopyHas(json)) {
            nameScopWithFunctionNameList.push(json.onbeforecopy);
        }
        if (isOnBeforeCutHas(json)) {
            nameScopWithFunctionNameList.push(json.onbeforecut);
        }
        if (isOnBeforePasteHas(json)) {
            nameScopWithFunctionNameList.push(json.onbeforepaste);
        }
        if (isOnBlurHas(json)) {
            nameScopWithFunctionNameList.push(json.onblur);
        }
        if (isOnCancelHas(json)) {
            nameScopWithFunctionNameList.push(json.oncancel);
        }
        if (isOnCanPlayHas(json)) {
            nameScopWithFunctionNameList.push(json.oncanplay);
        }
        if (isOncanPlaythroughHas(json)) {
            nameScopWithFunctionNameList.push(json.oncanplaythrough);
        }
        if (isOnChangeHas(json)) {
            nameScopWithFunctionNameList.push(json.onchange);
        }
        if (isOnCloseHas(json)) {
            nameScopWithFunctionNameList.push(json.onclose);
        }
        if (isOncontextMenuHas(json)) {
            nameScopWithFunctionNameList.push(json.oncontextmenu);
        }
        if (isOnCopyHas(json)) {
            nameScopWithFunctionNameList.push(json.oncopy);
        }
        if (isOnCueChangeHas(json)) {
            nameScopWithFunctionNameList.push(json.oncuechange);
        }
        if (isOnCutHas(json)) {
            nameScopWithFunctionNameList.push(json.oncut);
        }
        if (isOndblClickHas(json)) {
            nameScopWithFunctionNameList.push(json.ondblclick);
        }
        if (isOnDragHas(json)) {
            nameScopWithFunctionNameList.push(json.ondrag);
        }
        if (isOnDragEndHas(json)) {
            nameScopWithFunctionNameList.push(json.ondragend);
        }
        if (isOnDragEnterHas(json)) {
            nameScopWithFunctionNameList.push(json.ondragenter);
        }
        if (isOnDragLeaveHas(json)) {
            nameScopWithFunctionNameList.push(json.ondragleave);
        }
        if (isOnDragOverHas(json)) {
            nameScopWithFunctionNameList.push(json.ondragover);
        }
        if (isOnDragStartHas(json)) {
            nameScopWithFunctionNameList.push(json.ondragstart);
        }
        if (isOnDropHas(json)) {
            nameScopWithFunctionNameList.push(json.ondrop);
        }
        if (isOnDurationChangeHas(json)) {
            nameScopWithFunctionNameList.push(json.ondurationchange);
        }
        if (isOnEmptiedHas(json)) {
            nameScopWithFunctionNameList.push(json.onemptied);
        }
        if (isOnEndedHas(json)) {
            nameScopWithFunctionNameList.push(json.onended);
        }
        if (isOnErrorHas(json)) {
            nameScopWithFunctionNameList.push(json.onerror);
        }
        if (isOnFocusHas(json)) {
            nameScopWithFunctionNameList.push(json.onfocus);
        }
        if (isOnFullScreenChangeHas(json)) {
            nameScopWithFunctionNameList.push(json.onfullscreenchange);
        }
        if (isOnFullScreenErrorHas(json)) {
            nameScopWithFunctionNameList.push(json.onfullscreenerror);
        }
        if (isOnInputHas(json)) {
            nameScopWithFunctionNameList.push(json.oninput);
        }
        if (isOnInvalidHas(json)) {
            nameScopWithFunctionNameList.push(json.oninvalid);
        }
        if (isOnKeyDownHas(json)) {
            nameScopWithFunctionNameList.push(json.onkeydown);
        }
        if (isOnKeyPressHas(json)) {
            nameScopWithFunctionNameList.push(json.onkeypress);
        }
        if (isOnKeyUpHas(json)) {
            nameScopWithFunctionNameList.push(json.onkeyup);
        }
        if (isOnLoadHas(json)) {
            nameScopWithFunctionNameList.push(json.onload);
        }
        if (isOnLoadedDataHas(json)) {
            nameScopWithFunctionNameList.push(json.onloadeddata);
        }
        if (isOnLoadedMetaDataHas(json)) {
            nameScopWithFunctionNameList.push(json.onloadedmetadata);
        }
        if (isOnLoadStartHas(json)) {
            nameScopWithFunctionNameList.push(json.onloadstart);
        }
        if (isOnLostPointerCaptureHas(json)) {
            nameScopWithFunctionNameList.push(json.onlostpointercapture);
        }
        if (isOnMouseDownHas(json)) {
            nameScopWithFunctionNameList.push(json.onmousedown);
        }
        if (isOnMouseEnterHas(json)) {
            nameScopWithFunctionNameList.push(json.onmouseenter);
        }
        if (isOnMouseLeaveHas(json)) {
            nameScopWithFunctionNameList.push(json.onmouseleave);
        }
        if (isOnMouseMoveHas(json)) {
            nameScopWithFunctionNameList.push(json.onmousemove);
        }
        if (isOnMouseOutHas(json)) {
            nameScopWithFunctionNameList.push(json.onmouseout);
        }
        if (isOnMouseOverHas(json)) {
            nameScopWithFunctionNameList.push(json.onmouseover);
        }
        if (isOnMouseUpHas(json)) {
            nameScopWithFunctionNameList.push(json.onmouseup);
        }
        if (isOnMouseWheelHas(json)) {
            nameScopWithFunctionNameList.push(json.onmousewheel);
        }
        if (isOnPasteHas(json)) {
            nameScopWithFunctionNameList.push(json.onpaste);
        }
        if (isOnPauseHas(json)) {
            nameScopWithFunctionNameList.push(json.onpause);
        }
        if (isOnPlayHas(json)) {
            nameScopWithFunctionNameList.push(json.onplay);
        }
        if (isOnPlayingHas(json)) {
            nameScopWithFunctionNameList.push(json.onplaying);
        }
        if (isOnPointerCancelHas(json)) {
            nameScopWithFunctionNameList.push(json.onpointercancel);
        }
        if (isOnPointerDownHas(json)) {
            nameScopWithFunctionNameList.push(json.onpointerdown);
        }
        if (isOnPointerEnterHas(json)) {
            nameScopWithFunctionNameList.push(json.onpointerenter);
        }
        if (isOnPointerLeaveHas(json)) {
            nameScopWithFunctionNameList.push(json.onpointerleave);
        }
        if (isOnPointerMoveHas(json)) {
            nameScopWithFunctionNameList.push(json.onpointermove);
        }
        if (isOnPointerOutHas(json)) {
            nameScopWithFunctionNameList.push(json.onpointerout);
        }
        if (isOnPointerOverHas(json)) {
            nameScopWithFunctionNameList.push(json.onpointerover);
        }
        if (isOnPointerUpHas(json)) {
            nameScopWithFunctionNameList.push(json.onpointerup);
        }
        if (isOnProgressHas(json)) {
            nameScopWithFunctionNameList.push(json.onprogress);
        }
        if (isOnRateChangeHas(json)) {
            nameScopWithFunctionNameList.push(json.onratechange);
        }
        if (isOnResetHas(json)) {
            nameScopWithFunctionNameList.push(json.onreset);
        }
        if (isOnResizeHas(json)) {
            nameScopWithFunctionNameList.push(json.onresize);
        }
        if (isOnScrollHas(json)) {
            nameScopWithFunctionNameList.push(json.onscroll);
        }
        if (isOnSearchHas(json)) {
            nameScopWithFunctionNameList.push(json.onsearch);
        }
        if (isOnSeekedHas(json)) {
            nameScopWithFunctionNameList.push(json.onseeked);
        }
        if (isOnSeekingHas(json)) {
            nameScopWithFunctionNameList.push(json.onseeking);
        }
        if (isOnSelectHas(json)) {
            nameScopWithFunctionNameList.push(json.onselect);
        }
        if (isOnSelectionChangeHas(json)) {
            nameScopWithFunctionNameList.push(json.onselectionchange);
        }
        if (isOnStalledHas(json)) {
            nameScopWithFunctionNameList.push(json.onstalled);
        }
        if (isOnSubmitHas(json)) {
            nameScopWithFunctionNameList.push(json.onsubmit);
        }
        if (isOnSuspendHas(json)) {
            nameScopWithFunctionNameList.push(json.onsuspend);
        }
        if (isOnTimeUpdateHas(json)) {
            nameScopWithFunctionNameList.push(json.ontimeupdate);
        }
        if (isOnToggleHas(json)) {
            nameScopWithFunctionNameList.push(json.ontoggle);
        }
        if (isOnVolumeChangeHas(json)) {
            nameScopWithFunctionNameList.push(json.onvolumechange);
        }
        if (isOnWaitingHas(json)) {
            nameScopWithFunctionNameList.push(json.onwaiting);
        }
        if (isOnWebkitFullScreenChangeHas(json)) {
            nameScopWithFunctionNameList.push(json.onwebkitfullscreenchange);
        }
        if (isOnWebkitFullScreenErrorHas(json)) {
            nameScopWithFunctionNameList.push(json.onwebkitfullscreenerror);
        }
        if (isOnWheelHas(json)) {
            nameScopWithFunctionNameList.push(json.onwheel);
        }


    }
    return nameScopWithFunctionNameList;
}
/**
 * @deprecated
 * @param {*} json 
 */
function isOnClickHas(json) {
    if (json.onclick == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnAbortHas(json) {
    if (json.onabort == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnAuxClickHas(json) {
    if (json.onauxclick == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnBeforeCopyHas(json) {
    if (json.onbeforecopy == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnBeforeCutHas(json) {
    if (json.onbeforecut == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnBeforePasteHas(json) {
    if (json.onbeforepaste == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnBlurHas(json) {
    if (json.onblur == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnCancelHas(json) {
    if (json.oncancel == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnCancelHas(json) {
    if (json.oncancel == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnCanPlayHas(json) {
    if (json.oncanplay == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOncanPlaythroughHas(json) {
    if (json.oncanplaythrough == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnChangeHas(json) {
    if (json.onchange == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnCloseHas(json) {
    if (json.onclose == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOncontextMenuHas(json) {
    if (json.oncontextmenu == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnCopyHas(json) {
    if (json.oncopy == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnCueChangeHas(json) {
    if (json.oncuechange == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnCutHas(json) {
    if (json.oncut == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOndblClickHas(json) {
    if (json.ondblclick == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnDragHas(json) {
    if (json.ondrag == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnDragEndHas(json) {
    if (json.ondragend == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnDragEnterHas(json) {
    if (json.ondragenter == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnDragLeaveHas(json) {
    if (json.ondragleave == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnDragOverHas(json) {
    if (json.ondragover == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnDragStartHas(json) {
    if (json.ondragstart == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnDropHas(json) {
    if (json.ondrop == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnDurationChangeHas(json) {
    if (json.ondurationchange == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnEmptiedHas(json) {
    if (json.onemptied == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnEndedHas(json) {
    if (json.onended == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnErrorHas(json) {
    if (json.onended == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnFocusHas(json) {
    if (json.onfocus == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnFullScreenChangeHas(json) {
    if (json.onfullscreenchange == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnFullScreenErrorHas(json) {
    if (json.onfullscreenerror == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnInputHas(json) {
    if (json.oninput == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnInvalidHas(json) {
    if (json.oninvalid == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnKeyDownHas(json) {
    if (json.onkeydown == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnKeyPressHas(json) {
    if (json.onkeypress == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnKeyUpHas(json) {
    if (json.onkeyup == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnLoadHas(json) {
    if (json.onload == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnLoadedDataHas(json) {
    if (json.onloadeddata == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnLoadedMetaDataHas(json) {
    if (json.onloadedmetadata == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnLoadStartHas(json) {
    if (json.onloadstart == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnLostPointerCaptureHas(json) {
    if (json.onlostpointercapture == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnMouseDownHas(json) {
    if (json.onmousedown == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnMouseEnterHas(json) {
    if (json.onmouseenter == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnMouseLeaveHas(json) {
    if (json.onmouseleave == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnMouseMoveHas(json) {
    if (json.onmousemove == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnMouseOutHas(json) {
    if (json.onmouseout == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnMouseOverHas(json) {
    if (json.onmouseover == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnMouseUpHas(json) {
    if (json.onmouseup == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnMouseWheelHas(json) {
    if (json.onmousewheel == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnPasteHas(json) {
    if (json.onpaste == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnPauseHas(json) {
    if (json.onpause == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnPlayHas(json) {
    if (json.onplay == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnPlayingHas(json) {
    if (json.onplaying == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnPointerCancelHas(json) {
    if (json.onpointercancel == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnPointerDownHas(json) {
    if (json.onpointerdown == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnPointerEnterHas(json) {
    if (json.onpointerenter == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnPointerLeaveHas(json) {
    if (json.onpointerleave == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnPointerMoveHas(json) {
    if (json.onpointermove == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnPointerOutHas(json) {
    if (json.onpointerout == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnPointerOverHas(json) {
    if (json.onpointerover == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnPointerUpHas(json) {
    if (json.onpointerup == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnProgressHas(json) {
    if (json.onprogress == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnRateChangeHas(json) {
    if (json.onratechange == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnResetHas(json) {
    if (json.onreset == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnResizeHas(json) {
    if (json.onresize == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnScrollHas(json) {
    if (json.onscroll == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnSearchHas(json) {
    if (json.onsearch == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnSeekedHas(json) {
    if (json.onseeked == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnSeekingHas(json) {
    if (json.onseeking == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnSelectHas(json) {
    if (json.onselect == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnSelectionChangeHas(json) {
    if (json.onselectionchange == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnStalledHas(json) {
    if (json.onstalled == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnSubmitHas(json) {
    if (json.onsubmit == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnSuspendHas(json) {
    if (json.onsuspend == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnTimeUpdateHas(json) {
    if (json.ontimeupdate == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnToggleHas(json) {
    if (json.ontoggle == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnVolumeChangeHas(json) {
    if (json.onvolumechange == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnWaitingHas(json) {
    if (json.onwaiting == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnWebkitFullScreenChangeHas(json) {
    if (json.onwebkitfullscreenchange == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnWebkitFullScreenErrorHas(json) {
    if (json.onwebkitfullscreenerror == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} json 
 */
function isOnWheelHas(json) {
    if (json.onwheel == null || undefined || "")  return false;
    return true;
}

/**
 * @deprecated
 * @param {*} splitBundleContentList 
 */
function readSplitBundleContentList(splitBundleContentList) {
    if (splitBundleContentList == null) {
        return null;
    }
    var regexObjectForElementObject = new RegExp(/\.Element([\S\s]*?)\(([\S\s]*?)\{([\S\s]*?)(.*?)\}([\S\s]*?)\)/g);
    var regexObjectForJsonObject = new RegExp(/\{([\S\s]*?)(.*?)\}/g);
    var jsonList = new Array();
    for (line of splitBundleContentList) {
        var json = null;
        var matches = line.match(regexObjectForElementObject);
        if (matches == null) continue;
        var getJson = matches[0].match(regexObjectForJsonObject);
        if (getJson != null) {
            var replaceJson = getJson[0].replace(/'/g,'"');
            try {
                json = JSON.parse(replaceJson);
                jsonList.push(json);
            }catch(error) {
                console.log("ERROR: json parse error",error);
            }
        } 
    }
    return jsonList;
}

/**
 * @deprecated
 * @param {*} bundleContent 
 */
function splitWithLineBreak(bundleContent) {
    var splitToken = ';';
    var splitBundleContentList = null
    if (bundleContent == null) {
        return splitBundleContent;
    }
    return splitBundleContentList = bundleContent.toString().split(splitToken);
}

/**
 * @deprecated
 * read the bundle js file and return the content if available, otherwise return null
 */
function readBundleJS() {

    var bundleContent = null;
    var bundleJsPath  = 'dist/bundle.js';//TODO use config data function
    var encodeMethod  = 'utf8'; 
    try {
        bundleContent = fs.readFileSync(bundleJsPath, encodeMethod);
    } catch(error) {
        console.log("ERROR: reading bundlejs file error:",error);
    }
    return bundleContent;
}

/**
 * read config file to get user defined data
 */
function readConfigData() {
    //TODO
}

// gulp.task("default", gulp.series("copy-html",bundle, readBundleWhenChange));
// watchedBrowserify.on("update",gulp.series(bundle, readBundleWhenChange));
gulp.task("default", gulp.series("copy-html",bundle));
watchedBrowserify.on("update",gulp.series(bundle));
watchedBrowserify.on("log", gutil.log);
