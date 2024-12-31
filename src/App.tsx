import { useState } from "react"
import { StaticWindow } from "./StaticWindow"
import { Navbar } from "./Navbar"
import hallofshame from "./media/hallofshame.png"
import { MusicPlayer } from "./components/MusicPlayer"
import kawaii from "./media/kawaii.jpg"
import { QuoteOfDay } from './components/QuoteOfDay'
import bgPattern from "./media/bg.png"
import starGif from "./media/star.gif"
import trustme from "./media/trustme.gif"
import { GuestBook } from "./components/GuestBook"
import { WorkExperienceModal } from "./components/WorkExperienceModal"
import { MoodGallery } from "./components/MoodGallery"

type WindowKey = 'about' | 'shame' | 'chat' | 'music' | 'quote' | 'projects'
type WindowState = Record<WindowKey, boolean>

const App = () => {
  const [openWindows, setOpenWindows] = useState<WindowState>({
    about: true,
    shame: true,
    chat: false,
    music: true,
    quote: true,
    projects: true
  })

  const [isWorkModalOpen, setIsWorkModalOpen] = useState(false)

  const toggleWindow = (window: WindowKey) => {
    setOpenWindows(prev => ({
      ...prev,
      [window]: !prev[window]
    }))
  }

  return (
    <div className="w-full bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      {/* Background pattern - fixed position stays */}
      <div 
        className="fixed inset-0 pointer-events-none" 
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />
      
      {/* Sparkles overlay */}
      <div className="fixed inset-0 bg-[url('/sparkles.gif')] opacity-20 pointer-events-none" />
      
      {/* Floating star */}
      <img 
        src={starGif} 
        alt="Star" 
        className="fixed top-10 right-10 w-12 h-12 animate-pulse pointer-events-none"
      />

      <Navbar 
        onWindowClick={toggleWindow} 
        onWorkClick={() => setIsWorkModalOpen(true)} 
      />
      
      {/* Remove fixed height constraint here */}
      <div className="flex pt-[50px] relative z-10">
        {/* Sidebar */}
        <div className="w-[280px] shrink-0 p-2">
          {openWindows.about && (
            <StaticWindow 
              title="✧･ﾟ About Me ･ﾟ✧" 
              isOpen={true}
              onClose={() => toggleWindow('about')}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="relative">
                  <img 
                    src={kawaii} 
                    alt="Kawaii avatar" 
                    className="w-40 h-40 rounded-2xl border-4 border-pink-300 shadow-lg"
                  />
                  <div className="absolute -top-2 -right-2 animate-bounce">🌸</div>
                  <div className="absolute -bottom-1 -left-1 animate-bounce delay-100">✨</div>
                </div>
                
                <div className="text-center space-y-2">
                  <p className="text-xl font-bubblegum bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
                    ✧ Alisa (Luna) ✧
                  </p>
                  <p className="text-sm text-gray-600">
                    22 y/o Vibing in Switzerland 🌸
                  </p>
                </div>

                <div className="w-full space-y-3">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200">
                    <div className="text-center space-y-1">
                      <p className="text-xs text-gray-500 mb-2">Current Obsessions ✨</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        <span className="px-2 py-1 bg-pink-50 text-pink-600 rounded-md text-xs">Anime</span>
                        <span className="px-2 py-1 bg-purple-50 text-purple-600 rounded-md text-xs">Art</span>
                        <span className="px-2 py-1 bg-cyan-50 text-cyan-600 rounded-md text-xs">Music</span>
                        <span className="px-2 py-1 bg-green-50 text-green-600 rounded-md text-xs">Coding</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 border border-pink-200 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="text-sm text-center font-medium relative z-10">
                      Currently: Touching grass & vibing ✨
                    </p>
                  </div>
                </div>

                <div className="w-full pt-3 mt-2 border-t border-pink-200">
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">✧ Location</span>
                      <span className="text-pink-500">Switzerland</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">✧ Languages</span>
                      <span className="text-pink-500">RU / EN / DE</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">✧ Mood</span>
                      <span className="text-pink-500">✨ Vibing ✨</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">✧ Status</span>
                      <span className="text-pink-500">Touching Grass</span>
                    </div>
                  </div>
                </div>
              </div>
            </StaticWindow>
          )}
        </div>

        {/* Main grid area - allow natural height */}
        <div className="flex-1 p-2">
          <div className="grid grid-cols-3 gap-3">
            {/* Music Player First */}
            {openWindows.music && (
              <div className="col-span-3">
                <StaticWindow 
                  title="✧･ﾟ My Playlist ･ﾟ✧" 
                  isOpen={true}
                  onClose={() => toggleWindow('music')}
                >
                  <MusicPlayer />
                </StaticWindow>
              </div>
            )}

            {/* Hall of Shame Second */}
            {openWindows.shame && (
              <div className="col-span-2 row-span-2">
                <StaticWindow 
                  title="✧･ﾟ Hall of Shame ･ﾟ✧" 
                  isOpen={true}
                  onClose={() => toggleWindow('shame')}
                >
                  <img src={hallofshame} alt="Hall of Shame" className="w-full h-full object-contain rounded-lg" />
                </StaticWindow>
              </div>
            )}

            {/* Quote and Work Experience */}
            {openWindows.quote && (
              <div className="col-span-1">
                <StaticWindow 
                  title="✧･ﾟ Quote of the Day ･ﾟ✧" 
                  isOpen={true}
                  onClose={() => toggleWindow('quote')}
                >
                  <QuoteOfDay />
                </StaticWindow>
              </div>
            )}

            {/* Replace projects with mood gallery */}
            <div className="col-span-1">
              <StaticWindow
                title=""
                isOpen={true}
                onClose={() => {}}
                className="overflow-hidden"
              >
                <MoodGallery />
              </StaticWindow>
            </div>

            {openWindows.chat && (
              <div className="col-span-2">
                <StaticWindow 
                  title="✧･ﾟ Guestbook ･ﾟ✧" 
                  isOpen={true}
                  onClose={() => toggleWindow('chat')}
                >
                  <GuestBook />
                </StaticWindow>
              </div>
            )}
          </div>
        </div>
      </div>

      <WorkExperienceModal 
        isOpen={isWorkModalOpen}
        onOpenChange={setIsWorkModalOpen}
      />
    </div>
  )
}

export default App
