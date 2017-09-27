var OSinfo = require('./modules/OSinfo');


console.log('\nThis is Excercise 13.5\nPlease enter a command (type '.red + '/help'.red.bold + ' for command list)'.red);

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    var info = '    /node - node version\n\
    /getOSinfo - system information\n\
    /lang - OS language\n\
    /help - this info\n\
    /exit - exit program\n';

    if( input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit' : 
                process.stdout.write('Quiting app!\n');
                process.exit();
                break;
            case '/lang' :
                process.stdout.write('Environment language: ' + process.env.lang + '\n');    
                break;
            case '/node' :
                process.stdout.write('Node version: ' + process.versions.node.green + '\n');
                break; 
            case '/help' :
                process.stdout.write('Usage: \n' + info);
                break;    
            case '/getOSinfo':
                OSinfo.print();                
                break;
            default:
                process.stderr.write('Wrong instruction!\n\n'.red.underline + info);
                                      
        }

    }
});



