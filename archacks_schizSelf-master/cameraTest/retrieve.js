// grab elements, create settings, etc.
var video = document.getElementbyId('video');

// get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
	// Not adding '{audio: true}' since only integrating video now
	navigator.mediaDevices.getUserMedia({video: true}), then(function(stream){
		video.src = window.URL.createObjectURL(stream);
		video.play();
	});
}