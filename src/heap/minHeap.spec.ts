import MinHeap from './minHeap'

describe('min heap', () => {
  it('should return minimum value', () => {
    const minHeap = new MinHeap<number>()
    minHeap.insert(4)
    minHeap.insert(3)
    minHeap.insert(2)
    minHeap.insert(1)
    expect(minHeap.size()).toEqual(4)
    expect(minHeap.pop()).toEqual(1)
    expect(minHeap.pop()).toEqual(2)
    expect(minHeap.pop()).toEqual(3)
  })
})
