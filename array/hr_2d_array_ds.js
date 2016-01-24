//2D Array - DS
//https://www.hackerrank.com/challenges/2d-array

function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    
    var max = -64;
    for(var iStart = 0; iStart < 4; iStart++) {
        for(var jStart = 0; jStart < 4; jStart++) {
            var sum = 0;
            for(var i = iStart; i < iStart + 3; i++) {
                for(var j = jStart; j < jStart + 3; j++) {
                    if(!(i === iStart+1 && j === jStart) && !(i === iStart + 1 && j === jStart+2) ) {
                        sum += arr[i][j]
                    }
                }
            }
            if(max < sum) {
                max = sum;
            }
        }
    }
    console.log(max);
}
