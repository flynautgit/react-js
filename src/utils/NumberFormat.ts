class NumberFormat{

    toUSstandard(val:string=""):string{
        let isNegative = (val && val[0]) === "-" ? true : false;
        let data = val.replace(/\-/g,"").split(".");
        let beforeDec = data[0];
        let decimal = data.length > 1 ? true : false;
        let afterDec = data.length > 1 ? data[1] : "";
        let prep = "";
        let count=0;
        for(var i=beforeDec.length-1; i>=0; i--){

            if(count === 3){
                prep = ","+prep;
                count = 0;
            }

            prep = beforeDec[i]+prep;
            count++;

        }
        if(isNegative)
        prep = "-"+prep;
        if(decimal)
        return prep+"."+afterDec;
        else
        return prep;
    }

    toINDstandard(val:string=""):string{
        let isNegative = (val && val[0]) === "-" ? true : false;
        let data = val.replace(/\-/g,"").split(".");
        let beforeDec = data[0];
        let decimal = data.length > 1 ? true : false;
        let afterDec = data.length > 1 ? data[1] : "";
        let prep = "";
        let count=0;
        let matcher=3;
        for(var i=beforeDec.length-1; i>=0; i--){

            if(count === matcher){
                prep = ","+prep;
                count = 0;
                matcher = 2;
            }

            prep = beforeDec[i]+prep;
            count++;

        }
        if(isNegative)
        prep = "-"+prep;
        if(decimal)
        return prep+"."+afterDec;
        else
        return prep;
    }

}

export default new NumberFormat();