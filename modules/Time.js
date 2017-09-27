function secToDHHMMSS (time) {
    var days = Math.floor(time / (3600 * 24));
    time %= (3600 * 24); 
    var hours = Math.floor(time  / 3600);
    time %= 3600;
    var minutes = Math.floor(time / 60);
    var seconds = (time % 60).toFixed(0);

    return (days ? days + 'd ' : '') + (hours ? hours + 'h ' : '') + (minutes ? minutes + 'min ' : '') + ( seconds ? seconds + 's' : ''); 
}

exports.printHumanTime = secToDHHMMSS;