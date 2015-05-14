'use strict'

var assert = require('assert'),
    ndarray = require('ndarray'),
    gemv = require('../lib'),
    ndt = require('ndarray-tests'),
    pool = require('ndarray-scratch')

describe("gemv()",function() {

  var A, A0, x, x0, y;

  beforeEach(function() {
    A  = ndarray([1,2,5,3], [2,2])
    A0 = ndarray([1,2,5,3], [2,2])
    x  = ndarray([-4,7])
    x0 = ndarray([-4,7])
    y = ndarray([3,-2])
  })

  it('gemv',function() {
    assert( gemv( -4, A, x, 2, y ) )
    assert( ndt.approximatelyEqual( ndarray([-34,-8]), y, 1e-8 ), 'y contains the answer' )
    assert( ndt.approximatelyEqual( A0, A, 1e-8 ), 'A is unchanged' )
    assert( ndt.approximatelyEqual( x0, x, 1e-8 ), 'x is unchanged' )
  })

  it('gemv with transpose',function() {
    assert( gemv( -4, A.transpose(1,0), x, 2, y ) )
    assert( ndt.approximatelyEqual( ndarray([-118,-56]), y, 1e-8 ), 'y contains the answer' )
    assert( ndt.approximatelyEqual( A0, A, 1e-8 ), 'A is unchanged' )
    assert( ndt.approximatelyEqual( x0, x, 1e-8 ), 'x is unchanged' )
  })

})

