'use strict';

let math = module.exports = {};

math.add = function(a,b) {
  if( typeof a !== "number" || typeof b !== "number" ){
    return null;
  }else{
    return a+b;
  }
};

math.subtract = function (a,b) {
  if( typeof a !== "number" || typeof b !== "number" ){
    return null;
  }else{
    return a-b;
  }
};
