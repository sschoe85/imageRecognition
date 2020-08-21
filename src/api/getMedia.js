require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");


export async function getMedia(constraints) {
    let stream = null;
  
    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      const video = document.querySelector("#webcam");
      video.srcObject = stream;
      video.addEventListener("loadeddata", async () => {
        const model = await cocoSsd.load();
        let predictions = await model.detect(video);
        console.log(predictions);
        document.querySelector(".current-predictions").innerText = JSON.stringify(
          predictions,
          2
        );
        return predictions;
      });
    } catch(err) {
    }
  }
  