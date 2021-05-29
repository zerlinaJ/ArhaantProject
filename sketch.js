var path1, path2, path3, path4
var form
var selector
var flag = "up"
var gameState = 0
var desert
var VCAPLD = "no"
var ground
var marcus
var ImageForest
var ImageDesert
var ImageCity 
var houseSprite;

function preload(){

   // ImageForest = loadImage("Images/Forest/ForestBackground.png")
   // ImageDesert = loadImage("Images/Desert/desertBackground.png")
    
  
}

function setup(){
    createCanvas(displayWidth, displayHeight)

    form = new Form()
    form.display()
  
    obstaclesGroup = createGroup();
    treesGroup = createGroup();
    cityHouseGroup = createGroup();
    //marcus = createSprite(20, displayHeight - 250, 50,50)
    //marcus.visible = false

}

function draw(){
    background("White")

    text(mouseX + "," + mouseY, mouseX, mouseY)

    if(gameState === "path1"){
        ground = new Ground();
        marcus = new Marcus();

       forest = new Forest();
       forest.display();
       forest.spawn();

        marcus.marcusSprite.visible = true
        marcus.display();

        // forest.background1.depth= 6
        forest.backgroundSprite1.depth=marcus.marcusSprite.depth;
       // marcus.marcusSprite.depth = 7
        marcus.marcusSprite.depth=forest.backgroundSprite1.depth+1;

       //  forest.background2.depth= 7
        forest.backgroundSprite2.depth=marcus.marcusSprite.depth+1;
       //  marcus.marcusSprite.depth = 8
        marcus.marcusSprite.depth=forest.backgroundSprite2.depth+2;

        //applyVeloctyX()
        gameState = "Started for path 1"
    }


    if(gameState === "path2"){
        ground = new Ground();
        marcus = new Marcus();

       desert = new Desert();
       desert.display();
       desert.spawn();

        marcus.marcusSprite.visible = true
        marcus.display()
            // forest.background1.depth= 6
        desert.backgroundSprite1.depth=marcus.marcusSprite.depth;
       // marcus.marcusSprite.depth = 7
        marcus.marcusSprite.depth=desert.backgroundSprite1.depth+1;

       //  forest.background2.depth= 7
        desert.backgroundSprite2.depth=marcus.marcusSprite.depth+1;
       //  marcus.marcusSprite.depth = 8
        marcus.marcusSprite.depth=desert.backgroundSprite2.depth+2;
        //applyVeloctyX()
        gameState = "Started for path 2"
    }

    if(gameState === "path3"){
        ground = new Ground();
        marcus = new Marcus();

       city = new City();
       city.display();
       city.spawn();

        marcus.marcusSprite.visible = true
        marcus.display()
            // forest.background1.depth= 6
        city.backgroundSprite1.depth=marcus.marcusSprite.depth;
       // marcus.marcusSprite.depth = 7
        marcus.marcusSprite.depth=city.backgroundSprite1.depth+1;

       //  forest.background2.depth= 7
        city.backgroundSprite2.depth=marcus.marcusSprite.depth+1;
       //  marcus.marcusSprite.depth = 8
        marcus.marcusSprite.depth=city.backgroundSprite2.depth+2;
        //applyVeloctyX()
        gameState = "Started for path 3"
    }






    
    if(gameState === "Started for path 1"){
        forest.display();
        forest.spawn();
        marcus.collide()  
      
        if(keyDown("space")){
        marcus.jump()
      }
      if(marcus.marcusSprite.y > displayHeight-200){
        marcus.marcusSprite.changeAnimation("running",marcus.animationForest);
   }
      if(keyDown("down")){
        marcus.duck()
      }
      marcus.marcusSprite.velocityY += 0.5

      if(marcus.marcusSprite.isTouching(obstaclesGroup)){
      
        gameState = "Over";
        forest.end();
    }

   
}
    
    if(gameState === "Started for path 2"){
   
        desert.display();
        desert.spawn();
        marcus.collide()  
       
        if(keyDown("space")){
        marcus.jump()
      }
      if(keyDown("down")){
        marcus.duck()
      }
      marcus.marcusSprite.velocityY += 0.5;

      if(marcus.marcusSprite.isTouching(obstaclesGroup)){
      
        gameState = "Over";
        desert.end();
    }
    }

    if(gameState === "Started for path 3"){
        city.display();
        city.spawn();
        marcus.collide();
       
        if(keyDown("space")){
        marcus.jump()
      }
      if(keyDown("down")){
        marcus.duck()
      }
      marcus.marcusSprite.velocityY += 0.5;

      if(marcus.marcusSprite.isTouching(obstaclesGroup)){
      
        gameState = "Over";
        city.end();
    }
    } 
 
    //marcus.marcusSprite.collide(ground.groundSprite)
 
    if(mousePressedOver(form.play)){
     //   background("black")
        console.log("mousePressed")
        form.play.visible = false;
        // this.story.html("Some text")
        // this.story.position(displayWidth/2 - 100, 150)
       //  console.log(displayHeight, displayWidth)
         form.path1.visible = true;
         form.path2.visible = true;
         form.path3.visible = true;
         form.path4.visible = true;
         form.path1Title.visible = true;
         form.path2Title.visible = true;
         form.path3Title.visible = true;
         form.selector.visible = true;
    }
    drawSprites();
} 

