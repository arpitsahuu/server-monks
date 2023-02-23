var tl = gsap.timeline({
    repeat:-1
  });
  var tl2 = gsap.timeline({
    repeat:-1
  });
  var tl3 = gsap.timeline({
    repeat:-1
  })
  tl.to(".element", {
      // transformOrigin: "center 250px",
      rotation: 45,
      duration: 1,
      delay:2,
      ease: "none",
      // repeat: -1
    })
  .to(".element", {
      delay:2,
      // transformOrigin: "center 250px",
      rotation: 90,
      duration: 1,
      ease: "easeOut",
      // repeat: -1
    })
    .to(".element", {
      delay:2,
      // transformOrigin: "center 250px",
      rotation: 135,
      duration: 1,
      ease: "none",
      // repeat: -1
    }).to(".element", {
      delay:2,
      // transformOrigin: "center 250px",
      rotation: 180,
      duration: 1,
      ease: "none",
      // repeat: -1
    }).to(".element", {
      delay:2,
      // transformOrigin: "center 250px",
      rotation: 225,
      duration: 1,
      ease: "none",
      // repeat: -1
    }).to(".element", {
      delay:2,
      transformOrigin: "center 250px",
      rotation: 270,
      duration: 1,
      ease: "none",
      // repeat: -1
    }).to(".element", {
      delay:2,
      transformOrigin: "center 250px",
      rotation: 315,
      duration: 1,
      ease: "none",
      // repeat: -1
    }).to(".element", {
      delay:2,
      transformOrigin: "center 250px",
      rotation: 360,
      duration: 1,
      ease: "none"
    }, 'a' );
  
    gsap.to(".elem",{
      height:"130px",
      width: "130px",
      duration:2,
      stagger:3,
  
    });
    gsap.to(".elem",{
      delay:2,
      height:"80px",
      width: "80px",
      duration:1,
      stagger:3,
      ease: "easeIn",
    });
  
    tl2.to(".elem", {
      rotation: -45,
      duration: 1,
      delay:2,
      ease: "none",
    })
    .to(".elem", {
      rotation: -90,
      duration: 1,
      delay:2,
      ease: "none",
    })
    .to(".elem", {
      rotation: -135,
      duration: 1,
      delay:2,
      ease: "none",
    })
    .to(".elem", {
      rotation: -180,
      duration: 1,
      delay:2,
      ease: "none",
    })
    .to(".elem", {
      rotation: -225,
      duration: 1,
      delay:2,
      ease: "none",
    })
    .to(".elem", {
      rotation: -270,
      duration: 1,
      delay:2,
      ease: "none",
    })
    .to(".elem", {
      rotation: -315,
      duration: 1,
      delay:2,
      ease: "none",
    })
    .to(".elem", {
      rotation: -360,
      duration: 1,
      delay:2,
      ease: "none",
    },'b');
  
    gsap.to(".reviewfe",{
      duration: 1,
     
      ease: "none",
      stagger:3,
      height: "270px"
  
    });
  
    tl3.to(".fear-h",{
      duration: 2,
      ease: "none",
      stagger:3,
      top:"10px"
  
    },'c')
    .to(".fear-h",{
      delay:2,
      duration: 3,
      ease: "none",
      stagger:3,
      top:"150px"
    },'c')
    tl3.to(".frar-in",{
      duration: 2,
      ease: "none",
      stagger:3,
      top:"50px"
  
    },'c')
    .to(".frar-in",{
      delay:2,
      duration: 3,
      ease: "none",
      stagger:3,
      top:"200px"
    },'c');
    