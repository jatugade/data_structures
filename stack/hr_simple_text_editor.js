//Simple Text Editor
//https://www.hackerrank.com/challenges/simple-text-editor

function processData(input) {
    var lines = input.split('\n');
    var s = '';
    var undoStack = [];
    for(var i = 1; i < lines.length; i++) {
        var arrLine = lines[i].split(' '); 
        switch(arrLine[0]) {
            case '1':
                //append
                undoStack.push(s);
                s += arrLine[1];
                break;
            case '2':
                //erase last k characters
                undoStack.push(s);
                var index = s.length - parseInt(arrLine[1]);
                var s = s.substring(0,index);
                break;
            case '3':
                //get the kth character of s
                var index = parseInt(arrLine[1]) -1;
                console.log(s[index]);
                break;
            case '4':
                //undo
                var undoStr = undoStack.pop();
                if(undoStr !== undefined) {
                    s = undoStr;
                }
                break;
            default:
        }
    }
} 