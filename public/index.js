const quote = document.querySelector("#quote")
const btn = document.querySelector("#getQuote")
const tweet = document.querySelector("#tweet")

const base_url = "https://rihanna.rest"

let quotes = []
let tweet_url

function rihtweet () {
  window.open(tweet_url)
}

function renderFail () {
  quote.innerHTML = "<p data-error><em>Something went wrong! Please try again.</em></p><img src='https://i.pinimg.com/originals/f4/2d/36/f42d36ef96e69be9adcfd4fb4c077508.gif' alt=''/>"
}

async function getQuote () {
  try {
    quote.innerHTML = "<em>Getting a fresh quote...</em>"

    const response = await fetch(`${base_url}/quotes`)
    
    if (!response.ok) throw response.status

    const data = await response.json()

    if (!data) throw "No data"

    if (quotes.length > 49) {
			quotes.shift()
		}

    if (quotes.includes(data[0])) {
			await getQuote()
			return
		}

    quote.textContent = data[0]
    quotes.push(data[0])

    tweet_url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      data[0] + " – Rihanna 🎈 rihanna.rest"
      )}`
  } catch (error) {
    console.warn("Error:", error.status, error.statusText)
    renderFail()
  }
}

getQuote();

btn.addEventListener("click", getQuote)
tweet.addEventListener("click", rihtweet)
