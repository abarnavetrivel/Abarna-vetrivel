var scores, roundScore, activePlayer, previousScore = 0, playerState;
init();

document.querySelector('.btn-roll').addEventListener('click',function()
{   

    if(playerState){

    var dice1 = Math.floor(Math.random()*6+1);
    var dice2 = Math.floor(Math.random()*6+1);

    document.getElementById('dice-1').style.display='block';
    document.getElementById('dice-2').style.display='block';
    document.getElementById('dice-1').src = 'dice-'+dice1+'.png';
    document.getElementById('dice-2').src = 'dice-'+dice2+'.png';

    if(dice1 !== 1 && dice2 !==1 )
        {   

            roundScore = roundScore + dice1 + dice2;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
        }
    else
        {      
            //document.querySelector('.dice').style.display = 'block';
            roundScore = 0;
            document.getElementById('current-'+activePlayer).textContent = roundScore; 
            changePlayer();
        }

        if(previousScore == 6 && dice == 6)
        {
            scores[activePlayer] = 0;
            document.querySelector('#score-'+activePlayer).textContent = '0';
            changePlayer();
        }

       else
       {
        previousScore = dice1 + dice2;
        }

    }
    
    
    
    
});
document.querySelector('.btn-hold').addEventListener('click',function()
{
        scores[activePlayer] += roundScore;
        //roundScore = 0;
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.target').value;
        var winningScore;
        if(input)
        {
            winningScore = input;
        }
        else
        {
            winningScore = 100;
        }
        if(scores[activePlayer] >= winningScore)
        {
            document.querySelector('#name-'+activePlayer).textContent = "WINNER!";
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            playerState = false;
        }
        else
        {
        changePlayer();
        }        


});

function changePlayer()

{       
        roundScore = 0;
        previousScore = 0;
        document.querySelector('#current-0').textContent = 0;
        document.querySelector('#current-1').textContent = 0;

        activePlayer ===0 ? activePlayer = 1 : activePlayer = 0;
    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
        
        dice = 0;

}

document.querySelector('.btn-new').addEventListener('click',init);



function init() {
scores = [0,0];
roundScore = 0;
activePlayer = 0;
playerState = true;
document.getElementById('dice-1').style.display='none';
document.getElementById('dice-2').style.display='none';

document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');

document.querySelector('#name-0').textContent = "Player 1";
document.querySelector('#name-1').textContent = "Player 2";
//document.querySelector('#current-'+activePlayer).innerHTML = dice;

document.querySelector('.dice').style.display='none';
}


















