class City{
        constructor(){
          this.backgroundSprite1 = createSprite(displayWidth/2, displayHeight/2-100, displayWidth*3, displayHeight)
          this.backgroundSprite2 = createSprite(this.backgroundSprite1.x + this.backgroundSprite1.width, displayHeight/2 - 100, displayWidth*3, displayHeight)
          
       //   marcus.marcusSprite.depth =  this.background1.depth + 1;
          this.imageCity = loadImage("images/City/CityBackground.png")
       
      
          this.house1= loadImage("images/City/CityHouse1.png");
          this.house2= loadImage("images/City/CityHouse2.png");
          this.house3= loadImage("images/City/CityHouse3.png");
          this.house4= loadImage("images/City/CityHouse4.png");
          this.house5= loadImage("images/City/CityHouse5.png");
        
      
        }
    
        display(){
          
          //this.ground.addImage(this.image)
       
    //      marcus.marcusSprite.depth =this.background1.depth + 1;
          this.backgroundSprite1.addImage(this.imageCity)
          this.backgroundSprite1.velocityX = -12
          this.backgroundSprite2.addImage(this.imageCity)
          this.backgroundSprite2.velocityX = -12
          
          
           if(this.backgroundSprite2.x < this.backgroundSprite2.width/2){
              this.backgroundSprite1.x = this.backgroundSprite2.x + this.backgroundSprite2.width-50;    
           }  
           if(this.backgroundSprite1.x < this.backgroundSprite1.width/2){
              this.backgroundSprite2.x = this.backgroundSprite1.x + this.backgroundSprite1.width-50;    
           }
        
           
          // console.log("Background depth" +this.background1.depth );
         //  console.log( "Background depth" +marcus.marcusSprite.depth );
    }
    
    
    spawn(){  
        
      if (frameCount % 120 === 0){
            
        //generate random obstacles
        var rand = Math.round(random(1,5));
        switch(rand) {
          case 1: houseSprite = createSprite(displayWidth + 300,displayHeight/2-120,85,85);
                  houseSprite.addImage(this.house1);
                  break;
          case 2: houseSprite = createSprite(displayWidth + 300,displayHeight/2-150,85,85);
                  houseSprite.addImage(this.house2);
                  break;
          case 3: houseSprite = createSprite(displayWidth + 300,displayHeight/2-120,85,85);
                  houseSprite.addImage(this.house3);
                  break;
          case 4: houseSprite = createSprite(displayWidth + 300,displayHeight/2-75,85,85);
                  houseSprite.addImage(this.house4);
                  break;
          case 5: houseSprite = createSprite(displayWidth + 300,displayHeight/2-150,85,85);
                  houseSprite.addImage(this.house5);
                  break;
     /*     case 6: houseSprite.addImage(this.house6);
                  break;
          case 7: houseSprite.addImage(this.house7);
                  break;
          case 8: houseSprite.addImage(this.house8);
                  break;
          case 9: houseSprite.addImage(this.house9);
                  break;
          case 10: houseSprite.addImage(this.house10);
                  break;
    */
          default: break;
        }
        
        houseSprite.depth = marcus.marcusSprite.depth+2;
        marcus.marcusSprite.depth=houseSprite.depth+3;
        //assign scale and lifetime to the obstacle           
        houseSprite.velocityX = -12;
        houseSprite.lifetime = 400;
        houseSprite.scale = 3;
       
       //add each obstacle to the group
       cityHouseGroup.add(houseSprite);
     }
        }
    }