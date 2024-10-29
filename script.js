let bannerWidth = 300,
    bannerHeight = 250,
    loopDuration = 12,
    pauseLastLoopAfter = 10,
    loopNumber = 1,
    whiteoutSpeed = 1,
    images = ['image.png','logo.svg'], //// note: this has to be an object filtered by the actual audience/affinites let images[{audience:'',age:'', affinity:'', variant:''}]
    dco_Frame = [],
    logoX = 107, // LOGO x POSITION
    logoY = 16,// LOGO y POSITION
    logoWidth = '180px', // LOGO WIDTH
    d = 0.01;
      
 gsap.defaults({
    ease: "sine.out", 
    duration: 0.6
 });
    
// FRAME ANIMATIONS
// FRAME 1
dco_Frame[1] = function() {
  
   
   let tl = gsap.timeline({}); // MAIN TIMELINE

   tl.set(logo, {opacity:0, x:logoX, y:logoY, width:logoWidth}); 
   tl.set(terms,{y:"+=10"});
   // ANIMATION START
   tl.from(image,{opacity: 0},0.01);
   tl.to(copy1, {duration:0.86, opacity: 1,y:"-=10", ease:"elastic.out(1.32, 0.61)"}, 0.5);
   tl.to([copy1, image],{opacity: 0}, 3);
  
 

    return tl;
}

// FRAME 2
dco_Frame[2] = function() {
 
    let tl = gsap.timeline({}); // MAIN TIMELINE
   
    document.getElementById("bg").style.backgroundColor = '#479fd9';
    tl.to(logo, {duration:0.86, opacity: 1,y:"+=10", ease:"elastic.out(1.32, 0.61)"}, d);
    tl.to(copy2, {duration:0.86, opacity: 1,y:"-=10", ease:"elastic.out(1.32, 0.61)"}, d);
    tl.to(circle, {duration:0.86, scale:1.05, opacity: 1, ease:"elastic.out(1.32, 0.81)"}, d);
    tl.to(copy2,{opacity: 0, y:"+=10"}, 3);

  
  
 
     return tl;
 }
 // FRAME 3
 dco_Frame[3] = function() {
 
    let tl = gsap.timeline({}); // MAIN TIMELINE
   
 
    tl.to(copy3, {duration:0.86, opacity: 1,y:"-=10", ease:"elastic.out(1.32, 0.61)"}, d);
    tl.to(cta, {duration:0.86, opacity: 1,y:"-=10", ease:"elastic.out(1.32, 0.61)"}, d+0.06);
    tl.to(terms, {duration:0.86, opacity: 1,y:"-=10", ease:"elastic.out(1.32, 0.61)"}, d+0.09);
 
  
 
     return tl;
 }
 

 
// ============================== DO NOT EDIT!!!! ============================== //

let mTL,
    loopCount = 1,
    stopAnimations = false,
    animation_timeline,
    content,
    main,
    border,
    clicktag,
    whiteout,
    bg;

function init() {
    animation_timeline = document.getElementById("animation_timeline");
    content = document.getElementById("content");
    main = document.getElementById("main");
    border = document.getElementById("border");
    clicktag = document.getElementById("clicktag");
    whiteout = document.getElementById("whiteout");
    bg = document.getElementById("bg");
    clickTAG = document.getElementById("clicktag");
    // FEED DATA WILL COME HERE
    // THIS WILL BE COMPLICATED - root:audience - switch to AGE switch to AFFINITY switch to VARIANT 5 deep, not sure more images in 1 frame or only keep 3 frames as per brief, 3 products not sure where they go
    // equal rotation on all
    // 2 exposures need  to discuss
    // 
   /*devDynamicContent.acuvue_feed[0].audience = "busy-brand-considerers"; // devDynamicContent.acuvue_feed[0].audience = "latent-intrigued-considerers";
    devDynamicContent.acuvue_feed[0].age= "18-25"; //devDynamicContent.acuvue_feed[0].age= "26-34"; //devDynamicContent.acuvue_feed[0].age= "35-44"; devDynamicContent.acuvue_feed[0].age= "55+"; <-- only for 2nd audience
    devDynamicContent.acuvue_feed[0].affinity = "tech-enthusiasts";  //XXSIZE_BBC_1825_TECHENTHUSIASTS
    devDynamicContent.acuvue_feed[0].variant = "music_lovers";*/
    document.getElementById('copy1').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor";
    document.getElementById('copy2').innerHTML = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    document.getElementById('copy3').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor";
    document.getElementById('terms').innerHTML = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    document.getElementById('cta').innerHTML = "Lorem ipsum";
    
    content.style.width = bannerWidth+"px";
    content.style.height = bannerHeight+"px";
    
    main.style.width =  bannerWidth+"px";
    main.style.height = bannerHeight+"px";
    
    border.style.width = bannerWidth - 2+"px";
    border.style.height = bannerHeight - 2+"px";
    
    clicktag.style.width = bannerWidth+"px";
    clicktag.style.height = bannerHeight+"px";
    
    whiteout.style.width = bannerWidth+"px";
    whiteout.style.height = bannerHeight+"px";

    bg.style.width = bannerWidth+"px";
    bg.style.height = bannerHeight+"px";
    
    for (let i = 0; i < images.length; i++) {
        let imageId =images[i].split(".");
        initImage(imageId[0], images[i]);
    }  
    
    mTL = gsap.timeline({});
    
    startMainTimeLine();
   
 
}

