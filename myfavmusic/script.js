let reverse = document.querySelector(".reverse");
let next = document.querySelector(".next");
let play = document.querySelector(".circle");

let songs = [
    "audio/levitating.mp3",
    "audio/right now now.mp3",
    "audio/dangerous.mp3"
]

let images = [
    "images/dua-lipa.jpg",
    "images/akon.jpg",
    "images/michael-jackson.jpg"
]
let songnames = [
    "levitating",
    "right now now",
    "dangerous"
]
let singernames = [
    "dua-lipa",
    "akon",
    "michael jackson"
]
let index = 0;
function nextsong() {
    let song = document.getElementById("song");
    song.src = songs[index];
    song.play();

}
function nextimage() {
    let image = document.getElementById("image");
    image.src = images[index];
}
function changesongname() {
    let songname = document.getElementById("song-name");
    songname.textContent = songnames[index];
}
function changesingername() {
    let singername = document.getElementById("singer-name");
    singername.textContent = singernames[index];

}

play.addEventListener("click",()=>{
    if(song.paused)
    {
        song.play();
        play.classList.replace("ri-play-circle-fill","ri-pause-circle-fill");
        image.classList.add("rotate");
    }
    else
        {
            song.pause();
            image.classList.remove("rotate");
            play.classList.replace("ri-pause-circle-fill","ri-play-circle-fill");
        }
});
reverse.addEventListener("click",()=>{
    nextimage();
    changesongname();
    changesingername();
    nextsong();
    index=((index-1)+songs.length)%songs.length;
})
next.addEventListener("click", () => {
    nextimage();
    changesongname();
    changesingername();
    nextsong();
    index = (index + 1) % songs.length;

})