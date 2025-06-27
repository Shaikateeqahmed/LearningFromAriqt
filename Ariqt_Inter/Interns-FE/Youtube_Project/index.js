//importing a navbar from components folder for re-usebility perpose
import navbar from "./components/navbar.js";

let nav = document.getElementById("navbar");

nav.innerHTML = navbar();


//adding a Debouncing technique for getting the data on type
document.getElementById("search_item").addEventListener("input", () => {
    debounce(searchVideos, 1000);
})

let listening = document.getElementById("listeningModal");



let id2;

$(listening ).on('shown.bs.modal', function(){
    console.log("listening");
    //alert("I want this to appear after the modal has opened!");
    var recognition = new webkitSpeechRecognition();
    recognition.lang = window.navigator.language;
    recognition.interimResults = true;
    
        recognition.start();

        recognition.addEventListener("result",(event)=>{
            const result = event.results[event.results.length-1][0].transcript;
            //resultElement.textContent = result;
            search_item.value = result;
            if(id2){
              clearTimeout(id2)
            }
            id2 = setTimeout(()=>{
                console.log(result);
                var modal = bootstrap.Modal.getInstance(listening)
                modal.hide();
                searchVideos();
            },1000)
            
        })
});
    // listening.addEventListener("click",()=>{
    //     var recognition = new webkitSpeechRecognition();
    // recognition.lang = window.navigator.language;
    // recognition.interimResults = true;
    
    //     recognition.start();

    //     recognition.addEventListener("result",(event)=>{
    //         const result = event.results[event.results.length-1][0].transcript;
    //         //resultElement.textContent = result;
    //         search_item.value = result;
    //         if(id2){
    //           clearTimeout(id2)
    //         }
    //         id2 = setTimeout(()=>{
    //             console.log(result)
    //             //searchVideos();
    //         },1000)
            
    //     })
    // })
//Getting a data for home page display through the getvedios function
let ApiKey = "AIzaSyACcLsIEpx3kjDjKrJYNP54ZWGmq6NBiCE";
async function getvedios() {
    try {
        let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&key=${ApiKey}`);
        let data = await response.json();
        let actual_data = data.items;
        appendVideos(actual_data);
    } catch (error) {
        console.log("err:", error);
    }
}
getvedios();


//this is a Debouncing technique
let id;
function debounce(func, time) {
    if (id) {
        clearTimeout(id);
    }
    id = setTimeout(() => {
        func();
    }, time);
}

let search_item = document.getElementById("search_item")
// This is a function for searching a videos on type only 
const carousel = document.getElementById("carousel")
const bnts = document.getElementById("button");
async function searchVideos() {
    carousel.style.display="none"
    bnts.style.marginTop = "100px"
    bnts.style.top = "80px"
    try {
        ;
        let resorces = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search_item.value}&maxResults=50&key=${ApiKey}`);
        let data = await resorces.json();
        let actual_data = data.items;
        appendVideos(actual_data);
        console.log(actual_data);
    } catch (err) {
        console.log("err:", err);
    }
}


//this function is for adding the data to DOM
let container = document.getElementById("container");
let loader = document.getElementById("loader");
function appendVideos(data) {
    try {
        container.innerHTML = null;
        loader.style.display="none"
        data.map(({ snippet, id: { videoId } }) => {
            let div = document.createElement("div");
            let thumbnail = document.createElement("img");
            thumbnail.src = snippet.thumbnails.medium.url;
            let title = document.createElement("p");
            title.innerText = snippet.title;
            let channelTitle = document.createElement("p");
            channelTitle.innerText = snippet.channelTitle;
            let description = document.createElement("p");
            description.innerText = snippet.description;
            //   let thumbnail = snippet.thumbnails.medium.url;
            //   let title = snippet.title;
            //   let channelTitle = snippet.channelTitle;
            //   let description = snippet.description; 
            //   let card = document.createElement("div");
            //    card.innerHTML = `<div class="card" style="width: 18rem;" style ="margin-top:100px"}>
            //    <img src=${thumbnail} class="card-img-top" alt="Thumnail">
            //    <div class="card-body">
            //      <h5 class="card-title">${title}</h5>
            //      <p class="card-text">${channelTitle}</p>
            //      <p class="card-text">${description}</p>
            //    </div>
            //  </div>`
            div.append(thumbnail, title, channelTitle, description);
            div.onclick = () => {
                console.log("click");
                let data = {
                    snippet: snippet,
                    videoId: videoId,
                }
                localStorage.setItem("clicked_video", JSON.stringify(data));
                window.location.href = "video.html";
            }
            container.append(div);
        })
    
    } catch (error) {
        console.log("error",error)
    }
   
}

// const alphabet = async (title) => {
//     try {
//         let resorces = await fetch(`https://jsonplaceholder.typicode.com/photos`);
//         let data = await resorces.json();
//         let actual_data = data.items;
//         appendVideos(actual_data);
//         // console.log(actual_data);
//     } catch (err) {
//         console.log("err:", err);
//     }
// }


// const view = async () => {
//     try {
//         let resorces = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=viewCount&key=${ApiKey}`);
//         let data = await resorces.json();
//         let actual_data = data.items;
//         appendVideos(actual_data);
//         //console.log(actual_data);
//     } catch (err) {
//         console.log("err:", err);
//     }
// }



// const popularity = async () => {
//     try {
//         let resorces = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=rating&key=${ApiKey}`);
//         let data = await resorces.json();
//         let actual_data = data.items;
//         appendVideos(actual_data);
//         //console.log(actual_data);
//     } catch (err) {
//         console.log("err:", err);
//     }
// }

//Optimisation of Code, instand of writing the above 3 functions we can write the one below function
const fun = async (title) => {
    try {
        carousel.style.display="none"
        bnts.style.marginTop = "100px"
        bnts.style.top = "80px"
        carousel.innerHTML = null;
        let resorces = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=${title}&key=${ApiKey}`);
        let data = await resorces.json();
        let actual_data = data.items;
        appendVideos(actual_data);
        // console.log(actual_data);
    } catch (err) {
        console.log("err:", err);
    }
}

//we can also search by button through below function
async function search_by_btn(){
    carousel.style.display="none"
    bnts.style.marginTop = "100px"
    bnts.style.top = "80px"
    try {
        let search_item = document.getElementById("search_item").value;
        let resorces = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search_item}&maxResults=50&key=${ApiKey}`);
        let data = await resorces.json();
        let actual_data = data.items;
        appendVideos(actual_data);
        console.log(actual_data);
    } catch (err) {
        console.log("err:", err);
    }
}

document.getElementById("Alphabet").addEventListener("click",()=>{fun("title")})

document.getElementById("views").addEventListener("click",()=>{fun("viewCount")})

document.getElementById("Popularity").addEventListener("click", ()=>{fun("rating")});

document.getElementById("search_btn").addEventListener("click",search_by_btn);


