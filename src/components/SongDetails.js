import React from 'react';


const SongDetails = (props) => {
  if(!props.song) return null;
  return(
    <div className='song-details'>
      <h2>{props.song["im:name"].label}</h2>
      <p><a href={props.song["im:artist"].attributes.href}>{props.song["im:artist"].label}</a></p>
      <img src={props.song["im:image"][2].label} alt="single cover art" />
      <audio controls >
        <source  src={props.song.link[1].attributes.href} type={props.song.link[1].attributes.type} />
      </audio>
    </div>
  )
}

export default SongDetails;
