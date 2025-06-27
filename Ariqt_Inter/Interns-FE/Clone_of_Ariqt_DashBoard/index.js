let flag = true
let btn = document.getElementById("title_btn");
btn.addEventListener("click", () => {
  if (flag === true) {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
       <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
     </svg>`
    flag = false;
    document.getElementById("cont").style.width = "89.8%"
  } else {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
  </svg>`
    flag = true
    document.getElementById("cont").style.width = "97vw"
  }
})

document.getElementById("offer").addEventListener("click", offerfun);
document.getElementById("services").addEventListener("click", servicesfun);
document.getElementById("happy").addEventListener("click", happyfun);
document.getElementById("clients").addEventListener("click", clientsfun);
document.getElementById("core").addEventListener("click", corefun);
document.getElementById("about").addEventListener("click", aboutfun);



document.getElementById("dotnet").addEventListener('click', () => {
  fun("dotnet");
  //document.querySelector("#dotnet img").style.width = "920px"
});
document.getElementById("angular").addEventListener('click', () => {
  fun("angular");
});
document.getElementById("fullstack").addEventListener('click', () => {
  fun("fullstack");
})
document.getElementById("python").addEventListener('click', () => {
  fun("python");
})
document.getElementById("ruby").addEventListener('click', () => {
  fun("ruby");
})
document.getElementById("tester").addEventListener('click', () => {
  fun("tester");
})
document.getElementById("vue").addEventListener('click', () => {
  fun("vue");
})
document.getElementById("scrum").addEventListener('click', () => {
  fun("scrum");
})

let chart = document.getElementById("chart");
let pie = document.getElementById("pie");
function fun(title) {
  chart.src = "none";
  pie.src = "none";
  if (title == "dotnet") {
    chart.src = "./images/dotnetgraph.png"
    pie.src = "./images/dotnetpie.png"
  } else if (title == "angular") {
    chart.src = "./images/angularchart.png"
    pie.src = "./images/angularpie.png"
  } else if (title == "fullstack") {
    chart.src = "./images/fschart.png"
    pie.src = "./images/fspie.png"
  } else if (title == "python") {
    chart.src = "./images/pythonchart.png"
    pie.src = "./images/pythonpie.png"
  } else if (title == "ruby") {
    chart.src = "./images/ruby.png"
    pie.src = "./images/rubypie.png"
  } else if (title == "tester") {
    chart.src = "./images/tester.png"
    pie.src = "./images/testerpie.png"
  } else if (title == "vue") {
    chart.src = "./images/vue.png"
    pie.src = "./images/vuepie.png"
  } else if (title == "scrum") {
    chart.src = "./images/scrum.png"
    pie.src = "./images/scrumpie.png"
  }
}

//let dev_arr = [{ img: "https://www.ariqt.com/assets/img/Career/developer.jpg", name: "DotNET Developer" }, { img: "https://www.ariqt.com/assets/img/Career/developer.jpg", name: "DotNET Developer" }, { img: "https://www.ariqt.com/assets/img/Career/developer.jpg", name: "DotNET Developer" }, { img: "https://www.ariqt.com/assets/img/Career/developer.jpg", name: "DotNET Developer" }, { img: "https://www.ariqt.com/assets/img/Career/developer.jpg", name: "DotNET Developer" }, { img: "https://www.ariqt.com/assets/img/Career/developer.jpg", name: "DotNET Developer" }, { img: "https://www.ariqt.com/assets/img/Career/developer.jpg", name: "DotNET Developer" }, { img: "https://www.ariqt.com/assets/img/Career/developer.jpg", name: "DotNET Developer" }];


let Dev_arr = [];

function Constructor(img,name){
   this.img = img,
   this.name = name
}

let dev1 = new Constructor("https://www.ariqt.com/assets/img/Career/developer.jpg","DotNET Developer");
let dev2 = new Constructor("https://www.ariqt.com/assets/img/Career/webdeveloper.png","Angular Developer");
let dev3 = new Constructor("https://www.ariqt.com/assets/img/Career/full%20stack.png","Full Stack Developer");
let dev4 = new Constructor("https://www.ariqt.com/assets/img/Career/python.jpg","Python Developer");
let dev5 = new Constructor("https://www.ariqt.com/assets/img/Career/ruby.png","Ruby On Rails");
let dev6 = new Constructor("https://www.ariqt.com/assets/img/Career/tester.png","Automation Tester");
let dev7 = new Constructor("https://www.ariqt.com/assets/img/Career/vuejs.png","VueJS Developer");
let dev8 = new Constructor("https://www.ariqt.com/assets/img/Career/scrum.jpg","Scrum Master");


