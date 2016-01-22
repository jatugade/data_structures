//Balanced Parentheses
//https://www.hackerrank.com/challenges/balanced-parentheses
//
function processData(input) {
    var lines = input.split('\n');
    for(var i = 1; i < lines.length; i++) {
        var str = lines[i];
        var stack = [];
        var balanced = true;
        for(var j = 0; j < str.length; j++) {
            var c = str[j];
            if(c === '{' || c === '[' || c === '(' ) {
                stack.push(c);
            } else {
                var bracket = stack.pop();
                if(c === '}' && bracket !== '{') {
                    balanced = false;
                    j = str.length;
                } else if(c === ']' && bracket !== '[' ) {
                    balanced = false;
                    j = str.length;
                } else if(c === ')' && bracket !== '(') {
                    balanced = false;
                    j = str.length;
                }
            }
        }
        if(balanced && stack.length === 0) {
            console.log('YES');
        } else {
            console.log('NO');
        }
    }
} 