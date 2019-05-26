import Sha1 from '../_sha1/sha1';

export default class SuperElement {

    /**
     * @param elementObject object need to calculate sha1 hash
     */
    ujsSha1(elementObject: any): string {
        return this.ujsIdcreater(elementObject);
    }

    /**
     * create an one string bind all attribute into one string
     * pass the string into sha1 class for calculate unique sha1 hash
     * @param elementObject object need to calculate sha1 hash
     */
    ujsIdcreater(elementObject: any) {
        var keys_arrays = (<any>Object).entries(elementObject);
        var glue_string;
        for(var e_index = 0;e_index < keys_arrays.length;e_index++){
           if(keys_arrays[e_index][1] == undefined || keys_arrays[e_index][1] == null) continue; //avoid unneccesery attributes from id
           if(keys_arrays[e_index][0] == "id")   continue;
           if(keys_arrays[e_index][0] == "bind") continue;
           if(glue_string == null || glue_string == undefined) { glue_string = keys_arrays[e_index][1]; continue;}
               glue_string = glue_string+keys_arrays[e_index][1];    
        }
        
        return new Sha1().hash(glue_string,true);
    }

}