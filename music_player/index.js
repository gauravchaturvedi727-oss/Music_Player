const play = document.getElementById("play");
const prev = document.getElementById("prev");
const pause = document.getElementById("pause");
const next = document.getElementById("next");
const song = document.getElementById("song");
const total = document.getElementById("total");
const current = document.getElementById("current");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const mute = document.getElementById("mute");

play.addEventListener('click', playing);


function playing(){
    song.play();
}

function format_Time(seconds){
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);

    if(sec < 10){
        sec = "0" + sec;
    }
    return `${min}:${sec}`;
}

song.addEventListener("loadedmetadata", () => {
    total.innerHTML = format_Time(song.duration);
});

song.addEventListener("timeupdate", () =>{
    current.innerHTML = format_Time(song.currentTime)
});


song.addEventListener("loadedmetadata", () =>{
    progress.max = song.duration;
});

song.addEventListener("timeupdate", () =>{
    progress.value = song.currentTime;
});

progress.addEventListener("input", () => {
    song.currentTime = progress.value;
});

pause.addEventListener('click', pausing);
function pausing(){
    song.pause();
}
const songs = [
    "Shoorveer_III_-_Slowed_Reverb_Use_Headphones_[_YouConvert.net_].mp3",
    "Desi_Boyz_Lo-fi_song_Slowed_Reverb_Dream_99k_[_YouConvert.net_].mp3",
    "Shaam_Bhi_Khoob_Hai_lofi_song_Karz_Udit_Narayan_Slowed_Reverb_Ritik_AUDIOS_cblofistudio_[_YouConvert.net_].mp3"
];
let currentSong = 0;
song.src = songs[currentSong];
prev.addEventListener('click', backward);
function backward(){
    currentSong--;
    if(currentSong < 0){
        currentSong = songs.length - 1;
    }
    song.src = songs[currentSong];
    song.play();
}
next.addEventListener('click', forward);
function forward(){
    currentSong++;
    if(currentSong >= songs.length){
        currentSong = 0;
    }
    song.src = songs[currentSong];
    song.play();
}

volume.addEventListener("input", () =>{
    song.volume = volume.value;
});


mute.addEventListener("click" ,() =>{

    if(volume.value > 0){
        volume.value = 0;
        song.volume = volume.value;
        mute.textContent = "🔇";
    }
    else{
        volume.value = volume.max;
        song.volume = volume.value;
        mute.textContent = "🔊";
    }
});
