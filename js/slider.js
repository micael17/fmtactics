function readySliderDesign(){
    $('#attackWidthSlider').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });

    $('#defenseWidthSlider').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });

    $('#passSlider').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });

    $('#tempoSlider').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });

    $('#timeSlider').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });

    $('#pressingIntensity').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });
}