Dev_arr.push(dev1,dev2,dev3,dev4,dev5,dev6,dev7,dev8);
console.log(Dev_arr);

let Dev_cont = document.getElementById("dev");
Dev_arr.map((el)=>{
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = el.img
  let name = document.createElement("h5");
  name.innerText = el.name;
  div.append(img,name);
  Dev_cont.append(div);
});


document.getElementById("offer").addEventListener("click", offerfun);
document.getElementById("services").addEventListener("click", servicesfun);
document.getElementById("happy").addEventListener("click", happyfun);
document.getElementById("clients").addEventListener("click", clientsfun);
document.getElementById("core").addEventListener("click", corefun);
document.getElementById("about").addEventListener("click", aboutfun);


let title = document.getElementById("title_modal");
let modal_body = document.getElementById("modal-body");
function offerfun(){
  modal_body.innerHTML =null;
title.innerText = "We Offer";
let h = document.createElement("h1");
h.innerText = "We Offer The Core Value's";
h.setAttribute("class","aqua writting");

let div = document.createElement("div");
 let div1 = document.createElement("div");
 let img1 = document.createElement("img");
 img1.src = "https://www.ariqt.com/assets/img/values-1.png";
 let h1 = document.createElement("h4");
 h1.innerText = "Skilled/Certified Resources"
 let p1 = document.createElement("p");
 p1.innerText = "Dedicated skilled and certified resources for each project";
 div1.append(img1,h1,p1);

 let div2 = document.createElement("div");
 let img2 = document.createElement("img");
 img2.src = "https://www.ariqt.com/assets/img/values-2.png";
 let h2 = document.createElement("h4");
 h2.innerText = "Faster product development";
 let p2 = document.createElement("p");
 p2.innerText = "Shorter release cycle";
 div2.append(img2,h2,p2);

 let div3 = document.createElement("div");
 let img3 = document.createElement("img");
 img3.src = "https://www.ariqt.com/assets/img/values-3.png";
 let h3 = document.createElement("h4");
 h3.innerText = "Reducing developement cost";
 let p3 = document.createElement("p");
 p3.innerText = "High-Quality improvements at reduced development cost";
 div3.append(img3,h3,p3);

 div.append(div1, div2, div3);
 div.setAttribute("class","we_offer");
 modal_body.append(h,div);

}

