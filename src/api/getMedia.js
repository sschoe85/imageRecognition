import detectObjects from "./detectObjects";
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
        const predictions = await detectObjects(video, model);
        return predictions;
      });
    } catch(err) {
    }
  }
  