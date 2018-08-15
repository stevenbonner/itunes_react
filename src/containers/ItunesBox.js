import React from 'react';
import SongList from '../components/SongList'
import Header from '../components/Header'
import SongSelector from '../components/SongSelector'
import SongDetails from '../components/SongDetails'


class ItunesBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      selectedSong: null
    }

    this.handleSongSelect = this.handleSongSelect.bind(this);
  }




  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songs: songs.feed.entry}));
  }

  handleSongSelect(event){
    const songIndex = event.target.value;
    const selectedSong = this.state.songs[songIndex];
    this.setState({selectedSong: selectedSong})
  }


  render(){
    return(
      <div className='chart'>
      <Header />
        <SongSelector
          songs={this.state.songs}
          onSelect={this.handleSongSelect}
        />

        <SongDetails song={this.state.selectedSong}/>

        <SongList songs={this.state.songs} />
      </div>
    )
  }
}

export default ItunesBox;
