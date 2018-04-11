import React, { Component } from 'react';
import axios from 'axios';
import Button from './Button';

const secret = process.env.REACT_APP_GIF_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.updateGif = this.updateGif.bind(this);
  }
  state = { defaultGif: null, defaultText: '', defaultLink: '' };
  componentDidMount() {
    this.updateGif();
  }
  updateGif() {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/random?api_key=${secret}&tag=&rating=R`
      )
      .then(res => {
        const data = res.data.data;
        this.setState({
          defaultGif: data.fixed_height_downsampled_url,
          defaultText: data.title,
          defaultLink: data.url,
        });
      });
  }
  render() {
    return (
      <div className="container">
        <Button onClick={this.updateGif} />
        <div className="row">
          <img
            className="mx-auto pt-5"
            src={this.state.defaultGif || 'LOADING...'}
          />
        </div>
        <div className="row">
          <h1 className="mx-auto pt-5">
            {this.state.defaultText || 'LOADING....'}
          </h1>
        </div>
        <div className="row">
          <a className="mx-auto" href={this.state.defaultLink}>
            Click Here for The Link
          </a>
        </div>
      </div>
    );
  }
}

export default App;
