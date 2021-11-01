//genera boxes

const boxes = document.querySelector('.boxes');

//print dei box

for (let i = 0; i <= 100; i++){
    
    let element ='';

    if (i % 3 == 0 && i % 5 == 0) {
        element = `<div class="box box-fizzbuzz">fizzbuz</div>`;
    }

    else if (i % 3 == 0) {
        element = `<div class="box box-fizz">fizz</div>`;
    }

    else if (i % 5 == 0) {
        element = `<div class="box box-buzz">buzz</div>`;
    }

    else {
        boxes = `<div class="box "> ${i} </div>`;
    }

    boxes.innerHTML += element;



}










