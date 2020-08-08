class Node<T> {
  constructor(data: T | null) {
    this.data = data
    this.next = null
  }

  data: T | null

  next: Node<T> | null
}
export default Node
