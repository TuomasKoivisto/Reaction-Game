 var square = "square";
            
            var circle = "circle";
            
            var object = square;
            
            var randomNumber = null;
            
            var start = new Date().getTime();
            
            var end = new Date().getTime();
            
            var time = 0;
            
            function ChangeToCircle() {
                
                document.getElementById("div").style.borderRadius = "50%";
                
            }
            
            function ChangeToSquare() {
                
                document.getElementById("div").style.borderRadius = "0%";
            }
            
            function randomColor() {
                
                randomNumber1 = Math.floor(Math.random() * 240 + 10);
                randomNumber2 = Math.floor(Math.random() * 240 + 10);
                randomNumber3 = Math.floor(Math.random() * 240 + 10);
                document.getElementById("div").style.backgroundColor = "rgb(" +
                randomNumber1 + "," + randomNumber2 + "," + randomNumber1 + ")";
            }
            
            
            function circleOrSquare() {
                
                randomNumber = Math.floor(Math.random() * 2);
                
                if (randomNumber == 0 && object == circle) {
                    
                    object = square;
                    ChangeToSquare();
                    
                } else if (randomNumber == 1 && object == square) {
                    
                    object = circle;
                    ChangeToCircle();
                }
            }
            
            function randomPosition() {
                
                randomNumber = Math.floor(Math.random() * 400 + 150);
                
                document.getElementById("div").style.top = randomNumber;
                
                randomNumber = Math.floor(Math.random() * 400 + 10);
                
                document.getElementById("div").style.left = randomNumber;
            }
            
            function randomSize() {
                
                randomNumber = Math.floor(Math.random() * 150 + 90);
                
                document.getElementById("div").style.width = randomNumber;
                document.getElementById("div").style.height = randomNumber;
            }
            
            function showShape() {
                
                document.getElementById("div").style.display = "block";
                
            }
            
            function onClick() {
                    
                    end = new Date().getTime();
                    time = (end - start) / 1000;
                    if (time < 0.3) {
                        
                        document.getElementById("one").style.display ="block";
                        document.getElementById("two").style.display ="block";
                        document.getElementById("three").style.display ="block";
                        document.getElementById("four").style.display ="block";
                        document.getElementById("five").style.display ="block";
                    } else if (time < 0.5) {
                        
                        document.getElementById("one").style.display ="block";
                        document.getElementById("two").style.display ="block";
                        document.getElementById("three").style.display ="block";
                        document.getElementById("four").style.display ="block";
                        document.getElementById("five").style.display ="none";
                        
                    } else if (time < 0.8) {
                        
                        document.getElementById("one").style.display ="block";
                        document.getElementById("two").style.display ="block";
                        document.getElementById("three").style.display ="block";
                        document.getElementById("four").style.display ="none";
                        document.getElementById("five").style.display ="none";
                        
                    } else if (time < 1.0) {
                        
                        
                        
                        document.getElementById("one").style.display ="block";
                        document.getElementById("two").style.display ="block";
                        document.getElementById("three").style.display ="none";
                        document.getElementById("four").style.display ="none";
                        document.getElementById("five").style.display ="none";
                        
                    } else {
                        
                        document.getElementById("one").style.display ="block";
                        document.getElementById("two").style.display ="none";
                        document.getElementById("three").style.display ="none";
                        document.getElementById("four").style.display ="none";
                        document.getElementById("five").style.display ="none";
                    }
                
                    
                    
                    document.getElementById("timeTaken").innerHTML = time + " s";
                    document.getElementById("div").style.display = "none";
                
                    randomColor();
                    circleOrSquare();
                    randomPosition();
                    randomSize(); 
                    randomNumber = Math.floor(Math.random() * 1500 + 800);
                    setTimeout(function() {
                       
                        document.getElementById("div").style.display = "block";
                        start = new Date().getTime();
                    }, randomNumber);
                    
                    
                
            }
                
   
            