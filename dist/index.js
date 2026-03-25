"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=v(function(b,f){
var i=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-erfcinv/dist');function l(e,r,n){var t;return i(r)||i(n)||i(e)||n<=0||e<0||e>1?NaN:(t=N(e),r+n/(2*t*t))}f.exports=l
});var q=v(function(g,o){
var y=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-erfcinv/dist');function d(e,r){if(u(e)||u(r)||r<=0)return y(NaN);return n;function n(t){var a;return u(t)||t<0||t>1?NaN:(a=x(t),e+r/(2*a*a))}}o.exports=d
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=s(),O=q();F(c,"factory",O);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
