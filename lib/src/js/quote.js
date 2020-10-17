

const twitterBtn = document.getElementById('js-tweet');
const facebook = document.getElementById('js-post'); 
const spinner = document.getElementById('js-spinner'); 
const newQuoteBtn = document.getElementById('js-new-quote'); 
const offline = document.getElementById('offline'); 
const apikey = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';


const getQuote = async ()  => {
  spinner.classList.remove('hidden');
  newQuoteBtn.disabled = true;
  offline.innerHTML = ` Your Connected!`; 


  try {
    const response = await fetch(apikey); 
    
    if (!response.ok) {
      throw Error(response.statusText);
    }


    const json = await response.json();
    showQuote(json.message);
    tweetQuote(json.message);
    postQuote()
        
  } catch {

    offline.textContent = 'Disconnected!'; 
    offline.addEventListener('click', (event) => {
      this.location.reload(); 
    })

  } finally {

    newQuoteBtn.disabled = false;
    spinner.classList.add('hidden');

  }
}


newQuoteBtn.addEventListener('click', getQuote)


const showQuote = (quote)  => {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

const tweetQuote = (quote) => {
  twitterBtn.setAttribute('href', `https://twitter.com/share?text=${quote} - Trump Quote `);
}

const postQuote  = () => {
    facebook.setAttribute('href', `https://web.facebook.com/`)
}
  
getQuote();



//master kg ft zunda - skeleton move
//bhizer - gobiigole
//don jazzy -  when you hear the kick
//skale ft sakodie- shake body
//olamide -- turn up