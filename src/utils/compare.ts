function deepEqual(obj1: any, obj2: any):boolean {
  if (obj1 === obj2) return true
  if (Object.keys(obj1).length !== Object.keys(obj2).length) { return false }

  for (const key in obj1) {
    if (!(key in obj2)) return false // other object doesn't have this prop
    if (!deepEqual(obj1[key], obj2[key])) return false
  }

  return true
}

export default deepEqual
