class Desert{
    constructor(){
    /*this.ground = createSprite(displayWidth/2, displayHeight - 200, displayWidth*2, 10)
    this.image = loadImage("ground2.png")*/

  // this.groundSprite = createSprite(displayWidth - 300, displayHeight - 200, displayWidth*2, 10)
    /*this.ImageForest = loadImage("Images/Forest/ForestBackground.png")
    this.ImageDesert = loadImage("Images/Desert/desertBackground.png")
    this.ImageCity = loadImage("Images/City/cityBackground.png")*/
    

    this.backgroundSprite1 = createSprite(displayWidth/2, displayHeight/2-100, displayWidth * 3, displayHeight)
    this.backgroundSprite2 = createSprite(this.backgroundSprite1.x + this.backgroundSprite1.width, displayHeight/2-100, displayWidth * 3, displayHeight)
    this.ImageDesert = loadImage("Images/Desert/DesertBackground.png")



    this.obstacle1 = loadImage("Images/Desert/Cactus1.png")
    this.obstacle2 = loadImage("Images/Desert/Cactus2.png")
    this.obstacle3 = loadImage("Images/Desert/Cactus3.png")
    this.obstacle4 = loadImage("Images/Desert/Landform1.png")
    this.obstacle5 = loadImage("Images/Desert/Landform2.png")
    this.obstacle6 = loadImage("Images/Desert/Landform3.png")
    this.obstacle7 = loadImage("Images/Desert/Rock1.png")
    this.obstacle8 = loadImage("Images/Desert/Rock2.png")
    this.obstacle9 = loadImage("Images/Desert/Rock3.png")
    this.obstacle10 = loadImage("Images/Desert/Rock4.png")
    this.obstacle11 = loadImage("Images/Desert/Rock5.png")
    this.obstacle12 = loadImage("Images/Desert/Rock6.png")
    this.obstacle13 = loadImage("Images/Desert/Rock7.png")
    this.obstacle14 = loadImage("Images/Desert/Rock8.png")




    
    }

    display(){
      //this.ground.addImage(this.image)
      this.backgroundSprite1.addImage(this.ImageDesert)
      this.backgroundSprite1.velocityX = -12
      this.backgroundSprite2.addImage(this.ImageDesert)
      this.backgroundSprite2.velocityX = -12
  
      if(this.backgroundSprite2.x < this.backgroundSprite2.width/2){
         this.backgroundSprite1.x = this.backgroundSprite2.x + this.backgroundSprite2.width-10;    
       }
  
      if(this.backgroundSprite1.x < this.backgroundSprite1.width/2){
        this.backgroundSprite2.x = this.backgroundSprite1.x + this.backgroundSprite1.width-20;    
       }
    }

    spawn(){
      if(frameCount % 120 === 0){
        var obstacleCactus = createSprite(displayWidth + 100,displayHeight-75,100,100);
        obstacleCactus.velocityX = -10;
        
         //generate random obstacles
         var rand = Math.round(random(1,3));
         switch(rand) {
           case 1: obstacleCactus.addImage(this.obstacle1);
                   break;
           case 2: obstacleCactus.addImage(this.obstacle2);
                   break;
           case 3: obstacleCactus.addImage(this.obstacle3);
                   break;
        
    
           default: break;
         }
         
        
         //assign scale and lifetime to the obstacle           
       
         obstacleCactus.lifetime = 300;
         obstacleCactus.scale = 1.2;
        
        //add each obstacle to the group
         obstaclesGroup.add(obstacleCactus);
      }
    
      if (frameCount % 275 === 0){
        var obstacleRest = createSprite(displayWidth + 100,displayHeight-20,100,100);
        obstacleRest.velocityX = -10;
        
         //generate random obstacles
         var rand1 = Math.round(random(4,14));
         switch(rand1) {
          
           case 4: obstacleRest.addImage(this.obstacle4);
                   break;
           case 5: obstacleRest.addImage(this.obstacle5);
                   break;
           case 6: obstacleRest.addImage(this.obstacle6);
                   break;
           case 7: obstacleRest.addImage(this.obstacle7);
                   break;
           case 8: obstacleRest.addImage(this.obstacle8);
                   break;
           case 9: obstacleRest.addImage(this.obstacle9);
                   break;
           case 10: obstacleRest.addImage(this.obstacle10);
                   break;
           case 11: obstacleRest.addImage(this.obstacle11);
                   break;
           case 12: obstacleRest.addImage(this.obstacle12);
                   break;
           case 13: obstacleRest.addImage(this.obstacle13);
                   break;
           case 14: obstacleRest.addImage(this.obstacle14);
                   break;         
    
           default: break;
         }
         
        
         //assign scale and lifetime to the obstacle           
       
         obstacleRest.lifetime = 300;
         obstacleRest.scale = 1.2;
        
        //add each obstacle to the group
         obstaclesGroup.add(obstacleRest);
      }
    }

    end(){
        this.backgroundSprite1.velocityX = 0;
        this.backgroundSprite2.velocityX = 0;
        obstaclesGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1); 
        marcus.marcusSprite.velocityY = 0;
        marcus.collide();
}
}