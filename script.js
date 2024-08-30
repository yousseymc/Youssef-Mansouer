let subscribeClicked = false;
let likeClicked = false;

function subscribe() {
    window.open('https://www.youtube.com/@SupreYoussef', '_blank');
    subscribeClicked = true;
    updateProgress();
}

function like() {
    window.open('https://youtu.be/VJVvsdVBit0?si=NZcUIicVrz3od5Ja', '_blank');
    likeClicked = true;
    updateProgress();
}

function updateProgress() {
    let progressBar = document.getElementById('progress-bar');
    let downloadBtn = document.getElementById('download-btn');

    if (subscribeClicked && likeClicked) {
        progressBar.style.width = '100%';
        downloadBtn.disabled = false;
    } else if (subscribeClicked || likeClicked) {
        progressBar.style.width = '50%';
    }
}
