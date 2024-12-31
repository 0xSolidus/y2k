import { useState } from 'react'

interface Message {
  name: string
  content: string
  timestamp: Date
  avatar: string
}

const DEFAULT_MESSAGES: Message[] = [
  {
    name: "✧ Pixel Princess ✧",
    content: "first!! love your site bestie (*˘︶˘*).｡.:*♡",
    timestamp: new Date('2024-03-10'),
    avatar: "🎀"
  },
  {
    name: "CyberKitten",
    content: "omg the y2k aesthetic is everything ˎˊ˗",
    timestamp: new Date('2024-03-11'),
    avatar: "🐱"
  }
]

export function GuestBook() {
  const [messages, setMessages] = useState<Message[]>(DEFAULT_MESSAGES)
  const [newMessage, setNewMessage] = useState('')
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('🌸')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim() || !name.trim()) return

    setMessages(prev => [{
      name: `✧ ${name} ✧`,
      content: newMessage,
      timestamp: new Date(),
      avatar
    }, ...prev])
    
    setNewMessage('')
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Message Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="your name..."
            className="flex-grow px-3 py-1.5 rounded-lg bg-white/50 border border-pink-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
            maxLength={20}
          />
          <select
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            className="px-2 rounded-lg bg-white/50 border border-pink-200 text-xl"
          >
            {['🌸', '🎀', '🌟', '🦋', '🐱', '🍡', '🎮', '💖'].map(emoji => (
              <option key={emoji} value={emoji}>{emoji}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="leave a message..."
            className="flex-grow px-3 py-1.5 rounded-lg bg-white/50 border border-pink-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
          <button
            type="submit"
            className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-pink-400 to-purple-400 text-white text-sm hover:opacity-90 transition-all"
          >
            ✨ sign
          </button>
        </div>
      </form>

      {/* Messages */}
      <div className="space-y-3 max-h-[300px] overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i} className="p-3 rounded-lg bg-white/50 border border-pink-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">{msg.avatar}</span>
              <span className="text-sm font-medium text-gray-700">{msg.name}</span>
              <span className="text-xs text-gray-500">
                {msg.timestamp.toLocaleDateString()}
              </span>
            </div>
            <p className="text-sm text-gray-600 pl-8">{msg.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 