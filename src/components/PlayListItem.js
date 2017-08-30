import React from 'react';

const PlayListItem = (props) => {
  const song = props.song;


    return (
      <div>
        <h5>{song.songTitle}</h5>
        <h4>{song.songArtist}</h4>
        <h3>{song.songNotes}</h3>
        <h3>{song.userName}</h3>
      </div>
    );
}

export  default PlayListItem;
