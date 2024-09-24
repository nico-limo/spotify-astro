import { usePlayerStore } from "src/store/playerStore"
import { Pause, Play } from "./Player"

export function CardPlayButton({ id }) {
  const { currentMusic, isPlaying, setCurrentMusic, setIsPlaying } =
    usePlayerStore((state) => state)

  const handleClick = () => {
    setCurrentMusic({ playlist: { id } })
    setIsPlaying(!isPlaying)
  }

  const isPlayingPlayList = isPlaying && currentMusic?.playlist.id === id
  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-4"
    >
      {isPlayingPlayList ? <Pause /> : <Play />}
    </button>
  )
}
