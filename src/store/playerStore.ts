import type { Playlist, Song } from "@/lib/data"
import { create } from "zustand"

type CurrentMusic = {
  playlist: Playlist | null
  song: Song | null
  songs: Song[] | null
}

interface PlayerStore {
  isPlaying: boolean
  currentMusic: CurrentMusic
  setIsPlaying: (isPlaying: boolean) => void
  setCurrentMusic: (currentMusic: CurrentMusic) => void
  volume: number
  setVolume: (volume: number) => void
}

export const usePlayerStore = create<PlayerStore>((set) => ({
  isPlaying: false,
  currentMusic: { playlist: null, song: null, songs: null },
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
  volume: 1,
  setVolume: (volume) => set({ volume }),
}))
