// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.2-esm/index.mjs";function e(e,r){var a;return s(e)||e<=0||s(r)||r<=3?NaN:(a=2*(2*e+r-1)/(r-3),a*=t((r-2)/(e*(e+r-1))))}export{e as default};
//# sourceMappingURL=index.mjs.map