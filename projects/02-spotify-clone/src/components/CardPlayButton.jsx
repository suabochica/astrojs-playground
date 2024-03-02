import { Pause, Play } from './Player'
import { usePlayerStore } from '@/store/playerStore'

export function CardPlayButton({ id }) {
  // State
  // -----

  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } = usePlayerStore(state => state)

  // Utils
  // -----

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id

  // Handlers
  // --------

  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false)

      return
    }

    fetch(`/api/getInfoPlayList.json?id=${id}`)
      .then(response => response.json())
      .then(data => {
        const { songs, playlist } = data
        setIsPlaying(true)
        setCurrentMusic({ songs, playlist, song: songs[0] })
      })
  }


  return (
    <button onClick={handleClick} class="card-play-button rounded-full bg-green-500 p-4">
      {isPlayingPlaylist ? <Pause /> : <Play />}
    </button>
  )
}
