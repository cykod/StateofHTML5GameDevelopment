Quintus.Presentation = function(Q) {

  /*
  Q.slide(4,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    stage.title("Current State of the Art: HexGL");

    var iframe = new Q.UI.IFrame({ url: "http://www.youtube.com/embed/se-oorr2zM8", w: 640, h: 360, x: 192, y: -520 });

    iframe.add("tween").animate({ y: 120 },1,Q.Easing.Quadratic.Out, { delay: 0.5 });

    stage.insert(iframe);
  }); */

 Q.slide(4,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    stage.title("Basically...");

    var pt = stage.title("We all got Zucked");
    pt.p.y = 400;

    var zuk = stage.insert(new Q.Sprite({ asset: "zuckerberg.jpg", x: 300, y: 120, type: 0, opacity: 0 }).add("tween"));

   // zuk.animate({ opacity: 1 },null,null,{ delay: 1 });

 });

  Q.slide(3,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    stage.points();
    stage.title("So, what happened?");
    stage.point("1. Desktop performance and stability took\n    longer than expected.");
    stage.point("2. Flash and Unity were better at both");
    stage.point("3. HTML5 on Mobile just wasn't there");
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

    sign.animate({ y: 0 }, 2, Q.Easing.Quadratic.Out)

    stage.presenter.add("tween");

    stage.presenter.p.y = -1024;
    stage.presenter.animate({ y: -512, vy: 0 },2); 

  });

  // Whatever assets you'll need
  Q.preload([
    'sprites.png','sprites.json','game-background.png', 'sign.png', 'history.png',
    'level.json', 'level2.json', 'level0.json', 'zuckerberg.jpg'
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