function servicesfun(){
  modal_body.innerHTML = null;
  title.innerText = "Services";

  let h = document.createElement("h1");
  h.innerText = "We Provide a Wide Range of Services";
  h.setAttribute("class","aqua writting");

  let div = document.createElement("div");
  let div1 = document.createElement("div");
  let img1 = document.createElement("img");
  img1.src = "https://img.icons8.com/color/96/000000/artificial-intelligence.png";
  img1.setAttribute("class", "top-0 start-50 translate-middle");
  let h1 = document.createElement("h4");
  h1.innerText = "Artificial Intelligence"
  let p1 = document.createElement("p");
  p1.innerText = "Eighty-four percent of executives say they won’t achieve their growth objectives without scaling AI. But when you scale AI, completely new outcomes are possible. How do you do it? We work with you to scale AI throughout..."
  let footer1 = document.createElement("div");
  let fp1 = document.createElement("p");
  fp1.innerText = "Read More"
  let svg1 = document.createElement("div");
  svg1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>`
  footer1.append(fp1,svg1)
  div1.append(img1,h1,p1,footer1)

  let div2 = document.createElement("div");
  let img2 = document.createElement("img");
  img2.src = "https://img.icons8.com/color/96/000000/cloud-messaging.png";
  img2.setAttribute("class", "top-0 start-50 translate-middle");
  let h2 = document.createElement("h4");
  h2.innerText = "Cloud Native"
  let p2 = document.createElement("p");
  p2.innerText = "Cloud-native development makes full use of the cloud environment by leveraging cloud services and functions within the app’s architecture, and unifying development, testing and deployment environments, allowing for CI/CD pipelines."
  let footer2 = document.createElement("div");
  let fp2 = document.createElement("p");
  fp2.innerText = "Read More"
  let svg2 = document.createElement("div");
  svg2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>`
  footer2.append(fp2,svg2)
  div2.append(img2,h2,p2,footer2)


  let div3 = document.createElement("div");
  let img3 = document.createElement("img");
  img3.src = "https://img.icons8.com/color/96/000000/google-code.png";
  img3.setAttribute("class", "top-0 start-50 translate-middle");
  let h3 = document.createElement("h4");
  h3.innerText = "App Development"
  let p3 = document.createElement("p");
  p3.innerText = "Our innovation-led approach to application services helps you to reinvent you enterprise application portfolio, making use of emerging technology and building with speed and agility to enable you to meet business needs,"
  let footer3 = document.createElement("div");
  let fp3 = document.createElement("p");
  fp3.innerText = "Read More"
  let svg3 = document.createElement("div");
  svg3.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>`
  footer3.append(fp3,svg3)
  div3.append(img3,h3,p3,footer3)

  let div4 = document.createElement("div");
  let img4 = document.createElement("img");
  img4.src = "https://img.icons8.com/fluent-systems-filled/96/fa314a/bot.png";
  img4.setAttribute("class", "top-0 start-50 translate-middle");
  let h4 = document.createElement("h4");
  h4.innerText = "Chat Bots"
  let p4 = document.createElement("p");
  p4.innerText = "Increase your business with conversational AI. We provide AI-powered Chatbots & voice bots to increase sales, provide uninterrupted support, and improve organizational efficiency, which make our moto fulfil “You Grow, We Grow”."
  let footer4 = document.createElement("div");
  let fp4 = document.createElement("p");
  fp4.innerText = "Read More"
  let svg4 = document.createElement("div");
  svg4.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>`
  footer4.append(fp4,svg4)
  div4.append(img4,h4,p4,footer4)

  let div5 = document.createElement("div");
  let img5 = document.createElement("img");
  img5.src = "https://img.icons8.com/nolan/96/cyber-security.png";
  img5.setAttribute("class", "top-0 start-50 translate-middle");
  let h5 = document.createElement("h4");
  h5.innerText = "IT Security"
  let p5 = document.createElement("p");
  p5.innerText = "As your business ecosystem & value chain expand, we work to increase your resilience against cyber threats. We create cybersecurity tailored to your specific business needs which give you confidence."
  let footer5 = document.createElement("div");
  let fp5 = document.createElement("p");
  fp5.innerText = "Read More"
  let svg5 = document.createElement("div");
  svg5.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>`
  footer5.append(fp5,svg5)
  div5.append(img5,h5,p5,footer5)

  let div6 = document.createElement("div");
  let img6 = document.createElement("img");
  img6.src = "https://img.icons8.com/material-sharp/96/fa314a/ios-development.png";
  img6.setAttribute("class", "top-0 start-50 translate-middle");
  let h6 = document.createElement("h4");
  h6.innerText = "Mobile Applications"
  let p6 = document.createElement("p");
  p6.innerText = "In today’s world, popularity of mobile devices are at prime & mobile applications are becoming essential for every business today. We develop a high quality Android and IOS mobile apps which help you take your business to next level."
  let footer6 = document.createElement("div");
  let fp6 = document.createElement("p");
  fp6.innerText = "Read More"
  let svg6 = document.createElement("div");
  svg6.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>`
  footer6.append(fp6,svg6);
  div6.append(img6,h6,p6,footer6);
  div.append(div1,div2, div3, div4, div5, div6)
  modal_body.append(h,div);
  div.setAttribute("class","services")
}


