Quintus.Presentation = function(Q) {
 Q.slide(27,function(stage) {
    stage.tiles("level0.json");
    stage.background("background5.png");

    stage.nextPoint = 150;
    stage.title("Thanks!").stop().set({opacity: 1});
    stage.title("Pascal Rettig @cykod").set({ opacity: 1});
    stage.title("Questions?").set({ opacity: 1});

    stage.on("20%",function() {
      Q("Presenter").first().add("tween").set({ angle: 0, standing: -0.5 }).animate({ angle: 45, y: -500, x: 1023 },1.5,null).del("2d");
    });
 });


Q.slide(26,function(stage) {
  stage.tiles("level0.json");
  bg = stage.background("background5.png").set({opacity: 1 });

  var title =stage.title("So...I wrote a book");

  stage.point("...And I'm giving a few away");

  var book = stage.insert(new Q.Sprite({ asset: "book.jpg", x: 290, y: 160, type: 0, opacity: 0 }));

  bg.add("tween").animate({ opacity: 0.1 },1,null, { delay: 2 });

  book.add("tween").animate({ opacity: 1.0 },1,null,{ delay: 2 });
});





Q.slide(25,function(stage) {
  stage.tiles("level0.json");
  bg = stage.background("background5.png");

  stage.points();
  stage.title("Chrome Bug");
  stage.point("Chrome for Android has a significant\n   DOM/Canvas zIndex issue");
  stage.point("Makes using DOM elements w/ canvas impossible");
  stage.point("Bug 142613");
  stage.point("Reported 2 Months Ago, still unconfirmed");
  stage.point("Please star");

});




Q.slide(24,function(stage) {
  stage.tiles("level0.json");
  bg = stage.background("background5.png");

  stage.points();
  stage.title("Technical Limitations:\nKnow 'em");
  stage.point("< IE9 - don't even try Canvas/fallbacks");
  stage.point("Canvas still fill-rate limited on most devices");
  stage.point("Device rotation sucks");
  stage.point("WP7.5 Has no standard multi-touch");
  stage.point("Sound, even in iOS6 is limited");
  stage.point("Know your stacking/scaling tricks");

});



Q.slide(23,function(stage) {
  stage.tiles("level0.json");
  bg = stage.background("background4.png");

  stage.points();
  stage.title("Client Work");
  stage.point("There's $$$ here...");
  stage.point("... but please, set expectations");
  stage.point("Pick specific devices / browsers to support");
  stage.point("You need access to hardware for testing");
  stage.point("Aspect Ratios are the enemy");
  stage.point("Document (read: contract) all specifics");

});

Q.slide(22,function(stage) {
  stage.tiles("level0.json");
  bg = stage.background("background3.png");

  stage.title("Mobile HTML5 Games:\nLessons Learned");
  stage.point("Client Lessons & Technical Lessons")
});

 Q.slide(21,function(stage) {
    stage.tiles("level0.json");
    bg = stage.background("background2.png");
    bg.p.opacity = 0.5;

    stage.title("Monetizing with Game Sponsors")
    pt = stage.point("via Excellent PhotonStorm.com Article >")
    pt.p.color = "#0000e1"; 

    pt.on("touch",function() {
      window.open("http://www.photonstorm.com/archives/3045/insert-coin-to-continue-the-html5-game-sponsorship-market");
    });

    var sponsor = stage.insert(new Q.Sprite({ asset: "html5sponsors.png", x: 0, y: 50, type: 0, opacity: 0 }));

    sponsor.add("tween").animate({ opacity: 1.0 },1,null,{ delay: 2 });
 });



 Q.slide(20,function(stage) {
    stage.tiles("level0.json");
    bg = stage.background("moneybg.jpg");
    bg.p.opacity = 0.5;

    stage.points();
    stage.title("You can certainly\nraise money...");
    stage.point("Spaceport.io ($M, undisclosed)");
    stage.point("Game Closure ($12M)");
    stage.point("Goko ($8M)");
    stage.point("TreSensa ($1M)");
    stage.point("Artillery ($2.5M)");
    stage.point("SpinPunch (YC)");
    stage.point("But: Moblyng ($10M & bankrupt)")
 });

 Q.slide(19,function(stage) {
    stage.tiles("level0.json");
    bg = stage.background("moneybg.jpg");
    bg.p.opacity = 0.5;

    stage.title("What about the Washingtons?", { color: "#104910", y: 220 } );
    stage.point("Can you make money with HTML5 Games?", { color: "#333", y: 300 });
 });

 Q.slide(18,function(stage) {
    stage.tiles("level0.json");
    stage.background("background4.png");

    stage.points();
    stage.title("HTML5 as Language");

    stage.point("Ejecta - Open-Source JavaScript,\nCanvas, & Audio implementation in iOS\nhttp://impactjs.com/ejecta");
    stage.point("CocoonJS - Cloud based wrapper\nStarted targeting Android (but iOS supported)\nw/ a Cloud-based Builder");
    stage.point("AppMobi - Cloud based, commercial builder\nFree to use, but pay for cloud services");

  });



 Q.slide(17,function(stage) {
    stage.tiles("level0.json");
    stage.background("background3.png");

    stage.title("HTML5 as a Target Platform");


    stage.scroller("construct2.png","Construct 2","- Commercial IDE\n- Free/$119/$399 Editions\n- Windows Only\n- Whole lot of Target Platforms\n  (iOS, Android, HTML5, Windows8)\n- \"No Programming Required\n- Lots of Docs, Tutorials, Community");
    stage.scroller("gamemaker.png","GameMaker","- Commercial IDE\n- $99.99 + HTML5 Export ($99.99)\n- IDE Windows Only\n- Export to iOS, Android w/ $199/platform\n- Games");

    stage.scroller("playcanvas.png","PlayCanvas","- Commercial IDE\n- Unreleased (but plenty of demos)\n- 3D Focused with 3D WebGL Engine");

    stage.scroller("vaporware.png","And some more...","- The Artillery Platform (Unreleased)\n- Game Closure (Unreleased)\n- Spaceport NEO (Unreleased)\n- TreSensa (Available)\n- SpinPunch (Unreleased)\n- PlayCraft (Beta)");

   stage.on("10%",function() {
     stage.triggerScroller();
   });
  });



  Q.slide(16,function(stage) {
    stage.tiles("level0.json");
    stage.background("background4.png");

    stage.title("HTML5 as a Web Platform");


    stage.scroller("biolab.png","Impact.js","- Comercial Engine\n- $99/developer license\n- Class-based, event-based architecture\n- Good for 2D Games, Platformers\n- Included Level Editor\n- Well-documented, supported");
    stage.scroller("limejs.png","LimeJS","- Open-source, Apache License\n- \"Native-experience games for all\n   modern touchscreens\"\n- Powerful, but not lightweight\n- Uses Google's closure compiler");
    stage.scroller("easeljs.png","EaselJS","- Open-source, MIT License\n- Part of the CreateJS suite of tools\n- Touchscreen friendly, but not focused\n- Sponsored by Adobe and Microsoft\n- Lots of Examples, Good Docs\n- Used in Production (PvsD, Atari)");

    stage.scroller("crafty.png","Crafty.js","- Open-source, MIT License\n- Lightweight, easy to get started\n- Component based architecture\n- Decent docs\n- Tutorials Lacking\n- Not that many production Games");

    stage.scroller("threejs.jpg","Three.js","- Open-source, MIT License\n- The 3D Library for the Web\n- Recommend \"WebGL: Up and Running\"\n- Docs aren't great but lots of examples\n- Multiple Renderers, but WebGL\n   is where it's at");

    stage.scroller("quintus.png","Quintus","- Open-source, MIT License\n- Built in my book\n- Class, Component & Event Based\n- Targeted at Mobile\n- Docs are a WIP\n- Not officially released\n   (html5quintus.com)");
   // stage.scroller('biolab.png'

   stage.on("10%",function() {
     stage.triggerScroller();
   });


   stage.insert(new Q.UI.Text({ label: 'Jump\nHere', color: 'white', x: 300, y: 700, z: 11, lineHeight: 1, align: 'center' }));
  });

  Q.slide(15,function(stage) {
    stage.tiles("level0.json");
    stage.background("background3.png");

    stage.points();
    stage.title("3 Approaches to\nHTML5 Game Development");

    stage.point("1. Treat it as a Web Platform");
    stage.point("   - Developing in JavaScript, deploy to Web");
    stage.point("2. Treat it as a Target platform");
    stage.point("   - Use a Game IDE or another language");
    stage.point("3. Treat it as a Development Language");
    stage.point("   - Developer in JS, deploy to Native");
  });



  Q.slide(14,function(stage) {
    stage.tiles("level.json");
    stage.background("background4.png");

    stage.title("Game-ception");

    var iframe;
    if(Q.touchDevice) {
      iframe = new Q.UI.IFrame({ url: "http://playbiolab.com/", w: 480, h: 320, x: 272, y: -520 });
    } else {
      iframe = new Q.UI.IFrame({ url: "platformer/index.html", w: 640, h: 360, x: 192, y: -520 });
    }

    iframe.add("tween").animate({ y: 120 },1,Q.Easing.Quadratic.Out, { delay: 0.5 });

    stage.insert(iframe);

  });


 
  Q.slide(13,function(stage) {
    stage.tiles("level0.json");
    stage.background("html5logo.png");

    stage.points();

    stage.title("HTML5's Super Powers", { color: "white" }).set({ y: 50 });
    var pt1 = stage.point("1. Write Once,\n   Deploy Anywhere*").set({ x: 40, color: "white" });
    var pt2 = stage.point("2. Share instantly\n  using just a link").set({ x: 40, color: "white" });
    var pt3 = stage.point("3. An open platform\n   matched with\n   W3C Specifications").set({ x: 40, color: "white" });
    stage.point("4. A \"View Source\"\n  Community" ).set({ x: 770, y: pt1.p.y, color: "white" });
    stage.point("5. Everyone already\n  has an IDE" ).set({ x: 760, y: pt2.p.y, color: "white" });
    stage.point("6. First Class\n  Web Citizen").set({ x: 750, y: pt3.p.y, color: "white" });


    stage.titlePoint.animate({ opacity: 1 });
   stage.container.stop();
    stage.isVisible=true;
  });

  Q.slide(12,function(stage) {
    stage.tiles("level_big_gap.json");
    stage.background("background2.png");

    stage.title("Hold it one second...");
    stage.point("Why Bother with HTML5 Game Development?");
    var pt = stage.point("(Hint: Super Powers)").stop();

    stage.on("20%",function() {
      pt.animate({ opacity: 1 });
    });

    Q("Presenter").p({ skipMove: true, x: 100 });

    stage.on("30%",function() {
      Q("Presenter").first().add("tween").set({ angle: 0, standing: -0.5 }).animate({ angle: 45, y: -500, x: 1500},1.5,null).del("2d");
    });
  }); 

  Q.slide(11,function(stage) {
    stage.tiles("level0.json");
    stage.background("background3.png");

    stage.title("Current State of the Art: HexGL");

    var iframe = new Q.UI.IFrame({ url: "http://www.youtube.com/embed/se-oorr2zM8", w: 640, h: 360, x: 192, y: -520, type:0 });

    iframe.add("tween").animate({ y: 130 },1,Q.Easing.Quadratic.Out, { delay: 0.5 });

    stage.insert(iframe);

    var html = new Q.UI.HTMLElement({ html: '<a href="https://github.com/BKcore/HexGL"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" alt="Fork me on GitHub"></a>' });

    stage.insert(html);

  });

 
  Q.slide(10,function(stage) {
    stage.tiles("level0.json");
    stage.background("windows8-background.png");

    stage.points();

    stage.title("Don't Forget Windows 8", { color: "white" });
    stage.point("1. In Windows 8, HTML5 is a\n   first-class development platform.", { color: "white" });
    stage.point("2. HTML5 tablet performance\n   is excellent.", { color: "white" });
    stage.point("3. Distribution available\n    through the Windows store.", { color: "white" });
    stage.point("4. Free (limited) Dev Tools", { color: "white" });


    stage.titlePoint.animate({ opacity: 1 });
    stage.container.stop();
    stage.isVisible=true;
  });

 Q.slide(9,function(stage) {
    stage.tiles("level0.json");
    var bg = stage.background("background3.png");
    bg.p.opacity = 0.6;

    stage.title("Scirra's Great HTML5\nGaming Performance Comparision");

    var iframe = new Q.UI.IFrame({ url: "scirra.html", w: 680, h: 330, x: 172, y: -520, background: "rgba(255,255,255,0.3)", type: 0 });

    iframe.add("tween").animate({ y: 200 },1,Q.Easing.Quadratic.Out, { delay: 0.5 });

    stage.insert(iframe);
  }); 



  Q.slide(8,function(stage) {
    stage.tiles("level0.json");
    stage.background("background2.png");

    stage.points();
    stage.title("On Mobile...");
    stage.point("1. Canvas performance is solid (iOS5+, ICS+)");
    stage.point("2. No WebGL, but OpenGL ES-based\n    native wrappers");
    stage.point("3. Web Audio API in iOS6");
    stage.point("4. Multi-touch now in Android 4+");
    stage.point("5. Remote Debugging,\n    iOS 6+, Chrome ICS+");
  });

  Q.slide(7,function(stage) {
    stage.tiles("level0.json");
    stage.background("background3.png");

    stage.points();
    stage.title("On Desktop...");
    stage.point("1. Desktop Canvas performance is\n   now solid.");
    stage.point("2. WebGL rocks & Three.js\n   is a little slice of heaven");
    stage.point("3. Web Audio API in Chrome & Safari\n    (coming in Firefox)");
    stage.point("4. WebRTC (getUserMedia) opening\n    up hardware access, UDP");
  });


  Q.slide(6,function(stage) {
    stage.tiles("level_gap.json");
    var bg = stage.background("background2.png");
    bg.p.opacity = 0.5;

    var hype = stage.insert(new Q.Sprite({ asset: "hype_cycle.png", x: 250, y: 160, type: 0, opacity: 0, z: 20 }).add("tween"));
    stage.title("But there's hope...");
    stage.point("... that HTML5 can cross the Trough of Disillusionment");

    hype.animate({ opacity: 1 },1,null, { delay: 3 });

  });




 Q.slide(5,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    stage.title("Basically...");

    var pt = stage.title("We all got a little Zucked");
    pt.p.y = 390;

    var zuk = stage.insert(new Q.Sprite({ asset: "zuckerberg.jpg", x: 300, y: 140, type: 0, opacity: 0.01 }).add("tween"));
    stage.on("30%",function() {
      zuk.animate({ opacity: 1 }, null,null);
      pt .animate({ opacity: 1 }, null,null);

    });
 });


  Q.slide(4,function(stage) {
    stage.tiles("level0.json");
    stage.background("background2.png");

    stage.points();
    stage.title("THE HTML5\n MOBILE \"ILLUSION\"");
    stage.point("1. Crappy Canvas Performance");
    stage.point("2. No WebGL");
    stage.point("3. No multi-touch on Android");
    stage.point("4. Sound support so bad it hurt.");
    stage.point("5. Limited & Terrible Debugging tools.");
  });





  Q.slide(3,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    stage.points();
    stage.title("Why the delay?");
    stage.point("1. Desktop performance and stability took\n    longer than expected.");
    stage.point("2. Flash and Unity were better at both.");
    stage.point("3. HTML5 on Mobile just wasn't there.");
    stage.point("4. Mediocre performance +\n    High resolutions\n    = Disaster");

  });

  Q.slide(2,function(stage) {
    stage.tiles("level0.json");
    stage.background("background2.png");

    var history = stage.insert(new Q.Sprite({ asset: "history.png", x:0, y: -512, type: 0, z:3 }).add("tween"));
    
    history.animate({ y: 100 }, 1, Q.Easing.Quadratic.Out)


    var sp = stage.insert(new Q.Sprite({x : 0, y: 225, z:2, opacity: 0, time: 0 })).add("tween");
    sp.draw = function(ctx) {
      ctx.save();
      ctx.globalAlpha = this.p.opacity;
      ctx.fillStyle = "#ffff0d";
      ctx.beginPath();
      ctx.moveTo(this.p.x - 25,0);
      ctx.lineTo(this.p.x + 25,0);
      ctx.lineTo(this.p.x + 5,650);
      ctx.lineTo(this.p.x - 5,650);
    //  ctx.arc(this.p.x,this.p.y,this.p.size,0,Math.PI * 2,true);
      ctx.fill();
      ctx.restore();
    }

    sp.animate({ opacity: 0.5}, 1, Q.Easing.Quadratic.Out, { delay: 1 })

    sp.on("step",function(dt) {
      sp.p.time += dt;
      sp.p.size = 20 + 5*Math.cos(this.p.time*5);
      sp.p.x = stage.presenter.p.x + stage.presenter.p.w/2;
    });
    
  });

  Q.slide(1,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    var sign = stage.insert(new Q.Sprite({ asset: "sign.png", x: 512 - 388/2, y: -512, type: 0 }).add("tween"));

    sign.animate({ y: 0 }, 2, Q.Easing.Quadratic.Out, { delay: 0.5, z: 3 })

    stage.presenter.add("tween");

    stage.presenter.p.y = -1024;
    stage.presenter.animate({ y: -512, vy: 0 },2); 

    stage.insert(new Q.Sprite({ sheet: "cab", x: 500, y: 700 - 158, type: 0, z: 11 }));
    stage.insert(new Q.Sprite({ sheet: "hydrant", x: 100, y: 700 - 110, type: 0, z: 11 }));


    var html = new Q.UI.HTMLElement({ html: '<a href="https://github.com/cykod/StateofHTML5GameDevelopment"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" alt="Fork me on GitHub"></a>' });

    stage.insert(html);
 
    

  });

  // Whatever assets you'll need
  Q.preload([
    'sprites.png','sprites.json','game-background.png', 'sign.png', 'history.png',
    'level.json', 'level2.json', 'level0.json', 'zuckerberg.jpg', 'level_gap.json',
    'hype_cycle.png',  'windows8-background.png', 'level_big_gap.json',
    'html5logo.png', 'biolab.png', 'limejs.png', 'easeljs.png', 'crafty.png', 'threejs.jpg',
    "quintus.png", "construct2.png", "gamemaker.png", "playcanvas.png", "vaporware.png",
    "moneybg.jpg", "html5sponsors.png", "book.jpg", "background2.png", "background3.png",
    "background4.png","background5.png"
  ]);

  // Called after preload
  Q.presentationSetup = function() {
    Q.compileSheets("sprites.png","sprites.json");
    Q.animations('player', {
       run_right: { frames: [0,1,2,3,4,5], rate: 1/8},
       run_left: { frames: [9,10,11,12,13,14], rate: 1/8},
       stand_right: { frames: [2], rate: 1/5},
       stand_left: { frames: [11], rate: 1/5},
       jump_right: { frames: [6,7,8], rate: 1/5, loop: false },
       jump_left: { frames: [15,16,17], rate: 1/5, loop: false},
       fly_right: { frames: [8], rate: 1/5, loop: false },
       fly_left: { frames: [17], rate: 1/5, loop: false}
    });
  };


};

/*  Q.slide(2,function(stage) {
    stage.tiles("level.json");
    stage.background("game-background.png");

    stage.points();
    stage.point("This is a test of the emergency broadcast\nsystem. This is only a test and I\nthink it should stay that way");
    stage.point("This is a second test");
    stage.point("This is a third test");

  });
  */
