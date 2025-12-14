const myArr = [1, 2, 3];

function reducer(a, b, i) {
  console.log("accumulateur", a);
  console.log("value", b);
  return a + b;
}
const result = myArr.reduce(reducer, 0); // result devient 6
console.log(result);



function add(a = 2, b = 3){
  return a + b;
}
console.log(add(8, 7));

