const sentence = "hello there from lighthouse labs";
let timeDelay = 100;

for (const char of sentence) {

  setTimeout( () =>  {

    console.log(char)
  
  }  , timeDelay )

    // timeDelay += 100

}


// setTimeout(()=> console.log("hello"), 3000)