import { swap } from './common'

describe('common util - swap', () => {
  it.each([
    [1, 2, [2, 1]],
    ['first', 'second', ['second', 'first']],
    [true, false, [false, true]],
    [{
      num: 1,
      str: 'first',
    }, {
      num: 2,
      str: 'second',
    }, [{
      num: 2,
      str: 'second',
    }, {
      num: 1,
      str: 'first',
    }]],
  ])('should be swaped', (a, b, expected) => {
    expect(swap(a, b)).toEqual(expected)
  })
})
