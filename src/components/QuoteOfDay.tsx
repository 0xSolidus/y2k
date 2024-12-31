import { useState, useEffect } from 'react'

interface Quote {
  text: string
  author: string
  emoji: string
}

const quotes: Quote[] = [
  {
    text: "no thoughts just vibes and infinite loops",
    author: "While True Enjoyer",
    emoji: "♾️"
  },
  {
    text: "this bug is living rent free in my head fr",
    author: "Debug Bestie",
    emoji: "🏠"
  },
  {
    text: "caught in 4k pushing to prod without testing",
    author: "YOLO Deployer",
    emoji: "📸"
  },
  {
    text: "me 🤝 stackoverflow: real ones fr fr",
    author: "Copy Paste Dev",
    emoji: "🤝"
  },
  {
    text: "not the AI writing better code than me, lowkey crying rn",
    author: "Copilot Bestie",
    emoji: "🤖"
  }
]

export function QuoteOfDay() {
  const [quote, setQuote] = useState<Quote | null>(null)

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(randomQuote)
  }, [])

  if (!quote) return null

  return (
    <div className="flex flex-col items-center gap-3 p-2">
      <div className="text-4xl">{quote.emoji}</div>
      <div className="text-center space-y-2">
        <p className="text-sm font-bubblegum text-gray-700">
          "{quote.text}"
        </p>
        <p className="text-xs text-pink-400">
          — {quote.author}
        </p>
      </div>
      <button 
        onClick={() => setQuote(quotes[Math.floor(Math.random() * quotes.length)])}
        className="mt-2 px-4 py-1.5 text-xs rounded-lg bg-gradient-to-r from-pink-gradient-from to-pink-gradient-to text-white hover:opacity-90 transition-all hover:scale-105"
      >
        ✨ new quote pls ✨
      </button>
    </div>
  )
} 