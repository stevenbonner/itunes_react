import React from 'react';


class SongList extends React.Component {
  render(){
    const songList = this.props.songs.map((song, index) => (
      <li key={song.id.attributes["im:id"]}><img src={song["im:image"][0].label} alt="single art" /> {song.title.label}</li>
    ))

    return(
        <ol className='chart-list'>{songList}</ol>
      )
    }
  }


    export default SongList;
