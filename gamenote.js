Quintus.GameNote = function(Q) {

  Q.Stage.extend("Stage",{

    tiles: function(tileAsset) {
      this.collisionLayer(new Q.TileLayer({
        dataAsset: tileAsset,
        z: 1,
        sheet: "ground", tileW: 64, tileH: 64,
        y: -25
      }));
    },

    background: function(imageAsset) {
      return this.insert(new Q.Sprite({ asset: imageAsset, type: 0, y: 0, z: 0 }));
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

    title: function(text,p) {
      this.nextPoint = this.nextPoint || (this.container ? 104 : 40);
      this.titleCount = this.titleCount || 0;

      var pt = new Q.UI.Text(p,{ 
        x: 512,
        y: this.nextPoint,
        label: text.toUpperCase(),
        size: 70,
        lineHeight: 1,
        w: 640,
        align: "center",
        family: "atrament-web",
        color: "#C0322D",
        opacity: 0,
        z: 2
      }).add("tween");

      this.titlePoint = this.insert(pt);
      this.titleCount++;

      this.nextPoint += pt.p.h;
      if(this.container ) {
        this.nextPoint += 20;

      }

      if(!this.container && this.titleCount == 1) {
        pt.animate({ opacity: 1.0 },null,null, { delay: 0.75 * this.titleCount });
      } 

      return pt;
    },

    point: function(text,p) {
      this.nextPoint = this.nextPoint || 104

      var pointNum = this.pointsList && this.pointsList.length;

      var pt = new Q.UI.Text(p,{ 
        x: 200,
        y: this.nextPoint,
        label: text,
        size: 28,
        maxWidth: 500,
        opacity: 0,
        lineHeight: 1,
        weight:400,
        family: "proxima-nova",
        color: "#333",
        z: 2
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
        pt.animate({ opacity: 1.0 },null,null,{ delay: 1.5 });

      }

      this.on("point",pt,function(num) {
        if(pointNum == num && pt.hidden) {
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
   },

   scroller: function(asset,titleText,labelText) {
     this.scrollers = this.scrollers || [];

     this.activeScroller =  this.activeScroller == void 0 ? -1 : this.activeScroller;

     var image = this.insert(new Q.Sprite({ asset: asset, x: 150, y: 180, type: 1, opacity: 0, z:1 }).add("tween"));
     var title = this.insert(new Q.UI.Text({ label: titleText.toUpperCase(), size: 50, family: "atrament-web", color: "#C0322D", x: 490, y: 180, align:'left', opacity: 0, z:2  }).add("tween"));
     var label = this.insert(new Q.UI.Text({ label: labelText, size: 24, family: "proxima-nova", weight:400, color: "black", x: 490, y: 240, opacity: 0, z:2 }).add("tween"));

     this.scrollers.push([ image, title, label ]);

     var stage = this;
     image.on("scroller",function() {
       stage.triggerScroller();
     });

   },

   triggerScroller: function() {

     var scrl = this.scrollers[this.activeScroller];

     if(this.activeScroller != -1) {
     scrl[0].stop().animate({ x: -500, opacity: 0 },1,Q.Easing.Quadratic.Out);
     scrl[1].stop().animate({ x: 1500, opacity: 0 },1,Q.Easing.Quadratic.Out)
     scrl[2].stop().animate({ x: 1500, opacity: 0 },1,Q.Easing.Quadratic.Out);

     }
     
     this.activeScroller = (this.activeScroller+1) % this.scrollers.length;
     scrl = this.scrollers[this.activeScroller];

     scrl[0].set({ x: -500, opacity: 0 }).animate({ x: 150, opacity: 1 },1,Q.Easing.Quadratic.Out, { delay: 0.5 });
     scrl[1].set({ x: 1500, opacity: 0 }).animate({ x: 490, opacity: 1 },1,Q.Easing.Quadratic.Out, { delay: 0.5 })
     scrl[2].set({ x: 1500, opacity: 0 }).animate({ x: 490, opacity: 1 },1,Q.Easing.Quadratic.Out, { delay: 0.5 });
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
      _gaq.push(['_trackEvent','Slide','Show',"slide" + number]);
      Q.currentSlide = number;
      stage.presenter = stage.insert(new Q.Presenter());
      sceneFunc(stage);
      stage.add("viewport, tween");
      stage.moveTo(null,768 - Q.height);
    }, { sort: true });

  }

  Q.activeSlideStage = 0;

  Q.transitionSlide = function(from,to,skipDisable) {
    if(!skipDisable) { Q.disableHashChange = true; }
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

    Q.stage(oldStageNumber).trigger("clear");

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
      if(!Q(".platformerControls",Q.activeSlideStage).first().p.skipMove) {
        Q(".platformerControls",Q.activeSlideStage).p({ x: 1024 - 100 });
      }
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
      this.triggeredPercentage = {};

      this.on("hit.sprite",this,"hitSprite");
      this.add("2d, platformerControls, animation");
    },

    hitSprite: function(col) {
      col.obj.trigger("scroller");
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

          if((this.p.x-50.0) / (1024-100) > (i / len) ) {
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

      for(var i = 0;i < 10; i++) {
        if(this.p.x / 1024 > (i / 10) ) {
            if(!this.triggeredPercentage[i]) {
              this.parent.trigger(i * 10 + "%");
              this.triggeredPercentage[i] = true;
            }
        }
      }
    }

  });

  Q.controlAssets = {
    "left": 0,
    "right": 1,
    "action": 3
  };

  Q.drawInputButtons = function() {
      var keypad = Q.input.keypad,
          ctx = Q.ctx;

      ctx.save();
      ctx.textAlign = "center"; 
      ctx.textBaseline = "middle";

      var sheet = Q.sheet("controls");

      for(var i=0;i<keypad.controls.length;i++) {
        var control = keypad.controls[i];

        if(control[0]) {
          var x = i * keypad.unit + keypad.gutter,
              y = keypad.bottom - 85;
              key = Q.inputs[control[0]];

          ctx.globalAlpha = key ? 0.5 : 1.0;
          sheet.draw(ctx,x,y,Q.controlAssets[control[0]])

        }
      }

      ctx.restore();
  };


  Q.start = function() {
    Q.input.keyboardControls();

    if(Q.cssWidth >= 1024) {
      Q.input.touchControls({
        controls:  [ ['left','<' ],
                     ['right','>' ],
                     [],
                     [],
                     [],
                     [],
                     [],
                     [],
                     [],
                     ['action', 'a' ]]
      });
    } else {
      Q.input.touchControls({
        controls:  [ ['left','<' ],
                     ['right','>' ],
                     [],
                     [],
                     [],
                     [],
                     ['action', 'a' ]]
      });

    }
    Q.touch(Q.SPRITE_UI,[1,0]);
    Q.input.drawButtons = Q.drawInputButtons;

    if(Q.touchDevice) {
      document.getElementById("attribution").style.display = "none";
      document.getElementById("social").style.display = "none";
    }

    Q.preload(function() {
      $("#loading").hide();
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

      window.onhashchange = function() {
        if(Q.disableHashChange) {
          Q.disableHashChange = false;
          return;
        }
        var sceneName;
        if(window.location.hash !== "") {
          sceneName = window.location.hash.split("#")[1];
        } 
        
        if(sceneName && Q.scene(sceneName)) { 
          Q.transitionSlide(Q.currentSlide,parseInt(sceneName.substr(5),10),true);
        } 
      }

      Q.el.focus();

      /*
      // Fullscreen is slower...
      var goFullscreen = function() {
        var rfs =
          Q.el.requestFullScreen
          || Q.el.webkitRequestFullScreen
          || Q.el.mozRequestFullScreen
        ;
        rfs.call(Q.el);

        Q.el.removeEventListener("click",goFullscreen);
      };


      Q.el.addEventListener("click",goFullscreen);
      */
    },
    { 
      progressCallback: function(loaded,total) {
        $("#loading_progress").css({width: Math.floor(loaded/total*100) + "%" });
      }

    }
    );

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
                 .include("Sprites, Input, Scenes, Anim, Touch, 2D, UI, DOM, GameNote, Presentation")
                 .setup({ width: width, height: height, maximize: 'resize' })
                 .start();

});
