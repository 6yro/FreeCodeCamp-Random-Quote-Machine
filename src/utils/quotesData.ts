export type Quote = {
  text: string;
  author: string;
};

type QuotesData = Quote[];

const quotesData: QuotesData = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
  },
  {
    text: "Success consists of going from failure to failure without loss of enthusiasm.",
    author: "Winston Churchill",
  },
];

export default quotesData;
