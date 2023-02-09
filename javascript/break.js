
let x=5;


function comprobarBreak(x) {
    var i = 0;
    while (i < 6) {
        if (i==3) {
            break;
        }
       i++;
    }
    return i * x;
 }
 function comprobarContinue(x) {
    var i = 0;
    while (i < 6) {
        if (i==3) {
            continue;
        }
       i++;
    }
    return i * x;
 }
 console.log(comprobarBreak(x));
 console.log(comprobarContinue(x));
 