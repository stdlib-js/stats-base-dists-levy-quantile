// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erfcinv@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";function r(t,s,r){var i;return e(s)||e(r)||e(t)||r<=0||t<0||t>1?NaN:s+r/(2*(i=n(t))*i)}function i(t,r){return e(t)||e(r)||r<=0?s(NaN):function(s){var i;if(e(s)||s<0||s>1)return NaN;return i=n(s),t+r/(2*i*i)}}t(r,"factory",i);export{r as default,i as factory};
//# sourceMappingURL=index.mjs.map
