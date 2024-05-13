// script.js

document.getElementById('btnToggleVideo').addEventListener('click', function() {
    var videoFrame = document.getElementById('videoFrame');
    if (videoFrame.style.display === 'none') {
        videoFrame.style.display = 'block';
    } else {
        videoFrame.style.display = 'none';
    }
});