// static/script.js

let camActiveTime = 0;
let totalTime = 0;
let tabSwitches = 0;
let webcamStream = null;

// Track tab switches
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    tabSwitches++;
    sessionStorage.setItem('tabSwitches', tabSwitches);
    document.getElementById('status')?.innerHTML = '<span style="color:red;">Tab switched!</span>';
  } else {
    document.getElementById('status')?.innerHTML = '<span style="color:green;">Proctoring: Active</span>';
  }
});

// Start webcam and proctoring timer
function startProctoring(current, total) {
  const video = document.getElementById('webcam');

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        video.srcObject = stream;
        webcamStream = stream;

        // Timer logic
        setInterval(() => {
          totalTime++;
          if (video.readyState === 4 && video.srcObject) {
            camActiveTime++;
          }
          sessionStorage.setItem("camActive", camActiveTime);
          sessionStorage.setItem("totalTime", totalTime);
        }, 1000);
      })
      .catch(err => {
        document.getElementById('status')?.innerHTML = '<span style="color:red;">Webcam Access Denied</span>';
      });
  } else {
    document.getElementById('status')?.innerHTML = '<span style="color:red;">Webcam Not Supported</span>';
  }
}
