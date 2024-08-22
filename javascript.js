console.log("welcome to spotify")

let songIndex = 0;
let play = document.getElementById('play');
let audioElement = new Audio('Spotify Clone/songs/1.mp3');
let timestamp = document.getElementById('timestamp');
let forward = document.getElementById('forward');
let backward = document.getElementById('backward');
let playImg = document.getElementById('playImg');
let names = document.getElementById('text');
let masterSongName = document.getElementById('masterSongName');
// audioElement.play();

let songs = [
    {songName : "Perfect" , filepath : "Spotify Clone/songs/1.mp3" },
    {songName : "Shape of You" , filepath : "Spotify Clone/songs/2.mp3" },
    {songName : "Galway Girl" , filepath : "Spotify Clone/songs/3.mp3" },
    {songName : "Bad Habits" , filepath : "Spotify Clone/songs/4.mp3" },
    {songName : "Beautiful People" , filepath : "Spotify Clone/songs/5.mp3" },
    {songName : "2 Steps" , filepath : "Spotify Clone/songs/6.mp3" },
    {songName : "Thinking out Loud" , filepath : "Spotify Clone/songs/7.mp3" },
    {songName : "Shivers" , filepath : "Spotify Clone/songs/8.mp3" },
    {songName : "Photograph" , filepath : "Spotify Clone/songs/9.mp3" },
    {songName : "Overpass Graffiti" , filepath : "Spotify Clone/songs/10.mp3" },
]

play.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        play.classList.remove(...'fa-regular fa-circle-play'.split(' '));
        play.classList.add(...'fa-regular fa-circle-pause'.split(' '));
        playImg.style.opacity = 1;
    }
    else{
        audioElement.pause();
        play.classList.remove(...'fa-regular fa-circle-pause'.split(' '));
        play.classList.add(...'fa-regular fa-circle-play'.split(' '));
        playImg.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate',()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    timestamp.value = progress;
    // console.log(progress);
})

timestamp.addEventListener('change',()=>{
    audioElement.currentTime = (timestamp.value * audioElement.duration)/100;
})

const playAll = ()=>{
    Array.from(document.querySelectorAll('.button')).forEach((ele)=>{
        ele.classList.remove(...'fa-regular fa-circle-pause'.split(' '));
        ele.classList.add(...'fa-regular fa-circle-play'.split(' '));
    })
}

Array.from(document.querySelectorAll(".songItem")).forEach((ele)=>{
    ele.addEventListener('click',(element)=>{
        playAll();
        const target_element = element.currentTarget.querySelector('.button');
        if(target_element){
            target_element.classList.remove(...'fa-regular fa-circle-play'.split(' '));
            target_element.classList.add(...'fa-regular fa-circle-pause'.split(' '));
        }
        ele.style.borderShadow = '5px 5px grey';

        songIndex= parseInt(target_element.id);
        audioElement.src = `Spotify Clone/songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterSongName.innerText = songs[songIndex].songName;
        play.classList.remove(...'fa-regular fa-circle-play'.split(' '));
        play.classList.add(...'fa-regular fa-circle-pause'.split(' '));
        playImg.style.opacity = 1;

    })
})

forward.addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0;
    }else{
        songIndex+=1;
    }
    audioElement.src = `Spotify Clone/songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    playAll();
    const currSong = document.getElementById(String(songIndex));
    currSong.classList.remove(...'fa-regular fa-circle-play'.split(' '));
    currSong.classList.add(...'fa-regular fa-circle-pause'.split(' '));
    audioElement.play();
    masterSongName.innerText = songs[songIndex].songName;
    play.classList.remove(...'fa-regular fa-circle-play'.split(' '));
    play.classList.add(...'fa-regular fa-circle-pause'.split(' '));
    playImg.style.opacity = 1;

})

backward.addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 9;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `Spotify Clone/songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    playAll();
    const currSong = document.getElementById(String(songIndex));
    currSong.classList.remove(...'fa-regular fa-circle-play'.split(' '));
    currSong.classList.add(...'fa-regular fa-circle-pause'.split(' '));
    audioElement.play();
    masterSongName.innerText = songs[songIndex].songName;
    play.classList.remove(...'fa-regular fa-circle-play'.split(' '));
    play.classList.add(...'fa-regular fa-circle-pause'.split(' '));
    playImg.style.opacity = 1;
})


