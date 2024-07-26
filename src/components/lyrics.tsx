import React from 'react'

type LyricsDisplayProps = {
  lyrics: string[] | null
}

const LyricsDisplay: React.FC<LyricsDisplayProps> = ({ lyrics }) => {
    
  if (!lyrics) {
    return null
  }

  return (
    <div className="absolute -inset-x-px flex flex-col text-white items-center justify-center">
      <h3>Selected Lyrics:</h3>
      {lyrics.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  )
}

export default LyricsDisplay
