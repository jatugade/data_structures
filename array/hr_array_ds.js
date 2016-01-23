//https://www.hackerrank.com/challenges/arrays-ds
//Arrays- DS

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var str = '';
    for(var i = 0; i < arr.length; i++) {
        str = arr[i] + ' ' + str;
    }
    console.log(str);
}
