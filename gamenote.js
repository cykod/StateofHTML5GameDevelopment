Quintus.GameNote = function(Q) {

  Q.Stage.extend("Stage",{

    tiles: function(tileAsset) {
      this.collisionLayer(new Q.TileLayer({
        dataAsset: tileAsset,
        z: 1,
        sheet: "ground", tileW: 64, tileH: 64
      }));
    },

    background: function(imageAsset) {
      this.insert(new Q.Sprite({ asset: imageAsset, type: 0, y: 0, z: 0 }));
    },


    points: function() {
      var container = this.insert(new Q.PointContainer());

      var stage = this;

      var origY = container.p.y;
      container.add("tween").set({opacity: 0, y: -container.p.h }).animate({ opacity: 0.9, y: 70 },1,Q.Easing.Quadratic.InOut, {

        callback: function() { 
          stage.isVisible = true;
          if(stage.titlePoint) {
            stage.titlePoint.animate({ opacity: 1 });
          }
        }
      
      });
      this.container = container;
      this.pointsList = [];
    },

    title: function(text) {
      this.nextPoint = this.nextPoint || (this.container ? 104 : 40);

      var pt = new Q.UI.Text({ 
        x: 512,
        y: this.nextPoint,
        label: text,
        size: 48,
        w: 640,
        align: "center",
        opacity: 0
      }).add("tween");

      this.titlePoint = this.insert(pt);

      this.nextPoint += pt.p.h + 20;

      if(!this.container) {
        pt.animate({ opacity: 1.0 });
      }

      return pt;
    },

    point: function(text,options) {
      this.nextPoint = this.nextPoint || 104

      var pointNum = this.pointsList && this.pointsList.length;

      var pt = new Q.UI.Text({ 
        x: 200,
        y: this.nextPoint,
        label: text,
        size: 32,
        maxWidth: 500,
        opacity: 0
      }).add("tween");

      this.nextPoint += pt.p.h + 20;

      if(this.pointsList) {
        this.pointsList.push(pt);
        var stage = this;

        pt.hidden = true;
      }


      if(!this.container) {
        pt.hidden = false;
        pt.p.w = 1024;
        pt.p.x = 512;
        pt.p.align = 'center'
        pt.animate({ opacity: 1.0 },null,null,{ delay: 1 });
      }

      this.on("point",pt,function(num) {
        if(pointNum == num) {
          pt.hidden = false;
          pt.animate({ opacity: 1},1,Q.Easing.Quadratic.In);
        }
      });

      this.on("hidePoint",pt,function(num) {
        if(pointNum == num) {
          pt.hidden = true;
          pt.animate({ opacity: 0 },1,Q.Easing.Quadratic.In);
        }
      });

     return this.insert(pt);
    }

  });

  Q.UI.Container.extend("PointContainer",{
    init: function() {
      this._super({
        w: "75%", h: 600, radius: 20, opacity:1, shadow: true, type:0
      });
    }
  });

  
  // Set up a numbered slide number
  Q.slide = function(number,sceneFunc) {

    Q.scene("slide" + number, function(stage) {
      Q.currentSlide = number;
      stage.presenter = stage.insert(new Q.Presenter());
      sceneFunc(stage);
      stage.add("viewport, tween");
      stage.moveTo(null,768 - Q.height);
    }, { sort: true });

  }

  Q.activeSlideStage = 0;

  Q.transitionSlide = function(from,to) {
    window.location.hash = "slide" + to;

    if(Q.inTransition) return;

    if(to < 1) {
      Q(".platformerControls",Q.activeSlideStage).p({ x: 1 });
      return;
    } else if(!Q.scene("slide" + to)) {
      Q(".platformerControls",Q.activeSlideStage).p({ x: 1023 });
      return;
    }

    Q.inTransition = true;
    var oldStageNumber = Q.activeSlideStage;

    Q.activeSlideStage = Q.activeSlideStage == 1 ? 0 : 1;
    var newStage = Q.stageScene("slide" + to,Q.activeSlideStage);
    var oldStage = Q.stage(oldStageNumber);

    Q(".platformerControls",oldStageNumber).destroy();

    if(from < to) {
      // Next Slide
      newStage.moveTo(-1024).animate({ x: 0 }, 0.5, Q.Easing.Quadratic.InOut);
      oldStage.animate({ x: 1024 }, 0.5,Q.Easing.Quadratic.InOut,{ callback:function() {
        Q.clearStage(oldStageNumber);
        Q.inTransition = false;
      }});
    } else {
      // Previous Slide
      newStage.moveTo(1024).animate({ x: 0 }, 0.5, Q.Easing.Quadratic.InOut);
      oldStage.animate({ x: -1024 }, 0.5,Q.Easing.Quadratic.InOut,{ callback: function() {
        Q.clearStage(oldStageNumber);
        Q.inTransition = false;
      }});
      Q(".platformerControls",Q.activeSlideStage).p({ x: 1024 - 100 });
    }
  };


  Q.Sprite.extend("Presenter",{
    init: function() {
      this._super({ 
        x: 0,
        y: 470,
        z: 10,
        sprite: "player",
        sheet: "man",
        speed: 500,
        jumpSpeed: -470,
        points: [ [ 18, 75 ], 
                  [ 26, 24 ],
                  [ 90, 24 ],
                  [ 104, 116 ],
                  [ 81, 232 ],
                  [ 36, 232 ]
                ]
      });

      this.triggered = {};

      this.add("2d, platformerControls, animation");
    },

    step: function(dt) {
      this._super(dt);
      if(this.p.landed >= 0) {
        if(this.p.vx > 0) {
          this.play("run_right");
        } else if(this.p.vx < 0) {
          this.play("run_left");
        } else {
          this.play("stand_" + this.p.direction);
        }
      } else {
        if(this.p.vx > 0) {
          this.play("fly_right");
        } else if(this.p.vx < 0) {
          this.play("fly_left");
        } else {
          this.play("fly_" + this.p.direction);
        }
      }

      if(this.p.y > 1050) {
        this.p.y = -200;
        this.p.x += 150;

      }


      if(this.p.x < 0) {
        Q.transitionSlide(Q.currentSlide, Q.currentSlide - 1);
      }
      if(this.p.x > 1024) {
        Q.transitionSlide(Q.currentSlide, Q.currentSlide + 1);
      }

      
      if(this.parent.pointsList && this.parent.isVisible) { 
        var len = this.parent.pointsList.length;
        for(var i = 0;i < len;i++) {
          var point = this.parent.pointsList[i];

          if(this.p.x / 1024 > (i * 1.0 / len) ) {
            if(!this.triggered[i]) {
              this.parent.trigger("point",i);
              this.triggered[i] = true;
            }
          } else if(!this.parent.pointsList[i].hidden) {
            this.parent.trigger("hidePoint",i);
            this.triggered[i] = false
          }
        }
      }

    }

  });

  Q.start = function() {
    Q.input.keyboardControls();
    Q.input.touchControls({
        controls:  [ ['left','<' ],
                     ['right','>' ],
                     [],
                     [],
                     [],
                     ['action','b'],
                     ['fire', 'a' ]]
      });
  //  Q.touch(Q.SPRITE_UI,1);

    Q.preload(function() {
      Q.presentationSetup();

      var sceneName;

      if(window.location.hash !== "") {
        sceneName = window.location.hash.split("#")[1];
      } else {
        Q.stageScene("slide1");
      }
      
      if(sceneName && Q.scene(sceneName)) { 
        Q.stageScene(sceneName);
      } else {
        Q.stageScene("slide1");
      }

    });

    return Q;

  }

};

window.addEventListener("load",function(e) {
  var override = null,
      width = 1024,
      height = 768;

  if(override = window.location.search.match(/override=([^\&]+)/)) {
    switch(override[1]) {
      case "iphone":
        width = 480;
        height = 268;
        break;
      case "iphone4":
        width = 480*2;
        height = 268*2;
        break;
      case "ipad":
        width = 1024;
        height = 672;
      case "nexus7":
        width = 1280;
        height = 720 - 100;
      case "galaxynexus":
    }
  }


  window.Q= Quintus()
                 .include("Sprites, Input, Scenes, Anim, Touch, 2D, UI, GameNote, Presentation")
                 .setup({ width: width, height: height, maximize: 'touch', upsampleWidth: 720 })
                 .start();

});
