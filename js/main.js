//container boxes

const boxes = document.querySelector('.boxes');

//genera boxes

for (let i = 1; i <= 100; i++){
    boxes.innerHTML += `<div class="box box-${i}"${i}></div>`;
    if ((i % 3 == 0) && (i % 5 == 0))
    console.log(`FizzBuzz`)
    

    else if (i % 3 == 0) {
        console.log(`Fizz`);
    }

    else if (i % 5 == 0) {
        console.log(`Buzz`);

    }

}









