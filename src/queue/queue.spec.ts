import Queue from './queue'

describe('queue test', () => {
  it('should be FIFO structure', () => {
    const queue = new Queue<number>()
    queue.push(1)
    queue.push(2)
    queue.push(3)

    expect(queue.pop()).toEqual(1)
    expect(queue.pop()).toEqual(2)
    expect(queue.pop()).toEqual(3)

  })

  it('should throw an empty error', () => {
    const queue = new Queue<number>()
    expect(() => queue.pop()).toThrow('queue is empty')

    queue.push(1)
    queue.push(2)
    queue.pop()
    queue.pop()
    expect(() => queue.pop()).toThrow('queue is empty')
  })

  it('should return front of queue', () => {
    const queue = new Queue<number>()
    queue.push(1)
    queue.push(2)

    expect(queue.front()).toEqual(1)
    queue.pop()
    expect(queue.front()).toEqual(2)
  })

  it('should return back of queue', () => {
    const queue = new Queue<number>()
    queue.push(1)
    queue.push(2)
    expect(queue.back()).toEqual(2)
    queue.pop()
    expect(queue.back()).toEqual(2)
    queue.push(3)
    expect(queue.back()).toEqual(3)
  })

  it('should test typed data', () => {
    interface Data{
      num: number
      str: string
    }
    const data: Data= {
      num: 1,
      str: 'queue',
    }

    const queue = new Queue<Data>()
    queue.push(data)
    expect(queue.front()).toEqual(data)
    expect(queue.back()).toEqual(data)
  })

  it('should throw an empty error', () => {
    const queue = new Queue<number>()
    expect(() => queue.pop()).toThrow('queue is empty')

    queue.push(1)
    queue.pop()
    expect(() => queue.pop()).toThrow('queue is empty')
  })


})