function happyfun(){
  modal_body.innerHTML = null;
  title.innerText = "Happy Clients"
  let h = document.createElement("h1");
  h.innerText = "Satisfied With Our Services";
  h.setAttribute("class","aqua writting position-fixed m-auto");

  let div = document.createElement("div");
  div.setAttribute("class","happy");
  let img1 = document.createElement("img");
  img1.src = "https://www.ariqt.com/assets/img/clients/scaleapp.png"
  let img2 = document.createElement("img");
  img2.src = "https://www.ariqt.com/assets/img/clients/dehypotheker.png"
  let img3 = document.createElement("img");
  img3.src = "https://www.ariqt.com/assets/img/clients/snelstart.png"
  let img4 = document.createElement("img");
  img4.src = "https://www.ariqt.com/assets/img/clients/fujitsu.png"
  let img5 = document.createElement("img");
  img5.src = "https://www.ariqt.com/assets/img/clients/mobgen.png"
  let img6 = document.createElement("img");
  img6.src = "https://www.ariqt.com/assets/img/clients/scarabee.png"
  let img7 = document.createElement("img");
  img7.src = "https://www.ariqt.com/assets/img/clients/beyond-sports.png"
 div.append(img2,img3,img4,img1,img5,img6,img7)

modal_body.append(h,div);
}


function clientsfun(){
  modal_body.innerHTML = null;
  title.innerText = "Clients Review"
  let h = document.createElement("h1");
  h.innerText = "Thought Of Our Client's"
  h.setAttribute("class","aqua writting");
  let div = document.createElement("div");
  div.setAttribute("class","review");

  let div1 = document.createElement("div");
  let star_img1 = document.createElement("img");
  star_img1.src = "./images/stars.png"
  let p1 = document.createElement("p");
  p1.innerText = "It was greate experience to work with ARIQT. They have delivered more than the expectations, their approach is professional, focused and friendly as well. Working with Ariqt has proved to be very good decision. They genuinely embody the company's spirit and core values in everything they do.";
  let img1 = document.createElement("img");
  img1.src = "https://www.ariqt.com/assets/img/testimonials/testimonials-2.jpg";
  let name1 = document.createElement("h6");
  name1.innerText = "Herman Weessies";
  let position1 = document.createElement("p");
  position1.innerText = "CEO Snelstart";
  div1.append(star_img1,p1,img1,name1,position1);

let div2 = document.createElement("div");
  let star_img2 = document.createElement("img");
  star_img2.src = "./images/stars.png"
  let p2 = document.createElement("p");
  p2.innerText = "It was greate experience to work with ARIQT. They have delivered more than the expectations, their approach is professional, focused and friendly as well. Working with Ariqt has proved to be very good decision. They genuinely embody the company's spirit and core values in everything they do.";
  let img2 = document.createElement("img");
  img2.src = "https://www.ariqt.com/assets/img/testimonials/testimonials-1.png";
  let name2 = document.createElement("h6");
  name2.innerText = "Ron Vrijmoet";
  let position2 = document.createElement("p");
  position2.innerText = "Managing Partner (CEO)";
  div2.append(star_img2,p2,img2,name2,position2);

  let div3 = document.createElement("div");
  let star_img3 = document.createElement("img");
  star_img3.src = "./images/stars.png"
  let p3 = document.createElement("p");
  p3.innerText = "It was greate experience to work with ARIQT. They have delivered more than the expectations, their approach is professional, focused and friendly as well. Working with Ariqt has proved to be very good decision. They genuinely embody the company's spirit and core values in everything they do.";
  let img3 = document.createElement("img");
  img3.src = "https://www.ariqt.com/assets/img/testimonials/testimonials-3.png";
  let name3 = document.createElement("h6");
  name3.innerText = "Frits Ploeg";
  let position3 = document.createElement("p");
  position3.innerText = "Enterprise Architech";
  div3.append(star_img3,p3,img3,name3,position3);

  let div4 = document.createElement("div");
  let star_img4 = document.createElement("img");
  star_img4.src = "./images/stars.png"
  let p4 = document.createElement("p");
  p4.innerText = "It was greate experience to work with ARIQT. They have delivered more than the expectations, their approach is professional, focused and friendly as well. Working with Ariqt has proved to be very good decision. They genuinely embody the company's spirit and core values in everything they do.";
  let img4 = document.createElement("img");
  img4.src = "https://www.ariqt.com/assets/img/beyonsports/ceo.jpg";
  let name4 = document.createElement("h6");
  name4.innerText = "Sander Schouten";
  let position4 = document.createElement("p");
  position4.innerText = "CEO BehondSports";
  div4.append(star_img4,p4,img4,name4,position4);

  let div5 = document.createElement("div");
  let star_img5 = document.createElement("img");
  star_img5.src = "./images/stars.png"
  let p5 = document.createElement("p");
  p5.innerText = "It was greate experience to work with ARIQT. They have delivered more than the expectations, their approach is professional, focused and friendly as well. Working with Ariqt has proved to be very good decision. They genuinely embody the company's spirit and core values in everything they do.";
  let img5 = document.createElement("img");
  img5.src = "https://www.ariqt.com/assets/img/beyonsports/cto.jpg";
  let name5 = document.createElement("h6");
  name5.innerText = "Nicolas Weesterhof";
  let position5 = document.createElement("p");
  position5.innerText = "CTO BehondSports";
  div5.append(star_img5,p5,img5,name5,position5);

  let div6 = document.createElement("div");
  let star_img6 = document.createElement("img");
  star_img6.src = "./images/stars.png"
  let p6 = document.createElement("p");
  p6.innerText = "It was greate experience to work with ARIQT. They have delivered more than the expectations, their approach is professional, focused and friendly as well. Working with Ariqt has proved to be very good decision. They genuinely embody the company's spirit and core values in everything they do.";
  let img6= document.createElement("img");
  img6.src = "https://www.ariqt.com/assets/img/testimonials/Daniel.png";
  let name6 = document.createElement("h6");
  name6.innerText = "Daniel Isenberg, Ph.D";
  let position6 = document.createElement("p");
  position6.innerText = "CEO Enterpreneurship Policy Advicors Inc(Scale App)";
  div6.append(star_img6,p6,img6,name6,position6);
 div.append(div1,div2,div3,div4,div5, div6)
  modal_body.append(h,div)
}


