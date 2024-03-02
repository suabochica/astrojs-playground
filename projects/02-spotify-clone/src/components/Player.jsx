import { useRef, useEffect } from 'react'

// 👇 These import not work b/c are defined for astro.
// import { Pause } from '../icons/Pause.astro'
// import { Play } from '../icons/Play.astro'
import { usePlayerStore } from '@/store/playerStore'


export const Pause = ({ className }) => (
  <svg className={className} role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
)

export const Play = ({ className }) => (
  <svg className={className} role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
)

export function Player() {
  const { currentMusic, isPlaying, setIsPlaying } = usePlayerStore(state => state)
  const audioRef = useRef()

  // Effects
  // --------

  useEffect(() => {
    isPlaying
      ? audioRef.current.play()
      : audioRef.current.pause()
  }, [isPlaying])

  useEffect(() => {
    const { song, playlist, songs } = currentMusic

    if (song) {
      const src = `/music/${playlist.id}/0${song.id}.mp3`
      audioRef.current.src = src
      audioRef.current.play()
    }
  }, [currentMusic])

  // Handlers
  // --------

  const handleClick = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
      audioRef.current.volume = 0.1
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="flex flex-row justify-between w-full px-4 z-2">
      <div>Canción actual...</div>
      <div className="grid place-content-center gap-4 flex 1">
        <div className="flex justify-center">
          <button
            className="bg-white rounded-full p-2"
            onClick={handleClick}
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
        </div>
      </div>
      <div className='grid place-content'>Volumen</div>
      <audio ref={audioRef}></audio>

    </div>
  )
}