const codeReader = new ZXingBrowser.BrowserMultiFormatReader();
const videoElement = document.getElementById("video");

function scan() {
  codeReader
    .decodeFromStream(videoElement, "video", (result, error) => {
      if (result) {
        console.log("scanned val=>", result.text);
        // window.ReactNativeWebView.postMessage(result.text);
      }
      if (error) {
        console.error("error scan", error);
      }
    })
    .catch((err) => console.error(err));
}

// Start the video stream
navigator.mediaDevices
  .getUserMedia({ video: { facingMode: "environment" } })
  .then((stream) => {
    videoElement.srcObject = stream;
    videoElement.play();
    scan();
  })
  .catch((err) => console.error("Error accessing camera: ", err));
