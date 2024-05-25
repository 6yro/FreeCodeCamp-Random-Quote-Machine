import { useState } from "react";

import { getRandomQuote } from "./utils/getRandomQuote";

function App() {
  const [quote, setQuote] = useState(getRandomQuote());

  const handleClick = () => {
    const newQuote = getRandomQuote();

    if (newQuote.text !== quote.text) {
      setQuote(newQuote);
    } else handleClick();
  };

  return (
    <div id="quote-box">
      <div id="text">{quote.text}</div>
      <div id="author">{quote.author}</div>
      <button id="new-quote" onClick={handleClick} className="quote-btn">
        New Quote
      </button>
      <a
        href="twitter.com/intent/tweet"
        id="tweet-quote"
        target="_blank"
        className="quote-btn"
      >
        Tweet
      </a>
    </div>
  );
}

export default App;
