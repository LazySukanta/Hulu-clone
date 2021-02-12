import React from 'react'
import "./VideoCard.css"
function VideoCard({ movie }) {
  return ( 
    <div className="VideoCard">
      <img src="https://image.tmdb.org/t/p/original//57vVjteucIF3bGnZj6PmaoJRScw.jpg" alt=""/>
      <p>This is a film about all</p>
      <h2>Movie Name</h2>
      <p>Number of likes...</p>
    </div>

  )
}

export default VideoCard
