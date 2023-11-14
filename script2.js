console.log("welcome to my music");
let songIndex=0;
let songItem=Array.from(document.getElementsByClassName("songitem"));
let audioElement=new Audio('songs/1.mp3');
let gif=document.getElementById('gif')
let masterplay=document.getElementById("masterplay");
let myProgressBar=document.getElementById("myprogressbar");
let masterplayname=document.getElementById("masterplayname");
let songs=[
    {songName:"sunsatiya",filepath:"songs/1.mp3" ,coverPath: "covers/1.jpg"},
    {songName:"sunsatiya1",filepath:"songs/2.mp3" ,coverPath: "covers/2.jpg"},
    {songName:"sunsatiy9a",filepath:"songs/3.mp3" ,coverPath: "covers/3.jpg"},
    {songName:"sunsatiya8",filepath:"songs/4.mp3" ,coverPath: "covers/4.jpg"},
    {songName:"s8unsatiya",filepath:"songs/5.mp3" ,coverPath: "covers/5.jpg"},
    {songName:"su9nsatiya",filepath:"songs/6.mp3" ,coverPath: "covers/6.jpg"},
    {songName:"sun0satiya",filepath:"songs/7.mp3" ,coverPath: "covers/7.jpg"},
    {songName:"suns8atiya",filepath:"songs/8.mp3" ,coverPath: "covers/8.jpg"},
    {songName:"sunsa9tiya",filepath:"songs/9.mp3" ,coverPath: "covers/9.jpg"},
    {songName:"sunsat7iya",filepath:"songs/10.mp3" ,coverPath: "covers/10.jpg"},
]
songItem.forEach((element,i) => {
element.getElementsByClassName("classname")[0].innerText=songs[i].songName;
    
});
masterplay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplayname.innerText=songs[songIndex].songName;

        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
        gif.style.opacity=1;   
    }
    else{
        audioElement.pause();
        masterplay.classList.remove("fa-circle-pause");
        masterplay.classList.add("fa-circle-play");
        gif.style.opacity=0; 
        Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
            element.classList.remove("fa-circle-pause");
             element.classList.add("fa-circle-play");
       })
    }
})
audioElement.addEventListener("timeupdate",()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value=progress;
})
myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeallplay=()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
         element.classList.add("fa-circle-play");
   })

}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeallplay();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterplayname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
    }) 
})
document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>= 9){
        songIndex =0;
    }
    else{
        songIndex+=1;
    }
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterplayname.innerText=songs[songIndex].songName;

        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
        makeallplay();
})
document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<= 0){
        songIndex =9;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        masterplayname.innerText=songs[songIndex].songName;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause"); 
       makeallplay();     
})  
