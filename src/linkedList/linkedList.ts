import Node from './linkedListNode'
import deepEqual from '../utils/compare'

class linkedList<T> {
  constructor() {
    const dummy = new Node<T>(null)
    this._head = dummy
    this._tail = dummy
    this._size = 0
  }

  private _head: Node<T>

  private _tail: Node<T>

  private _size = 0

  append(newData: T): void {
    const newNode = new Node(newData)
    this._tail.next = newNode
    this._tail = newNode
    this._size += 1
  }

  prepend(newData: T): void {
    const newNode = new Node(newData)
    newNode.next = this._head.next
    this._head.next = newNode
    this._size += 1
  }

  removeHead(): Node<T> | null {
    if (this._head.next === null) return null
    if (this._head.next === this._tail) {
      const deleted = this._tail
      this._tail = this._head
      this._tail.next = null
      this._size -= 1
      return deleted
    }

    const deleted = this._head.next
    this._head.next = this._head.next.next
    this._size -= 1
    return deleted
  }

  removeTail(): Node<T> | null {
    let cur = this._head
    while (cur.next && cur.next !== this._tail) {
      cur = cur.next
    }
    const deleted = cur.next
    this._tail = cur
    this._size -= 1

    return deleted
  }

  find(target: T): Node<T> | null {
    if (!this._head.next) return null
    let cur = this._head
    while (cur.next !== null) {
      if (deepEqual(cur.next.data, target)) return cur.next
      cur = cur.next
    }
    return null
  }

  getHead(): Node<T> | null {
    return this._head.next
  }

  getTail(): Node<T> | null {
    return this._tail
  }

  size(): number {
    return this._size
  }
}

export default linkedList
