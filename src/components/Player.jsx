import { useEffect, useRef, useState } from "react"
import { usePlayerStore } from "src/store/playerStore"

export const Pause = ({ className }) => (
  <svg
    className={className}
    role="img"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
)

export const Play = ({ className }) => (
  <svg
    className={className}
    role="img"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
  </svg>
)

export function Player() {
  const { isPlaying, setIsPlaying } = usePlayerStore((state) => state)
  const [currentSong, setCurrentSong] = useState(null)
  const audioRef = useRef()

  useEffect(() => {
    audioRef.current.src = `/music/1/01.mp3`
  }, [])

  const handleclick = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
      audioRef.current.volume = 0.1
    }
    setIsPlaying(!isPlaying)
  }
  return (
    <div className="z-50 flex w-full flex-row justify-between px-4">
      <div>CurrentSong ...</div>

      <div className="grid flex-1 place-content-center gap-4">
        <div className="flex justify-center">
          <button className="rounded-full bg-white p-2" onClick={handleclick}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <audio ref={audioRef} />
        </div>
      </div>

      <div className="grid place-content-center">Volume</div>
    </div>
  )
}
