/******************************************
Treehouse FSJS Techdegree:
project 01 - A Random Quote Generator
author: Samuel Piedra
github: https://github.com/Samuel-Piedra58
github repo: https://github.com/Samuel-Piedra58/techdegree-project-01
******************************************/

// Global variables
let quoteHTML;
let quoteBox = document.getElementById("quote-box");
let quoteBtn = document.getElementById("loadQuote");

// quotes is an array of quotes objects, all containing a quote, source, citation, and year
let quotes = [
  {
    quote: "The soul becomes dyed with the color of its thoughts.",
    source: "Marcus Aurelius",
    citation: "Meditations",
    year: "150 A.D."
  },
  {
    quote:
      "What upsets people is not things themselves, but their judgements about these things.",
    source: "Epictetus",
    citation: "Enchiridion",
    year: "135 A.D."
  },
  {
    quote:
      "My life has been full of terrible misfortunes most of which never happened.",
    source: "Michel de Montaigne",
    citation: "Essays",
    year: "1595 A.D."
  },
  {
    quote:
      "There are more things ... likely to frighten us that there are to crush us; we suffer more often in imagination then in reality.",
    source: "Seneca",
    citation: "Letters from a Stoic",
    year: "65 A.D."
  },
  {
    quote:
      "They lose the day in expectation of the night, and the night in fear of the dawn.",
    source: "Seneca",
    citation: "On the Shortness of Life",
    year: "49 A.D."
  },
  {
    quote:
      "If you are pained by any external thing, it is not this thing that disturbs you, but your own judgement about it. And it is in your power to wipe out this judgement now.",
    source: "Marcus Aurelius",
    citation: "Meditations",
    year: "150 A.D."
  },
  {
    quote:
      'We should always be asking ourselves: "Is this something that is, or is not, in my control?"',
    source: "Epictetus",
    citation: "Enchiridion",
    year: "135 A.D."
  },
  {
    quote:
      "Take a lyre player: he's relaxed when he performs alone, but put him in front of an audience, and it's a different story, no matter how beautiful his voice or how well he plays the instrument. Why? Because he not only wants to perform well, he wants to be well received--and the latter lies outside his control.",
    source: "Epictetus",
    citation: "Enchiridion",
    year: "135 A.D."
  },
  {
    quote:
      "Let us meet with bravery whatever may befall us. Let us never feel a shudder at the thought of being wounded or of being made a prisoner, or of poverty or persecution.",
    source: "Seneca",
    citation: "Letters from a Stoic",
    year: "65 A.D."
  },
  {
    quote:
      "The tranquility that comes when you stop caring what they say. Or think, or do. Only what you do.",
    source: "Marcus Aurelius",
    citation: "Meditations",
    year: "150 A.D."
  }
];

// Function will take in an array, and return a random element from the array
// For our purposes we will pass in the quotes array and return a random quote object
function getRandomQuote(quotesArr) {
  let randomIndex = Math.floor(Math.random() * quotesArr.length);
  return quotesArr[randomIndex];
}

/*
  --Create a function that gets a random quote from our random quote function (getRandomQuote).
  --With that returned quote object create two paragraph tags.
  --The first p tag will contain the quote itself (add a class of "quote")
  --The second p tag will contain the source and if they exist, a citation and year
      -for the p tag, add a class of "source",
      -for the citation and year (if they exist) put them in span tags (add the class,
        "citation" and "year" respectively)
  --Write the finished html to the innerHTML of the 'quote-box' element
  --Function will also change the color of the body and the quote conatianer
*/

function printQuote() {
  // get random quote
  let randQuote = getRandomQuote(quotes);
  // get random color
  let randomColor = randomRgb();
  // create quote html to write to div element
  quoteHTML = '<p class="quote">' + randQuote.quote + "</p>";
  quoteHTML += '<p class="source">' + randQuote.source;
  //Check if quote object has citation property
  if (randQuote.citation != undefined) {
    //Add span element to html with "citation" class
    quoteHTML += '<span class="citation">' + randQuote.citation + "</span>";
  }
  //Check if quote object has year property
  if (randQuote.year != undefined) {
    //Add span element to html with "year" class
    quoteHTML += '<span class="year">' + randQuote.year + "</span>";
  }
  quoteHTML += "</p>";
  quoteBox.innerHTML = quoteHTML;
  // change color of the body and quote box
  quoteBox.style.backgroundColor = randomColor;
  document.body.style.backgroundColor = randomColor;
}

// functions will invoke printQuote function every 25 seconds
// function is invoked when "Show another quote" function is clicked
// function will only be executed once on first click
function rotateQuotes() {
  setInterval(printQuote, 25000);
}

// function will return a random rgb color string
function randomRgb() {
  // random numbers kept below 180 to contrast white font color
  let red = Math.floor(Math.random() * 180);
  let green = Math.floor(Math.random() * 180);
  let blue = Math.floor(Math.random() * 180);
  return "rgb(" + red + "," + green + "," + blue + ")";
}

// Add an event listener to the button on the page
// On click invoke the "printQuote()" function
quoteBtn.addEventListener("click", printQuote, false);
quoteBtn.addEventListener("click", rotateQuotes, { once: true });
