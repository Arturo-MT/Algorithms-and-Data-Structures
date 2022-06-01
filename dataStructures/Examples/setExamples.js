const Set = require('../mySet')

const set = new Set()

set.add(1)
set.add(2)
set.add(3)
set.add(4)
set.add(5)
console.log(set.values())
console.log(set.has(6))
console.log(set.size())

set.delete(2)
console.log(set.values())

set.clear()
console.log(set.values())

const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)
setA.add(4)
setA.add(5)

const setB = new Set()
setB.add(4)
setB.add(5)
setB.add(6)
setB.add(7)
setB.add(8)

const setC = new Set()
setC.add(2)
setC.add(3)
setC.add(4)
setC.add(5)
setC.add(6)

const setD = new Set()
setD.add(1)
setD.add(2)
setD.add(3)
setD.add(4)
setD.add(5)
setD.add(6)

const unionAB = setA.union(setB)
console.log(unionAB.values())

const intersectionAB = setA.intersection(setB)
console.log(intersectionAB.values())

const differenceAB = setA.difference(setB)
console.log(differenceAB.values())

const differenceBA = setB.difference(setA)
console.log(differenceBA.values())

console.log(setA.subset(setC))
console.log(setA.subset(setD))
