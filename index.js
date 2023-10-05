
function counter() {
    let count = 1;
    return function (){
        console.log(count);
        count++;
    }
}

let countNumber = counter();
countNumber();
countNumber();
countNumber();
countNumber();
countNumber();
countNumber();
countNumber();
countNumber();