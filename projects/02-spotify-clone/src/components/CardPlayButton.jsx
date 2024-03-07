import { Pause, Play } from './Player'
import { usePlayerStore } from '@/store/playerStore'

export function CardPlayButton({ id, size = 'small' }) {
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

  const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5'

  return (
    <button onClick={handleClick} class="card-play-button rounded-full bg-green-500 p-4 hover:scale-100 hover:bg-green-400">
      {isPlayingPlaylist ? <Pause className={iconClassName} /> : <Play className={iconClassName} />}
    </button>
  )
}
