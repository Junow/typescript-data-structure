import LinkedList from './linkedList'
describe('linked list', () => {
  it('should append new node', () => {
    const ll = new LinkedList()
    ll.append(1)
    expect(ll.size()).toEqual(1)
    ll.append(2)
    expect(ll.size()).toEqual(2)
  })

  it('should get head from linked list', () => {
    const ll = new LinkedList<number>()
    let head = ll.getHead()
    expect(head).toEqual(null)
    ll.append(1)
    ll.append(2)
    head = ll.getHead()
    expect(head!.data).toEqual(1)
    ll.prepend(0)
    head = ll.getHead()
    expect(head!.data).toEqual(0)
  })

  it('should find the node', () => {
    const ll = new LinkedList<string>()
    const data1 = "first"
    const data2 = "second"
    const data3 = "third"

    ll.append(data1)
    ll.append(data2)
    ll.append(data3)
    const data2Node = ll.find(data2)
    expect(data2Node!.data).toEqual(data2)
    expect(data2Node!.next!.data).toEqual(data3)
  })

  it('should delete tail node',() => {
    const ll = new LinkedList<number>()
    ll.append(1)
    ll.append(2)
    ll.append(3)
    
    expect(ll.getTail()!.data).toEqual(3)
    ll.removeTail()
    expect(ll.getTail()!.data).toEqual(2)
    expect(ll.size()).toEqual(2)
    ll.removeTail()
    expect(ll.getTail()!.data).toEqual(1)
    ll.removeTail()
    expect(ll.size()).toEqual(0)
  })

  it('should remove head node', () => {
    const ll = new LinkedList<number>()

    ll.append(1)
    ll.append(2)
    ll.append(3)
    expect(ll.getHead()!.data).toEqual(1)
    ll.removeHead()
    expect(ll.getHead()!.data).toEqual(2)
    ll.removeHead()
    expect(ll.getHead()!.data).toEqual(3)
    ll.removeHead()

  })
})