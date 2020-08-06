import Stack from './stack'

interface Data{
  num: number,
  str: string,
}

describe('stack', () => {
  it('should return size', () => {
    const stack = new Stack<number>()
    expect(stack.size()).toEqual(0)
    stack.push(1)
    expect(stack.size()).toEqual(1)
    stack.push(2)
    expect(stack.size()).toEqual(2)
    stack.pop()
    expect(stack.size()).toEqual(1)
    stack.pop()
    expect(stack.size()).toEqual(0)
  })

  it('should return data', () => {
    const stack = new Stack<Data>()
    const data: Data = {
      num: 1,
      str: 'stack'
    }
    stack.push(data)
    expect(stack.top()).toEqual(data)
    expect(stack.pop()).toEqual(data)
  })

  it('should be LIFO structure', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.pop()).toEqual(3)
    expect(stack.pop()).toEqual(2)
    expect(stack.pop()).toEqual(1)
  })

  it('should throw an empty error', () => {
    const stack =new Stack()
    expect(() => stack.top()).toThrow('stack is empty')
    expect(() => stack.pop()).toThrow('stack is empty')
  })
}) 