function corefun(){
  modal_body.innerHTML = null;
  title.innerText = "Core Peoples"
  let h = document.createElement("h1");
  h.innerText = "Our Core Person's"
  h.setAttribute("class","aqua writting");

  let div = document.createElement("div");
  div.setAttribute("class","core")

  let div1 = document.createElement("div");
  let img1 = document.createElement("img");
  img1.src = "https://www.ariqt.com/assets/img/team/Rupesh%20kumar.jpg";
  let name1 = document.createElement("h4");
  name1.innerText = "Rupesh Kumar";
  let p1 = document.createElement("p");
  p1.innerText = "CEO - FOUNDER";
  div1.append(img1,name1,p1);

  let div2 = document.createElement("div");
  let img2 = document.createElement("img");
  img2.src = "https://www.ariqt.com/assets/img/team/ss.jpeg";
  let name2 = document.createElement("h4");
  name2.innerText = "Anil Panday";
  let p2 = document.createElement("p");
  p2.innerText = "DIRECTOR";
  div2.append(img2,name2,p2);

  let div3 = document.createElement("div");
  let img3 = document.createElement("img");
  img3.src = "https://www.ariqt.com/assets/img/team/poorna.jpg";
  let name3 = document.createElement("h4");
  name3.innerText = "Poorna Pillarisetty";
  let p3 = document.createElement("p");
  p3.innerText = "HEAD OF INNOVATION";
  div3.append(img3,name3,p3);

  div.append(div1, div2, div3);
  modal_body.append(h,div);

}


