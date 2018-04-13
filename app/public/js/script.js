$('document').ready(function(){

    // Global Variables
    // ------------------------------------------------------------------------------------------
    let playerArray = ['batman', 'superman', 'green lantern', 'wonder woman'];
    let usedPlayers = [];
    let p1 = {
        name: '',
        wins: [],
        loses: []
    }
    let p2 = {
        name: '',
        wins: [],
        loses: []
    }
    

    // Functions
    // ------------------------------------------------------------------------------------------
    const updateNames = (name1, name2)=> {
        $('#p1Name').text(name1);
        $('#p2Name').text(name2);
    }
    
    const grabPlayers = ()=> {
        event.preventDefault();
        p1.name = $('#player1Name').val();
        p2.name = $('#player2Name').val();
        if (!p1.name || !p2.name) {
            return console.log('please enter both player names');
        } else {
            updateNames(p1.name, p2.name);
            $('.playerForm').hide();
            $('#gameBox').show();
        }
    };

    const getCurrentFighter = ()=> {
        let rand = Math.floor(Math.random() * playerArray.length)
        let currentFighter = playerArray[rand];
        if (playerArray.length === 0) {
            console.log('all out of options');
            playerArray = usedPlayers;
            usedPlayers = [];
        } else {
            playerArray.splice(rand, 1);
            usedPlayers.push(currentFighter);
            updatePlayer(currentFighter);
        }
        console.log('players left: ' + playerArray);
        console.log('used players ' + usedPlayers);
  
    };

    const updatePlayer = (fighter)=> {
        $('.currentFighter').text(fighter);
        selectWinner(fighter);
    }

    const selectWinner = (fighter)=> {
        $('.winBtn').on('click', function() {
            console.log('this: ' + this.id);
            if(this.id === 'p1Win') {
                console.log('player one wins');
                p1.wins.push(fighter);
                p2.loses.push(fighter);
                console.log('p1 wins: ' + p1.wins);
                console.log('p2 loses: ' + p2.loses);
            }
            if(this.id === 'p2Win') {
                console.log('player two wins');
                p2.wins.push(fighter);
                p1.loses.push(fighter);
                console.log('p2 wins: ' + p2.wins);
                console.log('p1 loses: ' + p1.loses);
            }
            getCurrentFighter();
        })
    }


    // Main Process
    // ------------------------------------------------------------------------------------------

    $('#gameBox').hide();
    $("#playerSubmit").on('click', grabPlayers);
    $('#startBtn').click(getCurrentFighter);

    

});