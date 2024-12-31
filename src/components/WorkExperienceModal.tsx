import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import trustme from "@/media/trustme.gif"

interface WorkExperienceModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function WorkExperienceModal({ isOpen, onOpenChange }: WorkExperienceModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[600px] bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200">
        <DialogHeader>
          <DialogTitle className="text-center font-bubblegum text-xl bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
            ✧ Work Experience ✧
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center gap-4">
          <img 
            src={trustme} 
            alt="Trust me bro" 
            className="w-full rounded-lg border border-pink-200 shadow-sm"
          />
          <div className="space-y-3 w-full">
            <div className="p-3 rounded-lg bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200">
              <p className="text-center text-sm font-medium text-gray-700">
                ALL my work under NDA... NO CAP FR FR 🤫
              </p>
            </div>
            <div className="p-2 rounded-lg bg-white/80 border border-pink-200">
              <p className="text-center text-xs text-gray-500">
                Source: Just trust me bro 😌✨
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 