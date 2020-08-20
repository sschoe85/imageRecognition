import React from 'react';
require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');
const cocoSsd = require('@tensorflow-models/coco-ssd');


function App() {
  function detectObjects(video, model) {
    model.detect(video).then(predictions => {      
      document.querySelector('.current-predictions').innerText = JSON.stringify(predictions, null, 2);
    });
    window.requestAnimationFrame(() => detectObjects(video, model));
  }
  
  navigator.mediaDevices
    .getUserMedia({
      video: true
    })
    .then(stream => {
      const video = document.querySelector("#webcam");
  
      video.srcObject = stream;
  
      video.addEventListener("loadeddata", async() => {
        const model = await cocoSsd.load();
        let predictions = await detectObjects(video,model);
      });
    });
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