function keyPressed(){

    if(keyCode === 37 && gameState === "Started for path 1"|| gameState === "Started for path 2"|| gameState === "Started for path 3"){
        ground.groundSprite.velocityX = 0
        marcus.marcusSprite.changeAnimation("running",marcus.animationForest)
    }

    if(keyCode === 39 && gameState === "Started for path 1"|| gameState === "Started for path 2"|| gameState === "Started for path 3"){
        ground.groundSprite.velocityX = -3
        marcus.marcusSprite.changeAnimation("running",marcus.animation)
    }

    /*if(keyIsDown(40) && gameState === "Started for path 1"|| gameState === "Started for path 2"|| gameState === "Started for path 3"){
        console.log("within keyWentDown")
        marcus.marcusSprite.changeAnimation("quack",marcus.animationDown)
    }*/
   
    
  /*
    if(keyCode === 40 && flag === false && form.selector.y === form.path1.y + 75){
        console.log("Key Pressed");
        form.selector.y = form.path2.y + 75 ;
        flag = true
    }

    if(keyCode === 40 && flag === false && form.selector.y === form.path2.y + 75){
        console.log("Key Pressed");
        form.selector.y = form.path3.y + 75 ;
        flag = true
    }
*/


    if(keyCode === 40 && flag != "bottom"){
       // console.log("Key Pressed");
        form.selector.y =  form.selector.y + 150;
        if(form.selector.y >= form.path4.y - 100){
            flag = "bottom";
        }
    }
    
    if(keyCode === 38 && flag != "up"){
      //  console.log("Key Pressed");
        form.selector.y =  form.selector.y - 150;
        if(form.selector.y <= form.path1.y + 100){
            flag = "up";
        }
    }

    if(keyCode === 13 && gameState !== "Started for path 2")  
    {
        if(form.selector.y === form.path1.y + 75){

        //    console.log("Selector: ", form.selector.y);
        //   console.log("Path1: ", form.path1.y + 75);
            //background("Lime")
            gameState = "path1"
            form.hide()
        
        }



        if(form.selector.y === form.path2.y + 75){

            //    console.log("Selector: ", form.selector.y);
            //   console.log("Path1: ", form.path1.y + 75);
             //   background("brown")
                gameState = "path2"
                form.hide()
            
            }


            if(form.selector.y === form.path3.y + 75){

                //    console.log("Selector: ", form.selector.y);
                //   console.log("Path1: ", form.path1.y + 75);
                    //background("Lime")
                    gameState = "path3"
                    form.hide()
                
                }

   
    }

    
} 



//function applyVeloctyX(){
    //desert.ground.addImage(desert.image)
    //desert.ground.velocityX = -3
//}









