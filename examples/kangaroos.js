// figure out a way to make the kangaroos move in a circle and get the
// kangaroos at the same location at the same time as a part of the show
// example:
// x1 = 2
// v1 = 1
// x2 = 1
// v2 = 2
// after one jump, both are at x = 3, (x1 + v1 = 2 +1 ) and (x2 + v2 = 1 + 2)
// so the answer is true

const dynamicKangaroo = (x1, v1, x2, v2) => {
  let x = x1
  let y = x2
  const xArr = []
  const yArr = []
  if (x2 > x1 && v2 > v1) {
    return 'NO'
  } else if (x2 < x1 && v2 < v1) {
    return 'NO'
  } else {
    while (x !== y && xArr.length < 100 && yArr.length < 100) {
      x += v1
      y += v2
      xArr.push(x)
      yArr.push(y)
    }
    return (xArr[xArr.indexOf(x)] === yArr[yArr.indexOf(y)]) ? 'YES' : 'NO'
  }
}

console.log(dynamicKangaroo(0, 3, 4, 2))
