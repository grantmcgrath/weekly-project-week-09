import React from 'react';

const PlayListItem = (props) => {
  const song = props.song;


    return (
      <div className = "results">
        <h5>User: <span>{song.userName}</span></h5>
        <h5>Artist: <span>{song.songArtist}</span></h5>
        <h5>Title: <span>{song.songTitle}</span></h5>
        <h5>Notes: <span>{song.songNotes}</span></h5>
      </div>
    );
}

export  default PlayListItem;
