Quintus.Presentation = function(Q) {

  Q.slide(3,function(stage) {
    stage.tiles("level.json");
    stage.background("game-background.png");

  });

  Q.slide(2,function(stage) {
    stage.tiles("level.json");
    stage.background("game-background.png");

    stage.notes("Tester");
    var txt = stage.insert(new Q.UI.Text({ x: 50, y: 100,  font: "600 40px Arial",  label: "This is a test of the", z:10 }));
  });

  Q.slide(1,function(stage) {
    stage.tiles("level.json");
    stage.background("game-background.png");

    stage.points();
    stage.point("This is a test of the emergency broadcast\nsystem. This is only a test and I\nthink it should stay that way");
    stage.point("This is a second test");
    stage.point("This is a third test");

  });

};
