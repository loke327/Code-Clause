// You can add JavaScript functionality here, such as fetching video data from an API.

// Example function to change the video when a thumbnail is clicked
function changeVideo(videoId) {
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.src = `https://www.youtube.com/embed/${videoId}`;
}

// Example: Fetching video data from an API
// Replace this with your actual API endpoint
fetch('https://api.example.com/videos')
    .then(response => response.json())
    .then(data => {
        const playlist = document.getElementById('playlist');

        // Populate the playlist with video thumbnails and titles
        data.forEach(video => {
            const thumbnail = document.createElement('img');
            thumbnail.src = video.thumbnail;
            thumbnail.alt = video.title;
            thumbnail.onclick = () => changeVideo(video.id);

            const title = document.createElement('p');
            title.textContent = video.title;

            const videoItem = document.createElement('div');
            videoItem.appendChild(thumbnail);
            videoItem.appendChild(title);

            playlist.appendChild(videoItem);
        });
    })
    .catch(error => console.error('Error fetching video data:', error));
