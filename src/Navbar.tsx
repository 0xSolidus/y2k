interface NavbarProps {
  onWorkClick: () => void
}

export const Navbar = ({ onWorkClick }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[50px] bg-gradient-to-r from-pink-50/60 via-white/60 to-purple-50/60 backdrop-blur-[2px] border-b border-pink-200/50 shadow-sm z-[9999]">
      <div className="h-full max-w-7xl mx-auto px-4">
        <div className="h-full flex items-center justify-center">
          {/* Centered nav items with sparkle decorations */}
          <div className="flex items-center gap-3 relative">
            {/* Floating decorations */}
            <div className="absolute -top-1 -left-6 text-pink-400/70 animate-pulse">✧</div>
            <div className="absolute -top-1 -right-6 text-purple-400/70 animate-pulse delay-75">✧</div>
            <div className="absolute -bottom-1 left-1/4 text-pink-300/70 animate-bounce delay-100">⋆</div>
            <div className="absolute -bottom-1 right-1/4 text-purple-300/70 animate-bounce delay-150">⋆</div>

            <button 
              onClick={onWorkClick}
              className="px-3 py-1.5 text-sm rounded-lg hover:bg-pink-50/50 text-gray-700/90 transition-all hover:scale-105 flex items-center gap-1.5 group"
            >
              <span className="group-hover:animate-bounce">💼</span> Work XP
            </button>

            <button 
              className="px-3 py-1.5 text-sm rounded-lg hover:bg-pink-50/50 text-gray-700/90 transition-all hover:scale-105 flex items-center gap-1.5 group"
            >
              <span className="group-hover:animate-pulse">📝</span> Guestbook
            </button>
          </div>
        </div>
      </div>

      {/* Rainbow gradient border - more subtle */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-pink-200/40 via-purple-200/40 to-pink-200/40" />
      
      {/* Corner sparkles - more transparent */}
      <div className="absolute top-1 left-2 text-pink-400/50 animate-pulse">✦</div>
      <div className="absolute top-1 right-2 text-purple-400/50 animate-pulse delay-75">✦</div>
      <div className="absolute -bottom-1 left-2 text-pink-400/50 animate-bounce">✧</div>
      <div className="absolute -bottom-1 right-2 text-purple-400/50 animate-bounce delay-100">✧</div>

      {/* Optional: Add floating bubbles - more subtle */}
      <div className="absolute -top-1 left-1/4 text-pink-200/40 animate-bounce delay-200">○</div>
      <div className="absolute -top-1 right-1/4 text-purple-200/40 animate-bounce delay-300">○</div>
    </nav>
  )
}
