function playSong(album) {
    var audioPlayer = document.getElementById('audioPlayer');
    var audioSource = document.getElementById('audioSource');

    // Set song based on album
    if (album === 'album1') {
        audioSource.src = 'songs/Ullaasam.mp3'; // Replace with the actual path of Album 1 song
    } else if (album === 'album2') {
        audioSource.src = 'songs/Aa_Rojulu_Malli_Raavu.mp3'; // Replace with the actual path of Album 2 song
    } else if (album === 'album3') {
        audioSource.src = 'songs/Kurchi_Madathapetti.mp3'; // Replace with the actual path of Album 3 song
    }

    // Load the new song and play
    audioPlayer.load();
    audioPlayer.play();
}
