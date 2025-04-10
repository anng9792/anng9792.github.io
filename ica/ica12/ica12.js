const newQuoteButton = document.querySelector('#js-new-quote');

newQuoteButton.addEventListener('click', getQuote);

function getQuote() {
  console.log('Button clicked.');
  
  const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

  fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        throw Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Fetched data:', data);
      displayQuote(data.question);
      currentAnswer = data.answer;
    })
    .catch(error => {
      console.error('Fetch error:', error);
      alert('Failed to fetch quote.');
    });
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

let currentAnswer = '';
getQuote();

const answerButton = document.querySelector('#js-tweet');
answerButton.addEventListener('click', () => {
  const answerText = document.querySelector('#js-answer-text');
  answerText.textContent = currentAnswer || 'No answer available.';
});
