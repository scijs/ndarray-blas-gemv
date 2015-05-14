# ndarray-blas-gemv

[![Build Status](https://travis-ci.org/scijs/ndarray-blas-gemv.svg?branch=master)](https://travis-ci.org/scijs/ndarray-blas-gemv) [![npm version](https://badge.fury.io/js/ndarray-blas-gemv.svg)](http://badge.fury.io/js/ndarray-blas-gemv)

BLAS Level 2 GEMV (triangular solve) for [ndarrays](https://github.com/scijs/ndarray)

## Usage

#### `gemv( alpha, A, x, beta, y )`
Calculate `y <- alpha * A * x + beta * y` for scalar alpha, matrix A, vector x, scalar beta, and vector y. Result is overwritten in vector y. All other inputs are unchanged.

## Example

```javascript
var gemv require('ndarray-blas-gemv')

var A = ndarray([1,2,5,3], [2,2]),
    x = ndarray([-4,7]),
    y = ndarray([3,-2])

gemv( -4, A, x, 2, y )

// Result: y = [-34, -8]
```

Note that to multiply by the transpose, you can simply transpose the input.

```javascript
var A = ndarray([1,2,5,3], [2,2]),
    x = ndarray([-4,7]),
    y = ndarray([3,-2])

gemv( -4, A.transpose(1,0), x, 2, y )

// Result: y = [-118, -56]
```


## Credits
(c) 2015 Ricky Reusser. MIT License

