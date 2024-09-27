import { allPlaylists, songs as allSongs } from "@/lib/data"
import type { APIRoute } from "astro"

export const prerender = false
export const GET: APIRoute = async ({ request }) => {
  const { url } = request
  const urlObject = new URL(url)
  const id = urlObject.searchParams.get("id")

  const playlist = allPlaylists.find((playlist) => playlist.id === id)

  const songs = allSongs.filter((song) => song.albumId === playlist?.albumId)

  return new Response(JSON.stringify({ playlist, songs }), {
    headers: {
      "content-type": "application/json",
    },
  })
}
