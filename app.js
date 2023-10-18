
        let score = JSON.parse(localStorage.getItem('score')) ||  {
            wins : 0,
            losses : 0,
            ties : 0
            };

        // if(score === null){
        //     score = {
        //     wins : 0,
        //     losses : 0,
        //     ties : 0

        //     };
        // }

        
        updateScore();

        //autoplay

        //     let isAutoPlay = false;
        //      let intervalId;

        // function autoPlay(){
        //     if(!isAutoPlay){
        //    intervalId = setInterval(function(){
        //         const playerMove = pickComputerMove();
        //         playGame(playerMove);
        //     },1000);
        //     isAutoPlay = true;
        // }
        // else{
        //     clearInterval(intervalId);
        //     isAutoPlay = false;
        // }
        // } 


        function playGame(playerMove){
            const computerMove = pickComputerMove();
    
            let result = '';
    
            if(playerMove === 'scissors'){
                if(computerMove === 'scissors'){
                    result = 'Tie';
                } else if (computerMove === 'paper'){
                    result = 'you win';
                } else if (computerMove === 'rock'){
                    result = 'you lose';
                }
            }

            else if (playerMove === 'paper'){
                if(computerMove === 'scissors'){
                    result = 'you lose';
                } else if (computerMove === 'paper'){
                    result = 'Tie';
                } else if (computerMove === 'rock'){
                    result = 'you win';
                }
            }
            else if (playerMove === 'rock'){
                if(computerMove === 'scissors'){
                    result = 'you win';
                } else if (computerMove === 'paper'){
                    result = 'you lose';
                } else if (computerMove === 'rock'){
                    result = 'Tie';
                }
            }

             if( result === 'you win'){
                score.wins += 1;
             }
             else if (result === 'you lose') {
                 score.losses += 1;
             } 
             else if (result === 'Tie') {
                score.ties += 1;
             }
              
             
             localStorage.setItem('score', JSON.stringify(score));
             console.log(JSON.stringify(score));

             updateScore();

             youWin();


             document.querySelector('.js-result').innerHTML = `${result}`

             document.querySelector('.js-move').innerHTML = `You <img src="${playerMove}.image.png" class="size">     <img src="${computerMove}.image.png" class="size"> computer`; 
     
          
            }

        
            function updateScore(){
             document.querySelector('.js-score').innerHTML = `
                Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.ties}`;

            }
            
            
            function youWin(){

                if(score.wins >= 10){
                  document.querySelector('.winner').innerHTML = 'You Are The winner';
                    document.body.style.color='rgb(29, 176, 29)'
                    score.wins = 10;  score.losses= 'Reset'; score.ties = 'Reset';
                    document.querySelector('.reset-message').innerHTML = '---> (Please Reset the score)';


                }else if(score.losses >= 10){
                    document.querySelector('.winner').innerHTML = 'Computer Wins';
                    document.body.style.color='red'
                    score.losses = 10; score.wins= 'Reset'; score.ties = 'Reset';
                    document.querySelector('.reset-message').innerHTML = '---> (Please Reset the score)';
                }
                else if(score.ties >= 10){
                    document.querySelector('.winner').innerHTML = 'The Game Was Tie';
                    document.body.style.color='whitesmoke'
                    score.ties = 10; score.losses= 'Reset'; score.wins = 'Reset';
                    document.querySelector('.reset-message').innerHTML = '---> (Please Reset the score)';
                }
            }

            function resetscores(){
                
                if(score.wins === 0){
                    document.querySelector('.winner').innerHTML = '';
                    document.querySelector('.reset-message').innerHTML = '';
                    document.querySelector('.js-move').innerHTML = ``; 
                    document.querySelector('.js-result').innerHTML = ``
                }
                else if (score.losses === 0){
                    
                    document.querySelector('.winner').innerHTML = '';
                    document.querySelector('.reset-message').innerHTML = '';
                    document.querySelector('.js-move').innerHTML = ``; 
                    document.querySelector('.js-result').innerHTML = ``
                }
                else if (score.ties === 0){
                    
                    document.querySelector('.winner').innerHTML = '';
                    document.querySelector('.reset-message').innerHTML = '';
                    document.querySelector('.js-move').innerHTML = ``; 
                    document.querySelector('.js-result').innerHTML = ``
                }
            }


        function pickComputerMove(){
               const randomNumber = Math.random();  
    
               let computerMove = ''
    
               if(randomNumber >= 0 && randomNumber < 1/3){
                computerMove = 'rock'
               }
               else if (randomNumber >= 1/3 && randomNumber < 2/3){
                computerMove = 'paper'
               }
               else if (randomNumber >= 2/3 && randomNumber < 1){
                computerMove = 'scissors'
               }
    
               return computerMove;
                  
             }

             
       