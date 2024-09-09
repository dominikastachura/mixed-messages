
// Array of random quotes from supernatural
const quotes = [
  "My people skills are rusty.",
  "I guess if you're gonna have faith, you cant just have it when the miracles happen.",
  "We're all going to hell Dean. Might aswell enjoy the ride.",
  "Saving people, hunting things. The family business.",
  "Getting my ass kicked by those Juggalos was therapeutic.",
  "You mind doing a little bit of thinking with your upstairs brain, Dean?.",
  "No drinking, no gambling, no premarital sex. Dean, they basically just outlawed 90 percent of your personality.",
  "Rebel a little bit… in a healthy, non-satanic way.",
  "Are we going to fight or make out, cause I’m getting some real mixed signals here.",
  "Details are everything! You don’t want to go fighting ghosts without any health insurance."
];

// function that generates a random quote from the above array
let generateQuote = () => {
  // Chooses random index from quotes array
  const randomIndex = Math.floor(Math.random() *quotes.length);
  // Gets the quote from that particular index
  const randomQuote = quotes[randomIndex];
  // logs the quote to the console
  console.log(randomQuote);
}

// function call 
generateQuote();