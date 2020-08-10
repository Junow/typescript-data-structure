import MinHeap from './minHeap'

describe('min heap', () => {
  it('should return minimum value (number type)', () => {
    const minHeap = new MinHeap<number>()
    minHeap.insert(3)
    minHeap.insert(2)
    minHeap.insert(1)
    expect(minHeap.size()).toEqual(3)
    expect(minHeap.pop()).toEqual(1)
    expect(minHeap.pop()).toEqual(2)
    expect(minHeap.pop()).toEqual(3)
  })

  it('should return minimum value (string type)', () => {
    const minHeap = new MinHeap<string>()
    minHeap.insert('a')
    minHeap.insert('b')
    minHeap.insert('c')
    expect(minHeap.pop()).toEqual('c')
    expect(minHeap.pop()).toEqual('b')
    expect(minHeap.pop()).toEqual('a')
  })

  it('should contain object values', () => {
    interface Data{
      num: number,
      str: string,
    }
    const data1:Data = {
      num: 1,
      str: 'first',
    }
    const data2:Data = {
      num: 2,
      str: 'second',
    }
    const data3:Data = {
      num: 3,
      str: 'third',
    }
    function comp(a: Data, b: Data) {
      if (a.num === b.num) {
        return a.str > b.str
      }
      return a.num > b.num
    }
    const minHeap = new MinHeap<Data>(comp)
    minHeap.insert(data1)
    minHeap.insert(data2)
    minHeap.insert(data3)
    expect(minHeap.pop()).toEqual(data1)
    expect(minHeap.pop()).toEqual(data2)
    expect(minHeap.pop()).toEqual(data3)
  })
})
