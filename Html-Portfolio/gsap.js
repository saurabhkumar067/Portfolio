let tl = gsap.timeline();
function firstPart() {
  tl.from("nav", {
    y: -100,
    duration: 0.3,
    opacity: 0,
  });
  tl.from("nav .logo img", {
    y: -50,
    duration: 0.2,
    opacity: 0,
    stagger: 1,
  });
  tl.from("nav .nav-button h4", {
    // y: -30,
    duration: 0.2,
    opacity: 0,
    stagger: 0.5,
    scale: 0.1,
  });

  tl.from(".part1 .left .hartLine", {
    y: -10,
    opacity: 0,
    duration: 0.2,
  });
  tl.from(".part1 .left .burgur", {
    opacity: 0,
  });
  tl.from(".part1 .left .shadow", {
    x: -100,
    opacity: 0,
  });

  tl.from(".part1 main .left h3", {
    opacity: 0,
  });
  tl.from(".part1 main .left h1", {
    x: -100,
    opacity: 0,
    duration: 0.5,
  });
  tl.from(".part1 main .left .front", {
    y: -40,
    opacity: 0,
  });
  tl.from(".part1 main .left .hire", {
    x: -100,
    opacity: 0,
  });
  tl.from(".part1 main .left .get", {
    x: -40,
    opacity: 0,
  });

  tl.from(
    ".part1 main .right .main-image",
    {
      opacity: 0,
    },
    "=-2"
  );

  tl.from(
    ".part1 main .right .mickey",
    {
      x: 70,
      opacity: 0,
    },
    "=-3"
  );

  tl.from(
    ".part1 main .right .icons_link span",
    {
      y: -110,
      opacity: 0,
    },
    "=-2"
  );
  tl.from(".part1 main .right .icons_link a img", {
    y: -30,
    duration: 0.3,
    stagger: 0.5,
    scale: 0.1,
  });
}
function secondPart() {
  gsap.from(".part2 .about h1", {
    opacity: 0,
    y: -60,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".part2 .about h1",
      scroller: "body",

      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });
  gsap.from(".part2 .about .shadow2", {
    opacity: 0,
    y: -80,
    duration: 0.7,
    scrollTrigger: {
      trigger: ".part2 .about .shadow2",
      scroller: "body",

      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });

  gsap.from(".part2 .about h3", {
    x: -70,
    opacity: 0,
    scrollTrigger: {
      trigger: ".part2 .about h3",
      scroller: "body",

      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });
  gsap.from(".part2 .about .para, .part2 .about .paraLine", {
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".part2 .about .para",
      scroller: "body",

      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });
}
function thirdPart() {
  gsap.from(".part3 h1", {
    opacity: 0,
    scale: 0.1,
    scrollTrigger: {
      trigger: ".part2 .about .paraLine",
      scroller: "body",
      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });

  gsap.from(".part3 #space", {
    y: 500,
    opacity: 0,
    scrollTrigger: {
      trigger: ".part3 h1",
      scroller: "body",

      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });
  gsap.from(".part3 #book", {
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".part3 #book",
      scroller: "body",

      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });

  tl.from(".part3 .boxes .box", {
    stagger: 1,
    opacity: 0,
    x: -30,
    duration: 1,
    scrollTrigger: {
      trigger: ".part3 .boxes .box",
      scroller: "body",

      start: "top 70%",
      end: "top 80%",
      scrub: 2,
    },
  });

  gsap.from(".part3 #tea", {
    x: -70,
    opacity: 0,
    scrollTrigger: {
      trigger: ".part3 #book",
      scroller: "body",

      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });
}
function fourPart() {
  tl.from(".part4 h1", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".part4 span",
      scroller: "body",
      start: "top 100%",
      end: "top 70%",
      scrub: 2,
    },
  });

  tl.from(".part4 .work-content .parent .work-img-left img", {
    opacity: 0,
    x: -400,
    scrollTrigger: {
      trigger: ".part4 .work-content .parent .work-img-left img",
      scroller: "body",
      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });

  tl.from(
    ".part4 .work-content .parent .work-img-left .work-line-left, .part4 .work-content .parent .work-img-left .work-circle-left",
    {
      opacity: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".part4 .work-content .parent .work-img-left img",
        scroller: "body",
        start: "top 80%",
        end: "top 40%",
        scrub: 2,
      },
    }
  );

  gsap.from(
    ".part4 .work-content .parent .work-img-text h2, .part4 .work-content .parent .work-img-text h3",
    {
      opacity: 0,
      y: -30,
      scrollTrigger: {
        trigger: ".part4 .work-content .parent .work-img-left img",
        scroller: "body",
        start: "top 80%",
        end: "top 40%",
        scrub: 2,
      },
    }
  );

  gsap.from(".part4 .work-content .parent .work-img-text p", {
    opacity: 0,
    x: 500,
    duration: 1,
    scrollTrigger: {
      trigger: ".part4 .work-content .parent .work-img-left img",
      scroller: "body",
      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });

  gsap.from(".part4 .work-content .parent .work-img-text ul li", {
    x: -100,
    duration: 0.2,
    opacity: 0,
    stagger: 0.5,
    scale: 0.1,
    scrollTrigger: {
      trigger: ".part4 .work-content .parent .work-img-left img",
      scroller: "body",
      start: "top 80%",
      end: "top 40%",
    },
  });
}
function sixPart() {
  tl.from(".part6 h1", {
    opacity: 0,
    y: 50,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".part6 span",
      scroller: "body",
      start: "top 100%",
      end: "top 100%",
      scrub: 2,
    },
  });

  gsap.from(".part6 .flexs .part6-left img", {
    opacity: -1,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".part6 .flexs .part6-left",
      scroller: "body",
      start: "top 100%",
      end: "top 100%",
      scrub: 2,
    },
  });

  gsap.from(
    ".part6 .flexs .part6-right form input, .part6 .flexs .part6-right form textarea",
    {
      opacity: 0,
      // y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ".part6 .flexs .part6-left",
        scroller: "body",
        start: "top 80%",
        end: "top 40%",
        scrub: 2,
      },
    }
  );
  gsap.from(".part6 .flex .part6-right form button, footer", {
    opacity: -1,
    duration: 1,
    scrollTrigger: {
      trigger: ".part6 span",
      scroller: "body",
      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });
}

if (document.body.clientWidth > 768) {
  firstPart();
  secondPart();
  thirdPart();
  fourPart();
  sixPart();
}

let phoneTL = gsap.timeline();
function phoneAnimation1() {
  phoneTL.from("nav", {
    y: -100,
    duration: 1.1,
    opacity: 0,
  });
  phoneTL.from("nav .logo img", {
    // y: -50,
    duration: 1.5,
    opacity: 0,
    // stagger: 1,
  });

  gsap.from(".part1 .left .shadow", {
    x: -500,
    opacity: 0,
    duration: 1.5,
  });
  gsap.from(".part1 main .left h3", {
    opacity: 0,
    duration: 5,
  });
  phoneTL.from(
    ".part1 main .left h1",
    {
      x: -100,
      opacity: 0,
      duration: 0.5,
    },
    "1"
  );
  phoneTL.from(
    ".part1 main .left .front",
    {
      y: -40,
      opacity: 0,
    },
    "1.5"
  );
  phoneTL.from(
    ".part1 main .left .hire",
    {
      x: -100,
      opacity: 0,
    },
    "1.8"
  );
  phoneTL.from(".part1 main .left .get", {
    x: -40,
    opacity: 0,
  });
  phoneTL.from(
    ".part1 main .right .main-image",
    {
      opacity: 0,
      duration: 1,
    },
    "=-2"
  );
  phoneTL.from(
    ".part1 main .right .mickey",
    {
      x: 70,
      opacity: 0,
    },
    "=-3"
  );
  phoneTL.from(
    ".part1 main .right .icons_link span",
    {
      y: -110,
      opacity: 0,
    },
    "=-2"
  );
  phoneTL.from(".part1 main .right .icons_link a img", {
    y: -30,
    duration: 0.2,
    stagger: 0.5,
    scale: 0.1,
  });
}
function phoneAnimation2() {
  gsap.from(".part2 .about h1", {
    opacity: 0,
    y: -60,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".part2 .about h1",
      scroller: "body",
      start: "top 90%",
      end: "top 80%",
      scrub: 2,
    },
  });
  gsap.from(".part2 .about h3", {
    x: -70,
    opacity: 0,
    scrollTrigger: {
      trigger: ".part2 .about h3",
      scroller: "body",
      start: "top 100%",
      end: "top 80%",
      scrub: 2,
    },
  });
  gsap.from(".part2 .about .para, .part2 .about .paraLine", {
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".part2 .about .para",
      scroller: "body",
      start: "top 90%",
      end: "top 80%",
      scrub: 2,
    },
  });
}
function phoneAnimation3() {
  gsap.from(".part3 h1", {
    opacity: 0,
    scale: 0.1,
    scrollTrigger: {
      trigger: ".part2 .about .paraLine",
      scroller: "body",
      start: "top 90%",
      end: "top 60%",
      scrub: 2,
    },
  });
  gsap.from(".part3 #space", {
    y: 500,
    opacity: 0,
    scrollTrigger: {
      trigger: ".part3 h1",
      scroller: "body",
      start: "top 90%",
      end: "top 70%",
      scrub: 2,
    },
  });
  tl.from(".part3 .boxes .box", {
    stagger: 1,
    opacity: 0,
    x: -30,
    duration: 1,
    scrollTrigger: {
      trigger: ".part3 .boxes .box",
      scroller: "body",
      start: "top 100%",
      end: "top 80%",
      scrub: 2,
    },
  });
  gsap.from(".part3 #tea", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".part3 #book",
      scroller: "body",
      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });
}
function phoneAnimation4() {
  phoneTL.from(".part4 h1", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".part4 span",
      scroller: "body",
      start: "top 100%",
      end: "top 90%",
      scrub: 2,
    },
  });
  phoneTL.from(".part4 .work-content .parent .work-img-left img", {
    opacity: 0,
    x: -400,
    scrollTrigger: {
      trigger: ".part4 .work-content .parent .work-img-left img",
      scroller: "body",
      start: "top 100%",
      end: "top 80%",
      scrub: 2,
    },
  });
   phoneTL.from(
    ".part4 .work-content .parent .work-img-text h2, .part4 .work-content .parent .work-img-text h3",
    {
      opacity: 0,
      y: -30,
      scrollTrigger: {
        trigger: ".part4 .work-content .parent .work-img-left img",
        scroller: "body",
        start: "top 80%",
        end: "top 40%",
        scrub: 2,
      },
    }
  );
  phoneTL.from(".part4 .work-content .parent .work-img-text p", {
    opacity: 0,
    // x: 70,
    duration: 1,
    scrollTrigger: {
      trigger: ".part4 .work-content .parent .work-img-left img",
      scroller: "body",
      start: "top 80%",
      end: "top 50%",
      scrub: 2,
    },
  });
 
}
function phoneAnimation6() {
  phoneTL.from(".part6 h1", {
    opacity: 0,
    y: 50,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".part6 span",
      scroller: "body",
      start: "top 100%",
      end: "top 100%",
      scrub: 2,
    },
  });
}

if (document.body.clientWidth >= 375) {
  phoneAnimation1();
  phoneAnimation2();
  phoneAnimation3();
  phoneAnimation4();
  phoneAnimation6();
}
