function readySliderDesign(){
    $('#attackWidthSlider').slider({
        formatter: function(value) {
          $("#attackText").html(widthValueToString(value));
        }
    });

    $('#passSlider').slider({
        formatter: function(value) {
          $("#passText").html(lengthValueToString(value));
        }
    });

    $('#tempoSlider').slider({
        formatter: function(value) {
          $("#tempoText").html(tempoValueToString(value));
        }
    });

    $('#timeSlider').slider({
        formatter: function(value) {
            $("#timeText").html(timeValueToString(value));
        }
    });

    $('#defenseWidthSlider').slider({
        formatter: function(value) {
            $("#defenseText").html(widthValueToString(value));
        }
    });

    $('#pressingIntensity').slider({
        formatter: function(value) {
            $("#pressingText").html(pressingValueToString(value));
        }
    });
}

function widthValueToString(value){
  let result;
  switch(value){
    case 0: result = '매우 좁게'; break;
    case 1: result = '좁게'; break;
    case 3: result = '넓게'; break;
    case 4: result = '매우 넓게'; break;
    default : result = '보통';
  }
  return result;
}

function lengthValueToString(value){
  let result;
  switch(value){
    case 0: result = '매우 짧게'; break;
    case 1: result = '짧게'; break;
    case 3: result = '길게'; break;
    case 4: result = '매우 길게'; break;
    default : result = '보통';
  }
  return result;
}

function tempoValueToString(value){
  let result;
  switch(value){
    case 0: result = '더욱 느리게'; break;
    case 1: result = '느리게'; break;
    case 3: result = '빠르게'; break;
    case 4: result = '매우 빠르게'; break;
    default : result = '보통';
  }
  return result;
}

function timeValueToString(value){
  let result;
  switch(value){
    case 1: result = '자주'; break;
    case 2: result = '더욱 자주'; break;
    default : result = '가끔';
  }
  return result;
}

function pressingValueToString(value){
  let result;
  switch(value){
    case 0: result = '매우 약하게'; break;
    case 1: result = '약하게'; break;
    case 3: result = '강하게'; break;
    case 4: result = '매우 강하게'; break;
    default : result = '보통';
  }
  return result;
}
