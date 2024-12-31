interface NavbarProps {
  onWindowClick: (window: 'about' | 'shame' | 'chat' | 'music' | 'quote') => void
}

export const Navbar = ({ onWindowClick }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[50px] bg-white/90 backdrop-blur-sm border-b border-pink-200 shadow-sm z-[9999]">
      <div className="h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => onWindowClick('about')}
            className="px-3 py-1.5 text-sm rounded-lg hover:bg-pink-50 text-gray-700 transition-colors"
          >
            ✨ About Me
          </button>
          <button 
            onClick={() => onWindowClick('shame')}
            className="px-3 py-1.5 text-sm rounded-lg hover:bg-pink-50 text-gray-700 transition-colors"
          >
            📜 Hall of Shame
          </button>
          <button 
            onClick={() => onWindowClick('chat')}
            className="px-3 py-1.5 text-sm rounded-lg hover:bg-pink-50 text-gray-700 transition-colors"
          >
            💭 Chat Room
          </button>
          <button 
            onClick={() => onWindowClick('music')}
            className="px-3 py-1.5 text-sm rounded-lg hover:bg-pink-50 text-gray-700 transition-colors"
          >
            🎵 My Playlist
          </button>
          <button 
            onClick={() => onWindowClick('quote')}
            className="px-3 py-1.5 text-sm rounded-lg hover:bg-pink-50 text-gray-700 transition-colors"
          >
            ✨ Quote
          </button>
        </div>
      </div>
    </nav>
  )
}
