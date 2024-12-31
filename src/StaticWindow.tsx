import closeIcon from "./media/X.svg"     // Note the capital X if that's the filename

interface StaticWindowProps {
  title: string
  children?: React.ReactNode
  className?: string
  isOpen?: boolean  // Make optional since most windows will be permanent
  onClose?: () => void  // Optional for closeable windows (like modals)
  isPermanent?: boolean // New prop for permanent windows
}

export const StaticWindow = ({ 
  title, 
  children, 
  className = "", 
  isOpen = true, // Default to true for permanent windows
  onClose,
  isPermanent = true // Default to true for permanent windows
}: StaticWindowProps) => {
  if (!isOpen) return null

  return (
    <div className={`
      w-full h-full
      bg-pink-window
      rounded-xl
      border-2 border-pink-border
      shadow-window
      flex flex-col
      ${className}
    `}>
      <header className="
        flex justify-between items-center
        px-3 py-2
        bg-gradient-to-r from-pink-gradient-from to-pink-gradient-to
        text-white
        font-bubblegum
        rounded-t-xl
        flex-shrink-0
      ">
        <div>{title}</div>
        {!isPermanent && onClose && (  // Only show close button if not permanent and onClose provided
          <button 
            onClick={onClose}
            className="w-5 h-5 flex items-center justify-center rounded hover:bg-white/20 transition-colors"
          >
            <img src={closeIcon} alt="Close" className="w-3 h-3 opacity-90" />
          </button>
        )}
      </header>
      <div className="p-4 flex-grow">
        {children}
      </div>
    </div>
  )
} 