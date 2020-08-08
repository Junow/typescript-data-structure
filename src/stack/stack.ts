class Stack<T> {
  private _data: T[] = []

  private _isEmpty(): boolean {
    const size = this._data.length
    if (!size) return false
    return true
  }

  private _EmptyError = new Error('stack is empty')

  push(newData: T): void {
    this._data.push(newData)
  }

  pop(): T {
    if (!this._isEmpty()) {
      throw this._EmptyError
    }
    const top = this._data.pop()
    if (!top) {
      throw this._EmptyError
    }
    return top
  }

  size(): number {
    return this._data.length
  }

  top(): T {
    if (!this._isEmpty()) {
      throw this._EmptyError
    }
    return this._data[this._data.length - 1]
  }
}

export default Stack
