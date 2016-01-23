//Down to Zero II
//https://www.hackerrank.com/challenges/down-to-zero-ii/copy-from/16755116
function processData(input) {
    var lines = input.split('\n');
    var arr = lines.map(Number);
    for(var i = 1; i < arr.length; i++) {
        var N = arr[i];
        var count = 0;
        while(N > 0) {
            var foundDivisor = false;
            squareRoot = Math.floor(Math.sqrt(N));
            for(var j = squareRoot; j >1 ; j--) {
                if(N % j === 0) {
                    N = N / j;
                    foundDivisor = true;
                    break;
                }
            }
            if(!foundDivisor) {
                N--;
            }
            count++;
        }
        
        console.log(count);
    }
} 