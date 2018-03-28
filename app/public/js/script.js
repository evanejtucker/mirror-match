$('document').ready(function(){

    const enemyArray = [1,2,3,4,5,6,7,8,9,10];
    let playerOne;
    let PLayerTwo;

    
    const updateNames = ()=> {
        $('p1Name').text(playerOne);
        $('p1Name').text(playerTwo);
    }
    
    const grabPlayers = ()=> {
        event.preventDefault();
        playerOne = $('#player1Name').val();
        playerTwo = $('#player2Name').val();
        if (!playerOne || !playerTwo) {
            return console.log('please enter both player names');
        } else {
            updateNames();
            $('.playerForm').hide();
            $('#gameBox').show();
        }
        
    };


    $('#gameBox').hide();
    $("#playerSubmit").on('click', grabPlayers);

});