var quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  }
];

function showRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomIndex];
  document.getElementById("quote").textContent = `"${randomQuote.text}"`;
  document.getElementById("author").textContent = `-- ${randomQuote.author}`;
}
