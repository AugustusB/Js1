
(function(ns1, ns2){
    
    ns2.JsSample1 = function JsSample1(){
        //"use strict"

        // Pubic properties
        Object.defineProperty(this, "z", {
            get: function() {return z;},
            set: function(value) {z = value;}
        })
        
        // private members
        var z = 10, // z - 10

        objLit1 = {
            firstname: 'Gus',
            surmane: 'Balasuriya',
            age: 24
        },
        consoleLog1 = function consoleLog1(){
            return console.log("Number.parseFloat === parseFloat : " + (Number.parseFloat === parseFloat));
        },
        
        funcXPlussZ = function funcXPlussZ (x, findElem){

            z += 10;  // z - 20
            var html = '<p> z =' + z + '</P>';

            x +=1 + z; // x - 41
            html += '<p> x += 1 + z : ' + x + '</P>';

            z += 10; // z - 30
            html += '<p> z += 10 : ' + z + '</P>';

            $(findElem).append(html);
            
        },
        
                                                                                                                              
        primitiveDataTypes = function primitiveDataTypes(findElem){
            var var1;
            $(findElem).text("typeof var not initailised :" + typeof(var1));
        },
        
        itterateUseForin = function itterateUseForin(findElem){
            
            for (var field in objLit1) {
                if (objLit1.hasOwnProperty(field)) {
                    var element = objLit1[field];
                    var html = '<option>' + field + ' : ' + element + '</option>';
                    $(findElem).append(html);
                }
            }
        };

        // public members
        return {
            consoleLog1: consoleLog1,
            funcXPlussZ: funcXPlussZ,
            primitiveDataTypes:primitiveDataTypes,
            itterateUseForin: itterateUseForin,
            z1: z
        };
    };

})(window.Gus = window.Gus || {}, window.Gus.JavascriptSample = window.Gus.JavascriptSample || {});