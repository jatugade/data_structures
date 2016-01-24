// Sparse Arrays
// https://www.hackerrank.com/challenges/sparse-arrays


function processData(input) {
    var lines = input.split('\n');
    var N = parseInt(lines[0]);
    var queriesIndex = N + 1;
    var strMap = {};
    for(var i = 1; i <= N; i++) {
        var str = lines[i];
        if(strMap[str]) {
            strMap[str]++;
        } else {
            strMap[str] = 1;
        }
    }
    
    for(var i = queriesIndex + 1; i < lines.length; i++) {
        var str = lines[i];
        if(strMap[str]) {
            console.log(strMap[str]);
        } else {
            console.log(0);
        }
    }
    
} 
