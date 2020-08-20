import React from "react";
import { getMedia } from "./api/getMedia";
import { useQuery } from "react-query";


function App() {
  const { isLoading, error, data } = useQuery('predictions', () =>

     getMedia({video: true}));

  return (
    <div className="App">
      <h1>Image Object Classification with TensorFlow.js</h1>

      <div class="responsive-embed">
        <video id="webcam" autoplay></video>
      </div>

      <pre class="current-predictions"></pre>
      {error && <div>Error!</div>}
        {isLoading && <div>Page is loading...</div>}
        {data?.map((prediction) => (
          prediction.class
            
          
        ))}
    </div>
  );
}

export default App;
