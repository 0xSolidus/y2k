import lul from './lul.gif'

export function MoodGallery() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg bg-pink-50/30 group">
      <img 
        src={lul} 
        alt="lul" 
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
      />
      
      {/* Optional: Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-200/20 to-transparent pointer-events-none" />
      
      {/* Optional: Mood label */}
      <div className="absolute bottom-2 right-2 text-xs text-white/90 font-medium 
        bg-pink-400/50 backdrop-blur-sm px-2 py-1 rounded-full
        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        ✧ lul ✧
      </div>
    </div>
  )
} 