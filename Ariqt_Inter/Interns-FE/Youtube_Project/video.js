import navbar from "./components/navbar.js";
let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();
const showclickedvideo=()=>{
    let {snippet,videoId} = JSON.parse(localStorage.getItem("clicked_video"));
    let iframe = document.createElement("iframe");
    iframe.width="100%";
    iframe.style.height="80vh";
    iframe.src=`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
    iframe.setAttribute("allowfullscreen",true);
   
    let h3 = document.createElement("h3");
    h3.innerText=snippet.title;
    let p = document.createElement("p");
    p.innerText=snippet.channelTitle
    let p2=document.createElement("p");
    p2.innerText=snippet.publishedAt;
    let vedio_div=document.getElementById("video_div");
    vedio_div.append(iframe,h3,p,p2);
}

document.getElementById("body").addEventListener("load",showclickedvideo())
// <iframe width="560" height="315" src="https://www.youtube.com/embed/V1vaJnl4G3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}