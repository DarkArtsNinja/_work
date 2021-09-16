const raisinAlarm = function(cookie) {

  for (let i = 0; i < cookie.length ; i++) {
    if ((cookie[i] === "🍫") && (i < cookie.length - 1) ) {
      continue;
    } else if (i === cookie.length - 1) { 
      return "All good!";
    }
    else {
      return "Raisin alert!";
    }
  }
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"])); 
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));