<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Skewness

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Beta prime][betaprime-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [beta prime][betaprime-distribution] random variable with first shape parameter `α` and second shape parameter `β` is

<!-- <equation class="equation" label="eq:betaprime_skewness" align="center" raw="\operatorname{skew}\left( X \right) = \frac{2(2\alpha + \beta - 1)}{\beta - 3}{\sqrt{\frac{\beta - 2}{\alpha (\alpha + \beta - 1)}}}" alt="Skewness for a beta prime distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{skew}\left( X \right) = \frac{2(2\alpha + \beta - 1)}{\beta - 3}{\sqrt{\frac{\beta - 2}{\alpha (\alpha + \beta - 1)}}}" data-equation="eq:betaprime_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/betaprime/skewness/docs/img/equation_betaprime_skewness.svg" alt="Skewness for a beta prime distribution.">
    <br>
</div>

<!-- </equation> -->

when `α > 0` and `β > 3`. Otherwise, the skewness is not defined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-betaprime-skewness
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var skewness = require( '@stdlib/stats-base-dists-betaprime-skewness' );
```

#### skewness( alpha, beta )

Returns the [skewness][skewness] of a [beta prime][betaprime-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var v = skewness( 2.0, 4.0 );
// returns ~6.261

v = skewness( 4.0, 12.0 );
// returns ~1.724

v = skewness( 8.0, 4.0 );
// returns ~5.729
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = skewness( NaN, 4.0 );
// returns NaN

v = skewness( 2.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var v = skewness( 0.0, 4.0 );
// returns NaN

v = skewness( -1.0, 4.0 );
// returns NaN
```

If provided `beta <= 3`, the function returns `NaN`.

```javascript
var v = skewness( 1.0, 2.5 );
// returns NaN

v = skewness( 1.0, 0.0 );
// returns NaN

v = skewness( 1.0, -1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var EPS = require( '@stdlib/constants-float64-eps' );
var skewness = require( '@stdlib/stats-base-dists-betaprime-skewness' );

var alpha;
var beta;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*10.0 ) + EPS;
    beta = ( randu()*10.0 ) + 3.0 + EPS;
    v = skewness( alpha, beta );
    console.log( 'α: %d, β: %d, skew(X;α,β): %d', alpha.toFixed( 4 ), beta.toFixed( 4 ), v.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-betaprime-skewness.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-betaprime-skewness

[test-image]: https://github.com/stdlib-js/stats-base-dists-betaprime-skewness/actions/workflows/test.yml/badge.svg?branch=v0.0.8
[test-url]: https://github.com/stdlib-js/stats-base-dists-betaprime-skewness/actions/workflows/test.yml?query=branch:v0.0.8

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-betaprime-skewness/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-betaprime-skewness?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-betaprime-skewness.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-betaprime-skewness/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-betaprime-skewness/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-betaprime-skewness/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-betaprime-skewness/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-betaprime-skewness/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-betaprime-skewness/main/LICENSE

[betaprime-distribution]: https://en.wikipedia.org/wiki/Beta_prime_distribution

[skewness]: https://en.wikipedia.org/wiki/Skewness

</section>

<!-- /.links -->
