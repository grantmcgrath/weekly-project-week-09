import React, { Component } from 'react';
import PlayListItem from "../components/PlayListItem";

export default class PlayList extends Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);
    this.state = {songs: []};
  }

  fetchData(e) {
      e.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      })
    }

componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
          console.log("state", this.state.songs);
        })
  }

  render() {
    const songs = this.state.songs.map((song) => {
    return (
      <PlayListItem key = {song._id} song = {song} />
    );
  });
    return (
      <div>
        <button onClick = {this.fetchData} className = "btn green">Update List</button>
        <div>
          {songs}
        </div>
      </div>
    )

  }
}
