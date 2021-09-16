const args = process.argv;
const arr2 = (args.slice(2));
let answer = 0;

  for (let i = 0; i < arr2.length; i++) {
  answer += parseInt(arr2[i]);
  
  }
console.log(answer)