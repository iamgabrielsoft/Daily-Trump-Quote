

const twitterBtn = document.getElementById('js-tweet');
const whatsapp = document.getElementById('js-send'); 
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
    sendit(json.message)
        
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
  twitterBtn.setAttribute('href', `https://twitter.com/share?text=${quote} - Trump Quote credit@iamgabrielsoft`);
}

const sendit  = (quote) => {
  whatsapp.setAttribute(`href`, `https://wa.me/15551234567?text=${quote} - Trump Quote credit @iamgabrielsoft`)
}

getQuote();