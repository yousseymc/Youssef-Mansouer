// script.js

document.addEventListener('DOMContentLoaded', () => {
    const subscribeBtn = document.getElementById('subscribe-btn');
    const likeBtn = document.getElementById('like-btn');
    const downloadBtn = document.getElementById('download-btn');
    const progressBar = document.getElementById('progress-bar');
    let progress = 0;

    subscribeBtn.addEventListener('click', () => {
        if (!subscribeBtn.classList.contains('completed')) {
            subscribeBtn.classList.add('completed');
            progress += 50;
            updateProgress();
        }
    });

    likeBtn.addEventListener('click', () => {
        if (!likeBtn.classList.contains('completed')) {
            likeBtn.classList.add('completed');
            progress += 50;
            updateProgress();
        }
    });

    function updateProgress() {
        progressBar.style.width = `${progress}%`;

        if (progress === 100) {
            downloadBtn.disabled = false;
        }
    }
});
