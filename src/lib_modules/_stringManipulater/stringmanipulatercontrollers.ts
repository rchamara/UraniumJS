/**
 * 
 * @param attributeValue 
 */
export function rearrangeHeightAndWidth(attributeValue: string): number {
    let manipulateWithPixelValue: string = stringValueManipulaterWithPixel(attributeValue);
    if(manipulateWithPixelValue != null) return +manipulateWithPixelValue;
    let manipulateWithPrecentageValue: string = stringValueManipulaterWithPrecentage(attributeValue);
    if(manipulateWithPrecentageValue != null) return +manipulateWithPrecentageValue;
}

/**
 * 
 * @param attributeValue 
 */
export function stringValueManipulaterWithPixel(attributeValue: string): string {
    return attributeValue.split("px")[0];
}

/**
 * 
 * @param attributeValue 
 */
export function stringValueManipulaterWithPrecentage(attributeValue: string): string {
    return attributeValue.split("%")[0];
}

/**
 * 
 * @param attributeValue 
 */
export function isEqualToAuto(attributeValue: string): boolean {
    if(attributeValue == "auto") return true;
    return false;
}