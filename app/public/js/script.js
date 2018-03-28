$('document').ready(function(){

    const enemyArray = [1,2,3,4,5,6,7,8,9,10];
    
    const updateNames = (name1, name2)=> {
        $('#p1Name').text(name1);
        $('#p2Name').text(name2);
    }
    
    const grabPlayers = ()=> {
        event.preventDefault();
        let playerOne = $('#player1Name').val();
        let playerTwo = $('#player2Name').val();
        if (!playerOne || !playerTwo) {
            return console.log('please enter both player names');
        } else {
            updateNames(playerOne, playerTwo);
            $('.playerForm').hide();
            $('#gameBox').show();
        }
        
    };


    $('#gameBox').hide();
    $("#playerSubmit").on('click', grabPlayers);

});