function handleMouseEvents(){
  // URL CLICKS BY FRAME WILL COME HERE NEED TO DISCUSS WHAT WHERE
 
    clickTAG.addEventListener("click",(event) => {  
        Enabler.exit("Exit Click");
        //Enabler.exitOverride("Click on BG", "http://www.google.com");
        Enabler.counter("Counter Click");
        },
        false
      );
    clickTAG.addEventListener("mouseover",(event) => {  
        gsap.to(cta, {scale:0.9, ease:"elastic.out(1.32, 0.61)"});
        },
        false
      );
    clickTAG.addEventListener("mouseout",(event) => {  
        gsap.to(cta, {scale:1, ease:"elastic.out(1.32, 0.61)"});
        },
        false
      );

}

function initImage(id, src) {
    let image = document.createElement("img");
    image.setAttribute("id", id);
    image.setAttribute("class", "image");
    image.setAttribute("src", src);
    main.appendChild(image); 
    
}

function startMainTimeLine() {
    for (let i = 1; i < dco_Frame.length; i++) {
        mTL.add(dco_Frame[i]());   
    }
    
    mTL.to(whiteout, whiteoutSpeed, {opacity: 0}, 0);
    mTL.to(whiteout, whiteoutSpeed, {opacity: 1}, loopDuration - whiteoutSpeed);
    
    mTL.set(animation_timeline, {opacity: 0, onComplete: pauseMainTimeLine}, pauseLastLoopAfter);
    mTL.set(animation_timeline, {opacity: 0, onComplete: resetMainTimeLine}, loopDuration);
    handleMouseEvents();
}

function pauseMainTimeLine() {
    if (loopCount == loopNumber) {
        stopAnimations = true;
        animationsPause();
    }  
}

function resetMainTimeLine() {
    loopCount++;
    mTL.restart();
}

function animationsPause() {
    mTL.pause();
}

function animationsPlay() {
    mTL.play();
}

function dcoLoad() {
    if (Enabler.isInitialized()) {
        enablerInitHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
    }
}

function enablerInitHandler() {
    console.log("DCS");
    
    if (politeLoad) {
        if (Enabler.isPageLoaded()) {
            pageLoadedHandler();
        } else {
            Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
        }
    } else {
        preLoadImages();
    }
}

function pageLoadedHandler() {
    console.log("DCS-Polite-Load");
    
    preLoadImages();
}

function preLoadImages() {
    let extCSS = document.createElement("link"),   
        newImages = [],
        loadedImages = [];

    extCSS.setAttribute("rel", "stylesheet");
    extCSS.setAttribute("type", "text/css");
    extCSS.setAttribute("href", "style.css");
    document.getElementsByTagName("head")[0].appendChild(extCSS);


    for (let i=0; i < images.length; i++) {
        newImages[i] = new Image();
        newImages[i].src = images[i];
        
        newImages[i].onload = function() {
            loadedImages.push(i);
        }
    }
    
    var bannerInit = setInterval(function() {
        if (loadedImages.length == images.length) {
            clearInterval(bannerInit);
            init();
        }
    }, 10);
}

window.onload = function() {
    if (dcSelect) {
        dcoLoad();
    } else {
        stLoad();
    }   
}