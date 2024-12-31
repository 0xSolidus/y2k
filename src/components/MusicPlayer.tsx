import { useState, useRef, useEffect } from 'react'
import lokAudio from '../media/lok.mp3'

// Get filename without extension
const getTitle = (audioPath: string) => {
  const filename = audioPath.split('/').pop() || ''  // Get the last part after /
  return filename.replace('.mp3', '')                // Remove .mp3
    .split('-').join(' ')                           // Replace dashes with spaces
    .split('_').join(' ')                           // Replace underscores with spaces
    .split(/(?=[A-Z])/).join(' ')                  // Add spaces before capitals
    .replace(/^\w/, c => c.toUpperCase())          // Capitalize first letter
}

const playlist = [
  {
    title: `✧ ${getTitle(lokAudio)} ✧`,  // Use the file name as title
    artist: "Luna",
    audio: lokAudio,
    duration: "0:00"
  }
]

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [prevVolume, setPrevVolume] = useState(1)
  const [metadata, setMetadata] = useState<{ title?: string, artist?: string }>({})
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current?.duration || 0)
        
        // Try to get metadata if available
        if (audioRef.current?.src) {
          const audio = new Audio(audioRef.current.src)
          audio.addEventListener('loadedmetadata', () => {
            // @ts-ignore - TypeScript doesn't know about these properties
            const title = audio?.mediaSession?.metadata?.title
            // @ts-ignore
            const artist = audio?.mediaSession?.metadata?.artist
            if (title || artist) {
              setMetadata({ title, artist })
            }
          })
        }
      })
      audioRef.current.volume = volume
    }
  }, [])

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current?.currentTime || 0)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value)
    setCurrentTime(time)
    if (audioRef.current) {
      audioRef.current.currentTime = time
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      if (volume > 0) {
        setPrevVolume(volume) // Store current volume
        setVolume(0)
        audioRef.current.volume = 0
      } else {
        setVolume(prevVolume) // Restore previous volume
        audioRef.current.volume = prevVolume
      }
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  // Get volume icon based on level
  const getVolumeIcon = () => {
    if (volume === 0) return '🔇'
    if (volume < 0.3) return '🔈'
    if (volume < 0.7) return '🔉'
    return '🔊'
  }

  return (
    <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-200">
      <audio 
        ref={audioRef}
        src={playlist[currentTrack].audio}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
      
      {/* Music Icon */}
      <div className="flex-shrink-0">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-pink-400 to-purple-400 
          flex items-center justify-center text-white text-xl
          ${isPlaying ? 'animate-pulse' : ''}`}
        >
          {isPlaying ? '🎵' : '🎶'}
        </div>
      </div>
      
      {/* Track Info & Progress */}
      <div className="flex-grow space-y-1">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-700">
              {metadata.title || playlist[currentTrack].title}
            </p>
            <p className="text-xs text-gray-500">
              {metadata.artist || playlist[currentTrack].artist} 🌸
            </p>
          </div>
          <div className="text-xs text-gray-500">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
        
        {/* Smooth Progress Bar */}
        <div className="relative h-1 bg-pink-100 rounded-full">
          <div 
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
          <input 
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <button 
          onClick={togglePlay}
          className="p-2 hover:bg-white/50 rounded-full transition-colors text-gray-600"
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        <button 
          onClick={toggleMute}
          className="p-2 hover:bg-white/50 rounded-full transition-colors text-gray-600"
        >
          {getVolumeIcon()}
        </button>
      </div>
    </div>
  )
} 