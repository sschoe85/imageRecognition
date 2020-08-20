export default async function detectObjects(video, model) {
    let predictions = await model.detect(video);
    document.querySelector(".current-predictions").innerText = JSON.stringify(
      predictions,
      2
    );
    //window.requestAnimationFrame(() => detectObjects(video, model));
  }