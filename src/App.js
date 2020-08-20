import React from "react";
import { getMedia } from "./api/getMedia";

function App() {
  getMedia({video: true});

  return (
    <div className="App">
      <h1>Image Object Classification with TensorFlow.js</h1>

      <div class="responsive-embed">
        <video id="webcam" autoplay></video>
      </div>

      <pre class="current-predictions"></pre>
    </div>
  );
}

export default App;
