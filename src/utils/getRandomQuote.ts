import quotesData from "./quotesData";

export const getRandomQuote = () => {
  const randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)];

  return randomQuote;
};
