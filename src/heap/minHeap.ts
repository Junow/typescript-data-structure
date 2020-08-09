/* eslint-disable class-methods-use-this */
import Comparator from '../utils/comparator'

class MinHeap<T> {
  constructor(defaultComparator?: Comparator<T>) {
    this._comparator = new Comparator(defaultComparator)
  }

  private _data:T[] = []

  private _comparator: Comparator<T>

  insert(data: T): void{
    this._data.push(data)
    this._headpifyUp()
  }

  pop(): T {
    const ret = this._data[0]
    const lastIdx = this.size() - 1
    this._swap(0, lastIdx)
    this._data.length -= 1
    this._heapifyDown()
    return ret
  }

  size():number {
    return this._data.length
  }

  private _heapifyDown() {
    let idx = 0
    while (true) {
      const leftChildIdx = this._getLeftChildIdx(idx)
      const rightChildIdx = this._getRightChildIdx(idx)
      const leftChild = this._getElementAt(leftChildIdx)
      const rightChild = this._getElementAt(rightChildIdx)
      if (leftChild && rightChild) {
        if (leftChild > rightChild) {
          this._swap(rightChildIdx, idx)
          idx = rightChildIdx
        } else {
          this._swap(leftChildIdx, idx)
          idx = leftChildIdx
        }
      } else if (leftChild && !rightChild) {
        this._swap(leftChildIdx, idx)
        idx = leftChildIdx
      } else if (rightChild && leftChild) {
        this._swap(rightChildIdx, idx)
        idx = rightChildIdx
      } else {
        break
      }
    }
  }

  private _headpifyUp() {
    let idx = this.size() - 1
    let parentIdx = this._getParentIdx(idx)
    let parent = this._getElementAt(parentIdx)
    while (parent) {
      const cur = this._data[idx]
      if (this._comparator.compare(parent, cur)) {
        this._swap(parentIdx, idx)
        idx = parentIdx
      } else {
        break
      }

      parentIdx = this._getParentIdx(idx)
      parent = this._getElementAt(parentIdx)
    }
  }

  private _getElementAt(idx: number): T | undefined {
    if (idx >= this.size()) return undefined
    return this._data[idx]
  }

  private _getLeftChildIdx(i: number): number {
    return i * 2 + 1
  }

  private _getRightChildIdx(i: number):number {
    return i * 2 + 2
  }

  private _getParentIdx(i: number): number {
    return Math.floor(i / 2)
  }

  private _swap(idx1: number, idx2: number) {
    const temp = this._data[idx1]
    this._data[idx1] = this._data[idx2]
    this._data[idx2] = temp
  }
}

export default MinHeap
