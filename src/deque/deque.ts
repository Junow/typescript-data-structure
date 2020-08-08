class Deque<T> {
  private _data: T[] = []

  pushBack(newData: T):number {
    return this._data.push(newData)
  }

  popBack(): T | undefined {
    return this._data.pop()
  }

  pushFront(newData: T): number {
    return this._data.unshift(newData)
  }

  popFront(): T | undefined {
    return this._data.shift()
  }

  size():number {
    return this._data.length
  }
}

export default Deque
