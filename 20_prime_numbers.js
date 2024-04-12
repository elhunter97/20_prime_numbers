function primeNumber(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return 0;
        }
    }
    return number>1;
}
let count = 0;
let countNum = prompt('Enter number');
for(let i=2;i<=500;i++){
    if (primeNumber(i)){
        document.write(i+"<br>");
        count++;
    }
    if (count >= countNum) {
        break;
    }
}