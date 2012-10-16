Quintus.Presentation = function(Q) {

/*
 Q.slide(5,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    stage.nextPoint = 150;
    stage.title("Thanks!").stop().set({opacity: 1});
    stage.title("Pascal Rettig @cykod").set({ opacity: 1});
    stage.title("Questions?").set({ opacity: 1});

    stage.on("20%",function() {
      Q("Presenter").first().add("tween").set({ angle: 0, standing: -0.5 }).animate({ angle: 45, y: -500, x: 1023 },1.5,null).del("2d");
    });
 });
 */

  /*
  Q.slide(4,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    stage.title("Current State of the Art: HexGL");

    var iframe = new Q.UI.IFrame({ url: "http://www.youtube.com/embed/se-oorr2zM8", w: 640, h: 360, x: 192, y: -520 });

    iframe.add("tween").animate({ y: 120 },1,Q.Easing.Quadratic.Out, { delay: 0.5 });

    stage.insert(iframe);

  }); */

/*
  Q.slide(9,function(stage) {
    stage.tiles("level.json");
    stage.background("game-background.png");

    stage.title("Gameception");

    var iframe = new Q.UI.IFrame({ url: "platformer/index.html", w: 670, h: 330, x: 172, y: -520, background: "white" });

    iframe.add("tween").animate({ y: 160 },1,Q.Easing.Quadratic.Out, { delay: 0.5 });

    stage.insert(iframe);
  }); 

  */

  Q.slide(11,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    stage.title("Current State of the Art: HexGL");

    var iframe = new Q.UI.IFrame({ url: "http://www.youtube.com/embed/se-oorr2zM8", w: 640, h: 360, x: 192, y: -520 });

    iframe.add("tween").animate({ y: 100 },1,Q.Easing.Quadratic.Out, { delay: 0.5 });

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
    stage.background("game-background.png");

    stage.title("Scirra's Great HTML5\nGaming Performance Comparision");

    var iframe = new Q.UI.IFrame({ url: "scirra.html", w: 680, h: 330, x: 172, y: -520, background: "rgba(255,255,255,0.3)", type: 0 });

    iframe.add("tween").animate({ y: 160 },1,Q.Easing.Quadratic.Out, { delay: 0.5 });

    stage.insert(iframe);
  }); 



  Q.slide(8,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    stage.points();
    stage.title("On Mobile...");
    stage.point("1. Canvas performance is solid (iOS5+, ICS+)");
    stage.point("2. No WebGL, but OpenGL ES-based\n native wrappers");
    stage.point("3. Web Audio API in iOS6");
    stage.point("4. Multi-touch now in Android 4+");
    stage.point("5. Remote Debugging,\n  iOS 6+, Chrome ICS+");
  });

  Q.slide(7,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    stage.points();
    stage.title("On Desktop...");
    stage.point("1. Desktop Canvas performance is\n   now solid.");
    stage.point("2. WebGL rocks & Three.js\n   is a little slice of heaven");
    stage.point("3. Web Audio API in Chrome & Safari\n    (coming in Firefox)");
    stage.point("4. WebRTC (getUserMedia) opening\n    up hardware access, UDP");
  });


  Q.slide(6,function(stage) {
    stage.tiles("level_gap.json");
    stage.background("game-background2.png");

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
    pt.p.y = 400;

    var zuk = stage.insert(new Q.Sprite({ asset: "zuckerberg.jpg", x: 300, y: 120, type: 0, opacity: 0.01 }).add("tween"));
    stage.on("30%",function() {
      zuk.animate({ opacity: 1 }, null,null);
      pt .animate({ opacity: 1 }, null,null);

    });
 });


  Q.slide(4,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    stage.points();
    stage.title("The HTML5 Mobile \"Illusion\"");
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
    stage.title("Why the Delay?");
    stage.point("1. Desktop performance and stability took\n    longer than expected.");
    stage.point("2. Flash and Unity were better at both.");
    stage.point("3. HTML5 on Mobile just wasn't there.");
    stage.point("4. Mediocre performance +\n    High resolutions\n    = Disaster");
  });

  Q.slide(2,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    var history = stage.insert(new Q.Sprite({ asset: "history.png", x:0, y: -512, type: 0 }).add("tween"));
    
    history.animate({ y: 100 }, 1, Q.Easing.Quadratic.Out)

    
  });

  Q.slide(1,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    var sign = stage.insert(new Q.Sprite({ asset: "sign.png", x: 512 - 388/2, y: -512, type: 0 }).add("tween"));

    sign.animate({ y: 0 }, 2, Q.Easing.Quadratic.Out, { delay: 0.5 })

    stage.presenter.add("tween");

    stage.presenter.p.y = -1024;
    stage.presenter.animate({ y: -512, vy: 0 },2); 

  });

  // Whatever assets you'll need
  Q.preload([
    'sprites.png','sprites.json','game-background.png', 'sign.png', 'history.png',
    'level.json', 'level2.json', 'level0.json', 'zuckerberg.jpg', 'level_gap.json',
    'hype_cycle.png', 'game-background2.png', 'windows8-background.png'
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
