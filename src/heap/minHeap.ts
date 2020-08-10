/* eslint-disable class-methods-use-this */
import Comparator from '../utils/comparator'

class MinHeap<T> {
  constructor(defaultComparator?: (a: T, b: T) => boolean) {
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
      const leftChild = this._getElementAt(this._getLeftChildIdx(idx))
      const rightChild = this._getElementAt(this._getRightChildIdx(idx))
      if (leftChild && rightChild) {
        if (leftChild > rightChild) {
          this._swap(this._getRightChildIdx(idx), idx)
          idx = this._getRightChildIdx(idx)
        } else {
          this._swap(this._getLeftChildIdx(idx), idx)
          idx = this._getLeftChildIdx(idx)
        }
      } else if (leftChild && !rightChild) {
        this._swap(this._getLeftChildIdx(idx), idx)
        idx = this._getLeftChildIdx(idx)
      } else if (rightChild && leftChild) {
        this._swap(this._getRightChildIdx(idx), idx)
        idx = this._getRightChildIdx(idx)
      } else {
        break
      }
    }
  }

  private _headpifyUp() {
    let idx = this.size() - 1
    while (this._hasParent(idx) && this._comparator.compare(this._getParent(idx), this._data[idx])) {
      this._swap(this._getParentIdx(idx), idx)
      idx = this._getParentIdx(idx)
    }
  }

  private _getElementAt(idx: number): T | undefined {
    if (idx >= this.size()) return undefined
    return this._data[idx]
  }

  private _getParent(i: number): T {
    return this._data[this._getParentIdx(i)]
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

  private _hasParent(i: number): boolean {
    return i > 0
  }

  private _swap(idx1: number, idx2: number) {
    const temp = this._data[idx1]
    this._data[idx1] = this._data[idx2]
    this._data[idx2] = temp
  }
}

export default MinHeap
