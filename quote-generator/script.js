// Quote variables 
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const author = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader =  document.getElementById('loader');

// Loader
function loading () {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete () {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

// Get Quote from API
async function getQuote() {
    loading()
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(proxyUrl + apiUrl)
        const data = await response.json();
        // if Author is blank make unknown
        if (data.quoteAuthor == "") {
            author.innerText = "Unknown"
        } else {
            author.innerText = data.quoteAuthor   
        }
        // reduce size if too many words
        if (data.quoteText.length > 120) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data.quoteText
        // Stop loader, show tweet
        complete()
    } catch (error) {
        getQuote()
        console.log("Sorry but ", error);
    }
}

// Tweet quote
function tweetQuote () {
    const quote = quoteText.innerText
    const authorT = author.innerText
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quote} - ${authorT}`

    window.open(tweetUrl, '_blank');
}

//Event listeners
twitterBtn.addEventListener('click', )
newQuoteBtn.addEventListener('click', getQuote)

//OnLoad
// getQuote()