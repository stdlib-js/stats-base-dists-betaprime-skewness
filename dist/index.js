"use strict";var t=function(s,r){return function(){return r||s((r={exports:{}}).exports,r),r.exports}};var n=t(function(f,u){
var i=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-special-sqrt/dist');function q(s,r){var e;return i(s)||s<=0||i(r)||r<=3?NaN:(e=2*(2*s+r-1)/(r-3),e*=o((r-2)/(s*(s+r-1))),e)}u.exports=q
});var v=n();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
