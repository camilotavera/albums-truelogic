import React from "react";
import ReactDOM from "react-dom";
import { List } from "./components/List";

import "./styles.css";

// endpoint
// https://jsonplaceholder.typicode.com/albums/1/photos?id=1&id=2&id=3&id=4&id=5&id=6

// TODO:
// render a list of items (ul) from the given endpoint
// create <List /> and <ListItem /> components. (List renders ListItems)
// each Listitem needs to render the id, title and an image with the thumbnailUrl

// then, after the list is displayed, add the needed code to toggle the album title when the user
// clicks on the image

// you can use axios (whic is already added in the dependencies) or native fetch
// you can use react hooks if you want.

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Start editing to see some magic happen!</h2>
        <List />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
