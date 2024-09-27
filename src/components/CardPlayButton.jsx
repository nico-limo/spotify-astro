import { usePlayerStore } from "src/store/playerStore"
import { Pause, Play } from "./Player"

export const prerender = false

export function CardPlayButton({ id }) {
  const { currentMusic, isPlaying, setCurrentMusic, setIsPlaying } =
    usePlayerStore((state) => state)

  const handleClick = async () => {
    if (isPlayingPlayList) {
      setIsPlaying(false)
      return
    }

    const response = await fetch(`/api/get-info-playlist.json?id=${id}`)
    const { songs, playlist } = await response.json()
    setIsPlaying(true)
    setCurrentMusic({
      playlist,
      songs,
      song: songs[0],
    })
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
