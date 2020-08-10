/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-explicit-any */
class Comparator<T> {
  constructor(compareFunction?: any) {
    this.compare = compareFunction || this.defaultCompareFunction
  }

  compare: any

  defaultCompareFunction(a: any, b: any) {
    if (a === b) return 0
    return a > b ? 1 : -1
  }

  deepEqual(obj1: any, obj2: any):boolean {
    if (obj1 === obj2) return true
    if (Object.keys(obj1).length !== Object.keys(obj2).length) { return false }

    for (const key in obj1) {
      if (!(key in obj2)) return false // other object doesn't have this prop
      if (!this.deepEqual(obj1[key], obj2[key])) return false
    }

    return true
  }
}

export default Comparator
