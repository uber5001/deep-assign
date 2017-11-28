export default function recursiveAssign(l, r) {
  for (const key in r) {
    if (l[key] && l[key] instanceof Object && Object.getPrototypeOf(r[key]) == Object.prototype) {
      recursiveAssign(l[key], r[key])
    } else {
      l[key] = r[key]
    }
  }
}