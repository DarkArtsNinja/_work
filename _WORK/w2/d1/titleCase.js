
const titleCase = function(strings){
  //save the result into a 'new variable'
  let newPhrase = ""
  let phraseCounter = 0
  //0 if there's nothing, then return nothing
  if(strings === ""){
    return newPhrase;
  }




  //for the first letter
  //for the follwoing letters
  //If the first letter is small then make it uppercase
  for (const letter of strings) {
  if (strings[0].toLowerCase() && phraseCounter === 0) {
    newPhrase += strings.charAt(0).toUpperCase();
    phraseCounter++;
    continue;
  }
    if (strings[phraseCounter -1] === " ") {
      newPhrase += letter.toUpperCase();
      phraseCounter++
    } else {
      newPhrase += letter.toLowerCase();
      phraseCounter++
    }
  }
  
  console.log(newPhrase);
  return newPhrase;
}

    
titleCase("this is an example")// should return "This Is An Example"
titleCase("test")// should return "Test"
titleCase("i r cool")// should return "I R Cool"
titleCase("WHAT HAPPENS HERE")// should return "What Happens Here"
titleCase("")// should return ""
titleCase("A")// should return "A"