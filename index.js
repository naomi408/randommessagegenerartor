var button = $("button");
var randomMessage = ["You are enough", "You got this", "You make a diffrence",]
  // console.log (randomMessage)
var stepOne = Math.random()
// only generates a random number between 0 and 1
var random=stepOne *3
var final=Math.floor(random)

  console.log(final);

var randomQuote = randomMessage[final]
  console.log(randomQuote);
 var header=$('h1');
 header.text(randomQuote)
button.on("click",doSomething)
function doSomething(){  // console.log (randomMessage)
var stepOne = Math.random()
// only generates a random number between 0 and 1
var random=stepOne *3
var final=Math.floor(random)

  console.log(final);

var randomQuote = randomMessage[final]
  console.log(randomQuote);
 var header=$('h1');
 header.text(randomQuote);
button.on("click",doSomething);
}
