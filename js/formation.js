const margin = 20;
const verticalMargin = 60;
let fieldWidth; //default : 340px
let fieldHeight; //default : 480px
let widthStep;
let heightStep;
let uniformWidth;
let uniformheight;

function readyFormation(){
    setDefaultSize();
    setPlayersToFormation();
}

function setDefaultSize(){
    fieldWidth = $("#field").width() - (margin * 2); //default : 340px
    fieldHeight = $("#field").height() - (verticalMargin * 2); //default : 480px
    widthStep = (fieldWidth / 20);
    heightStep = (fieldHeight / 20);
    uniformWidth = 47.7656;
    uniformheight = 58;
}

function setPlayersToFormation(){

    const player_cnt = 11;
    let players = new Array();

    for(let i = 1; i <= player_cnt; i++){
        players.push(
            new PlainDraggable(document.getElementById('player'+i), {
                handle: document.querySelector('#player'+i+' #uniform_img'),
                snap: {step: 10}
            })
        );
    }

    //draggable.containment = {left: 50, top: 0, width: '100%', height: '100%'};

    //기본 4-4-2 전형
    let formation442 = [
        {//1
            x : getHorizonValue(5),
            y : getVerticalValue(3)
        },
        {//2
            x : getHorizonValue(11),
            y : getVerticalValue(3)
        },
        {//3
            x : getHorizonValue(0),
            y : getVerticalValue(11)
        },
        {//4
            x : getHorizonValue(5),
            y : getVerticalValue(11)
        },
        {//5
            x : getHorizonValue(11),
            y : getVerticalValue(11)
        },
        {//6
            x : getHorizonValue(16),
            y : getVerticalValue(11)
        },
        {//7
            x : getHorizonValue(0),
            y : getVerticalValue(18)
        },
        {//8
            x : getHorizonValue(5),
            y : getVerticalValue(18)
        },
        {//9
            x : getHorizonValue(11),
            y : getVerticalValue(18)
        },
        {//10
            x : getHorizonValue(16),
            y : getVerticalValue(18)
        },
        {//11
            x : getHorizonValue(8),
            y : getVerticalValue(22)
        }
    ]

    for(let i in players){
        players[i].left = 0; //기본 x좌표를 경기장 맨 왼쪽으로
        players[i].top = 0;
        players[i].left += formation442[i].x;
        players[i].top += formation442[i].y;
        players[i].position();
    }
}

function getHorizonValue(x){
    return (widthStep * x) + margin + 12;
}

function getVerticalValue(y){
    return (heightStep * y) + verticalMargin - uniformheight;
}