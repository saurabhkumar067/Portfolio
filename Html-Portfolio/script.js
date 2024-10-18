window.addEventListener("DOMContentLoaded", () => {
  let humClos = document.querySelector(".part1 nav .humBurgur");
  let close = document.querySelector(".part1 nav .close");
  let navButton = document.querySelector(".part1 nav .nav-button");
  let play = true;

  humClos.addEventListener("click", (ev) => {
    if (play) {
      humClos.style.display = "none";
      navButton.style.transform = `${"translateX(0%)"}`;
      navButton.style.display = "flex";
      close.style.display = "block";
      play = false;
    }
  });

  close.addEventListener("click", () => {
    if (!play) {
      humClos.style.display = "block";
      navButton.style.transform = `${"translateX(100%)"}`;
      navButton.style.display = "none";
      close.style.display = "none";
      play = true;
    }
  });

  let body = document.querySelector("body");
  let cursor = document.querySelector("#cursor");
  let image = document.querySelectorAll("img");

  body.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.x,
      y: e.y,
      duration: 0.5,
      // ease:"bounce.out",
      ease: "back.out",
    });
  });

  image.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 2,
      });
    });
  });

  image.forEach((e) => {
    e.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 1,
      });
    });
  });

  let dots = document.querySelector(".dots");
  let more = document.querySelector(".more");
  function readMore() {
    // console.log(dots);
    dots.addEventListener("click", (e) => {
      // console.log('clicked');
      dots.classList.toggle("display");
      more.classList.toggle("display");
    });
    more.addEventListener("click", (e) => {
      dots.classList.toggle("display");
      more.classList.toggle("display");
    });
  }
  if (document.body.clientWidth <= 425) {
    readMore();
  } else {
    dots.classList.add("display");
    more.classList.remove("display");
  }
});
