var os = require('os');
    time = require('./Time'),
    colors = require('colors');

function getOSinfo() {
    var type = os.type(),
        release = os.release(),
        cpu = os.cpus()[0].model,
        uptime = os.uptime(),
        userInfo = os.userInfo();


    if ( type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }

    console.log('System:'.grey , type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.blue, cpu);
    console.log('Uptime: ~'.green.underline, time.printHumanTime(uptime));
    console.log('User name:'.cyan, userInfo.username);
    console.log('Home dir:'.gray, userInfo.homedir);
}



exports.print = getOSinfo;