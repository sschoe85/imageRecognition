import React, { useRef } from "react";
import useUserMedia from "../api/useUserMedia";
import calculateModel from "../api/calculateModel";

export default function IntelligentCamera() {
  const videoRef = useRef();
  const mediaStream = useUserMedia({ video: true });

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  function handleOnLoadedData() {
    calculateModel(videoRef.current);
  }

  return <video ref={videoRef} onLoadedData={handleOnLoadedData} />;
}
