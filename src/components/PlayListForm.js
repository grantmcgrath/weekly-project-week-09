import React, { Component } from 'react';

export default class PlayListForm extends Component {
  constructor(props) {
    super(props);

    this.addToList = this.addToList.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleArtistChange = this.handleArtistChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);

    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    }
  }

handleNameChange(event) {
  this.setState({userName: event.target.value});
};
handleArtistChange(event) {
  this.setState({songArtist: event.target.value});
};
handleTitleChange(event) {
  this.setState({songTitle: event.target.value});
};
handleNotesChange(event) {
  this.setState({songNotes: event.target.value});
};

  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render() {
    return (
      <form onSubmit = {this.addToList} className = "" id = "">
        <label>Username: </label>
        <input className = "form-control" onChange = {this.handleNameChange} name = "userName" placeholder = "Name or Username" value = {this.state.userName} />

        <label>Artist/Band: </label>
        <input className = "form-control" onChange = {this.handleArtistChange} name = "songArtist" placeholder = "Artist or Band nName" value = {this.state.songArtist} />

        <label>Song Title: </label>
        <input className = "form-control" onChange = {this.handleTitleChange} name = "songTitle" placeholder = "Name or Username" value = {this.state.songTitle} />

        <label>Notes and Song: </label>
        <input className = "form-control" onChange = {this.handleNotesChange} name = "songNotes" value = {this.state.songNotes} />

        <button className = "" type = "submit" id = "formSubmitButton">Submit</button>
      </form>
    );
  }
}
