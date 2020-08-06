class Queue<T> {
  private _data: T[] = []
  constructor(){}
  private _isEmpty(): boolean{
    return this._data.length === 0
  }

  private _EmptyError = new Error('queue is empty')
  push(newData: T): void {
    this._data.push(newData)
  }

  pop(): T{
    if(this._isEmpty()){
      throw this._EmptyError
    }
    return this._data.shift()! 
  }

  front(): T{
    if(this._isEmpty()){
      throw this._EmptyError
    }

    return this._data[0]
  }

  back(): T{
    if(this._isEmpty()){
      throw this._EmptyError
    }

    return this._data[this._data.length-1]
  }

  
}

export default Queue
