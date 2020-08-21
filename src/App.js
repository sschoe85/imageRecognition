import React from "react";
import { getMedia } from "./api/getMedia";
import { useQuery } from "react-query";


function App() {
  const { isLoading, error, data } = useQuery('predictions', () =>

     getMedia({video: true}));

  return (
    <div className="App">
      <h1>Hello, this is your computer! Show me something and I will tell you what I see...</h1>

      <div class="responsive-embed">
        <video id="webcam"></video>
      </div>

      <div class="current-predictions"></div>
      {error && <div>Error!</div>}
        {isLoading && <div>Page is loading...</div>}
        {data?.map((prediction) => (
          prediction.class
            
          
        ))}
    </div>
  );
}

export default App;
