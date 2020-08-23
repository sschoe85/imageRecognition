import calculateModel from "./calculateModel";




export async function getMedia(constraints) {
    let stream = null;
  
    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      const video = document.querySelector("#webcam");
      video.srcObject = stream;
      video.addEventListener("loadeddata", ()=> calculateModel(video));
    } catch(err) {
    }

  }
  