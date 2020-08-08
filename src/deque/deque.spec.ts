import Deque from './deque'

describe('deque', () => {
  it('should contain primitive values', () => {
    const deque = new Deque<number>()
    deque.pushBack(1)
    expect(deque.size()).toEqual(1)
    expect(deque.popBack()).toEqual(1)

    deque.pushFront(2)
    expect(deque.popFront()).toEqual(2)
    expect(deque.size()).toEqual(0)
  })

  it('should contain object values', () => {
    interface Data{
      num: number
      str: string
    }
    const data1:Data = {
      num: 1,
      str: 'string1',
    }
    const data2: Data = {
      num: 2,
      str: 'string2',
    }
    const deque = new Deque<Data>()

    deque.pushBack(data1)
    expect(deque.size()).toEqual(1)
    expect(deque.popFront()).toEqual(data1)

    deque.pushBack(data1)
    expect(deque.size()).toEqual(1)
    deque.pushFront(data2)
    expect(deque.popBack()).toEqual(data1)
    expect(deque.popFront()).toEqual(data2)
  })
})
