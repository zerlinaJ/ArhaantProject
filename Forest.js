class Forest{
  constructor(){
   // this.groundSprite = createSprite(displayWidth - 300, displayHeight - 200, displayWidth*2, 10)
    /*this.ImageForest = loadImage("Images/Forest/ForestBackground.png")
    this.ImageDesert = loadImage("Images/Desert/desertBackground.png")
    this.ImageCity = loadImage("Images/City/cityBackground.png")*/
    

    this.backgroundSprite1 = createSprite(displayWidth/2, displayHeight/2+100, displayWidth * 3, displayHeight)
    this.backgroundSprite2 = createSprite(this.backgroundSprite1.x + this.backgroundSprite1.width, displayHeight/2+100, displayWidth * 3, displayHeight)
    this.ImageForest = loadImage("Images/Forest/ForestBackground.png")



    this.obstacle1= loadImage("Images/Forest/Logs.png");
    this.obstacle2= loadAnimation("Images/Forest/porcupine1.png","Images/Forest/porcupine1.png","Images/Forest/porcupine1.png",
    "Images/Forest/porcupine2.png","Images/Forest/porcupine2.png","Images/Forest/porcupine2.png");
    this.obstacle3= loadImage("Images/Forest/treeStump.png");
    this.obstacle4= loadImage("Images/Forest/Rock3.png");
    this.obstacle5= loadImage("Images/Forest/Rock4.png");
    this.obstacle6= loadImage("Images/Forest/Rock5.png");
    this.obstacle7= loadImage("Images/Forest/Tree1.png");
    this.obstacle8= loadImage("Images/Forest/Tree2.png");
    this.obstacle9= loadImage("Images/Forest/Tree3.png");
    this.obstacle10= loadImage("Images/Forest/overHangingBranch1.png");
    this.obstacle11= loadImage("Images/Forest/overHangingBranch2.png");
    this.obstacle12= loadImage("Images/Forest/overHangingBranch3.png");
  




    
}

display(){
  //this.ground.addImage(this.image)
  this.backgroundSprite1.addImage(this.ImageForest)
  this.backgroundSprite1.velocityX = -12
  this.backgroundSprite2.addImage(this.ImageForest)
  this.backgroundSprite2.velocityX = -12

  if(this.backgroundSprite2.x < this.backgroundSprite2.width/2){
     this.backgroundSprite1.x = this.backgroundSprite2.x + this.backgroundSprite2.width-10;    
   }

  if(this.backgroundSprite1.x < this.backgroundSprite1.width/2){
    this.backgroundSprite2.x = this.backgroundSprite1.x + this.backgroundSprite1.width-20;    
   }
}

spawn(){


  if (frameCount % 120 === 0){
  var obstacleRest = createSprite(displayWidth + 200,displayHeight-75,100,100);
  obstacleRest.velocityX = -12;
  
   //generate random obstacles
   var rand = Math.round(random(1,6));
   switch(rand) {
     case 1: obstacleRest.addImage(this.obstacle1);
             break;
     case 2: obstacleRest.addAnimation("walking",this.obstacle2);
             break;
     case 3: obstacleRest.addImage(this.obstacle3);
             break;
     case 4: obstacleRest.addImage(this.obstacle4);
             break;
     case 5: obstacleRest.addImage(this.obstacle5);
             break;
     case 6: obstacleRest.addImage(this.obstacle6);
             break;
     
     default: break;
   }
  
   //assign scale and lifetime to the obstacle           
 
   obstacleRest.lifetime = 300;
   obstacleRest.scale = 1.5;
  
  //add each obstacle to the group
   obstaclesGroup.add(obstacleRest);
}



if (frameCount % 270 === 0){
var obstacleTree = createSprite(displayWidth + 200,displayHeight/2-25,100,100);
obstacleTree.velocityX = -12;

 //generate random obstacles
 var rand1 = Math.round(random(7,9));
 switch(rand1) {
  
   case 7: obstacleTree.addImage(this.obstacle7);
           var obstacleTreeBranch = createSprite(displayWidth + 100,displayHeight/2-25,100,100);
           obstacleTreeBranch.addImage(this.obstacle10)
           obstacleTreeBranch.velocityX = -12;
           break;
   case 8: obstacleTree.addImage(this.obstacle8);
           var obstacleTreeBranch = createSprite(displayWidth + 100,displayHeight/2-25,100,100);
           obstacleTreeBranch.addImage(this.obstacle11)
          obstacleTreeBranch.velocityX = -12;
           break;
   case 9: obstacleTree.addImage(this.obstacle9);
          var obstacleTreeBranch = createSprite(displayWidth + 100,displayHeight/2-25,100,100);
          obstacleTreeBranch.addImage(this.obstacle12)
          obstacleTreeBranch.velocityX = -12;
           break;
  

   default: break;
 }

 //assign scale and lifetime to the obstacle           

 obstacleTree.lifetime = 300;
 obstacleTree.scale = 2.75;

//add each obstacle to the group
// obstaclesGroup.add(obstacleTree);
 obstaclesGroup.add(obstacleTreeBranch);
 treesGroup.add(obstacleTree);
}

}

end(){
        this.backgroundSprite1.velocityX = 0;
        this.backgroundSprite2.velocityX = 0;
        obstaclesGroup.setVelocityXEach(0);
        treesGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        treesGroup.setLifetimeEach(-1);
        marcus.marcusSprite.velocityY = 0;
        marcus.collide();
}
}