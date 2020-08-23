require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");

const calculateModel = async (video) => {
    const model = await cocoSsd.load();
    let predictions = await model.detect(video);
    console.log(predictions);
    document.querySelector(".current-predictions").innerText = JSON.stringify(
      predictions,
      2
    );
  }

  export default calculateModel;