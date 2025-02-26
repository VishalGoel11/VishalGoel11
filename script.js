const menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", () => {
  document.querySelector(".mobile").classList.toggle("hidden");
});

let words = ["Hi I'm Vishal Goel", "Software Engineer"],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;

let wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".word").text(part);
  }, speed);
};

$(document).ready(function () {
  wordflick();
});

gsap.from('.word', {
  duration: 3, 
  opacity:0,
  scale:1.5,
  delay:1
});

gsap.from('#btn_resume',{
  x:'-80vw',
  duration:1,
  delay:'1',
  ease: "bounce.out",
})

gsap.to('#nav_img',{
  rotate: 360,
  duration:1,
  delay: 1,
  boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5)"
})

gsap.from('.name',{
  y:'-10vw',
  duration:2,
  delay:0.5,
  ease: "bounce.out",
})

gsap.from('nav',{
  y:'-10vw',
  duration:2,
  delay:0.5,
  ease: "bounce.out",
})

gsap.from('.icons',{
  y:'-50vh',
  duration:2,
  ease: 'bounce.out',
  delay:0.5
})