function aboutfun(){
  modal_body.innerHTML = null;
  title.innerText = "About Us";

  let h = document.createElement("h1");
  h.innerText = "Know About Us";
  h.setAttribute("class","aqua writting");

  let div = document.createElement("div");
  div.setAttribute("class","about")

  let div1 = document.createElement("div");
  let div11 = document.createElement("div");
  let svg1 = document.createElement("div");
  svg1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-rocket-takeoff-fill" viewBox="0 0 16 16">
  <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.578 3.578 0 0 0-.108-.563 2.22 2.22 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2.35 2.35 0 0 0-.16-.045 3.797 3.797 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.552 2.552 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526l.24-2.408Zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361.599.599.437 1.732-.36 2.531Z"/>
  <path d="M5.205 10.787a7.632 7.632 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925Z"/>
</svg>`
  let h1 = document.createElement("h2");
  h1.innerText = "Our Mission"
  let p1 = document.createElement("p");
  p1.innerText = "Ariqt solution is a next generation IT services company with a mission to help its clients implement complex technologies with ease to remain competitive. We started our humble journey from our Hyderabad headquarter in year 2020 with a vision to become the most competitive, innovative, and simplistic company in cloud computing /cloud technology space. We help companies like yours to grow their software... teams with top 1% talent. We majorly use Microsoft technologies to develop cutting edge solutions in the areas of Artificial Intelligence, Cloud native, App development, Bots, Mobile apps and alike.";
  div11.append(svg1,h1,p1);
  let img1 = document.createElement("img");
  img1.src = "https://bootstrapious.com/i/snippets/sn-about/illus.png";
  div1.append(div11,img1);

  let div2 = document.createElement("div");
  let div21 = document.createElement("div");
  let svg2 = document.createElement("div");
  svg2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bar-chart-line-fill" viewBox="0 0 16 16">
  <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z"/>
</svg>`
  let h2 = document.createElement("h2");
  h2.innerText = "Our Achievements"
  let p2 = document.createElement("p");
  p2.innerText = "Our quality focused approach has won many accolades from our esteemed customers which is evident in our phenomenal growth in clients business share. We were able to grow from a 4-member engineering team to 60 members engineering team within a year. This rollercoaster journey also propelled our cumulative Industry maturity many folds . We won a substantial number of new clients while retaining the existing clients.";
  div21.append(svg2,h2,p2);
  let img2 = document.createElement("img");
  img2.src = "https://bootstrapious.com/i/snippets/sn-about/img-1.jpg";
  div2.append(img2,div21);

  let div3 = document.createElement("div");
  let div31 = document.createElement("div");
  let svg3 = document.createElement("div");
  svg3.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-flower2" viewBox="0 0 16 16">
  <path d="M8 16a4 4 0 0 0 4-4 4 4 0 0 0 0-8 4 4 0 0 0-8 0 4 4 0 1 0 0 8 4 4 0 0 0 4 4zm3-12c0 .073-.01.155-.03.247-.544.241-1.091.638-1.598 1.084A2.987 2.987 0 0 0 8 5c-.494 0-.96.12-1.372.331-.507-.446-1.054-.843-1.597-1.084A1.117 1.117 0 0 1 5 4a3 3 0 0 1 6 0zm-.812 6.052A2.99 2.99 0 0 0 11 8a2.99 2.99 0 0 0-.812-2.052c.215-.18.432-.346.647-.487C11.34 5.131 11.732 5 12 5a3 3 0 1 1 0 6c-.268 0-.66-.13-1.165-.461a6.833 6.833 0 0 1-.647-.487zm-3.56.617a3.001 3.001 0 0 0 2.744 0c.507.446 1.054.842 1.598 1.084.02.091.03.174.03.247a3 3 0 1 1-6 0c0-.073.01-.155.03-.247.544-.242 1.091-.638 1.598-1.084zm-.816-4.721A2.99 2.99 0 0 0 5 8c0 .794.308 1.516.812 2.052a6.83 6.83 0 0 1-.647.487C4.66 10.869 4.268 11 4 11a3 3 0 0 1 0-6c.268 0 .66.13 1.165.461.215.141.432.306.647.487zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
</svg>`
  let h3 = document.createElement("h2");
  h3.innerText = "Our Culture"
  let p3 = document.createElement("p");
  p3.innerText = "Ariqt cannot complete its introduction without talking about the culture. We take immense pleasure in saying that we are `Developer first company` which guides our corporate culture. We firmly believe a happy developer can build the smartest solution in the most effective and creative ways. With this approach the happy development team is empowered to develop usable and working software for everyday complex business solutions.";
  div31.append(svg3,h3,p3);
  let img3 = document.createElement("img");
  img3.src = "https://bootstrapious.com/i/snippets/sn-about/img-2.jpg";
  div3.append(div31,img3);

  div.append(div1,div2,div3);
  modal_body.append(h,div);
}

