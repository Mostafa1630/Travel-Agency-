let menuBtn = document.getElementById("menu-btn");
let navbar = document.querySelector("header .navbar");

menuBtn.onclick = () => {
  navbar.classList.toggle("active");
}

window.onscroll = () =>{
  navbar.classList.add('active');
}



let video = document.querySelector(".video-container .video");
let spans = document.querySelectorAll(".controls .control-btn");

spans.forEach((ele) => {
  ele.onclick = () => {
    let source = ele.getAttribute('data-src')
    video.setAttribute("src",source);
    // console.log(source);
  }
});

